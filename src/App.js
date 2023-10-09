import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
// import MiniPortfolio from './components/MiniPortfolio';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollButtonTop from './components/ScrollTopButton';
import About from './components/About';

function App() {
  const [email, setEmail] = useState(null)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('email:', email);
}

const handleEmailChange = (e) => {
    setEmail(e.target.value)
}
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
      <ScrollButtonTop />
      <Footer handleEmailChange={handleEmailChange} handleSubmit={handleSubmit} email={email}/>
    </div>
  );
}

export default App;
