import React, { useState } from 'react';
import logo from '../../assets/logos/logo_futuristic.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="glass-nav" style={{ height: 'var(--nav-height)' }}>
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src={logo} alt="EduTechAI Logo" style={{ height: '40px', width: 'auto', borderRadius: '4px' }} />
                    <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '800' }}>EduTechAI</span>
                </a>

                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                        <li><button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Get Started</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
