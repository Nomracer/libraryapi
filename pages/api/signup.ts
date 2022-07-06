import {Prisma,PrismaClient} from '@prisma/client'
import { NextApiRequest,NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function(req:NextApiRequest,res:NextApiResponse){
    if(req.method=='POST'){
        const {okulNo,email,sifre}=req.body
        let userdata:Prisma.usersCreateInput
        userdata={okulNo:okulNo,sifre:sifre,email:email,admin:false,role:'student'}
        const user = await prisma.users.create(
            {data:userdata}
        )
        res.json(user)
        prisma.$disconnect()
    }
}