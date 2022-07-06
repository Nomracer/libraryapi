import {NextApiRequest,NextApiResponse} from 'next'
import {Prisma,PrismaClient} from '@prisma/client'
import { useState } from 'react'
const prisma=new PrismaClient()
export default async function (req:NextApiRequest,res:NextApiResponse){

    if(req.method=='POST'){
        const {id,userId}=req.body
        
    }
}