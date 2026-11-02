
"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const numeroWhatsApp = "213558508032"; 

  const message = encodeURIComponent(
    "Bonjour INNOLAB, je souhaite avoir plus d'informations."
  );

  const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${message}`;

  const [bottomOffset, setBottomOffset] = useState(24);

  useEffect(() => {
    const updatePosition = () => {
      // Sur mobile, le bouton reste en bas de l'écran
      if (window.innerWidth < 768) {
        setBottomOffset(24);
        return;
      }

      // Sur PC, le bouton remonte au-dessus du footer
      const footer = document.querySelector("footer");

      if (!footer) {
        setBottomOffset(24);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const distanceFromBottom = window.innerHeight - footerRect.top;

      setBottomOffset(
        distanceFromBottom > 0 ? distanceFromBottom + 24 : 24
      );
    };

    updatePosition();

    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez INNOLAB sur WhatsApp"
      title="Contactez INNOLAB sur WhatsApp"
      style={{ bottom: `${bottomOffset}px` }}
      className="group fixed right-5 z-40 flex items-center sm:right-6"
    >
      {/* Texte visible au survol sur PC */}
      <span className="pointer-events-none absolute right-16 hidden translate-x-2 whitespace-nowrap rounded-lg bg-[#081B35] px-4 py-3 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 md:block mr-2">
        Contactez INNOLAB sur WhatsApp
      </span>

      {/* Bouton circulaire */}
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:h-16 sm:w-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-8 w-8 sm:h-9 sm:w-9"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.36.14 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.9 11.9 0 0 0 5.82 1.48h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.19-3.5-8.42ZM12.08 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.86 9.86 0 0 1-1.51-5.25c0-5.46 4.45-9.91 9.92-9.91 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.87-9.94 9.87Zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </span>
    </a>
  );
}
