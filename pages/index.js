
export default function Home(){
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
                {okulNo:123123,
                sifre:'123456'}
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