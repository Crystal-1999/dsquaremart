import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToTop from './components/ScrollToTop';
import CursorFollower from './components/CursorFollower';
import WhatsAppIcon from './components/WhatsAppIcon';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CursorFollower />
      <WhatsAppIcon />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
