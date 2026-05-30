import Title from "./Title";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <div className="mt-10 mb-10" id="Contact">
      <Title title="Contactez-moi" />

      <div className="flex flex-col items-center gap-6 mt-6">
        <p className="text-center text-sm text-gray-400 max-w-md">
          Disponible pour des opportunités en ingénierie réseaux & sécurité.
          N'hésitez pas à me contacter !
        </p>

        {/* Cartes de contact */}
        <div className="grid md:grid-cols-2 gap-4 w-full max-w-xl">

          <a href="mailto:blanchardkoubemba@gmail.com"
             className="flex items-center gap-4 bg-base-300 p-5 rounded-xl shadow-lg hover:border hover:border-accent transition-all">
            <Mail className="text-accent w-8 h-8 shrink-0" />
            <div>
              <p className="text-xs text-gray-400 mb-1">Email</p>
              <p className="font-semibold text-sm">blanchardkoubemba@gmail.com</p>
            </div>
          </a>

          <a href="tel:+33755177166"
             className="flex items-center gap-4 bg-base-300 p-5 rounded-xl shadow-lg hover:border hover:border-accent transition-all">
            <Phone className="text-accent w-8 h-8 shrink-0" />
            <div>
              <p className="text-xs text-gray-400 mb-1">Téléphone</p>
              <p className="font-semibold text-sm">+33 7 55 17 71 66</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/blanchard-koubemba-a9524ab5/"
             target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-4 bg-base-300 p-5 rounded-xl shadow-lg hover:border hover:border-accent transition-all">
            <Linkedin className="text-accent w-8 h-8 shrink-0" />
            <div>
              <p className="text-xs text-gray-400 mb-1">LinkedIn</p>
              <p className="font-semibold text-sm">blanchard-koubemba</p>
            </div>
          </a>

          <a href="https://github.com/Blanchard-Jr"
             target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-4 bg-base-300 p-5 rounded-xl shadow-lg hover:border hover:border-accent transition-all">
            <Github className="text-accent w-8 h-8 shrink-0" />
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
