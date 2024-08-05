// app/ui/NewsletterSubscription.tsx
"use client"; // Indique que ce composant est un composant client

import React, { useState } from 'react';

const NewsletterSubscription = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logique d'inscription à la newsletter
        console.log('Inscription à la newsletter pour :', email);
        setEmail('');
    };

    return (
        <section className="bg-blue-500 text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Inscrivez-vous à notre newsletter</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 rounded mb-4 text-black"
                    placeholder="Votre adresse email"
                    required
                />
                <button type="submit" className="bg-white text-blue-500 px-6 py-3 rounded-full">
                    S'inscrire
                </button>
            </form>
        </section>
    );
};

export default NewsletterSubscription;
