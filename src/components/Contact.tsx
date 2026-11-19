import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data";

const items = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: profile.phoneHref },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Github, label: "GitHub", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 max-w-xl text-muted">
          Je cherche un poste d'administrateur ou d'ingénieur réseaux et sécurité à Lyon et
          alentours. Permis B, véhicule personnel, disponible rapidement.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-accent"
              >
                <Icon size={18} className="text-muted" /> {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
