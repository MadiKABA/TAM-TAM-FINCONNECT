"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function PartenairesSection() {
  const partenaires = [
    "/logos/logo1.jpg",
    "/logos/logo2.jpg",
    "/logos/logo3.jpg",
    "/logos/logo4.jpg",
    "/logos/logo5.jpg",
    "/logos/logo6.jpg",
    "/logos/logo7.jpg",
  ];

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 5,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 3, spacing: 10 } },
      "(max-width: 640px)": { slides: { perView: 2, spacing: 8 } },
    },
  });

  const handlePrev = () => {
    if (slider.current) slider.current.prev();
  };

  const handleNext = () => {
    if (slider.current) slider.current.next();
  };

  return (
    <section className="relative py-20 px-6 bg-[#5B2E0C14]/50 text-[#5D3010] overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Soutenus par un{" "}
          <span className="text-[#5D3010]">Écosystème de Partenaires Stratégiques</span>
        </h2>
        <p className="text-[#5D3010]/80 max-w-3xl mx-auto mb-16">
          Nous collaborons avec les leaders de l’investissement, de l’accompagnement et de la finance pour construire un avenir entrepreneurial solide.
        </p>

        {/* Slider */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {partenaires.map((logo, idx) => (
              <div key={idx} className="keen-slider__slide flex items-center justify-center">
                <div className="w-28 h-16 relative">
                  <Image
                    src={logo}
                    alt={`Logo partenaire ${idx}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-[#5D3010] p-3 rounded-full shadow-lg transition"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-[#5D3010] p-3 rounded-full shadow-lg  transition"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
