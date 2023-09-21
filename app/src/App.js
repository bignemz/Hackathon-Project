import React from 'react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Homepage from "./Pages/Homepage/Homepage";
import Layoutpage from "./Pages/Layoutpage/Layoutpage";
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
   
       
            <Route path='/' element={<Navbar/>}/>
          
         
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
