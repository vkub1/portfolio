
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import ContactPage from './components/ContactPage';
import PortfolioPage from './components/PortfolioPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<IndexPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/portfolio" element={<PortfolioPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
