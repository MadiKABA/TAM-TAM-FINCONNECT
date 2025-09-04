"use client";

import { Calendar, Clock, MapPin } from "lucide-react";

export default function EvenementSection() {
    const timeline = [
        {
            time: "09h00 – 09h30",
            title: "Accueil & Inscriptions",
            desc: "Remise des badges, découverte de l’espace, networking libre.",
        },
        {
            time: "09h30 – 10h30",
            title: "Discours d’ouverture",
            desc: "Allocutions des organisateurs & partenaires institutionnels.",
        },
        {
            time: "10h30 – 11h00",
            title: "Démonstration de la plateforme",
            desc: "Présentation en direct des fonctionnalités de TAM TAM FinConnect.",
        },
        {
            time: "11h00 – 11h30",
            title: "Témoignages d’entrepreneurs",
            desc: "Partages d’expériences sur l’accès au financement et les défis rencontrés.",
        },
        {
            time: "11h30 – 13h30",
            title: "Ateliers thématiques & Networking",
            desc: (
                <ul className="list-disc list-inside text-[#D9C5B0] text-sm mt-2 space-y-1">
                    <li>
                        <span className="text-[#FFF8F0] font-semibold">Accès au financement :</span>{" "}
                        startups, capital-risque, partenariats innovants.
                    </li>
                    <li>
                        <span className="text-[#FFF8F0] font-semibold">Digitalisation des PME :</span>{" "}
                        outils numériques, e-commerce, fintech.
                    </li>
                    <li>
                        <span className="text-[#FFF8F0] font-semibold">Défis de l’entrepreneuriat :</span>{" "}
                        inclusion des jeunes et femmes, solutions concrètes.
                    </li>
                </ul>
            ),
        },
        {
            time: "13h00 – 14h30",
            title: "Clôture & Cocktail",
            desc: "Mot de clôture, remerciements et cocktail convivial pour réseauter.",
        },
    ];

    return (
        <section className="relative py-24 px-6 bg-[#4B2C20] text-[#FFF8F0] overflow-hidden">
            {/* Motifs animés */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Cercles flottants */}
                <circle cx="20%" cy="10%" r="50" fill="#6B4A2B" opacity="0.1">
                    <animate
                        attributeName="cy"
                        values="10%;20%;10%"
                        dur="8s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="cx"
                        values="20%;25%;20%"
                        dur="10s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="80%" cy="30%" r="70" fill="#6B4A2B" opacity="0.08">
                    <animate
                        attributeName="cy"
                        values="30%;35%;30%"
                        dur="12s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="cx"
                        values="80%;75%;80%"
                        dur="15s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="50%" cy="80%" r="100" fill="#D9C5B0" opacity="0.15">
                    <animate
                        attributeName="cy"
                        values="80%;75%;80%"
                        dur="20s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="cx"
                        values="50%;55%;50%"
                        dur="18s"
                        repeatCount="indefinite"
                    />
                </circle>

                {/* Polygone flottant */}
                <polygon points="10,90 40,10 70,80" fill="#6B4A2B" opacity="0.05">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 50 50"
                        to="360 50 50"
                        dur="30s"
                        repeatCount="indefinite"
                    />
                </polygon>
            </svg>

            <div className="container mx-auto max-w-6xl relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">
                    Un <span className="text-[#FFF8F0]">Évènement</span>,{" "}
                    <span className="text-[#FFF8F0]">Des Opportunités</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 text-sm md:text-base">
                    <div className="flex items-center gap-2">
                        <Calendar className="text-[#FFF8F0]" size={20} />
                        <span>Mercredi 24 Septembre 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="text-[#FFF8F0]" size={20} />
                        <span>09h00 - 14h30</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="text-[#FFF8F0]" size={20} />
                        <span>Résidences Mamoune, VDN, Dakar</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {timeline.map((item, idx) => (
                        <div key={idx} className="relative pl-10 hover:translate-x-1 transition">
                            <span className="absolute left-0 top-1.5 w-4 h-4 bg-[#FFF8F0] rounded-full"></span>
                            {idx < timeline.length - 1 && (
                                <span className="absolute left-[7px] top-6 h-full border-l-2 border-dashed border-[#FFF8F0]"></span>
                            )}
                            <p className="text-sm font-semibold">{item.time}</p>
                            <h4 className="font-bold text-lg">{item.title}</h4>
                            <div className="text-[#D9C5B0] text-sm">{item.desc}</div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <a
                        href="/programme.pdf"
                        download
                        className="bg-[#FFF8F0] text-[#4B2C20] px-6 py-3 rounded-xl font-semibold transition shadow-lg hover:shadow-[#6B4A2B]/50 animate-pulse"
                    >
                        📄 Télécharger le programme
                    </a>
                </div>
            </div>
        </section>
    );
}
