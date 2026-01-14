import React, { useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Testimonials from './components/Sections/Testimonials';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="app-container">
            <Header />
            <main>
                <Hero />
                <Services />
                <Testimonials />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
