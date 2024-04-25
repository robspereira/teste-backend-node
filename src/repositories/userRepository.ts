import { Prisma, Users } from '@prisma/client'

export interface UsersRepository {

    findById(id: bigint): Promise<Users | null>
    findByEmail(email: string): Promise<Users | null>
    create(data: Prisma.UsersCreateInput): Promise<Users>
    
}