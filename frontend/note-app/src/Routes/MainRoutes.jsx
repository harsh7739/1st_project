import {Routes,Route} from "react-router-dom"
import Notes from "../component/Notes"
import CreateNote from "../component/CreateNote"
import Login from "../component/Login"
import UpdateNote from "../component/UpdateNotes"
import DeleteNote from "../component/DeleteNote"
import Signup from "../component/Signup"
<<<<<<< HEAD
import HomePage from "../component/Home"
=======
>>>>>>> c3b8dc45370adae5606b1bc88a4c03f037e6fe3b
function MainRoutes(){
    return (
        <>
        <Routes>
<<<<<<< HEAD
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/notes" element={<Notes />}/>
=======
            <Route path="/" element={<Notes />}/>
>>>>>>> c3b8dc45370adae5606b1bc88a4c03f037e6fe3b
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