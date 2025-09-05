"use client";

import { AlertTriangle, Users, Briefcase } from "lucide-react";

export default function DefiSection() {
    return (
        <section
            className="relative py-20 px-6 text-[#5D3010] overflow-hidden"
            style={{
                backgroundImage: "url('/hero-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Filtre semi-transparent cohérent */}
            <div className="absolute inset-0 bg-[#F5DEC4]/70 backdrop-blur-sm"></div>

            {/* Motifs subtils animés */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-72 h-72 bg-white/10 rounded-full top-[-50px] left-[-50px] animate-ping-slow"></div>
                <div className="absolute w-48 h-48 bg-white/10 rounded-full bottom-[-40px] right-[-30px] animate-ping-slower"></div>
            </div>

            <div className="container relative z-10 mx-auto max-w-6xl">
                {/* Titre */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-[#5D3010]">
                    Un Océan de Talents, un Désert de Capital
                </h2>

                {/* Narration sous forme de 3 colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Bloc 1 */}
                    <div className="p-6 rounded-2xl bg-white shadow-md transition hover:scale-105">
                        <div className="flex items-center gap-3 mb-4">
                            <Users size={28} />
                            <h3 className="text-xl font-bold">Une Demande Explosive</h3>
                        </div>
                        <p className="text-[#5D3010] text-sm leading-relaxed">
                            Depuis 2018, plus de{" "}
                            <span className="font-semibold">
                                500 000 demandes de financement
                            </span>{" "}
                            ont été soumises rien qu’à la DER/FJ au Sénégal.
                        </p>
                    </div>

                    {/* Bloc 2 */}
                    <div className="p-6 rounded-2xl bg-white shadow-md transition hover:scale-105">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle size={28} />
                            <h3 className="text-xl font-bold">
                                La Frustration des Entrepreneurs
                            </h3>
                        </div>
                        <p className="text-[#5D3010] text-sm leading-relaxed">
                            Un véritable{" "}
                            <span className="font-semibold">parcours du combattant</span>{" "}
                            : fragmentation des sources de financement, opacité des
                            processus et manque d’accompagnement.
                        </p>
                    </div>

                    {/* Bloc 3 */}
                    <div className="p-6 rounded-2xl bg-white shadow-md transition hover:scale-105">
                        <div className="flex items-center gap-3 mb-4">
                            <Briefcase size={28} />
                            <h3 className="text-xl font-bold">Le Défi des Investisseurs</h3>
                        </div>
                        <p className="text-[#5D3010] text-sm leading-relaxed">
                            Difficile d’identifier des{" "}
                            <span className="font-semibold">
                                projets sûrs, bancables et diversifiés
                            </span>{" "}
                            dans un flux massif de demandes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Styles Tailwind additionnels pour animations */}
            <style jsx>{`
                .animate-ping-slow {
                    animation: ping 6s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .animate-ping-slower {
                    animation: ping 10s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .animate-spin-slow {
                    animation: spin 60s linear infinite;
                }
            `}</style>
        </section>
    );
}
