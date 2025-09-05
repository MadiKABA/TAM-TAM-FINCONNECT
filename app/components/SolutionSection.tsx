"use client";

import { useState } from "react";
import { Users, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SolutionSection() {
    const [activeTab, setActiveTab] = useState<"entrepreneurs" | "investisseurs">(
        "entrepreneurs"
    );

    return (
        <section className="relative py-20 px-6 bg-[#F5DEC4] text-[#4B2C20] overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                {/* Titre */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10">
                    La <span className="text-[#4B2C20]">Connexion Intelligente</span> entre Projets et Capitaux
                </h2>

                {/* Paragraphe */}
                <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-[#4B2C20]/80">
                    TAM TAM FINCONNECT est un{" "}
                    <span className="font-semibold">marché virtuel</span>{" "}
                    et un{" "}
                    <span className="font-semibold">
                        écosystème inclusif et durable
                    </span>{" "}
                    qui combine la puissance de l’IA et l’expertise humaine pour
                    rapprocher les porteurs de projets et les investisseurs.
                </p>

                {/* Tableau comparatif */}
                <div className="overflow-hidden rounded-2xl border border-[#4B2C20]/40 shadow-xl mb-16 bg-white/80 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#4B2C20]/30">
                        {/* Entrepreneurs */}
                        <div className="p-8 hover:bg-[#F0E0C8] transition">
                            <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-[#4B2C20]">
                                <Users className="text-[#4B2C20]" /> Pour les Entrepreneurs
                            </h3>
                            <ul className="space-y-2 text-sm text-[#4B2C20] list-none">
                                <li>Visibilité maximale auprès d’investisseurs qualifiés.</li>
                                <li>Gain de temps stratégique via un point de contact unique.</li>
                                <li>Crédibilité accrue grâce à un dossier scoré par l’IA.</li>
                                <li>Accompagnement d’experts à chaque étape clé.</li>
                                <li>Accès à des financements innovants (tontine digitale, crowdfunding...).</li>
                            </ul>
                        </div>

                        {/* Investisseurs */}
                        <div className="p-8 hover:bg-[#F0E0C8] transition">
                            <h3 className="flex items-center gap-2 text-xl font-bold mb-6 text-[#4B2C20]">
                                <Briefcase className="text-[#4B2C20]" /> Pour les Investisseurs
                            </h3>
                            <ul className="space-y-2 text-sm text-[#4B2C20] list-none">
                                <li>Accès exclusif à des projets pré-qualifiés et scorés.</li>
                                <li>Efficacité opérationnelle, réduction des coûts de sourcing.</li>
                                <li>Réduction du risque grâce à l’analyse IA et diagnostic projet.</li>
                                <li>Suivi de performance et reporting périodique.</li>
                                <li>Diversification sur des secteurs à fort potentiel.</li>
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
                                ? "bg-[#4B2C20] text-white shadow-lg"
                                : "bg-white border border-[#4B2C20] text-[#4B2C20] hover:bg-[#F0E0C8]"
                                }`}
                        >
                            Pour les Entrepreneurs
                        </button>
                        <button
                            onClick={() => setActiveTab("investisseurs")}
                            className={`px-6 py-3 rounded-full font-semibold transition ${activeTab === "investisseurs"
                                ? "bg-[#4B2C20] text-white shadow-lg"
                                : "bg-white border border-[#4B2C20] text-[#4B2C20] hover:bg-[#F0E0C8]"
                                }`}
                        >
                            Pour les Investisseurs
                        </button>
                    </div>

                    {/* Contenu onglets avec animation */}
                    <div className="max-w-3xl mx-auto text-left bg-white/80 p-8 rounded-2xl shadow-lg border border-[#4B2C20]/30 min-h-[180px]">
                        <AnimatePresence mode="wait">
                            {activeTab === "entrepreneurs" ? (
                                <motion.div
                                    key="entrepreneurs"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h4 className="text-xl font-bold mb-4 text-[#4B2C20]">
                                        Donnez à votre projet les moyens de sa réussite.
                                    </h4>
                                    <ul className="space-y-2 text-[#4B2C20] list-disc list-inside">
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
                                    <h4 className="text-xl font-bold mb-4 text-[#4B2C20]">
                                        Accédez à un flux d’opportunités qualifiées.
                                    </h4>
                                    <ul className="space-y-2 text-[#4B2C20] list-disc list-inside">
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
