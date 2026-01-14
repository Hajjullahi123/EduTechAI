import React from 'react';
import { companyData } from '../../data/companyData';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--bg-card)', padding: '4rem 0 2rem', marginTop: 'auto' }}>
            <div className="container">
                <div className="grid-3" style={{ marginBottom: '3rem' }}>
                    <div>
                        <h3 className="text-gradient" style={{ marginBottom: '1rem' }}>{companyData.name}</h3>
                        <p style={{ color: 'var(--text-muted)' }}>{companyData.tagline}</p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            {Object.entries(companyData.socials).map(([platform, url]) => (
                                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textTransform: 'capitalize' }}>
                                    {platform}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4>Links</h4>
                        <ul style={{ listStyleType: 'none', padding: 0, color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul style={{ listStyleType: 'none', padding: 0, color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>{companyData.email}</li>
                            <li>{companyData.phone}</li>
                            <li>{companyData.address}</li>
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    &copy; {new Date().getFullYear()} {companyData.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
