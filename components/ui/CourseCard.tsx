import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: string;
  href?: string;
}

export default function CourseCard({
  image,
  tags,
  title,
  description,
  price,
  href = "#",
}: CourseCardProps) {
  return (
    <article className="flex h-full min-h-[430px] flex-col rounded-[24px] border border-[#EDF0F3] bg-white p-4 shadow-[0_5px_20px_rgba(11,45,91,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(11,45,91,0.10)] sm:p-4.5">
      {/* Image */}
      <div className="relative h-[175px] w-full shrink-0 overflow-hidden rounded-[15px] sm:h-[185px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="rounded-full border border-[#B8C5D3] px-2.5 py-1 text-[10px] font-medium text-[#263D5B] sm:text-[11px]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Informations */}
      <div className="mt-2.5 flex flex-1 flex-col">
        <h3 className="text-[15px] font-bold leading-[1.45] text-primary-blue sm:text-base">
          {title}
        </h3>

        <p className="mt-2.5 text-[12px] leading-[1.7] text-[#71849B] sm:text-[13px]">
          {description}
        </p>
      </div>

      {/* Prix et bouton */}
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#F0F2F5] pt-4">
        <span className="text-[15px] font-bold text-primary-blue sm:text-base">
          {price}
        </span>

        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-yellow px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#F2B719] hover:gap-3 sm:text-[13px]"
        >
          Voir détails
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}