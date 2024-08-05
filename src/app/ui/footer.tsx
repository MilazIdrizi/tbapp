// app/ui/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="max-w-7xl mx-auto text-center">
                <p>&copy; 2024 Mon Application. Tous droits réservés.</p>
                <p>
                    <Link className="hover:underline" href="/mentions-legales">Mentions légales</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
