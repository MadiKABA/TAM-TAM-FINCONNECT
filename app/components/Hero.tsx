"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";

// ✅ Définition d’un type pour les clés du compte à rebours
type TimeUnit = "days" | "hours" | "minutes" | "seconds";

export default function Hero() {
    const eventDate = new Date("2025-09-24T09:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState<Record<TimeUnit, number>>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = Date.now();
            const distance = eventDate - now;
            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((distance / (1000 * 60)) % 60),
                    seconds: Math.floor((distance / 1000) % 60),
                });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [eventDate]);

    return (
        <section className="relative min-h-screen flex items-center">
            {/* Background image + overlay dégradé */}
            <div className="absolute inset-0 hero-bg"></div>

            {/* Contenu principal */}
            <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
                {/* Bloc gauche : Texte & CTA */}
                <div className="flex flex-col px-6 justify-center text-center md:text-left pt-16 sm:pt-20 md:pt-24 lg:pt-0">

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#F5E6D3] mb-6 drop-shadow-lg">
                        TAM TAM FINCONNECT
                    </h1>
                    <p className="text-md md:text-xl lg:text-2xl mb-8 text-[#F5E6D3] max-w-2xl">
                        Soyez aux premières loges pour le lancement officiel le{" "}
                        <span className="font-bold">24 Septembre 2025</span>. Découvrez notre
                        vision, rencontrez les fondateurs et participez à l’avenir du
                        financement entrepreneurial en Afrique.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <a
                            href="#inscription"
                            className="bg-[#4B2C20] hover:bg-[#4B2C20] text-white px-6 py-3 rounded-xl font-semibold transition"
                        >
                            Réserver ma place (Entrepreneur)
                        </a>
                        <a
                            href="#inscription"
                            className="border border-[#F5E6D3] text-[#F5E6D3] hover:bg-[#4B2C20] hover:text-white px-6 py-3 rounded-xl font-semibold transition"
                        >
                            Réserver ma place (Investisseur)
                        </a>
                    </div>
                </div>

                {/* Bloc droit : Countdown compact */}
                <div className="flex items-center justify-center w-full px-2 py-6 md:py-8">
                    {/* Wrapper avec style premium taxi */}
                    <div className="relative w-full max-w-sm p-1 sm:max-w-md md:max-w-lg rounded-3xl">
                        {/* Glow doré autour */}
                        <div className="absolute inset-0 bg-[#C9A646] rounded-3xl opacity-40 blur-sm"></div>
                        <div className="absolute inset-0 bg-[#F5E6D3] border-4 border-[#4B2C20] rounded-3xl"></div>

                        {/* Contenu principal */}
                        <div className="relative z-20 w-full h-full overflow-hidden bg-[#F5E6D3] shadow-lg rounded-3xl">
                            {/* Damier subtil en fond */}
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                                <div className="grid grid-cols-8 grid-rows-8">
                                    {Array(64)
                                        .fill(0)
                                        .map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-4 h-4 ${i % 2 === Math.floor(i / 8) % 2
                                                    ? "bg-[#C9A646]"
                                                    : "bg-[#F5E6D3]"
                                                    }`}
                                            ></div>
                                        ))}
                                </div>
                            </div>

                            {/* Contenu wrapper */}
                            <div className="relative z-10 p-6 sm:p-8 text-center text-[#4B2C20]">
                                {/* Logo en haut */}
                                <div className="mb-6">
                                    <Image
                                        src="/logo-tamtam.png"
                                        alt="Logo TAM TAM FINCONNECT"
                                        className="mx-auto h-16 md:h-20"
                                        width={200}
                                        height={80}
                                    />
                                </div>

                                {/* Date encadrée */}
                                <div className="inline-block border-2 border-[#C9A646] text-[#4B2C20] px-6 py-2 rounded-lg mb-6 bg-white/60">
                                    <h2 className="text-xl font-bold tracking-widest">24.09.2025</h2>
                                </div>

                                {/* Lieu */}
                                <div className="flex items-center justify-center gap-2 font-medium mb-6 text-sm md:text-base">
                                    <MapPin size={18} className="text-[#C9A646]" />
                                    <span>Résidences Mamoune, VDN Dakar</span>
                                </div>

                                {/* Countdown */}
                                <div className="p-3 border-2 border-[#C9A646] rounded-xl bg-white/70">
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                        {(["days", "hours", "minutes", "seconds"] as TimeUnit[]).map(
                                            (unit) => (
                                                <div
                                                    key={unit}
                                                    className="flex flex-col items-center p-3 bg-[#F5E6D3] border border-[#C9A646] rounded-lg"
                                                >
                                                    <div className="font-mono text-2xl md:text-3xl font-bold text-[#4B2C20]">
                                                        {timeLeft[unit].toString().padStart(2, "0")}
                                                    </div>
                                                    <div className="text-[#C9A646] text-xs md:text-sm font-semibold uppercase">
                                                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* ✅ Indicateur places limitées */}
                                <div className="flex items-center justify-center gap-2 mt-6">
                                    <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                                    <span className="text-sm font-bold text-[#4B2C20] uppercase">
                                        Places limitées
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Styles Tailwind additionnels */}
            <style jsx>{`
        .hero-bg {
          background-image: linear-gradient(
              to right,
              rgba(0,0,0, 0.9) 0%,
              rgba(0,0,0, 0.7) 50%,
              rgba(0,0,0, 0.9) 100%
            ),
            url("/hero-bg.jpg");
          background-size: cover;
          background-position: center;
        }
      `}</style>
        </section>
    );
}
