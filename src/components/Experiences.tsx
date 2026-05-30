import Title from "./Title"
import { MapPin } from "lucide-react";

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
    skills: ["Windows Server", "Linux / Debian", "Active Directory", "Microsoft 365"],
  },
  {
    category: "Automatisation",
    skills: ["PowerShell / Bash", "Ansible", "Python"],
  },
];

const experiences = [
  {
    id: 1,
    role: "Administrateur Systèmes",
    company: "Atos",
    period: "Mai 2025 — Présent",
    location: "Lyon (France)",
    description: [
      "Gestion des incidents et des demandes dans le cadre d'un Centre de Service (support applicatif N1).",
      "Maintien en condition opérationnelle des environnements applicatifs et systèmes.",
      "Réalisation des mises en production applicatives (MEP) et mises à niveau systèmes.",
      "Supervision et traitement des événements remontés (mails, appels, outils de monitoring).",
    ],
    image: Atos,
    badge: "CDI",
  },
  {
    id: 2,
    role: "Technicien IT / Administrateur Systèmes & Réseaux",
    company: "Endrix",
    period: "Janvier 2024 — Mai 2025",
    location: "Lyon (France)",
    description: [
      "Administration des serveurs Windows Server (AD, GPO, DHCP, DNS, AGDLP, RDS, imprimantes).",
      "Gestion des environnements Microsoft 365 (Entra ID, Exchange, SharePoint, Teams).",
      "Mise en place de VPN IPsec, configuration des règles firewall, bornes Wi-Fi et switchs.",
    ],
    image: Endrix,
    badge: null,
  },
  {
    id: 3,
    role: "Technicien Support IT",
    company: "Five CortX",
    period: "Avril 2023 — Novembre 2023",
    location: "Lyon (France)",
    description: [
      "Administration des serveurs Windows Server (AD, DHCP, WSUS, GPO).",
      "Administration des serveurs Linux (GLPI, Exim4, Ansible, Graylog/Splunk).",
      "Maintien en condition opérationnelle d'un parc informatique de +100 actifs (Windows 10/11, Debian).",
    ],
    image: Fives,
    badge: null,
  },
  {
    id: 4,
    role: "Technicien de Proximité",
    company: "Samat",
    period: "Septembre 2021 — Avril 2023",
    location: "Lyon (France)",
    description: [
      "Gestion de Microsoft 365 (Outlook, Teams, OneDrive, SharePoint).",
      "Administration des comptes utilisateurs, groupes et ordinateurs dans Active Directory.",
      "Création d'images systèmes et déploiement de +300 postes de travail (Windows 10 et Linux).",
    ],
    image: Samat,
    badge: null,
  },
];

const Experiences = () => {
  return (
    <div id="Experiences" className="mt-10">
      <Title title="Expériences" />

      {/* Compétences */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-3xl mx-auto">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="bg-base-200 rounded-xl p-3 hover:scale-105 transition">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
              {cat.category}
            </p>
            <div className="flex flex-col gap-1">
              {cat.skills.map((skill) => (
                <span key={skill} className="text-sm text-gray-300">
                  · {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        {experiences.map((experience) => (
          <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg hover:shadow-2xl transition">
            
            <div className="flex items-center gap-4">
              
              <img
                src={experience.image}
                alt={experience.company}
                className="object-cover h-12 w-12 rounded-lg"
              />

              <div className="flex-1">

                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-bold text-accent">
                    {experience.role}
                  </h2>

                  {experience.badge && (
                    <span className="badge badge-accent badge-sm">
                      {experience.badge}
                    </span>
                  )}
                </div>

                <p className="font-semibold">
                  {experience.company}
                </p>

                {/* ✅ Ligne améliorée avec icône */}
                <p className="text-sm text-gray-400 flex items-center gap-1">
                  {experience.period} · <MapPin size={14} /> {experience.location}
                </p>

              </div>
            </div>

            <ul className="list-disc ml-6 mt-3 space-y-1">
              {experience.description.map((desc, index) => (
                <li key={index} className="text-sm text-gray-300">
                  {desc}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences