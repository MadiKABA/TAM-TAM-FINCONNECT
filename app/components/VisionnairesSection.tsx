"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionnairesSection() {
    return (
        <section className="relative py-20 px-6 bg-[##5B2E0C14] text-[#5D3010] overflow-hidden">
            {/* Motifs subtils animés */}
            <div className="absolute inset-0">
                <div className="absolute w-72 h-72  bg-[#5D3010]/5 rounded-full top-[-50px] left-[-50px] animate-ping-slow"></div>
                <div className="absolute w-48 h-48  bg-[#5D3010]/5 rounded-full bottom-[-40px] right-[-30px] animate-ping-slower"></div>
                <div className="absolute w-96 h-96 border border-white/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
            </div>

            <div className="container relative z-10 mx-auto max-w-6xl">
                {/* Titre */}
                <motion.h2
                    className="text-3xl md:text-5xl font-extrabold text-center mb-16"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    À la <span className="text-[#5D3010]">Tête</span> de la Vision
                </motion.h2>

                {/* Profils */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Merry Diallo Niang */}
                    <motion.div
                        className="p-8 bg-white rounded-2xl border border-[#5D3010]/40 shadow-md hover:shadow-[#5D3010]/40 transition"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 mb-6 relative rounded-full overflow-hidden border-4 border-[#5D3010] shadow-md group">
                                <Image
                                    src="/merry.jpg"
                                    alt="Merry Diallo Niang"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[#5D3010] pb-5">
                                Merry Diallo Niang
                            </h3>
                            <p className="text-sm uppercase tracking-wide mb-4 text-neutral-500">
                                Co-Fondatrice & Administratrice Générale
                            </p>
                            <p className="text-sm leading-relaxed text-[#5D3010]/90">
                                Experte-comptable avec plus de{" "}
                                <span className="text-[#8B5E3C]">17 ans d’expérience</span>,
                                spécialiste en stratégie financière et opérationnelle.
                            </p>
                        </div>
                    </motion.div>

                    {/* Joel Rodrigue Mbengue */}
                    <motion.div
                        className="p-8 bg-white rounded-2xl border border-[#5D3010]/40 shadow-md hover:shadow-[#5D3010]/40 transition"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 mb-6 relative rounded-full overflow-hidden border-4 border-[#5D3010] shadow-md group">
                                <Image
                                    src="/joel.jpg"
                                    alt="Joel Rodrigue Mbengue"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[#5D3010] pb-5">
                                Joel Rodrigue Mbengue
                            </h3>
                            <p className="text-sm uppercase tracking-wide mb-4 text-neutral-500">
                                Co-Fondateur & Administrateur Général Adjoint
                            </p>
                            <p className="text-sm leading-relaxed text-[#5D3010]/90">
                                Ingénieur informatique avec plus de{" "}
                                <span className="text-[#8B5E3C]">10 ans d’expérience</span>,
                                concepteur de la plateforme et expert en intelligence
                                artificielle.
                            </p>
                        </div>
                    </motion.div>
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
