"use client";

import { Facebook, Linkedin, Instagram, Mail, MapPin, Globe } from "lucide-react";
import Image from "next/image";

export default function FooterSection() {
    return (
        <footer className="bg-[#0D0D0D] text-white pt-16 pb-8 relative">
            <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Bloc Logo + Présentation */}
                <div>
                    <Image
                        src="/logo-tamtam.png"
                        alt="TAM TAM FINCONNECT Logo"
                        width={160}
                        height={60}
                        className="mb-4"
                    />
                    <p className="text-neutral-300 text-sm leading-relaxed">
                        La plateforme intelligente qui connecte les projets ambitieux et les capitaux visionnaires.
                    </p>
                </div>

                {/* Bloc Coordonnées */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#A66E4A]">Contact</h4>
                    <ul className="space-y-3 text-sm text-neutral-200">
                        <li className="flex items-center gap-2">
                            <MapPin size={16} className="text-[#A66E4A]" />
                            Résidence Evoque, Bourguiba, Dakar
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} className="text-[#A66E4A]" />
                            <a href="mailto:info@tamtamfinconnect.com" className="hover:text-[#A66E4A] transition">
                                info@tamtamfinconnect.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} className="text-[#A66E4A]" />
                            <a href="mailto:projets@tamtamfinconnect.com" className="hover:text-[#A66E4A] transition">
                                projets@tamtamfinconnect.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Globe size={16} className="text-[#A66E4A]" />
                            <a href="https://www.tamtamfinconnect.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#A66E4A] transition">
                                www.tamtamfinconnect.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Bloc Navigation */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#A66E4A]">Navigation</h4>
                    <ul className="space-y-3 text-sm text-neutral-200">
                        <li><a href="#evenement" className="hover:text-[#A66E4A] transition">Événement</a></li>
                        <li><a href="#defi" className="hover:text-[#A66E4A] transition">Le Défi</a></li>
                        <li><a href="#solution" className="hover:text-[#A66E4A] transition">Notre Solution</a></li>
                        <li><a href="#partenaires" className="hover:text-[#A66E4A] transition">Partenaires</a></li>
                        <li><a href="#inscription" className="hover:text-[#A66E4A] transition">Réservation</a></li>
                        <li><a href="#mentions" className="hover:text-[#A66E4A] transition">Mentions légales</a></li>
                    </ul>
                </div>

                {/* Bloc Réseaux Sociaux */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-[#A66E4A]">Suivez-nous</h4>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/share/17AEFrJ5U3/?mibextid=wwXIfr" className="p-2 rounded-full border border-neutral-600 hover:bg-[#A66E4A]/20 transition">
                            <Facebook size={18} className="text-white" />
                        </a>

                        <a href="https://www.linkedin.com/company/tamtam-finconnect/" className="p-2 rounded-full border border-neutral-600 hover:bg-[#A66E4A]/20 transition">
                            <Linkedin size={18} className="text-white" />
                        </a>
                        <a href="https://www.instagram.com/tamtamfinconnect?igsh=ZjBpdnZjaXA3emth" className="p-2 rounded-full border border-neutral-600 hover:bg-[#A66E4A]/20 transition">
                            <Instagram size={18} className="text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Ligne séparatrice */}
            <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
                © 2025 <span className="text-[#A66E4A] font-semibold">TAM TAM FINCONNECT SA</span>.
                Tous droits réservés. RCCM SN-DKR2025B7337
            </div>
        </footer>
    );
}
