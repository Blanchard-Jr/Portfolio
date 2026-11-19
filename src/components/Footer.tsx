import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <p className="mx-auto max-w-5xl px-5 py-6 text-sm text-muted">
        © 2026 {profile.name}
      </p>
    </footer>
  );
}
