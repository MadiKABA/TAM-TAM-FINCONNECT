"use client";

import { useState } from "react";
import { Users, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SolutionSection() {
    const [activeTab, setActiveTab] = useState<"entrepreneurs" | "investisseurs">(
        "entrepreneurs"
    );

    return (
        <section className="relative py-20 px-6 bg-gradient-to-r from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] text-white">
            <div className="container mx-auto max-w-6xl">
                {/* Titre */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10">
                    La <span className="text-[#C9A646]">Connexion Intelligente</span> entre Projets et Capitaux
                </h2>

                {/* Paragraphe */}
                <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-neutral-300">
                    TAM TAM FINCONNECT est un{" "}
                    <span className="font-semibold text-[#C9A646]">marché virtuel</span>{" "}
                    et un{" "}
                    <span className="font-semibold text-[#C9A646]">
                        écosystème inclusif et durable
                    </span>{" "}
                    qui combine la puissance de l’IA et l’expertise humaine pour
                    rapprocher les porteurs de projets et les investisseurs.
                </p>

                {/* Tableau comparatif */}
                <div className="overflow-hidden rounded-2xl border border-[#C9A646]/40 shadow-xl mb-16 bg-[#111111]/60 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#C9A646]/30">
                        {/* Entrepreneurs */}
                        <div className="p-8 hover:bg-[#1F1F1F] transition">
                            <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-[#C9A646]">
                                <Users className="text-[#C9A646]" /> Pour les Entrepreneurs
                            </h3>
                            <ul className="space-y-4 text-sm text-neutral-300">
                                <li>✅ Visibilité maximale auprès d’investisseurs qualifiés.</li>
                                <li>✅ Gain de temps stratégique via un point de contact unique.</li>
                                <li>✅ Crédibilité accrue grâce à un dossier scoré par l’IA.</li>
                                <li>✅ Accompagnement d’experts à chaque étape clé.</li>
                                <li>✅ Accès à des financements innovants (tontine digitale, crowdfunding...).</li>
                            </ul>
                        </div>

                        {/* Investisseurs */}
                        <div className="p-8 hover:bg-[#1F1F1F] transition">
                            <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-[#C9A646]">
                                <Briefcase className="text-[#C9A646]" /> Pour les Investisseurs
                            </h3>
                            <ul className="space-y-4 text-sm text-neutral-300">
                                <li>✅ Accès exclusif à des projets pré-qualifiés et scorés.</li>
                                <li>✅ Efficacité opérationnelle, réduction des coûts de sourcing.</li>
                                <li>✅ Réduction du risque grâce à l’analyse IA et diagnostic projet.</li>
                                <li>✅ Suivi de performance et reporting périodique.</li>
                                <li>✅ Diversification sur des secteurs à fort potentiel.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Onglets interactifs */}
                <div className="text-center">
                    {/* Switcher */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => setActiveTab("entrepreneurs")}
                            className={`px-6 py-3 rounded-full font-semibold transition ${activeTab === "entrepreneurs"
                                    ? "bg-[#C9A646] text-black shadow-lg"
                                    : "bg-[#1F1F1F] border border-[#C9A646] text-white hover:bg-[#2A2A2A]"
                                }`}
                        >
                            Pour les Entrepreneurs
                        </button>
                        <button
                            onClick={() => setActiveTab("investisseurs")}
                            className={`px-6 py-3 rounded-full font-semibold transition ${activeTab === "investisseurs"
                                    ? "bg-[#C9A646] text-black shadow-lg"
                                    : "bg-[#1F1F1F] border border-[#C9A646] text-white hover:bg-[#2A2A2A]"
                                }`}
                        >
                            Pour les Investisseurs
                        </button>
                    </div>

                    {/* Contenu onglets avec animation */}
                    <div className="max-w-3xl mx-auto text-left bg-[#1A1A1A]/80 p-8 rounded-2xl shadow-lg border border-[#C9A646]/30 min-h-[180px]">
                        <AnimatePresence mode="wait">
                            {activeTab === "entrepreneurs" ? (
                                <motion.div
                                    key="entrepreneurs"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h4 className="text-xl font-bold mb-4 text-[#C9A646]">
                                        Donnez à votre projet les moyens de sa réussite.
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-300">
                                        <li>Diagnostic intelligent par IA.</li>
                                        <li>Accompagnement 360° par des experts.</li>
                                        <li>Accès simplifié et rapide aux financements.</li>
                                    </ul>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="investisseurs"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h4 className="text-xl font-bold mb-4 text-[#C9A646]">
                                        Accédez à un flux d’opportunités qualifiées.
                                    </h4>
                                    <ul className="list-disc list-inside space-y-2 text-neutral-300">
                                        <li>Deal Flow qualifié et scoré par IA.</li>
                                        <li>Optimisation de la due diligence.</li>
                                        <li>Portefeuille diversifié et à impact.</li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
