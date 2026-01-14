import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';

const ServiceCard = ({ title, description, icon, id }) => (
    <Link to={`/service/${id}`} style={{ display: 'block' }}>
        <div style={{
            background: 'var(--bg-card)',
            padding: '2rem',
            height: '100%',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <div style={{
                width: '50px',
                height: '50px',
                background: 'rgba(79, 70, 229, 0.1)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--primary)',
                fontSize: '1.5rem'
            }}>
                {icon}
            </div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>{title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{description}</p>
            <span style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Learn More <span>→</span>
            </span>
        </div>
    </Link>
);

const Services = () => {
    const services = Object.entries(servicesData).map(([id, data]) => ({
        id,
        ...data
    }));

    return (
        <section id="services" className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-on-scroll">
                    <h2 className="text-gradient">Our Expertise</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Comprehensive IT solutions designed to elevate your operational efficiency.
                    </p>
                </div>
                <div className="grid-3">
                    {services.map((s, index) => (
                        <div key={s.id} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                            <ServiceCard {...s} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
