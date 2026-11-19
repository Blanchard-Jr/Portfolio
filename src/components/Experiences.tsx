import { experiences } from "../data";

export default function Experiences() {
  return (
    <section id="parcours" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="text-2xl font-semibold">Parcours</h2>
        <ol className="mt-10 space-y-12 border-l border-line pl-6 md:pl-8">
          {experiences.map((e) => (
            <li key={e.company + e.period} className="relative">
              <span className="absolute -left-[30px] top-2 h-2.5 w-2.5 rounded-full bg-accent md:-left-[38px]" />
              <p className="text-sm text-muted">
                {e.period}, {e.place}
              </p>
              <h3 className="mt-1 text-lg font-semibold">
                {e.role}, {e.company}
              </h3>
              <p className="mt-2 max-w-2xl text-muted">{e.context}</p>
              {e.points.length > 0 && (
                <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 text-sm">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              {e.tools && <p className="mt-3 font-mono text-xs text-muted">{e.tools}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
