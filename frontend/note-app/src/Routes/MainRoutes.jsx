import {Routes,Route} from "react-router-dom"
import Notes from "../component/Notes"
import CreateNote from "../component/CreateNote"
import Login from "../component/Login"
import UpdateNote from "../component/UpdateNotes"
import DeleteNote from "../component/DeleteNote"
import Signup from "../component/Signup"
function MainRoutes(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Notes />}/>
            <Route path="/users/register" element={<Signup />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/notes/create" element={<CreateNote />} />
            <Route path="/notes/update/:noteID" element={<UpdateNote />} />
            <Route path="/notes/update/:noteID" element={<DeleteNote />} />
        </Routes>
        </>
    )
}
export default MainRoutes