import Title from "./Title";
import { Network, Shield, Server, Cpu } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Réseaux LAN/WAN",
        description: `Administration et exploitation de réseaux Switching L2/L3, LAN/WAN, VLANs et routage inter-VLAN.
        Routage statique et dynamique (OSPF, EIGRP), architectures multi-sites, diagnostic et troubleshooting réseau.
        Équipements : Cisco IOS, Aruba, Alcatel, HPE.`,
        icon: <Network className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Firewall & Sécurité réseau",
        description: `Administration et exploitation de FortiGate : politiques firewall, NAT, VPN IPsec/SSL, SD-WAN, IPS.
        Segmentation et filtrage des flux réseau. Analyse et résolution d'incidents de sécurité.
        Préparation à la certification Fortinet FCP Network Security.`,
        icon: <Shield className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "SD-WAN & Architectures",
        description: `Mise en œuvre d'architectures SD-WAN multi-WAN avec FortiGate : load balancing, supervision SLA, basculement automatique.
        Conception de topologies hiérarchiques 3-Tier (Core / Distribution / Access) et architectures multi-sites.`,
        icon: <Cpu className="text-accent scale-150" />,
    },
    {
        id: 4,
        title: "Systèmes & Automatisation",
        description: `Administration Windows Server (AD DS, DNS, DHCP, GPO, RDS, Hyper-V) et Linux (Debian/Ubuntu).
        Virtualisation : Hyper-V, Proxmox. Supervision : Zabbix, Graylog.
        Automatisation avec PowerShell, Bash, Python et Ansible.`,
        icon: <Server className="text-accent scale-150" />,
    },
];

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="À propos" />

      <p className="text-center text-sm text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Administrateur Systèmes & Réseaux certifié <span className="text-accent font-semibold">Cisco CCNA 200-301</span>,
        avec une expérience dans l'exploitation et le maintien en condition opérationnelle d'infrastructures multi-sites.
        Compétent en administration Windows Server, Active Directory, virtualisation, réseaux LAN/WAN et sécurité des infrastructures.
        <br /><br />
        En cours de préparation à la certification <span className="text-accent font-semibold">Fortinet FCP Network Security</span>,
        avec pour objectif d'évoluer vers un poste d'<span className="text-accent font-semibold">Ingénieur Réseaux & Sécurité</span>.
      </p>

      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {aboutSections.map((section) => (
          <div
            key={section.id}
            className="flex flex-col bg-base-100 p-5 rounded-xl shadow-xl"
          >
            <div className="flex items-center gap-4 mb-3">
              <div>{section.icon}</div>
              <h2 className="text-lg font-bold">{section.title}</h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
