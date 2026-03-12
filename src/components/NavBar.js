import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [pendingScroll, setPendingScroll] = useState(null);

  useEffect(() => {
    if (isHome && pendingScroll) {
      const timer = setTimeout(() => {
        const el = document.querySelector(pendingScroll);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setPendingScroll(null);
      }, 380);
      return () => clearTimeout(timer);
    }
  }, [isHome, pendingScroll]);

  const handleSectionLink = (hash) => (e) => {
    e.preventDefault();
    if (isHome) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setPendingScroll(hash);
      navigate('/');
    }
  };

  const handleLogoClick = () => {
    if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="arch-navbar">
      <div className="arch-navbar-inner">
        <Link to="/" className="arch-logo" onClick={handleLogoClick}>
          Arqui2
        </Link>
        <nav className="arch-nav-links" key={location.pathname}>
          <NavLink to="/portfolio" className={({ isActive }) => `nav-link-anim nav-link-1${isActive ? ' nav-active' : ''}`}>
            Portfolio
          </NavLink>
          <a href="#projects" className="nav-link-anim nav-link-2" onClick={handleSectionLink('#projects')}>Projects</a>
          <a href="#about" className="nav-link-anim nav-link-3" onClick={handleSectionLink('#about')}>About</a>
        </nav>
      </div>
    </header>
  );
};
