"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Header() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(251,146,60,0.12) 0%, transparent 70%)",
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
          className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium"
        >
          Creator · Artist · Animator
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-none"
        >
          Lost Tangerine
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-white/50 max-w-sm"
        >
          Digital art &amp; animation
        </motion.p>

        {/* CTA */}
        <motion.a
          variants={itemVariants}
          href="#social"
          className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-300 text-sm font-medium"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          View Socials
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
