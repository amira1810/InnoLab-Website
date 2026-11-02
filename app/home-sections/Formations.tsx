"use client";

import { useEffect, useRef, useState } from "react";
import CourseCard from "@/components/ui/CourseCard";

type Course = {
  id: number;
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: string;
  format: "En ligne" | "Présentiel";
  href: string;
};

const courses: Course[] = [
  {
    id: 1,
    image: "/formation-arduino.png",
    tags: ["En ligne", "Débutant", "Adultes"],
    title: "Les fondamentaux d'Arduino et de l'électronique",
    description:
      "Découvrez les bases de la robotique, apprenez à programmer et donnez vie à vos propres projets.",
    price: "12 000 DZD",
    format: "En ligne",
    href: "/formations/arduino",
  },
  {
    id: 2,
    image: "/formation-arduino.png",
    tags: ["En ligne", "Débutant", "Adultes"],
    title: "Les fondamentaux d'Arduino et de l'électronique",
    description:
      "Découvrez les bases de la robotique, apprenez à programmer et donnez vie à vos propres projets.",
    price: "12 000 DZD",
    format: "En ligne",
    href: "/formations/arduino",
  },
  {
    id: 3,
    image: "/formation-arduino.png",
    tags: ["Présentiel", "Débutant", "Enfants"],
    title: "Les fondamentaux d'Arduino et de l'électronique",
    description:
      "Découvrez les bases de la robotique, apprenez à programmer et donnez vie à vos propres projets.",
    price: "12 000 DZD",
    format: "Présentiel",
    href: "/formations/arduino",
  },
];

const filters = ["Tout", "Présentiel", "En ligne"] as const;

export default function Formations() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("Tout");

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

  // Filtrage des formations
  const filteredCourses = courses.filter((course) => {
    if (activeFilter === "Tout") return true;

    return course.format === activeFilter;
  });

  return (
    <section
      ref={sectionRef}
      id="formations"
      className="overflow-hidden bg-background px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
    >
      <div
        className={`mx-auto max-w-[1200px] transition-all duration-[1000ms] ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-16 opacity-0"
        }`}
      >
        {/* En-tête */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary-blue sm:text-4xl lg:text-[42px]">
            Nos formations
          </h2>

          <p className="mx-auto mt-3 max-w-[580px] text-sm leading-relaxed text-[#7895A8] sm:text-base lg:text-[17px]">
            Des formations en robotique avec une assistance pour vous
            accompagner tout au long de votre apprentissage.
          </p>

          {/* Filtres */}
<div className="mt-6 flex items-center justify-center gap-2">
  {filters.map((filter) => {
    const isActive = activeFilter === filter;

    return (
      <button
        key={filter}
        onClick={() => setActiveFilter(filter)}
        className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 sm:px-6 ${
          isActive
            ? "border-primary-blue bg-primary-blue text-white"
            : "border-primary-blue/50 bg-white text-primary-blue hover:bg-primary-blue/5"
        }`}
      >
        {filter}
      </button>
    );
  })}
</div>
        </div>

        {/* Cartes de formation */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="transition-all duration-500"
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <CourseCard
                image={course.image}
                tags={course.tags}
                title={course.title}
                description={course.description}
                price={course.price}
                href={course.href}
              />
            </div>
          ))}
        </div>

        {/* Aucun résultat */}
        {filteredCourses.length === 0 && (
          <p className="py-12 text-center text-sm text-[#7895A8]">
            Aucune formation disponible pour le moment.
          </p>
        )}
      </div>
    </section>
  );
}