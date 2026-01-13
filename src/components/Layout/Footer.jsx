import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--bg-card)', padding: '4rem 0 2rem', marginTop: 'auto' }}>
            <div className="container">
                <div className="grid-3" style={{ marginBottom: '3rem' }}>
                    <div>
                        <h3 className="text-gradient" style={{ marginBottom: '1rem' }}>EduTechAI</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Empowering businesses with intelligent IT solutions for the future.</p>
                    </div>
                    <div>
                        <h4>Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>hello@edutechai.com</li>
                            <li>+1 (555) 123-4567</li>
                            <li>123 Tech Avenue, Silicon Valley</li>
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    &copy; {new Date().getFullYear()} EduTechAI. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
