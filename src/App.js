import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import About from './components/About';
import Tokenomics from './components/Tokenomics'
import Utility from './components/Utility';
import Ecosystem from './components/Ecosystem';
import Roadmap from './components/Roadmap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import News from './components/News';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, });
  }, []);
  
  return (
    <>
      <Header />
      <About />
      <Tokenomics />
      <Utility />
      <Ecosystem />
      <Roadmap />
      <News />
      <Footer />
    </>
  );
}

export default App;
