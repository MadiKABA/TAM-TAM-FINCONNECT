"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionnairesSection() {
    return (
        <section className="relative py-20 px-6 bg-black text-white">
            <div className="container mx-auto max-w-6xl">
                {/* Titre */}
                <motion.h2
                    className="text-3xl md:text-5xl font-extrabold text-center mb-16"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    À la <span className="text-[#C9A646]">Tête</span> de la Vision
                </motion.h2>

                {/* Profils */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Merry Diallo Niang */}
                    <motion.div
                        className="p-8 bg-black rounded-2xl border border-[#C9A646]/40 shadow-lg hover:shadow-[#C9A646]/40 transition"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 mb-6 relative rounded-full overflow-hidden border-4 border-[#C9A646] shadow-lg group">
                                <Image
                                    src="/merry.jpg"
                                    alt="Merry Diallo Niang"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[#C9A646] pb-5">
                                Merry Diallo Niang
                            </h3>
                            <p className="text-sm uppercase tracking-wide mb-4 text-neutral-400">
                                Co-Fondatrice & Administratrice Générale
                            </p>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Experte-comptable avec plus de{" "}
                                <span className="text-[#F5E6D3]">17 ans d’expérience</span>,
                                spécialiste en stratégie financière et opérationnelle.
                            </p>
                        </div>
                    </motion.div>

                    {/* Joel Rodrigue Mbengue */}
                    <motion.div
                        className="p-8 bg-black rounded-2xl border border-[#C9A646]/40 shadow-lg hover:shadow-[#C9A646]/40 transition"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 mb-6 relative rounded-full overflow-hidden border-4 border-[#C9A646] shadow-lg group">
                                <Image
                                    src="/joel.jpg"
                                    alt="Joel Rodrigue Mbengue"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[#C9A646] pb-5">
                                Joel Rodrigue Mbengue
                            </h3>
                            <p className="text-sm uppercase tracking-wide mb-4 text-neutral-400">
                                Co-Fondateur & Administrateur Général Adjoint
                            </p>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Ingénieur informatique avec plus de{" "}
                                <span className="text-[#F5E6D3]">10 ans d’expérience</span>,
                                concepteur de la plateforme et expert en intelligence
                                artificielle.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
