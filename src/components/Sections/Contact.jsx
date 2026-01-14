import React, { useState } from 'react';
import { companyData } from '../../data/companyData';

const Contact = () => {
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulating an API call for now.
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-on-scroll">
                    <h2 className="text-gradient">Get In Touch</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Ready to start your digital transformation? We'd love to hear from you.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    <div className="animate-on-scroll">
                        <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Prefer direct contact? Reach out to us through any of these channels.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>📧</span>
                                <div>
                                    <div style={{ fontWeight: '600' }}>Email Us</div>
                                    <div style={{ color: 'var(--text-muted)' }}>{companyData.email}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>📞</span>
                                <div>
                                    <div style={{ fontWeight: '600' }}>Call Us</div>
                                    <div style={{ color: 'var(--text-muted)' }}>{companyData.phone}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>📍</span>
                                <div>
                                    <div style={{ fontWeight: '600' }}>Visit Us</div>
                                    <div style={{ color: 'var(--text-muted)' }}>{companyData.address}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)' }} className="animate-on-scroll">
                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '2rem' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                                <h3 className="text-gradient">Message Sent!</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                                <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => setStatus('')}>Send Another Message</button>
                            </div>
                        ) : (
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
                                <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={{
                                            background: 'var(--bg-dark)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            padding: '1rem',
                                            borderRadius: 'var(--radius-sm)',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{
                                            background: 'var(--bg-dark)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            padding: '1rem',
                                            borderRadius: 'var(--radius-sm)',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    />
                                </div>

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    style={{
                                        background: 'var(--bg-dark)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '1rem',
                                        borderRadius: 'var(--radius-sm)',
                                        color: 'white',
                                        outline: 'none',
                                        width: '100%'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />

                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{
                                        background: 'var(--bg-dark)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '1rem',
                                        borderRadius: 'var(--radius-sm)',
                                        color: 'white',
                                        outline: 'none',
                                        width: '100%',
                                        resize: 'vertical'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                ></textarea>

                                <button
                                    type="submit"
                                    className="btn-primary"
                                    style={{ width: '100%', marginTop: '0.5rem', opacity: status === 'sending' ? 0.7 : 1 }}
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
