
import Image from "next/image";
import Link from "next/link";

interface PackCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

export default function PackCard({
  icon,
  title,
  description,
  image,
  href = "#",
}: PackCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[25px] border border-white/90 bg-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-yellow/80 sm:p-6 lg:p-5">
      {/* En-tête de la carte */}
      <div className="flex items-start gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white p-1">
          <Image
            src={icon}
            alt=""
            fill
            sizes="44px"
            className="object-contain p-1"
          />
        </div>

        <div className="min-w-0">
          <h3 className="font-heading text-xl font-extrabold leading-tight text-white sm:text-2xl">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-[1.7] text-white/90 sm:text-[13px]">
            {description}
          </p>
        </div>
      </div>

      {/* Illustration du pack */}
      <div className="relative my-5 h-[190px] w-full sm:h-[220px] lg:h-[210px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          className="object-contain transition-transform duration-500 hover:scale-[1.04]"
        />
      </div>

      {/* Bouton */}
      <Link
        href={href}
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-primary-yellow px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F2B719] hover:gap-3 sm:text-base"
      >
        Découvrir le pack
        <span aria-hidden="true" className="text-lg leading-none">
          →
        </span>
      </Link>
    </article>
  );
}
