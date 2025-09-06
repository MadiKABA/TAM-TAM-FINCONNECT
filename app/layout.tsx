import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "TAM TAM FINCONNECT | Lancement Officiel - 24 Septembre 2025",
  description:
    "Soyez aux premières loges du lancement de TAM TAM FINCONNECT. Un événement unique pour connecter entrepreneurs et investisseurs en Afrique de l’Ouest.",
  openGraph: {
    title: "TAM TAM FINCONNECT | Lancement Officiel",
    description:
      "Découvrez la plateforme innovante qui connecte projets et capitaux. Rendez-vous le 24 septembre 2025 à Dakar.",
    url: "https://www.tamtamfinconnect.com",
    siteName: "TAM TAM FINCONNECT",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "TAM TAM FINCONNECT Event" }],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAM TAM FINCONNECT | La Connexion Intelligente",
    description: "Un marché virtuel pour connecter entrepreneurs et investisseurs en Afrique.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>{/* ✅ futur logo & navigation ici */}</header>
        <main>{children}</main>
        <footer>{/* ✅ footer global ici */}</footer>
      </body>
    </html>
  );
}
