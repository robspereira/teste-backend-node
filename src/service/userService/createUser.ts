import { UsersRepository } from '@/repositories/userRepository';
import { Users } from '@prisma/client';

interface CreateUsersParams {
    name: string
    email: string
    password: string
}

interface CreateUsersResponse {
    users: Users
}

export class CreateUser {

    constructor(private usersRepository: UsersRepository) {}

    async execute ({
        name,
        email,
        password,
    }:CreateUsersParams): Promise<CreateUsersResponse> {
        
        const userWithSameEmail = await this.usersRepository.findByEmail(email)

        if(userWithSameEmail) {
            console.log('User already exists!')
        }

        const users = await this.usersRepository.create({
            name,
            email,
            password,
        })

        return {
            users,
        }

    }
}