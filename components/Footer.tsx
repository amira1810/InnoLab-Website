
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#081B35] text-white">
      <div className="mx-auto max-w-300 px-6 pb-4 pt-8 sm:px-8">
        {/* Contenu principal */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_0.9fr] lg:gap-10">

          {/* Logo */}
          <div className="flex flex-col items-center text-center lg:items-center">
            <Link href="/" aria-label="Accueil Innolab">
              <Image
                src="/logo-footer.svg"
                alt="INNOLAB"
                width={145}
                height={45}
                className="h-auto w-[145px] object-contain"
                priority
              />
            </Link>

            <p className="mt-3 max-w-[220px] text-m leading-[22px] text-[#E0E7F0]">
              The educational platform in
              <br />
              robotics and STEM
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center sm:text-left">
            <h3 className="mb-3 text-m font-bold text-white">
              Navigation
            </h3>

            <ul className="space-y-2 text-[14px] text-[#D2DCE9]">
              <li>
                <Link href="/" className="transition-colors hover:text-[#FFC21A]">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/formations" className="transition-colors hover:text-[#FFC21A]">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/books" className="transition-colors hover:text-[#FFC21A]">
                  E-books & Ressources
                </Link>
              </li>
              <li>
                <Link href="/packs" className="transition-colors hover:text-[#FFC21A]">
                  Packs
                </Link>
              </li>
              <li>
                <Link href="/public-cible" className="transition-colors hover:text-[#FFC21A]">
                  Public ciblé
                </Link>
              </li>
            </ul>
          </div>

          {/* À découvrir */}
          <div className="text-center sm:text-left">
            <h3 className="mb-3 text-m font-bold text-white">
              À découvrir
            </h3>

            <ul className="space-y-2 text-[14px] text-[#D2DCE9]">
              <li>
                <Link href="/projets-robotiques" className="transition-colors hover:text-[#FFC21A]">
                  Projets robotiques
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-[#FFC21A]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-[#FFC21A]">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="text-center sm:text-left">
            <h3 className="mb-3 text-m font-bold text-white">
              Suivez-nous
            </h3>

            <div className="flex justify-center gap-2 sm:justify-start">
              {/* Remplace les href par tes liens exacts */}
              <a
                href="https://www.linkedin.com/company/innobotdz/posts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FFC21A] transition-transform hover:scale-110"
              >
                <Image
                  src="/linkedin.svg"
                  alt=""
                  width= {24}
                  height={24}
                  className="h-[32px] w-[32px] object-contain"
                />
              </a>

              <a
                href="https://www.facebook.com/p/Innobot-61576325881831/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FFC21A] transition-transform hover:scale-110"
              >
                <Image
                  src="/facebook.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-[32px] w-[32px] object-contain"
                />
              </a>

              <a
                href="https://www.instagram.com/innobot_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#FFC21A] transition-transform hover:scale-110"
              >
                <Image
                  src="/instagram.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-[32px] w-[32px] object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Séparation et copyright */}
        <div className="mt-7 border-t border-white/20 pt-3 text-center">
          <p className="text-[10px] text-[#D2DCE9]">
            Tous droits réservés © 2026 Innolab
          </p>
        </div>
      </div>
    </footer>
  );
}
