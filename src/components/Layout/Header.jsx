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

                <nav className={`desktop-nav ${isMenuOpen ? 'open' : ''}`}>
                    {/* Mobile Menu Toggle would go here logically for small screens, handling simply for now */}
                    <ul style={{
                        display: 'flex',
                        gap: '2rem',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        '@media (max-width: 768px)': { display: 'none' } // Simple inline for now, ideally in CSS
                    }}>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><button className="btn-primary" style={{ padding: '0.5rem 1rem' }}>Get Started</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
