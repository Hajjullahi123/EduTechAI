import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="text-gradient">Get In Touch</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Ready to start your digital transformation? We'd love to hear from you.</p>
                </div>

                <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--bg-card)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <input type="text" placeholder="Name" style={{
                                background: 'var(--bg-dark)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '1rem',
                                borderRadius: 'var(--radius-sm)',
                                color: 'white',
                                outline: 'none'
                            }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />

                            <input type="email" placeholder="Email" style={{
                                background: 'var(--bg-dark)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '1rem',
                                borderRadius: 'var(--radius-sm)',
                                color: 'white',
                                outline: 'none'
                            }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                        </div>

                        <input type="text" placeholder="Subject" style={{
                            background: 'var(--bg-dark)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            padding: '1rem',
                            borderRadius: 'var(--radius-sm)',
                            color: 'white',
                            outline: 'none',
                            width: '100%'
                        }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />

                        <textarea rows="5" placeholder="Message" style={{
                            background: 'var(--bg-dark)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            padding: '1rem',
                            borderRadius: 'var(--radius-sm)',
                            color: 'white',
                            outline: 'none',
                            width: '100%',
                            resize: 'vertical'
                        }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}></textarea>

                        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
