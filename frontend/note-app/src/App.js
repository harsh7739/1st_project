import logo from './logo.svg';
import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import CreateNote from './component/CreateNote';
import Notes from './component/Notes';
import Navbar from './Routes/Navbar';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
     {/* <Signup /> */}
     {/* <Login /> */}
     {/* <CreateNote /> */}
     {/* <Notes /> */}
     <Navbar />
     <MainRoutes />
    </div>
  );
}

export default App;
