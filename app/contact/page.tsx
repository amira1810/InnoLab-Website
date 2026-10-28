
"use client";

import { useState, useRef, useEffect } from "react";

const sujets = [
  "Inscription à une formation",
  "Question sur un pack",
  "Question sur un atelier",
  "Demande de partenariat",
  "Autre demande",
];

const coordonnees = [
  {
    nom: "Email",
    valeur: "contact.innobot@gmail.com",
    href: "mailto:contact.innobot@gmail.com",
    icone: "email",
    couleur: "bg-amber-100 text-amber-700",
  },
  {
    nom: "Whatsapp",
    valeur: "0777777777",
    href: "https://wa.me/213777777777",
    icone: "whatsapp",
    couleur: "bg-green-100 text-green-600",
  },
  {
    nom: "Instagram",
    valeur: "innobot_",
    href: "https://www.instagram.com/innobot_/",
    icone: "instagram",
    couleur: "bg-pink-100 text-pink-600",
  },
  {
    nom: "Facebook",
    valeur: "innobot_",
    href: "https://www.facebook.com/innobot_",
    icone: "facebook",
    couleur: "bg-blue-100 text-blue-700",
  },
  {
    nom: "LinkedIn",
    valeur: "Innobot",
    href: "https://www.linkedin.com/",
    icone: "linkedin",
    couleur: "bg-sky-100 text-sky-700",
  },
];

function ContactIcon({ type }: { type: string }) {
  const common = {
    width: 19,
    height: 19,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "email") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M20 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-4.3A8.4 8.4 0 1 1 20 11.5Z" />
        <path d="M9 8.5c.3 2 2 3.8 4 4.2l1.3-1 2 1c-.2 1.4-1.2 2.2-2.6 2.1-3.5-.5-6-3-6.4-6.3-.1-1.2.8-2.1 2-2.3l1 2-1.3 1.3Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.6v8h3.4Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.1M11 17v-7h3v1c.5-.8 1.3-1.2 2.2-1.2 2 0 2.8 1.3 2.8 3.5V17h-3v-3.3c0-1-.3-1.7-1.3-1.7s-1.7.8-1.7 1.8V17h-3Z" />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function ContactPage() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState(sujets[0]);
  const [message, setMessage] = useState("");
  const [menuOuvert, setMenuOuvert] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function fermerMenu(e: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(e.target as Node)
      ) {
        setMenuOuvert(false);
      }
    }

    function fermerAvecEchap(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOuvert(false);
    }

    document.addEventListener("mousedown", fermerMenu);
    document.addEventListener("keydown", fermerAvecEchap);

    return () => {
      document.removeEventListener("mousedown", fermerMenu);
      document.removeEventListener("keydown", fermerAvecEchap);
    };
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const destinataire = "contact.innobot@gmail.com";
    const objet = encodeURIComponent(sujet);
    const contenu = encodeURIComponent(
      `Nom : ${nom}\nEmail : ${email}\nSujet : ${sujet}\n\nMessage :\n${message}`
    );

    window.location.href =
      `mailto:${destinataire}?subject=${objet}&body=${contenu}`;
  }

  return (
    <main className="min-h-screen bg-[#FCFDFD] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <header className="mb-8 text-center sm:mb-9">
          <h1 className="font-outfit text-3xl font-bold tracking-tight text-[#123363] sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="mx-auto mt-3 max-w-[600px] text-base leading-relaxed text-[#7896AC] sm:text-lg">
            Vous souhaitez en savoir plus sur nos formations, nos packs ou nos
            ateliers ? Échangeons avec notre équipe.
          </p>
        </header>

        {/* Formulaire en premier sur mobile */}
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-[0.85fr_1.25fr] lg:gap-5">
          {/* Formulaire */}
          <section className="order-1 min-w-0 rounded-2xl border border-[#E6EAF0] bg-white p-6 sm:p-7 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-[#18345B]">
                    Nom complet <span className="text-amber-500">*</span>
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    autoComplete="name"
                    required
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="ex. Amina Brahimi"
                    className="h-11 w-full rounded-lg border border-[#DFE5EE] px-3 text-sm text-[#263B59] outline-none transition placeholder:text-[#8B929F] focus:border-[#1D75B8] focus:ring-2 focus:ring-[#1D75B8]/10"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#18345B]">
                    Adresse email <span className="text-amber-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="amina@domaine.dz"
                    className="h-11 w-full rounded-lg border border-[#DFE5EE] px-3 text-sm text-[#263B59] outline-none transition placeholder:text-[#8B929F] focus:border-[#1D75B8] focus:ring-2 focus:ring-[#1D75B8]/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#18345B]">
                  Sujet de votre demande <span className="text-amber-500">*</span>
                </label>

                <div ref={selectRef} className="relative">
                  <button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={menuOuvert}
                    onClick={() => setMenuOuvert((v) => !v)}
                    className={`flex h-11 w-full cursor-pointer items-center justify-between gap-3 rounded-lg border bg-white px-3.5 text-left text-sm outline-none transition focus:ring-2 focus:ring-[#1D75B8]/10 ${
                      menuOuvert
                        ? "border-[#1D75B8] ring-2 ring-[#1D75B8]/10"
                        : "border-[#DFE5EE] hover:border-[#B8C7D8]"
                    }`}
                  >
                    <span className="truncate text-[#263B59]">{sujet}</span>
                    <ChevronDown open={menuOuvert} />
                  </button>

                  {menuOuvert && (
                    <ul
                      role="listbox"
                      aria-label="Sujet de votre demande"
                      className="absolute left-0 right-0 top-full z-30 mt-2 space-y-1.5 rounded-xl border border-[#E4EAF2] bg-white p-2 shadow-[0_12px_35px_rgba(18,51,99,0.13)]"
                    >
                      {sujets.map((option) => {
                        const selectionne = sujet === option;

                        return (
                          <li key={option} role="option" aria-selected={selectionne}>
                            <button
                              type="button"
                              onClick={() => {
                                setSujet(option);
                                setMenuOuvert(false);
                              }}
                              className={`flex min-h-10 w-full cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                                selectionne
                                  ? "bg-[#FFF6D9] font-medium text-[#123363]"
                                  : "text-[#46566D] hover:bg-[#F4F7FB] hover:text-[#123363]"
                              }`}
                            >
                              <span>{option}</span>
                              {selectionne && (
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                  className="h-4 w-4 shrink-0 text-[#D99B00]"
                                >
                                  <path d="m5 12 4 4L19 6" />
                                </svg>
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {/* Valeur transmise avec le formulaire */}
                  <input type="hidden" name="sujet" value={sujet} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#18345B]">
                  Votre message <span className="text-amber-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Expliquez-nous votre besoin, la tranche d'âge concernée ou votre question..."
                  className="w-full resize-y rounded-lg border border-[#DFE5EE] px-3.5 py-3 text-sm leading-relaxed text-[#263B59] outline-none transition placeholder:text-[#8B929F] focus:border-[#1D75B8] focus:ring-2 focus:ring-[#1D75B8]/10"
                />
              </div>

              <button
                type="submit"
                className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-[#FFC329] bg-[#FFC329] px-4 text-sm font-semibold text-white transition-all duration-200 hover:border-[#FFC329] hover:bg-white hover:text-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D99B00] focus-visible:ring-offset-2"
              >
                Envoyer le message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M21.7 2.3a.7.7 0 0 0-.75-.15L2.4 9.3a1.2 1.2 0 0 0 .1 2.3l7.1 2.3 2.3 7.1a1.2 1.2 0 0 0 2.3.1l7.4-18.5a.7.7 0 0 0 .1-.3ZM11 12.1l-5.5-1.8 12.1-4.8L11 12.1Zm1 1 6.6-6.6-4.8 12.1-1.8-5.5Z" />
                </svg>
              </button>

              <p className="pt-1 text-center text-xs leading-relaxed text-[#737B87]">
                Réponse garantie sous 24 heures ouvrées par l’équipe d’Innolab.
              </p>
            </form>
          </section>

          {/* Coordonnées : hauteur naturelle */}
          <section className="order-2 h-fit min-w-0 self-start rounded-2xl border border-[#E6EAF0] bg-white p-6 sm:p-7 md:order-1">
            <h2 className="mb-6 text-lg font-semibold text-[#263B59]">
              Nos coordonnées
            </h2>

            <div className="space-y-6">
              {coordonnees.map((item) => (
                <a
                  key={item.icone}
                  href={item.href}
                  target={item.icone === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex min-w-0 cursor-pointer items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#FFC321]"
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.couleur}`}>
                    <ContactIcon type={item.icone} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-[#6D7E94]">{item.nom}</span>
                    <span className="mt-0.5 block break-words text-base font-semibold text-[#172B49] transition-colors group-hover:text-[#1B75BB]">
                      {item.valeur}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
