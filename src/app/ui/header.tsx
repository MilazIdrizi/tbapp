// app/ui/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link href="/">Mon Application</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/dashboard">Tableau de bord</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
