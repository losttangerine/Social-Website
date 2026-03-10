"use client";

import { useState } from "react";
import Image from "next/image";
import { Artwork } from "@/data/portfolio";
import ArtworkModal from "./ArtworkModal";
import ScrollReveal from "./ScrollReveal";

interface ArtworkGalleryProps {
  artworks: Artwork[];
  fit?: "cover" | "contain";
  aspect?: "square" | "4/3";
}

export default function ArtworkGallery({ artworks, fit = "cover", aspect = "4/3" }: ArtworkGalleryProps) {
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
              className={`relative w-full ${aspect === "square" ? "aspect-square" : "aspect-[4/3]"} overflow-hidden rounded-xl bg-surface-raised focus:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
              style={artwork.bgColor ? { backgroundColor: artwork.bgColor } : undefined}
            >
              <Image
                src={artwork.src}
                alt={artwork.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className={`${fit === "contain" ? "object-contain" : "object-cover"} transition-opacity duration-300`}
                style={{ objectPosition: artwork.objectPosition ?? "center" }}
              />
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
