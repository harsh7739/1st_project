import { useState } from "react"

function Signup(){
    const [username,setusername] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
const handleSubmit = async(e)=>{
    e.preventDefault()
    // console.log(username,email,pass)
    let res = await fetch("https://puce-long-walrus.cyclic.app/users/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify({username,email,pass})
    })
   res = await res.json()

}




    return (
        <>
        <form onSubmit={handleSubmit}>
           <input type="text" placeholder="username" value={username} onChange={(e)=>setusername(e.target.value)}/>
           <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
           <input type="password" placeholder="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
           <input type="submit" value={"Register"} />
        </form>
        </>
    )
}
export default Signup