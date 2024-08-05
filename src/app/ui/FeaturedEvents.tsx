// app/ui/FeaturedEvents.tsx
import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const events = [
    {
        id: 1,
        title: 'Tech Conference 2024',
        date: '2024-09-10',
        image: '/images/event2.jpg',
        description: 'Rejoignez-nous pour une journée d\'innovations technologiques.'
    },
    {
        id: 2,
        title: 'Art & Culture Festival',
        date: '2024-10-15',
        image: '/images/event1.webp',
        description: 'Une célébration des arts et de la culture avec des artistes renommés.'
    },

    // Ajoutez d'autres événements ici
];

const FeaturedEvents = () => {
    return (
        <section className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Événements en vedette</h2>
            <div className="flex flex-wrap justify-center">
                {events.map(event => (
                    <div key={event.id} className="bg-white shadow-md rounded-lg m-4 overflow-hidden w-96">
                        <div className="relative w-full h-56">
                            <Image
                                src={event.image}
                                alt={event.title}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                            <p className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString()}</p>
                            <p className="text-gray-700 mb-4">{event.description}</p>
                            <Link className="text-blue-500 hover:underline" href={`/events/${event.id}`}>
                                Détails
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedEvents;
