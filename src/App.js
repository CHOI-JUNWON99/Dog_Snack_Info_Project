import './App.css';
import React from 'react';
import './global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Health from './pages/Health';
import Diet from './pages/Diet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyPetInfo from './components/MyPetInfo';

function App() {
  return (
    <Router>
      <div className='Router-Routes'>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/Diet' element={<Diet />} />
          <Route path='/Health' element={<Health />} />
          <Route path='/MyPetInfo' element={<MyPetInfo />} />
          {/* 다른 페이지 라우트를 여기에 추가 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
