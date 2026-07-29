import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { nav, profile } from "../data";
import { Menu, X } from "./icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // Frost the bar only once we've left the hero, so the top of the page stays clean.
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`transition-colors duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="cursor-pointer font-display text-sm font-bold tracking-tight text-white"
          >
            {profile.shortName}
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="ml-2 cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors duration-200 hover:bg-zinc-200"
              >
                Hire me
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="cursor-pointer rounded-lg p-2 text-zinc-300 transition-colors hover:text-white md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="overflow-hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur-xl md:hidden"
            >
              {[...nav, { label: "Hire me", href: `mailto:${profile.email}` }].map(
                (item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block cursor-pointer px-6 py-4 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
