
import './App.css';
import Home from './Components/Home.js'
import Refined from './Components/Refined.js'
import {Routes, Route, Navigate,Redirect} from "react-router-dom"
import {BrowserRouter as Router}  from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap'

function App() {
  return (
    <>
      <Router>
        <Routes>

        {/*This route is for the home component. It uses the / as a path to take me home.*/}
        <Route path = "/" element={<Home/>}/>

        {/*This route is for the Refined component. It uses the /refined as a path 
        to take me to the refined page after the home page.*/}
        <Route path = "refined" element={<Refined/>}/>

        {/*This is my fallback. Should any route mismatch, it will redirect to the home page
        <Navigate to="/"/>*/}
        <Route path = "*" element={<Navigate to = "/" />}></Route>
        
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
