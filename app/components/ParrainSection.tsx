"use client";

import Image from "next/image";

export default function ParrainSection() {
    return (
        <section className="relative py-24 px-6 bg-[#F9F9F9] overflow-hidden">
            {/* Motifs subtils */}
            <div className="absolute inset-0 opacity-[0.05]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 200 200"
                    className="text-[#5D3010]"
                >
                    <defs>
                        <pattern
                            id="grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto max-w-6xl">
                {/* Titre */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-[#5D3010]">
                    Sous le Haut Parrainage de{" "}
                    <span className="text-[#8B5E3C]">Ndiaga SARR</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Photo du parrain */}
                    <div className="relative group flex-shrink-0 w-64 h-64">
                        <div className="absolute inset-0 rounded-full bg-[#5D3010]/10 blur-3xl group-hover:blur-4xl transition"></div>
                        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-[#5D3010]/60 relative z-10">
                            <Image
                                src="/ndiaga_sarr.jpg"
                                alt="Ndiaga SARR"
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                width={256}
                                height={256}
                            />
                        </div>
                    </div>

                    {/* Texte de présentation */}
                    <div className="text-[#333] space-y-4">
                        <h3 className="text-2xl font-bold text-[#5D3010]">
                           Expert-Comptable, Directeur de l’I2GP
                        </h3>
                        <p className="text-base leading-relaxed">
                            Expert-comptable diplômé, Ndiaga Sarr est Directeur Général de l’Institut Global Gouvernance et Performances (I2GP).
                            Fondateur et ancien PDG de KPMG Sénégal pendant 19 ans, il a également dirigé la transposition des normes IFAC pour l’ONECCA.
                        </p>
                        <p className="text-base leading-relaxed">
                            Avec plus de 30 ans d’expérience, il a mené des missions d’audit, de conseil et d’organisation au Sénégal et à l’international (Mali, Guinée, Djibouti, etc.).
                            Ses domaines d’expertise couvrent la gouvernance, la performance, l’audit, la formation et la rédaction de manuels de procédures.
                        </p>
                        <p className="text-base leading-relaxed">
                            Il a accompagné aussi bien le secteur privé, public, ONG que des institutions internationales (ONU, Banque mondiale, AFD, BAD, UE, etc.),
                            dans des secteurs variés : mines, énergie, banques, BTP, agriculture, politiques publiques.
                        </p>
                        <p className="text-base leading-relaxed font-semibold italic border-l-4 border-[#8B5E3C] pl-4 text-[#5D3010]">
                            « Le développement durable repose sur la gouvernance, la transparence et l’excellence collective. »
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
