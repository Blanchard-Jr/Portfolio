import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#labs", label: "Labs" },
  { href: "#contact", label: "Contact" },
];

function initialTheme(): "dark" | "light" {
  try {
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">(initialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* stockage indisponible */
    }
  }, [theme]);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-surface">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-semibold">
          {profile.name}
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-muted md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
            className="rounded p-2 text-muted hover:text-ink"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
