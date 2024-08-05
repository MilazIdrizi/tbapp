// app/page.tsx
import React from 'react';
import HeroSection from './ui/HeroSection';
import FeaturedEvents from './ui/FeaturedEvents';
import NewsletterSubscription from './ui/NewsletterSubscription';
import Testimonials from './ui/Testimonials';
import AboutSection from './ui/AboutSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <FeaturedEvents />
            <NewsletterSubscription />
            <Testimonials />
            <AboutSection />
        </div>
    );
};

export default HomePage;
