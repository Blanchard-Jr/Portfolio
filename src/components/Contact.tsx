import Title from "./Title";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="mt-10 mb-10" id="Contact">
      <Title title="Contactez-moi" />

      <div className="flex flex-col items-center gap-6 mt-6 max-w-2xl mx-auto">

        {/* Intro */}
        <div className="text-center">
          <p className="text-gray-300 text-sm leading-relaxed">
            Administrateur Réseaux & Sécurité basé à <span className="text-accent font-semibold">Lyon</span>,
            ouvert à des opportunités en <span className="text-accent font-semibold">administration et ingénierie réseaux & sécurité</span>.
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Disponible rapidement — n'hésitez pas à me contacter.
          </p>
        </div>

        {/* Localisation */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <MapPin className="text-accent w-4 h-4" />
          <span>Lyon, Auvergne-Rhône-Alpes — Permis B, véhicule personnel</span>
        </div>

        {/* Cartes de contact */}
        <div className="grid md:grid-cols-2 gap-4 w-full">

          <a href="mailto:blanchardkoubemba@gmail.com"
             className="flex items-center gap-4 bg-base-300 p-5 rounded-xl shadow-lg hover:border hover:border-accent transition-all group">
            <Mail className="text-accent w-8 h-8 shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-xs text-gray-400 mb-1">Email</p>
              <p className="font-semibold text-sm">blanchardkoubemba@gmail.com</p>
            </div>
          </a>

          <a href="tel:+33755177166"
             className="flex items-center gap-4 bg-base-300 p-5 rounded-xl shadow-lg hover:border hover:border-accent transition-all group">
            <Phone className="text-accent w-8 h-8 shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-xs text-gray-400 mb-1">Téléphone</p>
              <p className="font-semibold text-sm">+33 7 55 17 71 66</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/blanchard-koubemba-a9524ab5/"
             target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-4 bg-base-300 p-5 rounded-xl shadow-lg hover:border hover:border-accent transition-all group">
            <Linkedin className="text-accent w-8 h-8 shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-xs text-gray-400 mb-1">LinkedIn</p>
              <p className="font-semibold text-sm">blanchard-koubemba</p>
            </div>
          </a>

          <a href="https://github.com/Blanchard-Jr"
             target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-4 bg-base-300 p-5 rounded-xl shadow-lg hover:border hover:border-accent transition-all group">
            <Github className="text-accent w-8 h-8 shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-xs text-gray-400 mb-1">GitHub</p>
              <p className="font-semibold text-sm">Blanchard-Jr</p>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
