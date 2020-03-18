import React from 'react';
import './App.css';
import './Style.css';
import './animate.css';
import NavBar from './components/layouts/NavBar';
import Header from './components/layouts/Header';
import Services from './components/pages/Services';

import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Footer from './components/layouts/Footer';

const App = () => {
  return (
    <div className='container-fluid'>
      <NavBar/>
      <Header />
      <Services />

      <Team />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
