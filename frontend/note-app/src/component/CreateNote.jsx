import { useState } from "react"

function CreateNote(){
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
const handleSubmit = async(e)=>{
    e.preventDefault()
    // console.log(username,email,pass)
    let res = await fetch("https://puce-long-walrus.cyclic.app/notes/create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
             "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify({title,body})
    })
   res = await res.json()
    console.log(res)
   localStorage.setItem("token",res.token)
    console.log(res)
}
    return (
        <>
         <form onSubmit={handleSubmit}>
           <input type="text" placeholder="email" value={title} onChange={(e)=>setTitle(e.target.value)}/>
           <textarea  cols="30" rows="10" placeholder="pass" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
           <input type="submit" value={"Add Note"} />
        </form>
        
        </>
    )
}
export default CreateNote