import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import About from './components/About';
import Tokenomics from './components/Tokenomics'
import Utility from './components/Utility';
import Ecosystem from './components/Ecosystem';

function App() {
  return (
    <>
      <Header />
      <About />
      <Tokenomics />
      <Utility />
      <Ecosystem />
    </>
  );
}

export default App;
