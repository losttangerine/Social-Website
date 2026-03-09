import { artworks, emotes, animations } from "@/data/portfolio";
import ArtworkGallery from "./ArtworkGallery";
import AnimationGallery from "./AnimationGallery";
import ScrollReveal from "./ScrollReveal";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding border-t border-surface-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Portfolio
          </h2>
          <p className="text-center text-white/40 mb-16 text-sm">
            A collection of artworks, emotes, and animations
          </p>
        </ScrollReveal>

        {/* Artworks */}
        <div className="mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-semibold text-white">Artworks</h3>
              <div className="flex-1 h-px bg-surface-border" />
            </div>
          </ScrollReveal>
          <ArtworkGallery artworks={artworks} />
        </div>

        {/* Emotes */}
        <div className="mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-semibold text-white">Emotes</h3>
              <div className="flex-1 h-px bg-surface-border" />
            </div>
          </ScrollReveal>
          <ArtworkGallery artworks={emotes} />
        </div>

        {/* Animations */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-semibold text-white">Animations</h3>
              <div className="flex-1 h-px bg-surface-border" />
            </div>
          </ScrollReveal>
          <AnimationGallery animations={animations} />
        </div>
      </div>
    </section>
  );
}
