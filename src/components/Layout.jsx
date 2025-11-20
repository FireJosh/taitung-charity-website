import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Heart, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import './Layout.css';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app-container">
      <header className="header">
        <div className="container header-content">
          <Link to="/" className="logo">
            <Heart className="logo-icon" />
            <div className="logo-text">
              <h1>臺東後山慈善會</h1>
              <span>Taitung Houshan Charity</span>
            </div>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><NavLink to="/" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>首頁</NavLink></li>
              <li><NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>關於我們</NavLink></li>
              <li><NavLink to="/services" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>服務項目</NavLink></li>
              <li><NavLink to="/news" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>最新消息</NavLink></li>
              <li><NavLink to="/get-involved" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>支持我們</NavLink></li>
              <li><NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => isActive ? 'active' : ''}>聯絡我們</NavLink></li>
            </ul>
            <Link to="/get-involved" className="btn btn-accent mobile-donate-btn" onClick={toggleMenu}>立即捐款</Link>
          </nav>

          <div className="header-actions">
            <Link to="/get-involved" className="btn btn-accent desktop-donate-btn">立即捐款</Link>
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-section">
            <h3>臺東後山慈善會</h3>
            <p>決定愛的力量，One Click 一鍵生成愛。</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer"><Facebook /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><Mail /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>快速連結</h4>
            <ul>
              <li><Link to="/about">關於我們</Link></li>
              <li><Link to="/services">服務項目</Link></li>
              <li><Link to="/news">最新消息</Link></li>
              <li><Link to="/contact">聯絡我們</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>聯絡資訊</h4>
            <ul className="contact-info">
              <li><MapPin size={18} /> 臺東市...</li>
              <li><Phone size={18} /> 089-XXX-XXX</li>
              <li><Mail size={18} /> info@taitungcharity.org</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 臺東後山慈善會. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
