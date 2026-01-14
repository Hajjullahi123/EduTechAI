import React from 'react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: 'var(--nav-height)'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'var(--primary)',
                filter: 'blur(150px)',
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-10%',
                width: '40vw',
                height: '40vw',
                background: 'var(--secondary)',
                filter: 'blur(150px)',
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: -1
            }} />

            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <h1 className="reveal" style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                        Transforming Business with <br />
                        <span className="text-gradient">Intelligent IT Solutions</span>
                    </h1>
                    <p className="reveal" style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        animationDelay: '0.2s'
                    }}>
                        EduTechAI provides cutting-edge technological infrastructure, AI integration, and secure cloud mechanisms to propel your education and business platforms into the future.
                    </p>
                    <div className="reveal" style={{ display: 'flex', gap: '1rem', animationDelay: '0.4s' }}>
                        <button className="btn-primary">Explore Services</button>
                        <button style={{
                            background: 'transparent',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-main)',
                            padding: '0.75rem 1.5rem',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: 600
                        }}>Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
