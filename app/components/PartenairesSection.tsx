"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PartenairesSection() {
    const partenaires = [
        {
            logos: [
                "/logos/logo1.jpg",
                "/logos/logo2.jpg",
                "/logos/logo3.jpg",
                "/logos/logo4.jpg",
                "/logos/logo5.jpg",
                "/logos/logo6.jpg",
            ],
        },
    ];

    return (
        <section className="relative py-20 px-6 bg-[#F5DEC4]/80 text-[#5D3010] overflow-hidden">
            <div className="container relative z-10 mx-auto max-w-6xl text-center">
                {/* Titre */}
                <motion.h2
                    className="text-3xl md:text-5xl font-extrabold mb-6"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Soutenus par un{" "}
                    <span className="text-[#5D3010]">Écosystème de Partenaires Stratégiques</span>
                </motion.h2>

                {/* Sous-titre */}
                <motion.p
                    className="text-[#5D3010]/80 max-w-3xl mx-auto mb-16"
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
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                                {bloc.logos.map((logo, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center justify-center p-4 bg-white rounded-xl border border-[#5D3010]/20 hover:border-[#5D3010]/60 transition group"
                                        whileHover={{ scale: 1.08 }}
                                    >
                                        <div className="w-28 h-16 relative">
                                            <Image
                                                src={logo}
                                                alt={`Logo partenaire ${i}`}
                                                fill
                                                className="object-contain grayscale group-hover:grayscale-0 transition"
                                            />
                                        </div>
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
