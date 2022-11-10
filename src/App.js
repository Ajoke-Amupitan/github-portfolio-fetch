import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './Pages/Profile';
import Projects from './Pages/Projects';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Header />
      {/* <Profile  userName=''  /> */}
      <Routes>
           <Route 
             path='*'
             element={<Profile userName='Ajoke-Amupitan' />}
           />
           <Route path='/projects' element=
                 {<Projects userName='Ajoke-Amupitan' />} />
         </Routes>
    
      </BrowserRouter>
          </div>
  );
}

export default App;
