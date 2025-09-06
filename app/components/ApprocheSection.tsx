"use client";

import { Brain, Shuffle, Users, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function ApprocheSection() {
    const features = [
        {
            icon: <Brain size={36} className="text-[#5D3010]" />,
            title: "Évaluation Initiale par IA",
            desc: "Un scoring intelligent qui analyse la solidité et le potentiel de chaque projet grâce à l’IA.",
        },
        {
            icon: <Shuffle size={36} className="text-[#5D3010]" />,
            title: "Matching Ciblé",
            desc: "Une mise en relation automatisée et efficace entre entrepreneurs et investisseurs qualifiés.",
        },
        {
            icon: <Users size={36} className="text-[#5D3010]" />,
            title: "L'Alliance du Digital et de l’Humain",
            desc: "Une approche hybride combinant l’efficacité digitale et l’accompagnement terrain par des experts.",
        },
        {
            icon: <Wallet size={36} className="text-[#5D3010]" />,
            title: "Des Solutions de Financement Adaptées",
            desc: "Sama Naffa, Nattal Ma, Sama Équipement : des mécanismes flexibles et inclusifs pour répondre à chaque besoin.",
        },
    ];

    return (
        <section className="relative py-20 px-6  bg-[#5B2E0C14]/80 text-[#5D3010]">
            <div className="container mx-auto max-w-6xl">
                {/* Titre */}
                <motion.h2
                    className="text-3xl md:text-5xl font-extrabold text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Plus qu’une <span className="text-[#5D3010]">plateforme</span>, une méthode.
                </motion.h2>

                {/* Grille de cartes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="relative group bg-white p-8 rounded-2xl border border-[#5D3010]/30 shadow-md hover:shadow-[#5D3010]/40 transition transform hover:-translate-y-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Glow subtil sur hover */}
                            <div className="absolute inset-0 rounded-2xl bg-[#5D3010] opacity-0 group-hover:opacity-10 blur-xl transition"></div>

                            {/* Icône */}
                            <div className="mb-6">{item.icon}</div>

                            {/* Titre */}
                            <h3 className="text-xl font-bold mb-4 text-[#5D3010]">{item.title}</h3>

                            {/* Description */}
                            <p className="text-sm text-[#5D3010]/90">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
