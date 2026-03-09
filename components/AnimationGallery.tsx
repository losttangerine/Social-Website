"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimationItem } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

interface AnimationGalleryProps {
  animations: AnimationItem[];
}

function AnimationCard({ item }: { item: AnimationItem }) {
  const [loaded, setLoaded] = useState(false);

  if (item.type === "gif") {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-raised flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  if (item.type === "local") {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-raised">
        <video
          src={item.src}
          poster={item.poster}
          controls
          preload="none"
          className="w-full h-full object-cover"
          aria-label={item.title}
        />
      </div>
    );
  }

  // YouTube click-to-load
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-raised">
      {!loaded ? (
        <button
          onClick={() => setLoaded(true)}
          aria-label={`Play ${item.title}`}
          className="group absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {item.poster && (
            <Image
              src={item.poster}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${item.src}?autoplay=1`}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
}

export default function AnimationGallery({ animations }: AnimationGalleryProps) {
  if (animations.length === 0) {
    return (
      <p className="text-white/30 text-sm text-center py-12">
        No animations added yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {animations.map((item, i) => (
        <ScrollReveal key={item.id} delay={i * 0.08}>
          <div className="flex flex-col gap-3">
            <AnimationCard item={item} />
            <div>
              <p className="text-white font-medium text-sm">{item.title}</p>
              {item.description && (
                <p className="text-white/40 text-xs mt-0.5">{item.description}</p>
              )}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
