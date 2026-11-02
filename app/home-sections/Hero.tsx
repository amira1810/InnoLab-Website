
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const words = ["Learn", "Build", "Create", "Innovate"];
const title = "La plateforme éducative dédiée à la robotique et aux STEM";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedTitle, setTypedTitle] = useState("");

  // Animation des mots devant le robot
  useEffect(() => {
    const currentWord = words[wordIndex];
    let delay = isDeleting ? 65 : 120;

    if (!isDeleting && displayText === currentWord) {
      delay = 1100;
    } else if (isDeleting && displayText === "") {
      delay = 350;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  // Animation du titre principal
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;
      setTypedTitle(title.substring(0, index));

      if (index >= title.length) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 px-5 py-7 sm:px-8 sm:py-9 md:grid-cols-2 md:gap-8 md:py-10 lg:gap-10 lg:px-10 lg:py-12">

        {/* Partie gauche : texte */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-primary-blue sm:text-5xl lg:text-[42px] xl:text-5xl">
            {typedTitle}
            <span className="hero-title-cursor">|</span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/75 sm:text-base">
            Apprenez, expérimentez et construisez vos propres projets
            robotiques avec InnoLab, l’univers éducatif d’Innobot.
          </p>

          {/* Boutons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#formations"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-yellow bg-primary-yellow px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary-yellow"
            >
              Commencer à apprendre
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#apropos"
              className="inline-flex items-center justify-center rounded-full border border-primary-blue px-6 py-3 text-sm font-semibold text-primary-blue transition-colors duration-300 hover:bg-primary-blue hover:text-white"
            >
              Explorer InnoLab
            </a>
          </div>

          {/* Catégories */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:justify-start">
            <div className="hero-category hero-category-1 flex items-center gap-2">
              <Image src="/formations-icone.png" alt="Formations" width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="text-sm font-medium text-foreground">Formations</span>
            </div>

            <span className="hidden h-2 w-2 rounded-full bg-primary-yellow sm:block" />

            <div className="hero-category hero-category-2 flex items-center gap-2">
              <Image src="/livres-icone.png" alt="Livres et ressources" width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="text-sm font-medium text-foreground">Livres & Ressources</span>
            </div>

            <span className="hidden h-2 w-2 rounded-full bg-primary-yellow sm:block" />

            <div className="hero-category hero-category-3 flex items-center gap-2">
              <Image src="/kits-icone.png" alt="Kits robotiques" width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="text-sm font-medium text-foreground">Kits robotiques</span>
            </div>
          </div>
        </div>

        {/* Partie droite : robot et animations */}
        <div className="hero-visual relative mx-auto flex w-full max-w-md items-center justify-center md:max-w-none">

          {/* Texte animé devant le doigt */}
          <div
            className="hero-typing absolute left-0 top-[30%] z-20 w-[145px] text-center sm:w-[170px]"
            aria-live="polite"
          >
            <span className="hero-handwriting">{displayText}</span>
            <span className="hero-cursor">|</span>
          </div>

          {/* Robot */}
          <div className="hero-robot relative z-10 w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[450px]">
            <Image
              src="/robot hero.png"
              alt="Robot éducatif Innobot"
              width={600}
              height={600}
              priority
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>

          {/* Sparkles */}
          <div className="hero-sparkles" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, index) => (
              <span
                key={index}
                className={`sparkle sparkle-${index + 1}`}
              />
            ))}
          </div>

          {/* Ombre */}
          <div className="hero-robot-shadow absolute bottom-[2%] left-1/2 h-5 w-[48%] -translate-x-1/2 rounded-[50%] bg-black/20 blur-xl" />
        </div>
      </div>
    </section>
  );
}
