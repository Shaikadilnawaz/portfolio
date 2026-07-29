import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Avatar from "./Avatar";
import { profile, stats } from "../data";
import { ArrowUpRight, MapPin } from "./icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const line = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Gentle parallax: content drifts up and fades as you scroll away.
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 420], [1, 0]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Ambient accent wash */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-accent/18 blur-[130px]"
        animate={reduceMotion ? undefined : { x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -right-32 h-[30rem] w-[30rem] rounded-full bg-indigo-500/10 blur-[130px]"
        animate={reduceMotion ? undefined : { x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Faint grid, masked to a soft ellipse */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        }}
      />

      <motion.div
        style={reduceMotion ? undefined : { y, opacity }}
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={line}
            className="mb-8 flex flex-wrap items-center gap-5"
          >
            <Avatar size="h-20 w-20 sm:h-24 sm:w-24" />
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                {profile.status}
              </span>
              <p className="flex items-center gap-1.5 text-sm text-zinc-500">
                <MapPin size={14} />
                {profile.location}
              </p>
            </div>
          </motion.div>

          <motion.h1
            variants={line}
            className="font-display text-[2.75rem] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-7xl lg:text-8xl"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={line}
            className="mt-4 font-display text-2xl font-semibold tracking-tight text-zinc-500 sm:text-4xl"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            variants={line}
            className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={line} className="mt-10 flex flex-wrap gap-3">
            <motion.a
              href="#work"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/40 transition-colors duration-200 hover:bg-zinc-200"
            >
              See my work
              <ArrowUpRight size={15} />
            </motion.a>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="cursor-pointer rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/5"
            >
              Get in touch
            </motion.a>
          </motion.div>

          {/* Quick credibility row */}
          <motion.dl
            variants={line}
            className="mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/8 pt-8 sm:grid-cols-3"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-white">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-zinc-500">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </motion.div>
    </section>
  );
}
