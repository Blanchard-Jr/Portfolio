import { ArrowUpRight } from "lucide-react";
import { labs, profile, trainingProjects } from "../data";

export default function Projects() {
  return (
    <section id="labs" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="text-2xl font-semibold">Labs</h2>
        <p className="mt-3 max-w-xl text-muted">
          Montés sous EVE-NG et Packet Tracer. Les configurations et la documentation sont sur
          GitHub.
        </p>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {labs.map((l) => (
            <article key={l.title} className="grid gap-4 py-8 md:grid-cols-[1fr_2fr]">
              <div>
                <h3 className="font-semibold">{l.title}</h3>
                <p className="mt-1 text-sm text-ok">{l.status}</p>
              </div>
              <div>
                <p className="text-muted">{l.summary}</p>
                <p className="mt-3 font-mono text-xs text-muted">{l.tools}</p>
                <a
                  href={profile.labsRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                >
                  Configurations sur GitHub <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-14 text-lg font-semibold">Projets de formation</h3>
        <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-sm text-muted">
          {trainingProjects.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
