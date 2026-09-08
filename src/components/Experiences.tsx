import Title from "./Title"
import Endrix from "../assets/companies/Endrix.jpg";
import Fives from "../assets/companies/Fives.png";
import Samat from "../assets/companies/Samat.webp";
import Atos from "../assets/companies/Atos.webp";

const skillCategories = [
    {
        category: "Réseau",
        skills: ["Cisco IOS", "OSPF / EIGRP", "VLAN / Switching", "SD-WAN", "VPN IPsec"],
    },
    {
        category: "Sécurité",
        skills: ["Fortinet / FortiGate", "Firewall", "Kali Linux"],
    },
    {
        category: "Systèmes",
        skills: ["Windows Server", "Linux / Debian", "Active Directory", "Microsoft 365", "Hyper-V / Proxmox"],
    },
    {
        category: "Automatisation",
        skills: ["PowerShell / Bash", "Ansible", "Python", "Zabbix / Graylog"],
    },
];

const experiences = [
  {
      id: 1,
      role: "Administrateur Systèmes",
      company: "Atos France",
      period: "Mai 2025 — Présent",
      location: "Lyon, France · Hybride",
      description: [
          "Exploitation d'une plateforme applicative utilisée par plus de 150 établissements dans un environnement de production multi-sites à forte exigence.",
          "Analyse, qualification et résolution d'incidents de production N1/N2 via outils ITSM.",
          "Maintien en condition opérationnelle des environnements applicatifs et systèmes (MCO).",
          "Participation aux mises en production applicatives (MEP) et opérations de maintenance.",
          "Coordination avec les équipes Réseau, Système, DBA et Applicatives lors des incidents.",
      ],
      env: "Windows Server · SQL Server · FreshDesk · ITSM · Supervision · Production 24/7",
      image: Atos,
      badge: "CDI",
  },
  {
      id: 2,
      role: "Administrateur Systèmes & Réseaux",
      company: "Endrix",
      period: "Janvier 2024 — Mai 2025",
      location: "Lyon, France",
      description: [
          "Administration des réseaux LAN multi-sites d'un groupe d'expertise comptable : VLANs, équipements réseau Aruba/Alcatel.",
          "Administration et exploitation d'un firewall FortiGate : politiques, VPN IPsec, filtrage.",
          "Administration Windows Server et Active Directory (DNS, DHCP, GPO, RDS).",
          "Déploiement et administration d'un bastion sécurisé Apache Guacamole sous Debian.",
          "Administration de l'infrastructure virtualisée Hyper-V et supervision Zabbix.",
      ],
      env: "FortiGate · Hyper-V · Veeam · Windows Server · Debian · HPE · Aruba · Alcatel · Zabbix",
      image: Endrix,
      badge: null,
  },
  {
      id: 3,
      role: "Technicien Support IT / Administrateur Systèmes",
      company: "Fokus IT (client : Fives CortX)",
      period: "Avril 2023 — Novembre 2023",
      location: "Lyon, France",
      description: [
          "Administration Windows Server et Active Directory (DHCP, GPO, WSUS).",
          "Maintien en condition opérationnelle de l'infrastructure et support N2.",
          "Supervision et analyse des événements via Graylog/Splunk.",
          "Administration Linux Debian et outils d'exploitation (GLPI, Ansible).",
      ],
      env: "Windows Server · Debian · GLPI · Ansible · Graylog · Splunk",
      image: Fives,
      badge: null,
  },
  {
      id: 4,
      role: "Technicien de Proximité",
      company: "Samat",
      period: "Septembre 2021 — Avril 2023",
      location: "France",
      description: [
          "Gestion de Microsoft 365 (Outlook, Teams, OneDrive, SharePoint).",
          "Administration des comptes utilisateurs, groupes et ordinateurs dans Active Directory.",
          "Création d'images systèmes et déploiement de +300 postes de travail (Windows 10 et Linux).",
      ],
      env: "Microsoft 365 · Active Directory · Windows 10/11 · Linux",
      image: Samat,
      badge: null,
  },
];

const Experiences = () => {
  return (
    <div id="Experiences" className="mt-10">
      <Title title="Expériences" />

      {/* Compétences par catégorie */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-3xl mx-auto">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="bg-base-200 rounded-xl p-3">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
              {cat.category}
            </p>
            <div className="flex flex-col gap-1">
              {cat.skills.map((skill) => (
                <span key={skill} className="text-sm text-gray-300">· {skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline expériences */}
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        {experiences.map((experience) => (
          <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
            <div className="flex items-center gap-4">
              <img
                src={experience.image}
                alt={experience.company}
                className="object-cover h-12 w-12 rounded-lg shrink-0"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-bold text-accent">{experience.role}</h2>
                  {experience.badge && (
                    <span className="badge badge-accent badge-sm">{experience.badge}</span>
                  )}
                </div>
                <p className="font-semibold">{experience.company}</p>
                <p className="text-sm text-gray-400">{experience.period} · {experience.location}</p>
              </div>
            </div>

            <ul className="list-disc ml-6 mt-3 space-y-1">
              {experience.description.map((desc, index) => (
                <li key={index} className="text-sm text-gray-300">{desc}</li>
              ))}
            </ul>

            <p className="text-xs text-gray-500 mt-3 italic">
              🛠 {experience.env}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences
