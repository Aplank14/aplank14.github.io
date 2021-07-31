import React, { useState } from 'react';
import './App.css';
import Landing from './components/Landing';

import Projects from './components/Projects';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 100);

  return (
    <div className={loading ? 'hidden' : ''}>
      <Loader loading={loading} />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
