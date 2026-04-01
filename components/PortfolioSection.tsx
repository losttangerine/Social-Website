"use client";

import { useState } from "react";
import { artworks, emotes, animations } from "@/data/portfolio";
import ArtworkGallery from "./ArtworkGallery";
import AnimationGallery from "./AnimationGallery";
import ScrollReveal from "./ScrollReveal";

type Filter = "all" | "artwork" | "emotes" | "animation";

const tabs: { label: string; value: Filter }[] = [
  { label: "ALL", value: "all" },
  { label: "ARTWORK", value: "artwork" },
  { label: "EMOTES", value: "emotes" },
  { label: "ANIMATION", value: "animation" },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const showArtwork = filter === "all" || filter === "artwork";
  const showEmotes = filter === "all" || filter === "emotes";
  const showAnimation = filter === "all" || filter === "animation";

  return (
    <section id="portfolio" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header + filter tabs */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-on-surface">
              The Gallery
            </h2>
            <div className="flex gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`px-4 py-1.5 rounded-full text-xs font-headline font-bold transition-colors ${
                    filter === tab.value
                      ? "bg-surface-container-lowest text-primary shadow-sm"
                      : "text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Artwork */}
        {showArtwork && (
          <div className="mb-20">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-headline font-semibold text-on-surface">Artworks</h3>
                <div className="flex-1 h-px bg-outline-variant/40" />
              </div>
            </ScrollReveal>
            <ArtworkGallery artworks={artworks} />
          </div>
        )}

        {/* Emotes */}
        {showEmotes && (
          <div className="mb-20">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-headline font-semibold text-on-surface">Emotes</h3>
                <div className="flex-1 h-px bg-outline-variant/40" />
              </div>
            </ScrollReveal>
            <ArtworkGallery artworks={emotes} fit="contain" aspect="square" />
          </div>
        )}

        {/* Animations */}
        {showAnimation && (
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-headline font-semibold text-on-surface">Animations</h3>
                <div className="flex-1 h-px bg-outline-variant/40" />
              </div>
            </ScrollReveal>
            <AnimationGallery animations={animations} />
          </div>
        )}
      </div>
    </section>
  );
}
