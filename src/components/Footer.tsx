const Footer = () => {
    return (
        <footer className="footer footer-center p-6 bg-base-300 mt-10">
            <aside>
                <p className="font-bold">
                    Blanchard<span className="text-accent ml-2">Koubemba</span>
                </p>
                <p className="text-sm text-gray-400">
                    Copyright © {new Date().getFullYear()} — Ingénieur Réseaux & Sécurité
                </p>
            </aside>
        </footer>
    )
}

export default Footer
