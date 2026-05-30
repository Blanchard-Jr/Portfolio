import { Mail } from "lucide-react";
import img from '../assets/Photo.jpg'

const Home = () => {
    return (
      <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
        {/* Section texte */}
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
            Bonjour, <br /> Je suis
            <span className="text-accent"> Blanchard Koubemba</span>
          </h1>

          <p className="my-4 text-md text-center md:text-left">
            Ingénieur Réseaux & Sécurité — CCNA 200-301 | Préparation Fortinet NSE4
            <br />
            Passionné par les architectures réseau, la sécurité des infrastructures et les solutions SD-WAN.
            Je conçois et documente des labs techniques sur Packet Tracer et PNetLab pour mettre en pratique
            les concepts étudiés en environnement réel.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
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

          {/* Badges certifications */}
          <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
            <span className="badge badge-accent badge-lg">🏅 CCNA 200-301</span>
            <span className="badge badge-outline badge-lg">🔥 Fortinet NSE4 en cours</span>
          </div>

        </div>

        {/* Photo — cadre professionnel carré avec bordure fine */}
        <div className="md:ml-60">
          <div className="relative w-80 h-80">
            {/* Carré décoratif décalé derrière */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-accent opacity-40"></div>
            {/* Photo */}
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
