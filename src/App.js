import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './Pages/Profile';
import Projects from './Pages/Projects';
import ProjectDetail from './Pages/ProjectDetail';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <div className="App">
      <ErrorBoundary>

      <BrowserRouter>
      <Header />
      <Routes>
           <Route 
             path='*'
             element={<Profile userName='Ajoke-Amupitan' />}
           />
           <Route path='/projects' element=
                 {<Projects userName='Ajoke-Amupitan' />} 
            />
            <Route path='/projects/:name' element=
              {<ProjectDetail userName='Ajoke-Amupitan' />} 
            />
         </Routes>
    
      </BrowserRouter>

      </ErrorBoundary>
          </div>
  );
}

export default App;
