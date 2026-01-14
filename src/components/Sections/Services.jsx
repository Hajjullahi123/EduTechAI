import React from 'react';

const ServiceCard = ({ title, description, icon }) => (
    <div style={{
        background: 'var(--bg-card)',
        padding: '2rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: 'transform 0.3s, border-color 0.3s'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.borderColor = 'var(--primary)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
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
        <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)' }}>{description}</p>
    </div>
);

const Services = () => {
    const services = [
        { title: "AI Integration", description: "Leverage the power of machine learning to automate workflows and gain predictive insights.", icon: "🤖" },
        { title: "Cloud Solutions", description: "Scalable, secure, and efficient cloud architecture tailored to your enterprise needs.", icon: "☁️" },
        { title: "Cybersecurity", description: "Advanced threat protection and security protocols to keep your data safe.", icon: "🛡️" },
        { title: "EdTech Platforms", description: "Custom learning management systems designed for modern education.", icon: "🎓" },
        { title: "Data Analytics", description: "Transform raw data into actionable intelligence for better decision making.", icon: "📊" },
        { title: "IT Consulting", description: "Strategic guidance to align your technology roadmap with business goals.", icon: "💡" }
    ];

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
                        <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                            <ServiceCard {...s} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
