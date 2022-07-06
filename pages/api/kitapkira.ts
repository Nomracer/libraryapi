import {NextApiRequest,NextApiResponse} from 'next'
import {Prisma,PrismaClient} from '@prisma/client'
const prisma=new PrismaClient()
export default async function (req:NextApiRequest,res:NextApiResponse){
    if(req.method=='POST'){
        const date= new Date()
        const newDate = new Date()
        newDate.setDate(date.getDate()+7)
        const newTime=new Date(newDate)
        console.log(newTime)
        const {userId,kitapId,time}=req.body
        let bookData:Prisma.kirakitapCreateInput
        bookData={
            userId:parseInt(userId),
            kitapId:parseInt(kitapId),
            teslimTarih:newTime.toString()
        }
        const createBook= await prisma.kirakitap.create({
            data:bookData
        })
        res.json(createBook)
    }
}