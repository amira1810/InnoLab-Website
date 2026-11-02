"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const audiences = [
  {
    id: 1,
    image: "/qui1.png",
    title: "Professeurs & écoles",
    description:
      "Des ateliers de robotique directement dans votre établissement, conçus pour faire découvrir aux élèves la robotique.",
  },
  {
    id: 2,
    image: "/qui2.png",
    title: "Enfants",
    description:
      "Une découverte ludique de la robotique pour apprendre, expérimenter et créer tout en s'amusant.",
  },
  {
    id: 3,
    image: "/qui3.png",
    title: "Étudiants",
    description:
      "Des formations pratiques pour développer vos compétences en robotique, programmation et électronique.",
  },
];

export default function Audience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Animation au scroll
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="audience"
      className="overflow-hidden bg-background px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div
        className={`mx-auto max-w-[1050px] transition-all duration-[1000ms] ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-16 opacity-0"
        }`}
      >
        {/* En-tête */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary-blue sm:text-4xl lg:text-[42px]">
            Pour qui ?
          </h2>

          <p className="mx-auto mt-2 max-w-[550px] text-sm leading-relaxed text-[#7895A8] sm:text-base lg:text-[18px]">
            Des parcours pensés pour apprendre la robotique
            <br className="hidden sm:block" /> à chaque âge et chaque niveau.
          </p>
        </div>

        {/* Cartes */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {audiences.map((audience, index) => (
            <article
              key={audience.id}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
              className={`flex flex-col rounded-[25px] border border-[#EEECE8] bg-white p-5 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(11,45,91,0.06)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Illustration */}
              <div className="relative mx-auto h-[185px] w-full">
                <Image
                  src={audience.image}
                  alt={audience.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Texte */}
              <div className="mt-2">
                <h3 className="font-heading text-[16px] font-bold leading-snug text-primary-blue sm:text-[17px]">
                  {audience.title}
                </h3>

                <p className="mt-1 text-[12px] leading-[1.7] text-[#34445D] sm:text-[12.5px]">
                  {audience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}