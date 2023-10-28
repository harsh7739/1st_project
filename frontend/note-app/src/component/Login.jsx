import { useState } from "react"

function Login(){
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
const handleSubmit = async(e)=>{
    e.preventDefault()
    // console.log(username,email,pass)
    let res = await fetch("https://puce-long-walrus.cyclic.app/users/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify({email,pass})
    })
   res = await res.json()
   localStorage.setItem("token",res.token)
    console.log(res)

}
    return (
        <>
         <form onSubmit={handleSubmit}>
           <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
           <input type="password" placeholder="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
           <input type="submit" value={"login"} />
        </form>
        
        </>
    )
}
export default Login