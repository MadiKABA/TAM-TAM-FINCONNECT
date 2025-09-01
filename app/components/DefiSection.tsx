"use client";

import { AlertTriangle, Users, Briefcase } from "lucide-react";

export default function DefiSection() {
    return (
        <section className="relative py-20 px-6 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1f] to-[#0a0a0a] text-white">
            {/* Overlay décoratif */}
            <div className="absolute inset-0 bg-[url('/pattern-dark.png')] opacity-10"></div>

            <div className="container relative z-10 mx-auto max-w-6xl">
                {/* Titre */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">
                    Un <span className="text-[#C9A646]">Océan</span> de Talents,{" "}
                    <span className="text-[#C9A646]">un Désert</span> de Capital
                </h2>

                {/* Narration sous forme de 3 colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Bloc 1 */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-[#C9A646]/30 shadow-lg hover:scale-105 hover:shadow-[#C9A646]/40 transition">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="text-[#C9A646]" size={28} />
                            <h3 className="text-xl font-bold text-[#C9A646]">
                                Une Demande Explosive
                            </h3>
                        </div>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                            Depuis 2018, plus de{" "}
                            <span className="text-[#F5E6D3] font-semibold">
                                500 000 demandes de financement
                            </span>{" "}
                            ont été soumises rien qu’à la DER/FJ au Sénégal.
                        </p>
                    </div>

                    {/* Bloc 2 */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-[#C9A646]/30 shadow-lg hover:scale-105 hover:shadow-[#C9A646]/40 transition">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="text-[#C9A646]" size={28} />
                            <h3 className="text-xl font-bold text-[#C9A646]">
                                La Frustration des Entrepreneurs
                            </h3>
                        </div>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                            Un véritable{" "}
                            <span className="text-[#F5E6D3] font-semibold">
                                parcours du combattant
                            </span>{" "}
                            : fragmentation des sources de financement, opacité des
                            processus et manque d’accompagnement.
                        </p>
                    </div>

                    {/* Bloc 3 */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-[#C9A646]/30 shadow-lg hover:scale-105 hover:shadow-[#C9A646]/40 transition">
                        <div className="flex items-center gap-3 mb-4">
                            <Briefcase className="text-[#C9A646]" size={28} />
                            <h3 className="text-xl font-bold text-[#C9A646]">
                                Le Défi des Investisseurs
                            </h3>
                        </div>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                            Difficile d’identifier des{" "}
                            <span className="text-[#F5E6D3] font-semibold">
                                projets sûrs, bancables et diversifiés
                            </span>{" "}
                            dans un flux massif de demandes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
