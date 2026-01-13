import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Testimonials from './components/Sections/Testimonials';
import About from './components/Sections/About';
import Contact from './components/Sections/Contact';

function App() {
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
