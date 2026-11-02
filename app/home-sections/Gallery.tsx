
import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/pic1.png" },
  { id: 2, src: "/pic1.png" },
  { id: 3, src: "/pic1.png" },
  { id: 4, src: "/pic1.png" },
  { id: 5, src: "/pic1.png" },
  { id: 6, src: "/pic1.png" },
];

function GalleryGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="gallery-group" aria-hidden={duplicate}>
      {galleryImages.map((image) => (
        <div
          key={`${duplicate ? "duplicate-" : ""}${image.id}`}
          className="gallery-image"
        >
          <Image
            src={image.src}
            alt={duplicate ? "" : `Atelier robotique ${image.id}`}
            fill
            sizes="380px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full overflow-hidden border-y-[10px] border-primary-yellow bg-primary-yellow py-3"
    >
      <div className="gallery-track">
        <GalleryGroup />
        <GalleryGroup duplicate />
      </div>
    </section>
  );
}
