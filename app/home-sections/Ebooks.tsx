"use client";

import { useEffect, useRef, useState } from "react";
import EbookCard from "@/components/ui/EbookCard";

type Ebook = {
  id: number;
  image: string;
  tags: string[];
  title: string;
  price: string;
  href: string;
};

const ebooks: Ebook[] = [
  {
    id: 1,
    image: "/ebook-robotique.png",
    tags: ["Débutant", "Adultes", "PDF"],
    title: "Introduction à la robotique",
    price: "1 000 DZD",
    href: "/books/introduction-robotique",
  },
  {
    id: 2,
    image: "/ebook-robotique.png",
    tags: ["Débutant", "Adultes", "PDF"],
    title: "Introduction à la robotique",
    price: "1 000 DZD",
    href: "/books/introduction-robotique",
  },
  {
    id: 3,
    image: "/ebook-robotique.png",
    tags: ["Débutant", "Adultes", "PDF"],
    title: "Introduction à la robotique",
    price: "1 000 DZD",
    href: "/books/introduction-robotique",
  },
];

export default function Ebooks() {
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
      id="ebooks"
      className="overflow-hidden bg-background px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div
        className={`mx-auto max-w-[1120px] transition-all duration-[1000ms] ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-16 opacity-0"
        }`}
      >
        {/* En-tête */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary-blue sm:text-4xl lg:text-[40px]">
            E-books & ressources
          </h2>

          <p className="mx-auto mt-2 max-w-[580px] text-sm leading-relaxed text-[#7895A8] sm:text-base">
            Approfondissez vos connaissances en robotique grâce à nos e-books
            et ressources pédagogiques, conçus pour apprendre à votre rythme.
          </p>
        </div>

        {/* Cartes E-books */}
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {ebooks.map((ebook, index) => (
            <div
              key={ebook.id}
              className="transition-all duration-500"
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <EbookCard
                image={ebook.image}
                tags={ebook.tags}
                title={ebook.title}
                price={ebook.price}
                href={ebook.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}