"use client";

import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Globe } from "lucide-react";
import Image from "next/image";

export default function FooterSection() {
    return (
        <footer className="bg-[#0D0D0D] text-white pt-16 pb-8 relative">
            <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Bloc Logo + Présentation */}
                <div>
                    <Image
                        src="/logo-tamtam.png" // 👉 remplace par ton vrai chemin logo
                        alt="TAM TAM FINCONNECT Logo"
                        width={160}
                        height={60}
                        className="mb-4"
                    />
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        La plateforme intelligente qui connecte les projets ambitieux et les capitaux visionnaires.
                    </p>
                </div>

                {/* Bloc Coordonnées */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#C9A646]">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <MapPin size={16} className="text-[#C9A646]" />
                            Résidence Evoque, Bourguiba, Dakar
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} className="text-[#C9A646]" />
                            <a href="mailto:info@tamtamfinconnect.com" className="hover:text-[#C9A646]">
                                info@tamtamfinconnect.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} className="text-[#C9A646]" />
                            <a href="mailto:projets@tamtamfinconnect.com" className="hover:text-[#C9A646]">
                                projets@tamtamfinconnect.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Globe size={16} className="text-[#C9A646]" />
                            <a href="https://www.tamtamfinconnect.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A646]">
                                www.tamtamfinconnect.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Bloc Navigation */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#C9A646]">Navigation</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#evenement" className="hover:text-[#C9A646]">Événement</a></li>
                        <li><a href="#defi" className="hover:text-[#C9A646]">Le Défi</a></li>
                        <li><a href="#solution" className="hover:text-[#C9A646]">Notre Solution</a></li>
                        <li><a href="#partenaires" className="hover:text-[#C9A646]">Partenaires</a></li>
                        <li><a href="#inscription" className="hover:text-[#C9A646]">Réservation</a></li>
                        <li><a href="#mentions" className="hover:text-[#C9A646]">Mentions légales</a></li>
                    </ul>
                </div>

                {/* Bloc Réseaux Sociaux */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#C9A646]">Suivez-nous</h4>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 rounded-full border border-[#C9A646]/50 hover:bg-[#C9A646]/20 transition">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="p-2 rounded-full border border-[#C9A646]/50 hover:bg-[#C9A646]/20 transition">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="p-2 rounded-full border border-[#C9A646]/50 hover:bg-[#C9A646]/20 transition">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="p-2 rounded-full border border-[#C9A646]/50 hover:bg-[#C9A646]/20 transition">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Ligne séparatrice */}
            <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
                © 2025 <span className="text-[#C9A646] font-semibold">TAM TAM FINCONNECT SA</span>.
                Tous droits réservés. RCCM SN-DKR2025B7337
            </div>
        </footer>
    );
}
