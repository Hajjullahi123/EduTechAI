import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo_futuristic.png';
import { companyData } from '../../data/companyData';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="glass-nav" style={{ height: 'var(--nav-height)' }}>
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} onClick={() => setIsMenuOpen(false)}>
                    <img src={logo} alt={`${companyData.name} Logo`} style={{ height: '40px', width: 'auto', borderRadius: '4px' }} />
                    <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '800' }}>{companyData.name}</span>
                </Link>

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
                        <li><Link to="/#services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                        <li><Link to="/#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        <li><Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                        <li><button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Get Started</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
