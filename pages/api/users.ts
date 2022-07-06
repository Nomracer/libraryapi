import { NextApiRequest,NextApiResponse } from "next";
import {Prisma, PrismaClient} from '@prisma/client'
export default async function (req:NextApiRequest,res:NextApiResponse) {
    if(req.method=='POST'){
        const prisma = new PrismaClient()
        const {email,okulNo,sifre}= await req.body
        let data:Prisma.usersWhereInput
        if(email!=""){
            data={email:email,sifre:sifre}
        }else{
            data={okulNo:okulNo,sifre:sifre}
        }

        const userdata = await prisma.users.findMany(
            {where:data}
        )
        res.json(userdata)
    }

}