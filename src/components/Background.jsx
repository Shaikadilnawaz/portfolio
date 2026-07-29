import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { credentials, languages, interests } from "../data";
import { GraduationCap, Award } from "./icons";

function Timeline({ icon: Icon, heading, items }) {
  return (
    <div>
      <h3 className="mb-6 flex items-center gap-2.5 text-sm font-semibold text-white">
        <Icon size={17} className="text-accent" />
        {heading}
      </h3>

      <ol className="relative space-y-7 border-l border-white/10 pl-6">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07}>
            <li className="relative">
              <span
                aria-hidden
                className="absolute -left-[1.79rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-950 bg-zinc-600"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="text-sm font-semibold leading-snug text-white">
                  {item.title}
                </h4>
                {item.period && (
                  <span className="shrink-0 font-mono text-xs text-zinc-600">
                    {item.period}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-zinc-500">
                {item.org}
                {item.note && (
                  <span className="ml-2 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-xs text-zinc-400">
                    {item.note}
                  </span>
                )}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export default function Background() {
  return (
    <section
      id="background"
      className="relative border-t border-white/5 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Background"
          title="Education & credentials"
        />

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-16">
          <Timeline
            icon={GraduationCap}
            heading="Education"
            items={credentials.education}
          />
          <Timeline
            icon={Award}
            heading="Certifications"
            items={credentials.certifications}
          />
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/8 pt-12 sm:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Languages
              </h3>
              <ul className="space-y-2">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span className="text-zinc-300">{l.name}</span>
                    <span className="text-zinc-600">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Beyond the editor
              </h3>
              <ul className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-white/10 bg-white/3 px-3 py-1.5 text-sm text-zinc-400"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
