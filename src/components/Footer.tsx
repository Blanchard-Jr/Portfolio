import { Container, Twitter, Github, Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10">
            <aside>
                {/* Icône principale */}
                <Container className="w-15 h-15" />

                {/* Texte principal */}
                <p className="font-bold">
                    Blanchard<span className="text-accent ml-2">Koubemba</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - Tous les droits sont réservés</p>
            </aside>

            {/* Navigation avec icônes sociales */}
            <nav>
                <div className="grid grid-flow-col gap-4">
                    {/* Lien vers LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/blanchardkoubemba/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Suivez-moi sur LinkedIn"
                    >
                        <Linkedin className="w-6 h-6 text-current" />
                    </a>

                    {/* Lien vers GitHub */}
                    <a 
                        href="https://github.com/Blanchard-Jr/projets-techniques" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Suivez-moi sur GitHub"
                    >
                        <Github className="w-6 h-6 text-current" />
                    </a>

                    {/* Lien vers X */}
                    <a 
                        href="https://x.com/magicblanchard?s=21&t=VZHk1bkB9jTAyDbKX1uKBw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Suivez-moi sur X"
                    >
                        <Twitter className="w-6 h-6 text-current" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
