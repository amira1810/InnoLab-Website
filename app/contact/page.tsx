
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
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=contact.innobot@gmail.com",
    icone: "email",
    couleur: "bg-amber-100 text-amber-700",
  },
  {
    nom: "Whatsapp",
    valeur: "05 58 50 80 32",
    href: "https://wa.me/213558508032",
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
    href: "https://www.linkedin.com/company/innobotdz/posts/",
    icone: "linkedin",
    couleur: "bg-sky-100 text-sky-700",
  },
];

function ContactIcon({ type }: { type: string }) {
  const common = {
    width: 21,
    height: 21,
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
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.55 2 2.08 6.47 2.08 11.96c0 1.76.46 3.48 1.34 5L2 22l5.17-1.36a9.93 9.93 0 0 0 4.87 1.27h.01c5.49 0 9.96-4.47 9.96-9.96A9.92 9.92 0 0 0 12.04 2Zm0 18.22a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.07.81.82-2.99-.2-.31a8.23 8.23 0 1 1 6.95 3.82Zm4.52-6.17c-.25-.13-1.49-.73-1.72-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.26-.13-1.08-.4-2.05-1.27-.76-.68-1.28-1.52-1.43-1.77-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.26-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.03 2.59.13.17 1.77 2.7 4.28 3.79.6.26 1.07.42 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.4 21v-8.2h2.76l.41-3.2H13.4V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14C16.4 3.05 15.3 3 14.04 3c-2.62 0-4.42 1.6-4.42 4.53V9.6H6.66v3.2h2.96V21h3.78Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67V18ZM7 8.23a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18h-2.67v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.2V18h-2.67V9.4h2.56v1.18h.04a2.8 2.8 0 0 1 2.51-1.38c2.69 0 3.22 1.77 3.22 4.07V18Z" />
      </svg>
    );
  }

  return null;
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
  const [confirmationEmail, setConfirmationEmail] = useState(false);

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
      if (e.key === "Escape") {
        setMenuOuvert(false);
        setConfirmationEmail(false);
      }
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

    window.location.href = `mailto:${destinataire}?subject=${objet}&body=${contenu}`;
  }

 function ouvrirGmail() {
  const gmailUrl =
    "https://mail.google.com/mail/u/0/";

  window.open(gmailUrl, "_blank");
  setConfirmationEmail(false);
}

  return (
    <main className="min-h-screen bg-[#FCFDFD] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1120px]">

        {/* Header */}
        <header className="mb-8 text-center sm:mb-9">
          <h1 className="font-outfit text-3xl font-bold tracking-tight text-[#123363] sm:text-4xl">
            Contactez-nous
          </h1>

          <p className="mx-auto mt-3 max-w-[600px] text-base leading-relaxed text-[#7896AC] sm:text-lg">
            Vous souhaitez en savoir plus sur nos formations, nos packs ou nos
            ateliers ? Échangeons avec notre équipe.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[0.85fr_1.25fr] md:items-stretch lg:gap-5">

          {/* Formulaire */}
          <section className="order-1 min-w-0 rounded-2xl border border-[#E6EAF0] bg-white p-6 sm:p-7 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nom"
                    className="mb-1.5 block text-sm font-medium text-[#18345B]"
                  >
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
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-[#18345B]"
                  >
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

              {/* Sujet */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#18345B]">
                  Sujet de votre demande{" "}
                  <span className="text-amber-500">*</span>
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
                          <li
                            key={option}
                            role="option"
                            aria-selected={selectionne}
                          >
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
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  <input type="hidden" name="sujet" value={sujet} />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-[#18345B]"
                >
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

              {/* Bouton */}
              <button
                type="submit"
                className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-[#FFC329] bg-[#FFC329] px-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D99B00] focus-visible:ring-offset-2"
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

          {/* Coordonnées */}
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
                  onClick={(e) => {
                    if (item.icone === "email") {
                      e.preventDefault();
                      setConfirmationEmail(true);
                    }
                  }}
                  className="group flex min-w-0 cursor-pointer items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#FFC321]"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.couleur}`}
                  >
                    <ContactIcon type={item.icone} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs text-[#6D7E94]">
                      {item.nom}
                    </span>

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

      {/* Confirmation email */}
      {confirmationEmail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#10233D]/45 px-5 backdrop-blur-[3px]"
          onClick={() => setConfirmationEmail(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirmation-title"
            className="w-full max-w-[400px] animate-[fadeIn_0.2s_ease-out] rounded-2xl border border-[#E6EAF0] bg-white p-6 shadow-[0_20px_60px_rgba(18,51,99,0.2)] sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <ContactIcon type="email" />
            </div>

            <h2
              id="confirmation-title"
              className="text-center text-xl font-bold text-[#123363]"
            >
              Envoyer un email ?
            </h2>

            <p className="mt-3 text-center text-sm leading-relaxed text-[#6D7E94]">
              Voulez-vous ouvrir Gmail pour envoyer un email à notre équipe ?
            </p>

            <p className="mt-2 break-all text-center text-sm font-semibold text-[#263B59]">
              contact.innobot@gmail.com
            </p>

            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={() => setConfirmationEmail(false)}
                className="h-11 flex-1 cursor-pointer rounded-xl border border-[#DFE5EE] bg-white px-4 text-sm font-semibold text-[#52647B] transition hover:bg-[#F4F7FB]"
              >
                Annuler
              </button>

              <button
                type="button"
                onClick={ouvrirGmail}
                className="h-11 flex-1 cursor-pointer rounded-xl border-2 border-[#FFC329] bg-[#FFC329] px-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#D99B00]"
              >
                Oui, continuer
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
