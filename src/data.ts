export const profile = {
  name: "Blanchard KOUBEMBA",
  role: "Administrateur Systèmes & Réseaux",
  email: "blanchardkoubemba@gmail.com",
  phone: "+33 7 55 17 71 66",
  phoneHref: "tel:+33755177166",
  location: "Lyon, Auvergne-Rhône-Alpes",
  linkedin: "https://www.linkedin.com/in/blanchard-koubemba-a9524ab5/",
  github: "https://github.com/Blanchard-Jr",
  labsRepo: "https://github.com/Blanchard-Jr/labs-reseau-securite",
  cv: "/CV_Blanchard_Koubemba.pdf",
  photo: "/photo.jpg",
};

export const figures = [
  { value: "150+", label: "établissements de santé sur la plateforme que j'exploite" },
  { value: "800", label: "collaborateurs sur le SI que j'ai administré" },
  { value: "300+", label: "postes déployés sous Windows 10 et Linux" },
  { value: "5+ ans", label: "en environnements multi-sites" },
];

export const skills = [
  {
    title: "Réseaux",
    items: [
      "Switching L2/L3, VLAN, routage inter-VLAN",
      "OSPF, EIGRP, HSRP, EtherChannel",
      "Cisco IOS, Aruba, Alcatel, HPE",
      "Diagnostic et dépannage réseau",
    ],
  },
  {
    title: "Sécurité",
    items: [
      "FortiGate : politiques, NAT, filtrage",
      "VPN IPsec et SSL, SD-WAN",
      "Segmentation des flux",
      "Bastion Apache Guacamole",
    ],
  },
  {
    title: "Systèmes",
    items: [
      "Windows Server : AD DS, DNS, DHCP, GPO, RDS, WSUS",
      "Microsoft 365, Entra ID, Intune",
      "Linux Debian et Ubuntu",
      "Hyper-V, VMware, Proxmox, Veeam",
    ],
  },
  {
    title: "Exploitation et automatisation",
    items: [
      "Incidents N1/N2, ITSM, GLPI, FreshDesk",
      "Supervision : Zabbix, Graylog, Splunk",
      "PowerShell, Bash, Python, Ansible",
      "Mises en production et MCO",
    ],
  },
];

export const certifications = [
  {
    name: "Cisco CCNA 200-301",
    status: "Obtenue",
    verifyUrl: "https://cp.certmetrics.com/cisco/en/public/verify/credential/328896ebc1b041579c057d945b48aff6",
    detail: "Commutation, VLAN, EtherChannel, routage IPv4/IPv6, NAT, ACL, dépannage.",
  },
  {
    name: "Fortinet FCP Network Security",
    status: "En préparation",
    detail: "Administration FortiGate, politiques, NAT, VPN IPsec/SSL, SD-WAN.",
  },
];

export const formations = [
  { year: "2024", title: "Administrateur Systèmes, Réseaux et Sécurité (Bac+4)", school: "OpenClassrooms" },
  { year: "2021", title: "Bachelor Responsable Ingénierie Systèmes & Réseaux", school: "CESI Dijon" },
  { year: "2020", title: "Mastère I Électronique, Énergie électrique et Automatique", school: "Université de Lorraine, Nancy" },
];

export const experiences = [
  {
    role: "Administrateur Systèmes",
    company: "Atos France",
    period: "Mai 2025 à aujourd'hui",
    place: "Lyon, hybride",
    context:
      "Exploitation d'une plateforme hospitalière utilisée par plus de 150 établissements de santé (client HOPSIS / Hospices Civils de Lyon), avec de fortes exigences de disponibilité.",
    points: [
      "Qualification et résolution des incidents de production N1/N2 via les outils ITSM.",
      "Maintien en conditions opérationnelles des environnements systèmes et applicatifs.",
      "Participation aux mises en production et aux opérations de maintenance.",
      "Coordination des interventions avec les équipes Réseau, Système, DBA et Applicatives.",
    ],
    tools: "Windows Server, SQL Server, FreshDesk, supervision",
  },
  {
    role: "Administrateur Systèmes & Réseaux",
    company: "Endrix",
    period: "Janvier 2024 à mai 2025",
    place: "Lyon",
    context:
      "Administration du système d'information d'un groupe d'expertise comptable multi-sites d'environ 800 collaborateurs.",
    points: [
      "Administration des réseaux LAN multi-sites, VLAN, équipements Aruba et Alcatel.",
      "Exploitation des pare-feu FortiGate : politiques, VPN IPsec, filtrage.",
      "Administration Microsoft 365, Entra ID et Intune, avec synchronisation Active Directory.",
      "Déploiement d'un bastion sécurisé Apache Guacamole sous Debian.",
      "Administration de l'infrastructure Hyper-V, sauvegardes Veeam et supervision Zabbix.",
    ],
    tools: "FortiGate, Windows Server, Hyper-V, Veeam, Debian, Zabbix",
  },
  {
    role: "Technicien Support IT / Administrateur Systèmes",
    company: "Fokus IT (client Fives CorTX)",
    period: "Avril à novembre 2023",
    place: "Lyon",
    context: "Maintien en condition opérationnelle de l'infrastructure et support N2.",
    points: [
      "Administration Windows Server et Active Directory (DHCP, GPO, WSUS).",
      "Supervision et analyse des événements avec Graylog et Splunk.",
      "Administration Linux Debian, GLPI et Ansible.",
    ],
    tools: "Windows Server, Debian, GLPI, Ansible, Graylog, Splunk",
  },
  {
    role: "Technicien de proximité",
    company: "DCS Easyware (client Samat)",
    period: "Septembre 2021 à avril 2023",
    place: "France",
    context: "Gestion du parc informatique et des comptes utilisateurs.",
    points: [
      "Création d'images système et déploiement de plus de 300 postes (Windows 10 et Linux).",
      "Administration Active Directory et Microsoft 365.",
    ],
    tools: "Active Directory, Microsoft 365, Windows 10/11, Linux",
  },
  {
    role: "Technicien informatique systèmes et réseaux",
    company: "Yoplait",
    period: "Octobre 2020 à août 2021",
    place: "Auxerre",
    context: "Gestion du parc informatique, déploiement de postes et incidents N1/N2.",
    points: [],
    tools: "",
  },
];

export const labs = [
  {
    title: "VPN IPsec site-à-site entre un siège et une agence",
    summary:
      "Deux sites reliés par un tunnel IPsec via Internet, avec des FortiGate des deux côtés. Le siège segmente ses postes en trois VLAN (10, 20, 30) derrière un cœur de réseau. L’agence héberge un datacenter avec AD, DNS, DHCP, fichiers, GLPI et Zabbix.",
    tools: "FortiGate, IPsec, VLAN, Cisco IOS, Windows Server, Linux, EVE-NG",
    status: "Projet phare",
  },
  {
    title: "SD-WAN multi-WAN avec FortiGate",
    summary:
      "Architecture SD-WAN avec répartition de charge, supervision SLA et NAT multi-WAN. Bascule automatique quand un lien WAN se dégrade.",
    tools: "FortiGate, SD-WAN, NAT, EVE-NG",
    status: "Objectif FCP",
  },
  {
    title: "Architecture LAN 3-Tier",
    summary:
      "Modèle hiérarchique Core, Distribution et Access avec redondance HSRP v2, agrégation EtherChannel et routage inter-VLAN.",
    tools: "VLAN, HSRP v2, EtherChannel, Cisco IOS, Packet Tracer",
    status: "CCNA",
  },
  {
    title: "OSPF multi-site, DHCP et ACL",
    summary:
      "Routage OSPF entre deux sites distants, DHCP centralisé et filtrage du trafic par ACL étendues. Validation de bout en bout et dépannage.",
    tools: "OSPF, DHCP, ACL étendues, Cisco IOS, Packet Tracer",
    status: "CCNA",
  },
];

export const trainingProjects = [
  "Intégration de Windows Server 2022 et Hyper-V dans une infrastructure existante (SET, commutateur virtuel, VLAN, switch Aruba).",
  "Architecture réseau sécurisée pour une grande entreprise : pare-feu FortiGate, VLAN, politiques d'accès.",
  "Infrastructure réseau pour une startup en croissance : switching L2/L3 Cisco et VLAN.",
];
