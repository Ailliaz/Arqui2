import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsExiting(false);
        window.scrollTo(0, 0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className={isExiting ? 'page-exit' : 'page-enter'} key={displayLocation.pathname}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
