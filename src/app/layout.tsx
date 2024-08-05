// app/layout.tsx
import React from 'react';
import './globals.css'; // Importation des styles globaux (si nécessaire)
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="fr">
      <head>
        <title>Mon Application Next.js</title>
        <meta name="description" content="Une application de gestion d'événements." />
      </head>
      <body>
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
      </html>
  );
}
