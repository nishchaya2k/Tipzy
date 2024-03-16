import React from 'react';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Verification from './pages/Verification';


const App = () => {
  return (
    <div className='min-h-screen w-screen bg-zinc-900'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/verification' element={<Verification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
