import { useState } from "react"


export default function Home(){
    const [email,setEmail]=useState('denizxman@hotmail.com')
    const [sifre,setsifre]=useState('123456')
    return(
        <div>
            <button onClick={test}>Tıkla</button>
            <button onClick={test2}>Tıkla2</button>
        </div>
    )
    async function test(){
        const req= await fetch('./api/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(
                {xemail:email,
                xsifre:sifre}
            )
        })
        const res = await req.json()
        console.log(res)
    }
    async function test2(){
        const req= await fetch('./api/kitaplar',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(
                {
                    method:'search',
                    adi:'Anna',
                    basimYili:'1999'
                }
            )
        })
        const res=await req.json()
        console.log(res)
    }
}