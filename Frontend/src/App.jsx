import Contact from "./Components/Contact";
import Course from "./Components/Course";
import Home from "./Components/Home";

import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";


function App() {
  return (
    <>

    
   
    
    <Routes>
    
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Course" element={<Course/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route> 
    
    </Routes>
    
    
    
    
    </>
  )
}

export default App;