import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import LivePreview from "./LivePreview";
import FeaturePanel from "./FeaturePanel";
import SectionHeading from "./SectionHeading";
import { projects } from "../data";
import { ArrowUpRight, Check } from "./icons";

function ProjectCard({ project, index }) {
  const reduceMotion = useReducedMotion();
  const hasPreview = Boolean(project.preview);

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={reduceMotion || hasPreview ? undefined : { y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="group relative grid gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-9 lg:grid-cols-2 lg:items-center lg:gap-12"
      >
        {/* Accent wash on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-accent/8 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {project.title}
            </h3>
            {project.href && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live
              </span>
            )}
            <span className="ml-auto text-xs font-medium text-zinc-600">
              {project.year}
            </span>
          </div>

          {project.subtitle && (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-accent">
              {project.subtitle}
            </p>
          )}

          <p className="text-base leading-relaxed text-zinc-400">
            {project.blurb}
          </p>

          {/* Skipped when there's no live preview — FeaturePanel already
              lists these on the right, and showing them twice reads as a bug. */}
          {hasPreview && project.highlights?.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-zinc-400">
                  <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-zinc-400"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors duration-200 hover:bg-zinc-200"
              >
                Visit site
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="cursor-pointer text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-white"
              >
                Source code
              </a>
            )}
          </div>
        </div>

        <div className="relative">
          {hasPreview ? (
            <LivePreview
              url={project.preview}
              label={`${project.title} — live preview`}
            />
          ) : (
            <FeaturePanel
              url={project.href}
              features={project.highlights}
              note={project.gated}
            />
          )}
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative border-t border-white/5 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've shipped"
          intro="Two products I built end to end and shipped — both live, both solving a problem I actually had."
        />

        <div className="mt-14 space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
