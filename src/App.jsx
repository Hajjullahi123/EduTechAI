import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Testimonials from './components/Sections/Testimonials';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';
import ServiceDetail from './components/Sections/ServiceDetail';

function ScrollToHash() {
    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    return null;
}

function HomePage() {
    return (
        <main>
            <Hero />
            <Services />
            <Testimonials />
            <About />
            <Contact />
        </main>
    );
}

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

        const observeElements = () => {
            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });
        };

        observeElements();

        // Re-run observation when location changes (for SPA navigation)
        const observerMutation = new MutationObserver(observeElements);
        observerMutation.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            observerMutation.disconnect();
        };
    }, []);

    return (
        <Router>
            <ScrollToHash />
            <div className="app-container">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/service/:serviceId" element={<ServiceDetail />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
