import Title from "./Title"

import img1 from '../assets/projects/1.webp';
import img2 from '../assets/projects/2.webp';
import img3 from '../assets/projects/3.webp';
import img4 from '../assets/projects/4.png';
import img5 from '../assets/projects/5.png';
import img6 from '../assets/projects/6.png';
import { Github } from "lucide-react";

// import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Serveur-web",
        description:'Dans ce projet, vous apprendrez à configurer un serveur prototype pour héberger les sites du projet EXTRANET en utilisant des technologies de pointe.',
        technologies: ['NGINX', 'FTPS', 'Fail2Ban'],
        demoLink: "#",
        repoLink: "https://github.com/Blanchard-Jr/projets-techniques/tree/main/serveur-web",
        image: img1,
    },
    {
        id: 2,
        title: 'Securisation-reseau',
        description: 'Dans ce projet, vous apprendrez à protéger l_entreprise contre les attaques potentielles.',
        technologies: ['VLAN', 'Cisco', 'Fortigate'],
        demoLink: '#',
        repoLink: 'https://github.com/Blanchard-Jr/projets-techniques/tree/main/securisation-reseau',
        image: img2,
    },
    {
        id: 3,
        title: 'Reseau-local-startup',
        description: 'Dans ce projet, vous apprendrez à mettre en place une infrastructure réseau fiable pour soutenir la croissance d_une startup.',
        technologies: ['Switch L2 & L3', 'Cisco', 'VLAN'],
        demoLink: '#',
        repoLink: 'https://github.com/Blanchard-Jr/projets-techniques/tree/main/reseau-local-startup',
        image: img3,
    },
    {
        id: 4,
        title: 'Gestion-demandes',
        description: 'Dans ce projet, vous apprendrez à gérer les demandes utilisateurs en fournissant des solutions rapides aux problèmes rencontrés dans une PME.',
        technologies: ['GLPI', 'Ubuntu', 'LAMP'],
        demoLink: '#',
        repoLink: 'https://github.com/Blanchard-Jr/projets-techniques/tree/main/gestion-demandes',
        image: img4,
    },
    {
        id: 5,
        title: 'Configuration-reseau-equipements',
        description: 'Dans ce projet, vous apprendrez à configurer les équipements réseau d’un nouveau local comprenant trois bâtiments, en suivant les directives fournies dans le cahier des charges et le schéma réseau.',
        technologies: ['Cisco Packet Tracer', 'LAN', 'Cisco'],
        demoLink: '#',
        repoLink: 'https://github.com/Blanchard-Jr/projets-techniques/tree/main/configuration-reseau-equipements',
        image: img5,
    },
    {
        id: 6,
        title: 'Architecture-n-tiers',
        description: 'Dans ce projet, vous apprendrez à configurer et déployer trois serveurs distincts pour Apache et PHP, MySQL, et Bind9.',
        technologies: ['MySQL', 'LAMP', 'Apache2'],
        demoLink: '#',
        repoLink: 'https://github.com/Blanchard-Jr/projets-techniques/tree/main/architecture-n-tiers',
        image: img6,
    },
];

const Projects = () => {
  return (
    <div className="mt-10" id="Projects">
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
            <img 
            src={project.image}
            alt={project.title} 
            className="w-full rounded-xl h-56 object-cover"/>
            <div>
              <h1 className="my-2 font-bold">
                {project.title}
              </h1>
              <p className="text-sm">{project.description}</p>
            </div>

                  <div className="flex flex-wrap gap-2 my-3">
                    {project.technologies.map((tech) => (
                      <span className="badge badge-accent badge-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex">
                    <a className="btn btn-neutral" href={project.repoLink}>
                      <Github className="w-4" />
                    </a>
                  </div>

          </div>

        ))}
      </div>
    </div>
  )
}

export default Projects
