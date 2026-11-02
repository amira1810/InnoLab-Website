
import Hero from "./home-sections/Hero";
import Formations from "./home-sections/Formations";
import Gallery from "./home-sections/Gallery";
import Ebooks from "./home-sections/Ebooks";
import Packs from "./home-sections/Packs";
import Audience from "./home-sections/Audience";
import FAQ from "./home-sections/FAQ";

export default function Home() {
  return (
    <main>

      <Hero />
      <Formations />
      <Gallery />
      <Ebooks />
      <Packs />
      <Audience />
      <FAQ />
    </main>
  );
}
