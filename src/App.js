
import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact/Contacts';
import About from './component/About/About';
import Service from './component/Services/Service';
import { Route,  Routes } from 'react-router-dom';
import Footer from './component/Footer';
import SocialMedia from './component/Services/SocialMedia';
import Masterclass from './component/Masterclass/Masterclass';
import Ecomclass from './component/Masterclass/Ecomclass';
import SmmClass from './component/Masterclass/SocialMClass';
import Main from './component/Booking/Main';

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/service" element={ <Service /> } />
        <Route exact path="/contact" element={ <Contact/> } />
        <Route exact path="/socialmedia" element={ <SocialMedia/> } />
        <Route exact path="/masterclass" element={ <Masterclass/> } />
        <Route exact path="/ecomclass" element={ <Ecomclass/> } />
        <Route exact path="/smmclass" element={ <SmmClass/> } />
        <Route exact path="/main" element={ <Main/> } />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
