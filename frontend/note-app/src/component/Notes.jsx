import { useEffect } from "react"

function Notes(){
    const getNote = async()=>{
        // e.preventDefault()
        // console.log(username,email,pass)
        let res = await fetch("https://puce-long-walrus.cyclic.app/notes",{
            method:"GET",
            headers:{
                 "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
       res = await res.json()
    //    localStorage.setItem("token",res.token)
        console.log(res)
    console.log("Inside get")
    }

    useEffect(()=>{
        getNote()
    },[])
    return (
        <>
        
        </>
    )
}
export default Notes