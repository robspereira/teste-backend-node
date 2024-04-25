import { Prisma, Users } from '@prisma/client'
import { prisma } from '@/lib/prisma';

import { UsersRepository } from '../userRepository';

export class PrismaUsersRepository implements UsersRepository {

    async findById(id: bigint) {

        const user = await prisma.users.findUnique ({
            where: {
                id,
            }
        })

        return user
    }

    async findByEmail(email: string) {

        const user = await prisma.users.findUnique({
            where: {
                email,
            }
        })

        return user
        
    }

    async create(data: Prisma.UsersCreateInput) {

        const user = await prisma.users.create({
            data,
            
        })

        return user
        
    }



}