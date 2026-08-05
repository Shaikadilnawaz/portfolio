import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check } from "./icons";

/*
  Stand-in for LivePreview on projects that can't be embedded — auth-gated
  apps, mainly. Deliberately mirrors the browser-window framing so the two
  project cards keep the same rhythm, and states plainly why there's no
  live demo rather than leaving a visitor wondering.
*/
export default function FeaturePanel({ url, features, note }) {
  const reduceMotion = useReducedMotion();
  const host = url.replace(/^https?:\/\//, "");

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 shadow-2xl shadow-black/50"
    >
      {/* Browser chrome, matching LivePreview */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-zinc-900/80 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md bg-black/40 px-3 py-1.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
          <span className="truncate font-mono text-[11px] text-zinc-400">
            {host}
          </span>
        </div>
      </div>

      <ul className="divide-y divide-white/5">
        {features.map((f, i) => (
          <motion.li
            key={f}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.4,
              delay: reduceMotion ? 0 : i * 0.08,
              ease: "easeOut",
            }}
            className="flex items-start gap-3 px-5 py-4"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Check size={12} />
            </span>
            <span className="text-sm leading-snug text-zinc-300">{f}</span>
          </motion.li>
        ))}
      </ul>

      <div className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3">
        <span className="text-xs text-zinc-500">{note}</span>
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex shrink-0 cursor-pointer items-center gap-1 text-xs font-semibold text-white transition-colors duration-200 hover:text-accent"
        >
          Open app
          <ArrowUpRight size={13} />
        </a>
      </div>
    </motion.div>
  );
}
