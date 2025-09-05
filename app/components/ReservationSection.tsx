"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ReservationSection() {
    const [role, setRole] = useState("entrepreneur");

    return (
        <section
            id="inscription"
            className="relative py-24 px-6 bg-gradient-to-b from-[#F5DEC4] via-[#F5DEC4] to-[#F5DEC4] text-[#5D3010] overflow-hidden"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] bg-[#5D3010]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Bloc gauche : description */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                        Prêts à <span className="text-[#5D3010]">Bâtir l’Avenir</span> ? Réservez votre place.
                    </h2>
                    <p className="text-[#5D3010]/80 text-lg md:text-xl mb-8 leading-relaxed">
                        Les places sont limitées. Assurez votre participation à cet événement
                        fondateur pour l’entrepreneuriat au Sénégal et en Afrique de l’Ouest.
                        Que vous soyez un{" "}
                        <span className="font-semibold">entrepreneur ambitieux</span>{" "}
                        ou un{" "}
                        <span className="font-semibold">investisseur visionnaire</span>,
                        votre avenir commence le 24 septembre.
                    </p>
                </motion.div>

                {/* Bloc droit : formulaire */}
                <motion.div
                    className="bg-white/10 border border-[#5D3010]/40 rounded-2xl p-8 shadow-lg"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <form className="space-y-6">
                        {/* Nom */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Nom complet</label>
                            <input
                                type="text"
                                placeholder="Votre nom"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-[#5D3010]/50 text-[#5D3010] focus:ring-2 focus:ring-[#5D3010] outline-none"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-[#5D3010]/50 text-[#5D3010] focus:ring-2 focus:ring-[#5D3010] outline-none"
                                required
                            />
                        </div>

                        {/* Téléphone */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Téléphone</label>
                            <input
                                type="tel"
                                placeholder="Votre numéro"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-[#5D3010]/50 text-[#5D3010] focus:ring-2 focus:ring-[#5D3010] outline-none"
                                required
                            />
                        </div>

                        {/* Rôle */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Je m’inscris en tant que</label>
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setRole("entrepreneur")}
                                    className={`flex-1 px-4 py-3 rounded-lg font-semibold transition ${
                                        role === "entrepreneur"
                                            ? "bg-[#5D3010] text-white"
                                            : "bg-white/20 border border-[#5D3010]/50 text-[#5D3010] hover:bg-[#5D3010]/20"
                                    }`}
                                >
                                    Entrepreneur
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setRole("investisseur")}
                                    className={`flex-1 px-4 py-3 rounded-lg font-semibold transition ${
                                        role === "investisseur"
                                            ? "bg-[#5D3010] text-white"
                                            : "bg-white/20 border border-[#5D3010]/50 text-[#5D3010] hover:bg-[#5D3010]/20"
                                    }`}
                                >
                                    Investisseur
                                </button>
                            </div>
                        </div>

                        {/* CTA Submit */}
                        <button
                            type="submit"
                            className="w-full px-6 py-4 rounded-xl text-lg font-bold shadow-lg transition transform hover:scale-105 bg-[#5D3010] text-white hover:bg-[#7A452B]"
                        >
                            Valider mon inscription
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
