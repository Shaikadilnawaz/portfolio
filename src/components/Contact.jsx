import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data";
import { Check, Copy, Mail, Phone } from "./icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked (e.g. non-HTTPS) — the mailto link still works.
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 px-6 py-28 sm:py-36"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-[120px]"
        animate={reduceMotion ? undefined : { scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          intro="Open to full-time roles, internships, freelance work, and interesting collaborations. The fastest way to reach me is email — I answer everything."
          align="center"
        />

        <Reveal delay={0.18}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/40 transition-colors duration-200 hover:bg-zinc-200"
            >
              <Mail size={15} />
              {profile.email}
            </motion.a>

            <motion.button
              type="button"
              onClick={copyEmail}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="cursor-pointer rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/5"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "copied" : "copy"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center gap-2"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? "Copied" : "Copy address"}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="mt-6 flex cursor-pointer items-center justify-center gap-2 text-sm text-zinc-500 transition-colors duration-200 hover:text-zinc-300"
          >
            <Phone size={14} />
            {profile.phone}
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  className="cursor-pointer text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
