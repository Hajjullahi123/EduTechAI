import aboutImage from '../../assets/about.svg';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div className="animate-on-scroll">
                        <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>Pioneering the Future of Education & Tech</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            At EduTechAI, we believe that technology is the bridge to a smarter, more efficient future. Founded by a team of industry veterans, we specialize in merging educational frameworks with state-of-the-art AI and cloud computing.
                        </p>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Our mission is to empower institutions and businesses with tools that are not just functional, but transformative. We don't just build software; we build ecosystems for growth.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            {['Innovation First', 'Client Centric', 'Secure by Design', 'Scalable Architecture'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--primary)' }}>✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div style={{
                        height: '400px',
                        background: 'linear-gradient(45deg, var(--bg-dark), var(--bg-card))',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <img src={aboutImage} alt="About EduTechAI" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
