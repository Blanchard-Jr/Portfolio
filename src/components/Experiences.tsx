import Title from "./Title"

// Les domaines de compétence
import imgFortigate from "../assets/techno/Fortigate.svg";
import imgVmware from "../assets/techno/Vmware.webp";
import imgMicrosoft from "../assets/techno/Microsoft-admin.png";
import imgCisco from "../assets/techno/Cisco.png";
import imgDebian12 from "../assets/techno/Debian 12.png";
import imgAdministration from "../assets/techno/administration-infrastructure.png";
import imgVeeam from "../assets/techno/Veeam.jpg";
import imgWindows from "../assets/techno/Windows-Server.jpg";
import imgCitrix from "../assets/techno/Citrix.jpg";

// Les entreprise :
import Endrix from "../assets/companies/Endrix.jpg";
import Fives from "../assets/companies/Fives.png";
import Samat from "../assets/companies/Samat.webp";

const skills = [
    { id: 1, name: "Fortinet", image: imgFortigate },
    { id: 2, name: "Cisco", image: imgCisco },
    { id: 3, name: "Debian", image: imgDebian12 },
    { id: 4, name: "Administration SI", image: imgAdministration },
    { id: 5, name: "Microsoft", image: imgMicrosoft },
    { id: 6, name: "Windows Server", image: imgWindows },
    { id: 7, name: "Veeam Backup", image: imgVeeam },
    { id: 8, name: "VMware vSphere", image: imgVmware },
    { id: 9, name: "Citrix", image: imgCitrix },
];


const experiences = [
  {
      id: 1,
      role: "Technicien informatique / administrateur systèmes et réseaux",
      company: "Endrix",
      period: "Janvier 2024 - Présent",
      description: [
          "Administration des serveurs Windows (AD, GPO, DHCP, DNS, AGDLP, imprimantes, RDS).",
          "Gestion des environnements Microsoft Office 365 (Entra ID, Exchange, SharePoint, Teams).",
          "Mise en place de VPN IPsec et configuration des règles de firewall, bornes wifi et switchs.",
      ],
      image: Endrix,
  },
  {
      id: 2,
      role: "Technicien Support IT",
      company: "Five CortX",
      period: "Avril 2023 - Novemvre 2023",
      description: [
          "Administration des serveurs Windows server (AD, DHCP, WSUS, GPO).",
          "Administration des serveurs Linux (GLPI, Exim4, Ansible, Graylog/Splunk).",
          "Maintien en condition opérationnelle le parc informatique +100 actifs (Win 10,11 ; Debian).",
      ],
      image: Fives,
  },
  {
      id: 3,
      role: "Technicien de Proximité",
      company: "Samat",
      period: "Septembre 2021 - Avril 2023",
      description: [
          "Gestion du Microsoft office 365 (Outlook, Teams, OneDrive, SharePoint).",
          "Administration des comptes utilisateurs, groupes et ordinateurs dans Active Directory.",
          "Création d’images systèmes et déploiement des postes de travail +300 (Windows 10 et Linux)",
      ],
      image: Samat,
  },
];


const Experiences = () => {
  return (
    <div id="Experiences">
      <Title title="Expériences"/>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-cente md:w-1/3 mt-4 md:mt-0">
            {skills.map((skill) => (
            <div key={skill.id} className="flex justify-center items-center flex-col">
               <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                  <img src={skill.image} alt={skill.image} className="object-cover rounded-full h-full w-full"/>
               </div>
               <span className="mt-2 text-sm"> {skill.name}</span>
            </div>
            ))}
        </div>

        <div className="md:ml-4 flex flex-col space-y-4">
            {experiences.map((experience) => (
              <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <img 
                        src={experience.image}
                        alt={experience.company}
                        className="object-cover h-12 w-12"
                    />

                    <div className="ml-4">
                      <h1 className="text-xl text-accent font-bold">
                        {experience.role} , {experience.company}
                      </h1>

                      <span className="text-sm">{experience.period}</span>
                    </div>

                  </div>
                  <ul className="list-disc ml-16 mt-2">
                    {experience.description.map((desc , index) => (
                            <li key={index}>
                              {desc}
                            </li>
                    ))

                    }
                  </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences
