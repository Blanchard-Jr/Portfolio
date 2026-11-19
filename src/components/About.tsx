import { certifications, formations, skills } from "../data";

export default function About() {
  return (
    <section id="competences" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="text-2xl font-semibold">Compétences</h2>
        <p className="mt-3 max-w-xl text-muted">
          Je pars des réseaux et de la sécurité, et je m'appuie sur six ans d'exploitation des
          systèmes qui tournent derrière.
        </p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.title}>
              <h3 className="font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Certifications</h3>
            <ul className="mt-4 space-y-5">
              {certifications.map((c) => (
                <li key={c.name} className="border-l-2 border-accent pl-4">
                  <p className="font-medium">
                    {c.name} <span className="ml-1 text-sm font-normal text-ok">{c.status}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted">{c.detail}</p>
                  {"verifyUrl" in c && c.verifyUrl && (
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-sm text-accent hover:underline"
                    >
                      Vérifier la certification
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Formation</h3>
            <ul className="mt-4 space-y-5">
              {formations.map((f) => (
                <li key={f.title} className="border-l-2 border-line pl-4">
                  <p className="font-medium">{f.title}</p>
                  <p className="mt-1 text-sm text-muted">
                    {f.school}, {f.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
