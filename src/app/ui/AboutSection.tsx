// app/ui/AboutSection.tsx
import React from 'react';

const AboutSection = () => {
    return (
        <section className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">À propos de notre application</h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto">
                Notre application vous permet de découvrir et de réserver les meilleurs événements dans votre région.
                Que vous soyez intéressé par des conférences, des festivals ou des événements culturels, nous avons ce qu'il vous faut.
            </p>
        </section>
    );
};

export default AboutSection;
