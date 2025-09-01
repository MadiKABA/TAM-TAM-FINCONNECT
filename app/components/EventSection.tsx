"use client";

import { Calendar, Clock, MapPin } from "lucide-react";

export default function EvenementSection() {
    return (
        <section className="relative py-20 px-6 bg-black text-white">
            <div className="container mx-auto max-w-6xl">
                {/* Titre */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">
                    Un <span className="text-[#C9A646]">Évènement</span>, Des Opportunités
                </h2>

                {/* Infos clés */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 text-sm md:text-base">
                    <div className="flex items-center gap-2">
                        <Calendar className="text-[#C9A646]" size={20} />
                        <span>Mercredi 24 Septembre 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="text-[#C9A646]" size={20} />
                        <span>09h00 - 14h30</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="text-[#C9A646]" size={20} />
                        <span>Résidences Mamoune, VDN, Dakar</span>
                    </div>
                </div>

                {/* Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Matinée */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#C9A646] mb-6">
                            ☀️ Matinée (09h00 – 11h30)
                        </h3>
                        <div className="relative space-y-12">
                            {[
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
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative pl-10 transition-transform duration-300 hover:scale-105"
                                >
                                    {/* Cercle fixe */}
                                    <span className="absolute left-0 top-1.5 w-4 h-4 bg-[#C9A646] rounded-full"></span>
                                    {/* Ligne en pointillés */}
                                    {idx < 3 && (
                                        <span className="absolute left-[7px] top-6 h-16 border-l-2 border-dashed border-[#C9A646]"></span>
                                    )}
                                    <p className="text-sm text-[#C9A646] font-semibold">{item.time}</p>
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-neutral-300 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Après-midi */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#C9A646] mb-6">
                            🌙 Après-midi (11h30 – 14h30)
                        </h3>
                        <div className="relative space-y-12">
                            {[
                                {
                                    time: "11h30 – 13h30",
                                    title: "Ateliers thématiques & Networking",
                                    desc: (
                                        <ul className="list-disc list-inside text-neutral-300 text-sm mt-2 space-y-1">
                                            <li>
                                                <span className="text-[#F5E6D3]">Accès au financement :</span>{" "}
                                                startups, capital-risque, partenariats innovants.
                                            </li>
                                            <li>
                                                <span className="text-[#F5E6D3]">Digitalisation des PME :</span>{" "}
                                                outils numériques, e-commerce, fintech.
                                            </li>
                                            <li>
                                                <span className="text-[#F5E6D3]">Défis de l’entrepreneuriat :</span>{" "}
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
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative pl-10 transition-transform duration-300 hover:scale-105"
                                >
                                    {/* Cercle fixe */}
                                    <span className="absolute left-0 top-1.5 w-4 h-4 bg-[#C9A646] rounded-full"></span>
                                    {/* Ligne en pointillés */}
                                    {idx < 1 && (
                                        <span className="absolute left-[7px] top-6 h-20 border-l-2 border-dashed border-[#C9A646]"></span>
                                    )}
                                    <p className="text-sm text-[#C9A646] font-semibold">{item.time}</p>
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <div className="text-neutral-300 text-sm">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-16">
                    <a
                        href="#inscription"
                        className="bg-[#C9A646] hover:bg-[#C9A646] text-black px-6 py-3 rounded-xl font-semibold transition"
                    >
                        Réserver ma place (Entrepreneur)
                    </a>
                </div>
            </div>
        </section>
    );
}
