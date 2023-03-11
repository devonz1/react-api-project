
import shapef from "C:/Users/devon/Promineo/react-api-project/src/components/shapef.png";
import './App.css';
import Create from './components/create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from "./components/read";
import Update from "./components/update";
import Navbar from "./components/navbar";
 
 



///line 19 is the gym logo

function App() {
  return (
    <>
      <div className="main">
        <div>
          
       
    <img src={shapef} alt="logo" />  
       
        </div>  
             
        <BrowserRouter>
         
          <Routes>
          <Route exact path="/" element={<Create />} />  
            <Route path="/create" element={<Create />} />
            <Route path="/update" element={<Update />} />
            <Route path="/read" element={<Read />} />
          </Routes>

          <br></br><Navbar />
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;

/// line 30 is the home page path where the app will start at once
// you run the program the app will start on the create page thats what 
/// "/" line is for. 