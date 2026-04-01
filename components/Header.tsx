"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Header() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(249,135,62,0.15) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-6"
      >
        {/* Label */}
        <motion.p
          variants={itemVariants}
          className="text-xs uppercase tracking-[0.3em] text-primary font-headline font-bold"
        >
          Digital Artist &amp; Animator
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-none"
        >
          Lost Tangerine
          <span className="text-primary">.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-on-surface-variant max-w-sm font-body"
        >
          Digital art &amp; animation
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mt-2"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 bg-primary text-on-primary rounded-full font-headline font-bold hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/20"
          >
            View Portfolio
          </a>
          <Link
            href="/commissions"
            className="px-8 py-4 border border-outline-variant text-primary rounded-full font-headline font-bold hover:bg-surface-container-low transition-colors"
          >
            Commissions
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
