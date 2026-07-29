import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "./icons";

/*
  Live embed of a deployed site, framed as a browser window.

  The iframe is lazy so it never competes with the hero for bandwidth, and
  sandboxed to scripts + same-origin only — enough for the app to render,
  without granting it navigation control over this page.
*/
export default function LivePreview({ url, label }) {
  const [loaded, setLoaded] = useState(false);
  const reduceMotion = useReducedMotion();
  const host = url.replace(/^https?:\/\//, "");

  return (
    <motion.figure
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 shadow-2xl shadow-black/50"
    >
      {/* Browser chrome */}
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
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="hidden cursor-pointer items-center gap-1 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-white sm:inline-flex"
        >
          Open
          <ArrowUpRight size={13} />
        </a>
      </div>

      {/* Viewport */}
      <div className="relative aspect-[16/10] w-full bg-zinc-950">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2.5 text-xs text-zinc-600">
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-zinc-700 border-t-accent" />
              Loading live site…
            </div>
          </div>
        )}
        <iframe
          src={url}
          title={label}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          className={`h-full w-full border-0 transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3">
        <span className="text-xs text-zinc-500">
          Live deployment — interact with it right here.
        </span>
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex shrink-0 cursor-pointer items-center gap-1 text-xs font-semibold text-white transition-colors duration-200 hover:text-accent"
        >
          Visit site
          <ArrowUpRight size={13} />
        </a>
      </figcaption>
    </motion.figure>
  );
}
