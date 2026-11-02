
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import FAQItem from "@/components/ui/FAQItem";

const questions = [
  {
    id: 1,
    question: "Comment accède-t-on aux formations après l'achat ?",
    answer:
      "Après votre achat, notre équipe vous contactera directement sur WhatsApp pour vous accompagner et vous transmettre toutes les informations nécessaires pour accéder à votre formation.",
  },
  {
    id: 2,
    question: "Les formations sont-elles adaptées aux débutants ?",
    answer:
      "Oui ! Nos formations sont conçues pour accompagner les débutants pas à pas. Vous découvrirez les notions essentielles avant de passer progressivement à la pratique.",
  },
  {
    id: 3,
    question: "Faut-il avoir du matériel pour suivre les formations ?",
    answer:
      "Cela dépend de la formation choisie. Les équipements nécessaires sont précisés dans la description de chaque formation. Notre équipe peut également vous conseiller sur le matériel adapté.",
  },
  {
    id: 4,
    question: "Puis-je bénéficier d'une assistance pendant mon apprentissage ?",
    answer:
      "Bien sûr ! Nous vous accompagnons tout au long de votre apprentissage pour répondre à vos questions et vous aider à progresser dans vos projets.",
  },
];

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(3);
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

  // Ouvrir / fermer une question
  const toggleQuestion = (id: number) => {
    setActiveQuestion((current) => (current === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="overflow-hidden bg-background px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div
        className={`mx-auto max-w-[760px] transition-all duration-[1000ms] ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-16 opacity-0"
        }`}
      >
        {/* En-tête */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-primary-blue sm:text-4xl lg:text-[40px]">
            FAQ
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#7895A8] sm:text-base">
            Les réponses aux questions que vous pourriez vous poser sur InnoLab.
          </p>
        </div>

        {/* Questions */}
        <div className="mt-10">
          {questions.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={activeQuestion === item.id}
              onToggle={() => toggleQuestion(item.id)}
            />
          ))}
        </div>

        {/* Contact */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3">
          <p className="text-center text-[13px] font-semibold text-[#263D5B] sm:text-[14px]">
            Vous n'avez pas trouvé de réponse à votre question ?
          </p>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-yellow px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#F2B719] hover:gap-3"
          >
            Nous contacter
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
