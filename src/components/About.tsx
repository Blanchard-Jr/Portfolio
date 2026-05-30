import Title from "./Title";
import { Network, Shield, Server, Cpu } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Routing & Switching",
        description: `Conception et administration de réseaux d'entreprise : VLANs, trunking 802.1Q, routage inter-VLAN, protocoles dynamiques OSPF et EIGRP, redondance HSRP, agrégation EtherChannel.
        Équipements maîtrisés : Cisco IOS (routeurs & switchs), Aruba.`,
        icon: <Network className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Firewall & Sécurité réseau",
        description: `Déploiement et administration de FortiGate : politiques firewall, NAT, VPN IPsec, IPS et Application Control.
        Préparation active à la certification Fortinet NSE4. Pratique de Kali Linux pour l'audit et les tests de sécurité en environnement lab.`,
        icon: <Shield className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "SD-WAN & Architectures modernes",
        description: `Mise en œuvre d'architectures SD-WAN multi-WAN avec FortiGate : load balancing, supervision SLA, basculement automatique.
        Conception de topologies hiérarchiques 3-Tier (Core / Distribution / Access) et architectures multi-sites.`,
        icon: <Cpu className="text-accent scale-150" />,
    },
    {
        id: 4,
        title: "Systèmes & Automatisation",
        description: `Administration Windows Server (AD DS, DNS, DHCP, Hyper-V) et Linux (Debian/Ubuntu).
        Automatisation avec PowerShell, Bash et Python. Déploiement de configurations réseau via Ansible en environnement lab.`,
        icon: <Server className="text-accent scale-150" />,
    },
];

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="À propos" />

      {/* Intro */}
      <p className="text-center text-sm text-gray-400 max-w-2xl mx-auto mb-10">
        Administrateur systèmes & réseaux en transition vers l'ingénierie réseaux & sécurité.
        Après l'obtention du <span className="text-accent font-semibold">CCNA 200-301</span>, je construis
        une expertise sur les solutions <span className="text-accent font-semibold">Fortinet</span> dans
        le cadre de ma préparation au <span className="text-accent font-semibold">NSE4</span>.
        Je documente chaque lab pour démontrer mes compétences de manière concrète.
      </p>

      {/* Grille compétences centrée */}
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
