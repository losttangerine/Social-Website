"use client";

import { motion } from "framer-motion";
import {
  FaTwitch,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";
import { IconType } from "react-icons";
import { socials } from "@/data/socials";
import ScrollReveal from "./ScrollReveal";

const ICON_MAP: Record<string, IconType> = {
  FaTwitch,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
  FaGithub,
};

export default function SocialLinks() {
  return (
    <section id="social" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Socials
          </h2>
          <p className="text-center text-white/40 mb-12 text-sm">
            Find me on these platforms
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {socials.map((link, i) => {
            const Icon = ICON_MAP[link.iconName];
            return (
              <ScrollReveal key={link.id} delay={i * 0.08}>
                <motion.a
                  href={link.url}
                  target={link.url !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={`View on ${link.label}`}
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface-raised border border-surface-border hover:border-white/10 transition-all duration-300"
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={
                    {
                      "--brand": link.brandColor,
                    } as React.CSSProperties
                  }
                >
                  {Icon && (
                    <Icon
                      className="text-4xl text-white/50 group-hover:text-[var(--brand)] transition-colors duration-300"
                      aria-hidden="true"
                    />
                  )}
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm">
                      {link.label}
                    </p>
                    <p className="text-white/30 text-xs mt-0.5">
                      {link.username}
                    </p>
                  </div>
                </motion.a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
