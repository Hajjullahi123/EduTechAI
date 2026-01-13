import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section-padding" style={{ background: 'var(--bg-glass)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-gradient">Trusted by Industry Leaders</h2>
                    <p style={{ color: 'var(--text-muted)' }}>See what our partners have to say about our collaborative success.</p>
                </div>

                <div className="grid-3">
                    {[
                        {
                            quote: "EduTechAI completely revolutionized our university's remote learning infrastructure. The AI integration saved us thousands of hours.",
                            author: "Dr. Sarah Chen",
                            role: "Dean of Technology, West Tech University",
                            avatar: "👩‍🏫"
                        },
                        {
                            quote: "Their cloud security solutions are top-notch. We've never felt safer handling sensitive student data.",
                            author: "James Wilson",
                            role: "CTO, Future Schools Network",
                            avatar: "👨‍💻"
                        },
                        {
                            quote: "A true partner in innovation. The team at EduTechAI understands both the tech and the pedagogy.",
                            author: "Anita Patel",
                            role: "Director, EdGlobal Systems",
                            avatar: "👩‍💼"
                        }
                    ].map((item, i) => (
                        <div key={i} style={{
                            background: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem', opacity: 0.5 }}>"</div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-main)' }}>{item.quote}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'var(--primary)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>{item.avatar}</div>
                                <div>
                                    <div style={{ fontWeight: '600' }}>{item.author}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
