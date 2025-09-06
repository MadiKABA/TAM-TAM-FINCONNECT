"use client";

import { motion } from "framer-motion";

export default function ReservationSection() {
    return (
        <section
            id="inscription"
            className="relative py-24 px-6 bg-white text-[#5D3010]"
        >
            <div className="container mx-auto max-w-4xl text-center">
                {/* Titre accrocheur */}
                <motion.h2
                    className="text-3xl md:text-5xl font-extrabold mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Réservez dès maintenant votre place pour{" "}
                    <span className="text-[#5D3010]">TAM TAM FinConnect</span>
                </motion.h2>

                {/* Texte descriptif */}
                <motion.p
                    className="text-[#5D3010]/80 text-lg md:text-xl mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Les inscriptions sont ouvertes pour cet événement unique qui réunira
                    entrepreneurs, investisseurs et acteurs de la finance. Les places sont limitées !
                </motion.p>

                {/* CTA */}
                <motion.a
                    href="https://www.eventbrite.com/e/billets-lancement-tam-tam-finconnect-1601388448959"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 rounded-xl text-lg font-bold shadow-md transition transform hover:scale-105 bg-[#5D3010] text-white hover:bg-[#7A452B]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Réserver ma place
                </motion.a>
            </div>
        </section>
    );
}
