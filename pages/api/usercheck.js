import { PrismaClient,Prisma } from "@prisma/client";
import { NextApiRequest,NextApiResponse } from "next";
const prisma = new PrismaClient()
export default function(req,res){
    const {email,sifre}=req.body
    console.log(email)
    const userdata=prisma.users.findMany({
        
    })
    res.json(userdata)
}