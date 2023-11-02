import { Link } from "react-router-dom"

function Navbar(){
    return (
    <>
    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
<<<<<<< HEAD
        <Link to={"/notes"} >Notes</Link>
=======
        <Link to={"/"} >Notes</Link>
>>>>>>> c3b8dc45370adae5606b1bc88a4c03f037e6fe3b
        <Link to={"/users/register"}>Registration</Link>
        <Link to={"/users/login"}>Login</Link>
        <Link to={"/notes/create"}>Create Notes</Link>
        <Link to={"/notes/update/:noteID"}>Update Note</Link>
        <Link to={"/notes/delete/:noteID"}>Delete Note</Link>
    </div>
    </>
    )
}
export default Navbar