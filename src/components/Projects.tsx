import Title from "./Title"
import { Github, ExternalLink } from "lucide-react";

// ── LABS RÉCENTS (post-CCNA / NSE4) ──────────────────────────────────────────
const recentLabs = [
    {
        id: 1,
        title: "Lab FortiGate — SD-WAN Multi-WAN",
        description: "Architecture SD-WAN avec load balancing, supervision SLA et NAT multi-WAN déployée sous EVE-NG. Basculement automatique en cas de dégradation d'un lien WAN.",
        technologies: ['FortiGate', 'SD-WAN', 'NAT', 'EVE-NG', 'Cisco IOS'],
        repoLink: "https://github.com/Blanchard-Jr/labs-reseau-securite/tree/main/lab-fortigate-sdwan-multiwan",
        level: "⭐⭐⭐",
        category: "Fortinet / NSE4",
    },
    {
        id: 2,
        title: "Lab CCNA — Architecture LAN 3-Tier",
        description: "Architecture hiérarchique Core / Distribution / Access avec redondance HSRP v2, agrégation EtherChannel et routage inter-VLAN sur Cisco Packet Tracer.",
        technologies: ['VLAN', 'HSRP v2', 'EtherChannel', 'Cisco IOS', 'Packet Tracer'],
        repoLink: "https://github.com/Blanchard-Jr/labs-reseau-securite/tree/main/lab-ccna-3tier-vlan-hsrp-etherchannel",
        level: "⭐⭐⭐",
        category: "Cisco / CCNA",
    },
    {
        id: 3,
        title: "Lab CCNA — OSPF Multi-Site · DHCP · ACL",
        description: "Routage dynamique OSPF entre deux sites distants, DHCP centralisé et filtrage de trafic par ACL étendues. Validation end-to-end et troubleshooting.",
        technologies: ['OSPF', 'DHCP', 'ACL étendues', 'Cisco IOS', 'Packet Tracer'],
        repoLink: "https://github.com/Blanchard-Jr/labs-reseau-securite/tree/main/lab-ccna-ospf-dhcp-acl",
        level: "⭐⭐",
        category: "Cisco / CCNA",
    },
];

// ── PROJETS DE FORMATION (antérieurs) ────────────────────────────────────────
const formationProjects = [
    {
        id: 1,
        title: "Intégration Windows Server 2022 + Hyper-V",
        description: "Intégration d'un serveur Windows Server 2022 avec Hyper-V dans une infrastructure existante. Configuration SET, commutateur virtuel externe, VLANs et switch Aruba.",
        technologies: ['Windows Server 2022', 'Hyper-V', 'VLAN', 'Aruba'],
        repoLink: "https://github.com/Blanchard-Jr/projets-techniques/tree/main/integration-windows-server2022",
    },
    {
        id: 2,
        title: "Sécurisation réseau",
        description: "Mise en place d'une architecture sécurisée pour une grande entreprise : pare-feu, VLANs, politiques d'accès et filtrage.",
        technologies: ['VLAN', 'Cisco', 'FortiGate'],
        repoLink: "https://github.com/Blanchard-Jr/projets-techniques/tree/main/securisation-reseau",
    },
    {
        id: 3,
        title: "Réseau local startup",
        description: "Conception et déploiement d'une infrastructure réseau fiable pour une startup en croissance.",
        technologies: ['Switch L2/L3', 'Cisco', 'VLAN'],
        repoLink: "https://github.com/Blanchard-Jr/projets-techniques/tree/main/reseau-local-startup",
    },
];

// ── COMPOSANT ─────────────────────────────────────────────────────────────────
const Projects = () => {
  return (
    <div className="mt-10" id="Projects">
      <Title title="Mes Projets & Labs" />

      {/* ── Section Labs récents ── */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl font-bold">🔬 Labs Récents</h2>
          <span className="badge badge-accent">Post-CCNA · NSE4</span>
        </div>
        <p className="text-sm text-gray-400 mb-6">
          Labs techniques réalisés en environnement simulé (EVE-NG, Packet Tracer) — 
          chaque lab documente une problématique réseau réelle avec architecture, configs et troubleshooting.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {recentLabs.map((lab) => (
            <div key={lab.id} className="bg-base-300 p-5 rounded-xl shadow-lg flex flex-col justify-between border border-accent/20">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="badge badge-accent badge-sm">{lab.category}</span>
                  <span className="text-sm">{lab.level}</span>
                </div>
                <h3 className="font-bold text-lg mt-2 mb-2">{lab.title}</h3>
                <p className="text-sm text-gray-400">{lab.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 my-3">
                  {lab.technologies.map((tech) => (
                    <span key={tech} className="badge badge-outline badge-sm">{tech}</span>
                  ))}
                </div>
                <a className="btn btn-accent btn-sm w-full" href={lab.repoLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4" /> Voir le lab
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <a 
            href="https://github.com/Blanchard-Jr/labs-reseau-securite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm gap-2"
          >
            <ExternalLink className="w-4" />
            Voir tous les labs sur GitHub
          </a>
        </div>
      </div>

      {/* ── Séparateur ── */}
      <div className="divider my-8">Formation antérieure</div>

      {/* ── Section Projets de formation ── */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl font-bold">📁 Projets de Formation</h2>
          <span className="badge badge-neutral">Admin Sys & Réseaux</span>
        </div>
        <p className="text-sm text-gray-400 mb-6">
          Projets réalisés durant la formation en administration systèmes, réseaux et sécurité.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {formationProjects.map((project) => (
            <div key={project.id} className="bg-base-300 p-5 rounded-xl shadow-lg flex flex-col justify-between opacity-90">
              <div>
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 my-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge badge-ghost badge-sm">{tech}</span>
                  ))}
                </div>
                <a className="btn btn-neutral btn-sm" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <a 
            href="https://github.com/Blanchard-Jr/projets-techniques" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm gap-2"
          >
            <ExternalLink className="w-4" />
            Voir tous les projets de formation
          </a>
        </div>
      </div>

    </div>
  )
}

export default Projects
