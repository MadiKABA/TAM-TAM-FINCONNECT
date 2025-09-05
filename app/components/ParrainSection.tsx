"use client";

import Image from "next/image";

export default function ParrainSection() {
    return (
        <section className="relative py-24 px-6 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/images/bg-parrain.jpg')" }}>
            {/* Overlay pour lisibilité */}
            <div className="absolute inset-0 bg-[#F5DEC4]/80"></div>

            {/* Motifs subtils */}
            <div className="absolute inset-0">
                <div className="absolute w-72 h-72 bg-white/10 rounded-full top-[-60px] left-[-40px] animate-ping-slow"></div>
                <div className="absolute w-48 h-48 bg-white/10 rounded-full bottom-[-50px] right-[-30px] animate-ping-slower"></div>
            </div>

            <div className="container relative z-10 mx-auto max-w-6xl">
                {/* Titre */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-[#5D3010]">
                    Présentation du Parrain
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Photo ou avatar du parrain */}
                    <div className="flex-shrink-0 w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-[#5D3010]">
                        <Image
                            src="/ndiaga_sarr.jpg" // Remplace par le vrai chemin
                            alt="Ndiaga SARR"
                            className="w-full h-full object-cover"
                            width={256}
                            height={256}
                        />
                    </div>

                    {/* Texte de présentation */}
                    <div className="text-[#5D3010] space-y-4">
                        <h3 className="text-2xl font-bold">Ndiaga SARR – Expert-Comptable, Directeur de l’I2GP</h3>
                        <p className="text-base leading-relaxed">
                            Expert-comptable diplômé, Ndiaga Sarr est Directeur Général de l’Institut Global Gouvernance et Performances (I2GP). Fondateur et ancien PDG de KPMG Sénégal pendant 19 ans, il a également dirigé la transposition des normes IFAC pour l’ONECCA.
                        </p>
                        <p className="text-base leading-relaxed">
                            Avec plus de 30 ans d’expérience, il a mené des missions d’audit, de conseil et d’organisation au Sénégal et à l’international (Mali, Guinée, Djibouti, etc.). Ses domaines d’expertise couvrent la gouvernance, la performance, l’audit, la formation et la rédaction de manuels de procédures.
                        </p>
                        <p className="text-base leading-relaxed">
                            Il a accompagné aussi bien le secteur privé, public, ONG que des institutions internationales (ONU, Banque mondiale, AFD, BAD, UE, etc.), dans des secteurs variés : mines, énergie, banques, BTP, agriculture, politiques publiques.
                        </p>
                        <p className="text-base leading-relaxed font-semibold">
                            Membre fondateur de l’AMCHAM et de plusieurs comités internationaux, il est Chevalier de l’Ordre national du Lion.
                        </p>
                    </div>
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
            `}</style>
        </section>
    );
}
