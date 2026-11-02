
"use client";
import Image from "next/image";



type FormulaireProps = {
  titre: string;
  description: string;
  CTA: string;
};

export default function Formulaire({
  titre,
  description,
  CTA,
}: FormulaireProps) {
  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="relative isolate overflow-hidden rounded-[28px] bg-[#0B2D5B]/90 px-5 py-7 text-white shadow-lg sm:px-8 sm:py-9 lg:min-h-[430px] lg:px-12 lg:py-10">

          {/* Shapes décoratives */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 -top-12 -z-10 h-44 w-24 -rotate-[35deg] rounded-full bg-[#00A8FF]/25 sm:h-52 sm:w-28"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 -z-10 h-64 w-28 rotate-[-25deg] rounded-full bg-[#00A8FF]/25 sm:h-72 sm:w-32 lg:h-80"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 right-[7%] -z-10 h-20 w-[45%] rotate-[-5deg] rounded-[50%] bg-[#00A8FF]/25 sm:h-24 lg:h-28"
          />

          {/* Robot */}
          <div className="pointer-events-none absolute right-1 top-2 z-10 h-[175px] w-[155px] sm:right-5 sm:top-0 sm:h-[205px] sm:w-[185px] lg:right-[4%] lg:top-1/2 lg:h-[360px] lg:w-[330px] lg:-translate-y-1/2">
            <Image
              src="/robot.svg"
              alt="Robot INNOLAB"
              fill
              priority
              sizes="(max-width: 640px) 155px, (max-width: 1024px) 185px, 330px"
              className="object-contain"
            />
          </div>

          {/* Contenu principal */}
          <div className="relative z-20 lg:max-w-[65%]">
            {/* Titre et description */}
            <div className="relative z-20 min-h-[145px] pr-[105px] sm:min-h-[175px] sm:pr-[130px] lg:min-h-0 lg:pr-0">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 sm:top-1/2 lg:static lg:translate-y-0 lg:text-left">
                <h2 className="text-lg font-bold leading-snug sm:text-xl lg:text-2xl">
                  {titre}
                </h2>

                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-white/90 sm:text-base lg:max-w-[480px]">
                 {description}
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Ajouter ici le traitement de l'inscription ou de la commande.
              }}
              className="relative z-20 mt-3 space-y-3.5 sm:space-y-4 lg:mt-7 lg:max-w-[650px] lg:space-y-4"
            >
              <div>
                <label htmlFor="nom" className="sr-only">
                  Nom complet
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  autoComplete="name"
                  placeholder="Nom complet"
                  required
                  className="h-[44px] w-full rounded-[10px] border border-gray-200 bg-white px-4 text-sm text-[#0B2D5B] outline-none placeholder:text-[#8A9BB5] focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/30 sm:h-[48px] sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                  className="h-[44px] w-full rounded-[10px] border border-gray-200 bg-white px-4 text-sm text-[#0B2D5B] outline-none placeholder:text-[#8A9BB5] focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/30 sm:h-[48px] sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="sr-only">
                  Numéro de téléphone (WhatsApp)
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Numéro de téléphone (Whatsapp)"
                  required
                  className="h-[44px] w-full rounded-[10px] border border-gray-200 bg-white px-4 text-sm text-[#0B2D5B] outline-none placeholder:text-[#8A9BB5] focus:border-[#00A8FF] focus:ring-2 focus:ring-[#00A8FF]/30 sm:h-[48px] sm:text-base"
                />
              </div>

              {/* Bouton d'inscription */}
              <button
                type="submit"
                className="flex h-[48px] w-full items-center justify-center gap-3 rounded-xl bg-[#FFC321] px-4 text-sm font-bold text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2D5B] sm:h-[52px] sm:text-base hover:bg-white hover:text-primary-yellow border-3 border-primary-yellow cursor-pointer"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0"
                >
                  <path d="M2 3h2.2l2.5 12.1a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 1.9-1.4L22 7H6" />
                  <circle cx="9" cy="20" r="1.6" />
                  <circle cx="18" cy="20" r="1.6" />
                </svg>

                <span>{CTA}</span>
              </button>
            </form>

            {/* Confidentialité */}
            <div className="relative z-20 mt-4 flex items-center justify-center gap-2 text-center text-[10px] leading-5 text-white/90 lg:max-w-[650px] lg:text-xs">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFC321"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 shrink-0"
              >
                <path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>

              <span>
                Vos données sont sécurisées — utilisées uniquement pour vous contacter.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
