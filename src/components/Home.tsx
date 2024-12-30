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
            Passionné par les technologies de l'information, je possède plusieurs années d'expérience en administration systèmes et réseaux.
            <br />
            J'ai développé des compétences solides dans la gestion des infrastructures IT, la sécurité des réseaux, et le support technique.
          </p>
          <a href="" className=" btn btn-accent md:w-fit">
            <Mail className="w-5 h-5" />
            Contactez-moi
          </a>

        </div>

        <div className="md:ml-60">
            <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl" style={{
                borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
            }}/>

        </div>
      </div>
    )
  }
  
  export default Home;
  