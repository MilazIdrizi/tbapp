// app/ui/Testimonials.tsx
import React from 'react';

const testimonials = [
    {
        name: 'John Doe',
        text: 'Un événement exceptionnel, j\'ai passé un moment incroyable !'
    },
    {
        name: 'Jane Smith',
        text: 'Très bien organisé et une expérience inoubliable.'
    },
    // Ajoutez d'autres témoignages ici
];

const Testimonials = () => {
    return (
        <section className="p-8 bg-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-center">Témoignages</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg m-4 p-4 w-80">
                        <p className="text-gray-700 mb-2">"{testimonial.text}"</p>
                        <p className="text-gray-600 font-semibold text-right">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
