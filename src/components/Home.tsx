
import { Download, Mail } from "lucide-react";
import { figures, profile } from "../data";

function Topology() {
  return (
    <svg
      viewBox="0 0 520 420"
      role="img"
      aria-label="Schéma réseau : un siège et une agence reliés par un tunnel IPsec entre FortiGate via Internet"
      fontSize="12"
      textAnchor="middle"
      className="h-auto w-full"
    >
      <g fill="none" stroke="var(--line)" strokeWidth="1.5">
        <rect x="6" y="108" width="226" height="304" rx="8" />
        <rect x="288" y="108" width="226" height="304" rx="8" />
        <rect x="298" y="290" width="204" height="106" rx="6" />
      </g>

      <g fill="var(--muted)" fontSize="11">
        <text x="16" y="128" textAnchor="start">HQ</text>
        <text x="506" y="128" textAnchor="end">Agence</text>
        <text x="308" y="306" fontSize="10" textAnchor="start">
          Datacenter 172.16.1.0/24
        </text>
      </g>

      <g stroke="var(--line)" strokeWidth="2" fill="none">
        <path d="M240 38L118 140M280 38L346 140" />
        <path d="M118 172V206M118 236V262M118 292V311M46 311H186M46 311V330M116 311V330M186 311V330" />
        <path d="M394 156H406M346 172V192H454V172M402 192V212M402 242V290" />
      </g>

      <line
        className="tunnel"
        x1="168"
        y1="156"
        x2="298"
        y2="156"
        stroke="var(--accent)"
        strokeWidth="2.5"
      />

      <text x="233" y="146" fill="var(--accent)" fontSize="11">
        Tunnel IPsec
      </text>

      <g fill="var(--panel)" stroke="var(--line)" strokeWidth="1.5">
        <rect x="210" y="8" width="100" height="30" rx="6" />
        <rect x="68" y="206" width="100" height="30" rx="6" />
        <rect x="68" y="262" width="100" height="30" rx="6" />
        <rect x="352" y="212" width="100" height="30" rx="6" />
        <rect x="14" y="330" width="64" height="40" rx="6" />
        <rect x="84" y="330" width="64" height="40" rx="6" />
        <rect x="154" y="330" width="64" height="40" rx="6" />
        <rect x="308" y="316" width="90" height="70" rx="6" />
        <rect x="402" y="316" width="90" height="70" rx="6" />
      </g>

      <g fill="var(--panel)" stroke="var(--accent)" strokeWidth="1.5">
        <rect x="68" y="140" width="100" height="32" rx="6" />
        <rect x="298" y="140" width="96" height="32" rx="6" />
        <rect x="406" y="140" width="96" height="32" rx="6" />
      </g>

      <g fill="var(--text)">
        <text x="260" y="28">Internet</text>
        <text x="118" y="161">FortiGate</text>
        <text x="118" y="226">Core switch</text>
        <text x="118" y="282">Access switch</text>
        <text x="346" y="161">FortiGate 1</text>
        <text x="454" y="161">FortiGate 2</text>
        <text x="402" y="232">Switch</text>

        <text x="46" y="348">VLAN 10</text>
        <text x="116" y="348">VLAN 20</text>
        <text x="186" y="348">VLAN 30</text>

        <text x="353" y="334" fontWeight="600">DC01</text>
        <text x="447" y="334" fontWeight="600">SRV01</text>
      </g>

      <g fill="var(--muted)" fontSize="10">
        <text x="46" y="362">user1</text>
        <text x="116" y="362">user2</text>
        <text x="186" y="362">user3</text>

        <text x="353" y="350">AD, DNS,</text>
        <text x="353" y="364">DHCP,</text>
        <text x="353" y="378">fichiers</text>
        <text x="447" y="350">GLPI,</text>
        <text x="447" y="364">Zabbix</text>
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-5 pb-16 pt-16 md:pt-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">

        {/* Présentation professionnelle */}
        <div>
          <div className="mb-6 flex items-center gap-4">

            {/* Photo de profil */}
            <img
              src={profile.photo}
              alt="Portrait de Blanchard Koubemba"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="h-28 w-28 md:h-32 md:w-32 shrink-0 rounded-full border-2 border-line object-cover shadow-md"
            />

            {/* Identité */}
            <div className="min-w-0">
              <p className="text-lg font-semibold tracking-tight">
                Blanchard KOUBEMBA
              </p>

              <p className="mt-1 text-sm text-muted">
                {profile.role}, {profile.location.split(",")[0]}
              </p>
            </div>
          </div>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Je conçois, déploie et sécurise des réseaux multi-sites.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted">
            Certifié Cisco CCNA, je prépare le FCP Network Security
            pour évoluer vers un poste d'Ingénieur Réseaux & Sécurité.
            Disponible rapidement.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 font-medium text-surface"
            >
              <Download size={18} />
              Télécharger mon CV
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded border border-line px-5 py-2.5 font-medium hover:border-accent"
            >
              <Mail size={18} />
              Me contacter
            </a>
          </div>
        </div>

        {/* Architecture réseau */}
        <div className="rounded-lg border border-line bg-panel p-5">
          <Topology />

          <p className="mt-3 text-sm text-muted">
            Mon projet : un siège et une agence reliés par un tunnel
            IPsec entre FortiGate, avec trois VLAN côté siège et un
            datacenter (AD, DNS, DHCP, GLPI, Zabbix) côté agence.
          </p>
        </div>
      </div>

      {/* Chiffres clés */}
      <dl className="mt-16 grid grid-cols-2 gap-y-8 md:grid-cols-4">
        {figures.map((f) => (
          <div
            key={f.value}
            className="border-l border-line pl-4"
          >
            <dt className="text-3xl font-semibold">
              {f.value}
            </dt>

            <dd className="mt-1 text-sm text-muted">
              {f.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
