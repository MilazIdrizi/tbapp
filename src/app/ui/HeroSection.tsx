// app/ui/HeroSection.tsx
import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="bg-gray-800 text-white p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Découvrez les meilleurs événements près de chez vous</h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="mb-8">Explorez notre sélection d'événements et réservez vos billets maintenant.</p>
            <Link className="bg-blue-500 text-white px-6 py-3 rounded-full" href="/events">
                Explorer les événements
            </Link>
        </section>
    );
};

export default HeroSection;
