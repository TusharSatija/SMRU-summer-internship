import { Link, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Login from "./component/Login"; 
function App()
{
    return(
        <>
        {/* navigation */}
            <nav>
                <h1>landing page</h1>
                <Link to="/home"> Home </Link>
                <Link to="/contact"> contact </Link>
                <Link to="/about"> About </Link>
                <Link to="/login"> Login </Link>
            </nav>
            {/*</Routes> */}
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>} > </Route>
                <Route path="/about" element={<About/>} ></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </>
    )
}
export default App;