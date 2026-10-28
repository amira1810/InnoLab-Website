"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const languages = ["AR", "FR", "EN"];

const navLinks = [
  { label: "Formations", href: "/formations" },
  { label: "E-books", href: "/books" },
  { label: "Packs", href: "/packs" },
];

export default function Navbar() {
  const [language, setLanguage] = useState("FR");
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  // Fermer les menus avec la touche Échap
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLanguageOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeMenus() {
    setMenuOpen(false);
    setLanguageOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-background shadow-[0_4px_18px_rgba(0,0,0,0.08)]">
      <nav className="mx-auto flex min-h-20 w-full items-center justify-between gap-2 px-3 py-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0"
          onClick={closeMenus}
          aria-label="INNOLAB - Accueil"
        >
          <Image
            src="/logo.svg"
            alt="INNOLAB"
            width={160}
            height={55}
            priority
            className="h-auto w-28 object-contain sm:w-36"
          />
        </Link>

        {/* Liens desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-primary-blue transition-colors duration-200 hover:text-primary-yellow"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          {/* Contact desktop uniquement */}
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-full border-2 border-primary-yellow bg-primary-yellow px-6 py-2.5 text-sm font-semibold text-primary-blue transition-colors duration-200 hover:bg-transparent hover:text-primary-yellow md:inline-flex"
          >
            Nous contacter
          </Link>

          {/* Langues desktop */}
          <div className="hidden items-center gap-1 sm:flex">
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
                className={`rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                  language === lang
                    ? "bg-primary-yellow text-primary-blue"
                    : "text-primary-blue hover:bg-gray-100"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Sélecteur de langue mobile */}
          <div className="relative sm:hidden">
            <button
              type="button"
              onClick={() => {
                setLanguageOpen((open) => !open);
                setMenuOpen(false);
              }}
              aria-label="Choisir la langue"
              aria-expanded={languageOpen}
              aria-controls="language-menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-primary-blue transition-colors duration-200 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>

            {/* Menu des langues animé */}
            <div
              id="language-menu"
              aria-hidden={!languageOpen}
              className={` absolute right-0 top-full z-[100] mt-2 min-w-24 origin-top-right rounded-xl border border-gray-200 bg-white p-2 shadow-xl transition-all duration-200 ease-out ${
                languageOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-95 opacity-0"
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  tabIndex={languageOpen ? 0 : -1}
                  onClick={() => {
                    setLanguage(lang);
                    setLanguageOpen(false);
                  }}
                  aria-pressed={language === lang}
                  className={`block w-full rounded-lg px-4 py-3 text-left text-sm transition-colors duration-200 mt-1 ${
                    language === lang
                      ? "bg-primary-yellow font-semibold text-primary-blue"
                      : "text-primary-blue hover:bg-gray-100"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Hamburger mobile animé */}
          <button
            type="button"
            onClick={() => {
              setMenuOpen((open) => !open);
              setLanguageOpen(false);
            }}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-primary-blue transition-colors duration-200 hover:bg-gray-100 md:hidden"
          >
            <span className="relative block h-6 w-6">
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2 rotate-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
                  menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2 rotate-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Menu mobile animé */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`absolute left-0 right-0 top-full z-40 border-t border-gray-200 bg-background shadow-xl transition-all duration-300 ease-out md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenus}
              style={{
                transitionDelay: menuOpen ? `${index * 45}ms` : "0ms",
              }}
              className={`block rounded-lg px-4 py-3 font-body text-primary-blue transition-all duration-200 hover:bg-gray-100 ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-2 opacity-0"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Contact jaune dans le menu mobile */}
          <Link
            href="/contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenus}
            className={`mt-2 inline-flex items-center justify-center rounded-full bg-primary-yellow px-6 py-3 text-sm font-semibold text-primary-blue transition-all duration-200 hover:-translate-y-0.5 hover:brightness-95 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 45}ms` : "0ms",
            }}
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </header>
  );
}