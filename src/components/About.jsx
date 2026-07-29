import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, skills } from "../data";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative border-t border-white/5 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="About" title="A bit about me" />

            <div className="mt-8">
              {profile.bio.map((para, i) => (
                <Reveal key={i} delay={0.12 + i * 0.07}>
                  <p className="mb-5 text-base leading-relaxed text-zinc-400">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-8 lg:pt-4">
            {skills.map((group, gi) => (
              <Reveal key={group.group} delay={gi * 0.07}>
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                    {group.group}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item, ii) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{
                          duration: 0.35,
                          delay: reduceMotion ? 0 : gi * 0.07 + ii * 0.04,
                          ease: "easeOut",
                        }}
                        whileHover={reduceMotion ? undefined : { y: -3 }}
                        className="cursor-default rounded-lg border border-white/10 bg-white/3 px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-200 hover:border-accent/40 hover:text-white"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
