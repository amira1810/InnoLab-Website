
"use client";

import { useEffect, useRef, useState } from "react";
import PackCard from "@/components/ui/PackCard";

const packs = [
  {
    id: 1,
    icon: "/kit1.png",
    title: "Formation + Kit",
    description:
      "Une formation complète accompagnée d'un kit robotique pour passer de la théorie à la pratique.",
    image: "/formkit.png",
    href: "/packs/formation-kit",
  },
  {
    id: 2,
    icon: "/kit2.png",
    title: "Livre + Kit",
    description:
      "Un livre pédagogique et un kit robotique pour apprendre à votre rythme et construire vos projets.",
    image: "/livkit.png",
    href: "/packs/livre-kit",
  },
];

export default function Packs() {
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
      id="packs"
      className="overflow-hidden bg-primary-blue px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div
        className={`mx-auto max-w-[1120px] transition-all duration-[1000ms] ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-16 opacity-0"
        }`}
      >
        {/* Titre décoratif */}
        <div className="flex justify-center">
          <div className="relative">
            <span className="inline-block -rotate-3 rounded-full bg-primary-yellow px-7 py-2.5 font-heading text-3xl font-extrabold text-white sm:px-9 sm:py-3 sm:text-4xl">
              Nos packs
            </span>

            {/* Décorations jaunes */}
            <span className="absolute -left-7 top-1/2 h-2 w-7 -rotate-[8deg] rounded-full bg-primary-yellow sm:-left-9" />
            <span className="absolute -left-6 top-[85%] h-2 w-7 -rotate-[35deg] rounded-full bg-primary-yellow sm:-left-8" />
            <span className="absolute -right-7 top-[15%] h-2 w-7 rotate-[-35deg] rounded-full bg-primary-yellow sm:-right-9" />
            <span className="absolute -right-8 top-[65%] h-2 w-7 rotate-[5deg] rounded-full bg-primary-yellow sm:-right-10" />
          </div>
        </div>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-[650px] text-center text-sm leading-relaxed text-white/80 sm:text-base lg:text-[17px]">
          Apprenez et mettez vos connaissances en pratique grâce à nos packs
          combinant contenus pédagogiques et kits robotiques.
        </p>

        {/* Cartes */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {packs.map((pack, index) => (
            <div
              key={pack.id}
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 180}ms` : "0ms",
              }}
            >
              <PackCard
                icon={pack.icon}
                title={pack.title}
                description={pack.description}
                image={pack.image}
                href={pack.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
