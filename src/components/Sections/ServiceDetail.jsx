import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const service = servicesData[serviceId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    if (!service) {
        return (
            <div className="container section-padding" style={{ textAlign: 'center', minHeight: '60vh' }}>
                <h2>Service Not Found</h2>
                <Link to="/" className="btn-primary" style={{ display: 'inline-block', marginTop: '2rem' }}>Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="service-detail-page">
            <section className="section-padding" style={{ background: 'var(--bg-glass)', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <Link to="/" style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        ← Back to Home
                    </Link>
                    <div style={{ maxWidth: '800px', marginTop: '2rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                        <h1 className="text-gradient reveal">{service.title}</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <h2 className="animate-on-scroll" style={{ marginBottom: '3rem' }}>Key Capabilities</h2>
                    <div className="grid-3">
                        {service.subServices.map((sub, index) => (
                            <div key={index} className="animate-on-scroll" style={{
                                background: 'var(--bg-card)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--border-color)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                animationDelay: `${index * 0.1}s`
                            }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{sub.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{sub.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ textAlign: 'center', background: 'var(--bg-glass)' }}>
                <div className="container">
                    <h2 className="animate-on-scroll">Ready to implement this solution?</h2>
                    <p className="animate-on-scroll" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        Schedule a consultation with our experts today.
                    </p>
                    <button className="btn-primary animate-on-scroll" onClick={() => navigate('/#contact')}>
                        Contact Sales
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
