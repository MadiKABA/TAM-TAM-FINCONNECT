"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Globe } from "lucide-react";
import Image from "next/image";

export default function FooterSection() {
    return (
        <footer className="relative pt-16 pb-8 text-white overflow-hidden bg-gradient-to-t from-[#926854]/90 via-[#926854]/90 to-[#926854]">
            {/* Ligne décorative animée */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A66E4A]/50 to-transparent opacity-60">
                <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>

            {/* Contenu du footer */}
            <div className="relative z-10 container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Bloc Logo + Présentation */}
                <div className="relative">
                    <div className="mb-4 p-2 rounded-lg bg-white/5 backdrop-blur-sm w-fit">
                        <Image src="/logo-tamtam.png" alt="TAM TAM FINCONNECT Logo" width={160} height={60} />
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                        La plateforme intelligente qui connecte les projets ambitieux et les capitaux visionnaires.
                    </p>
                    <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-transparent"></div>

                </div>

                {/* Bloc Coordonnées */}
                <div className="relative">
                    <h4 className="text-lg font-semibold mb-4 text-white] relative">
                        Contact
                        <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-transparent"></div>
                    </h4>
                    <ul className="space-y-3 text-sm text-neutral-200">
                        <li className="flex items-center gap-2">
                            <MapPin size={16} className="text-white" />
                            <span>Résidence Evoque, Bourguiba, Dakar</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} className="text-white" />
                            <a href="mailto:info@tamtamfinconnect.com">info@tamtamfinconnect.com</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Globe size={16} className="text-white" />
                            <a href="https://www.tamtamfinconnect.com" target="_blank" rel="noopener noreferrer">www.tamtamfinconnect.com</a>
                        </li>
                    </ul>
                </div>

                {/* Bloc Navigation */}
                <div className="relative">
                    <h4 className="text-lg font-semibold mb-4 text-white relative">
                        Navigation
                        <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-transparent"></div>
                    </h4>
                    <ul className="space-y-3 text-sm text-neutral-200">
                        <li><a href="#evenement" className="hover:text-[#A66E4A]">Événement</a></li>
                        <li><a href="#defi" className="hover:text-[#A66E4A]">Le Défi</a></li>
                        <li><a href="#solution" className="hover:text-[#A66E4A]">Notre Solution</a></li>
                        <li><a href="#partenaires" className="hover:text-[#A66E4A]">Partenaires</a></li>
                        <li><a href="#inscription" className="hover:text-[#A66E4A]">Réservation</a></li>
                        <li><a href="#mentions" className="hover:text-[#A66E4A]">Mentions légales</a></li>
                    </ul>
                </div>

                {/* Bloc Réseaux Sociaux */}
                <div className="relative">
                    <h4 className="text-lg font-semibold mb-4 text-white relative">
                        Suivez-nous
                        <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-transparent"></div>
                    </h4>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/share/17AEFrJ5U3/?mibextid=wwXIfr" className="group relative p-3 rounded-full border border-neutral-600/50 hover:border-[#A66E4A]/50 transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-[#A66E4A]/10 hover:scale-110">
                            <Facebook size={18} className="text-white group-hover:text-[#A66E4A] transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/company/tamtam-finconnect/" className="group relative p-3 rounded-full border border-neutral-600/50 hover:border-[#A66E4A]/50 transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-[#A66E4A]/10 hover:scale-110">
                            <Linkedin size={18} className="text-white group-hover:text-[#A66E4A] transition-colors" />
                        </a>
                        <a href="https://www.instagram.com/tamtamfinconnect?igsh=ZjBpdnZjaXA3emth" className="group relative p-3 rounded-full border border-neutral-600/50 hover:border-[#A66E4A]/50 transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-[#A66E4A]/10 hover:scale-110">
                            <Instagram size={18} className="text-white group-hover:text-[#A66E4A] transition-colors" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 text-center text-sm text-neutral-100">
                &copy; {new Date().getFullYear()} TAM TAM FINCONNECT. Tous droits réservés.
            </div>
        </footer>
    );
}
