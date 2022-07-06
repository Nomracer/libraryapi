import { useState } from "react"
import { useEffect } from "react"

export default function Home(){
    const [email,setEmail]=useState('denizxman@hotmail.com')
    const [sifre,setsifre]=useState('123456')
    const [bookData,setBookData]=useState([])
    return(
        <div>
            <button onClick={test}>Tıkla</button>
            <button onClick={test2}>Tıkla2</button>
            <button onClick={test3}>Tıkla3</button>
            <button onClick={test4}>Tıkla4</button>
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
        const req= await fetch('https://libraryapi.vercel.app/api/kitapekle',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(
                {
                    method:'list'
                }
            )
        })
        const res=await req.json()
        console.log(res)
    }
    async function test3(){
        const req=await fetch('https://libraryapi.vercel.app/api/kitapekle',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(
                {
                    adi:'asdasd',
                    yazar:'yazar',
                    basimYili:'basimYili',
                    adet:3,
                    sayfaSayisi:125,
                    kategori:'kategori'
                }
            )
        })
        const res=await req.json()
        alert("Kitap eklendi")
    }
    async function test4(){
        const date = new Date()
        const newDate= new Date()
        const time= new Date(newDate).getTime()
        newDate.setDate(date.getDate()+7)
        const req= await fetch('./api/kitapkira',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(
                {
                    userId:2,
                    kitapId:2,
                    time:time
                }
            )
        })
        const res = await req.json()
        console.log(res)
    }
}