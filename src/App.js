import './App.css';
import Home from './components/Home';
import MiniPortfolio from './components/MiniPortfolio';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/portfolio" element={<MiniPortfolio />}></Route>
          <Route path="/offers" element={}></Route>
          <Route path="/services" element={<Home />}></Route>
          <Route path="/contacts" element={<Home />}></Route> */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
