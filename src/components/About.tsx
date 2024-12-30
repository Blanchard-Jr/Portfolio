import Title from "./Title";
import img from '../assets/Photo.jpg';
import { Network, Server, BrickWall } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Compétences en systèmes",
        description: `Je suis spécialisé dans la gestion des serveurs Windows et Linux, la virtualisation (VMware, Hyper-V) et la gestion des environnements Cloud tels qu'Azure et AWS. 
        J'assure également la mise en place et la gestion des sauvegardes, la supervision des performances, et l'automatisation des tâches grâce à des scripts PowerShell et Bash.`,
        icon: <Server className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Compétences en réseaux",
        description: `Je maîtrise la gestion et la configuration des réseaux informatiques, incluant la conception et l'administration des VLAN, la configuration des switchs et routeurs (Cisco, Aruba) et la gestion des réseaux sans fil (Wi-Fi). 
        Je suis également expérimenté dans la mise en place et la gestion des VPN, ainsi que dans l'optimisation des performances et de la disponibilité des réseaux d'entreprise.`,
        icon: <Network className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Compétences en firewall et sécurité",
        description: `Disposant de solides connaissances en sécurité des infrastructures, je mets en place des pare-feu (FortiGate, pfSense) et des solutions IDS/IPS pour prévenir les intrusions. 
        Je réalise des audits de sécurité, configure des VPN sécurisés, applique des politiques d'accès et de filtrage, et implémente des solutions de gestion des identités et des accès (IAM). 
        Je veille également à la conformité des systèmes avec les bonnes pratiques et normes en matière de cybersécurité.`,
        icon: <BrickWall className="text-accent scale-150" />,
    },
];

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="À propos" />
      <div className="md:h-screen flex justify-center items-center">
        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src={img}
            alt="Photo de profil"
            className="w-96 object-cover rounded-xl"
          />
        </div>

        {/* Information Section */}
        <div className="md:ml-4 space-y-4">
          {aboutSections.map((section) => (
            <div 
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
            >
              <div className="mb-2 md:mb-0">
                {section.icon}
              </div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">
                  {section.title}
                </h2>
                <p className="text-sm">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
