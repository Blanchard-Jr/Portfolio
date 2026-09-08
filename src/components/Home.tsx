import { Mail } from "lucide-react";
import img from '../assets/Photo.jpg'

const Home = () => {
    return (
      <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
            Bonjour, <br /> Je suis
            <span className="text-accent"> Blanchard Koubemba</span>
          </h1>

          <p className="my-2 text-lg font-semibold text-accent text-center md:text-left">
            Administrateur Réseaux & Sécurité | Cisco CCNA
          </p>

          <p className="my-3 text-md text-center md:text-left text-gray-300 leading-relaxed">
            Passionné par les technologies réseau depuis plusieurs années, je conçois, déploie
            et sécurise des infrastructures LAN/WAN dans des environnements multi-sites.
            <br /><br />
            Certifié <span className="text-accent font-semibold">Cisco CCNA 200-301</span>, je développe
            actuellement mon expertise sur les solutions Fortinet (FortiGate, VPN IPsec, SD-WAN,
            Firewall Policies) avec pour objectif d'évoluer vers un poste d'Ingénieur Réseaux & Sécurité
            et la certification <span className="text-accent font-semibold">FCP Network Security</span>.
            <br /><br />
            Chaque lab présenté sur ce portfolio est conçu, configuré, documenté et validé afin
            de démontrer concrètement mes compétences techniques.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-2">
            <a href="#Contact" className="btn btn-accent md:w-fit">
              <Mail className="w-5 h-5" />
              Contactez-moi
            </a>
            <a href="https://github.com/Blanchard-Jr/labs-reseau-securite"
               target="_blank"
               rel="noopener noreferrer"
               className="btn btn-outline md:w-fit">
              Voir mes Labs
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mt-5 justify-center md:justify-start">
            <span className="badge badge-accent badge-lg">🏅 CCNA 200-301</span>
            <span className="badge badge-outline badge-lg">🔥 FCP Network Security — en cours</span>
          </div>
        </div>

        <div className="md:ml-60">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-accent opacity-40"></div>
            <img
              src={img}
              alt="Blanchard Koubemba"
              className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    )
  }

export default Home;
