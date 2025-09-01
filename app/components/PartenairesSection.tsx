"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PartenairesSection() {
    // Définition des groupes de logos
    const partenaires = [
        {
            categorie: "Structures d’Appui & Étatiques",
            logos: [
                "/logos/adepme.png",
                "/logos/der.png",
                "/logos/fonsis.png",
                "/logos/anpej.png",
                "/logos/fongip.png",
            ],
        },
        {
            categorie: "Fonds d’Investissement & Capital-Risque",
            logos: [
                "/logos/teranga.png",
                "/logos/ip.png",
                "/logos/partech.png",
                "/logos/proparco.png",
                "/logos/africinvest.png",
                "/logos/kickstartup.png",
            ],
        },
        {
            categorie: "Banques & Institutions de Microfinance",
            logos: [
                "/logos/cbao.png",
                "/logos/ecobank.png",
                "/logos/societe-generale.png",
                "/logos/baobab.png",
                "/logos/cofina.png",
            ],
        },
    ];

    return (
        <section className="relative py-20 px-6 bg-[#0D0D0D] text-white">
            <div className="container mx-auto max-w-6xl text-center">
                {/* Titre */}
                <motion.h2
                    className="text-3xl md:text-5xl font-extrabold mb-6"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Soutenus par un{" "}
                    <span className="text-[#C9A646]">Écosystème de Partenaires Stratégiques</span>
                </motion.h2>

                {/* Sous-titre */}
                <motion.p
                    className="text-neutral-300 max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Nous collaborons avec les leaders de l’investissement, de l’accompagnement et de la
                    finance pour construire un avenir entrepreneurial solide.
                </motion.p>

                {/* Mur de logos */}
                <div className="space-y-16">
                    {partenaires.map((bloc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-bold text-[#C9A646] mb-8">{bloc.categorie}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                                {bloc.logos.map((logo, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center justify-center p-4 bg-[#1A1A1A] rounded-xl border border-[#C9A646]/20 hover:border-[#C9A646]/60 transition group"
                                        whileHover={{ scale: 1.08 }}
                                    >
                                        <Image
                                            src={logo}
                                            alt={`Logo ${bloc.categorie} ${i}`}
                                            width={120}
                                            height={60}
                                            className="object-contain grayscale group-hover:grayscale-0 transition"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
