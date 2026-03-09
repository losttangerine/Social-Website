"use client";

import { useState } from "react";
import Image from "next/image";
import { Artwork } from "@/data/portfolio";
import ArtworkModal from "./ArtworkModal";
import ScrollReveal from "./ScrollReveal";

interface ArtworkGalleryProps {
  artworks: Artwork[];
}

export default function ArtworkGallery({ artworks }: ArtworkGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  if (artworks.length === 0) {
    return (
      <p className="text-white/30 text-sm text-center py-12">
        No artworks added yet.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {artworks.map((artwork, i) => (
          <ScrollReveal key={artwork.id} delay={i * 0.05}>
            <button
              onClick={() => setLightboxIndex(i)}
              aria-label={`View ${artwork.title} in fullscreen`}
              className="group relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-surface-raised focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Image
                src={artwork.src}
                alt={artwork.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-sm font-medium text-white">
                  {artwork.title}
                </span>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      <ArtworkModal
        artworks={artworks}
        index={lightboxIndex}
        open={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
      />
    </>
  );
}
