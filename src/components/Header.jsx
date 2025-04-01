import { useRef } from "react";

export default function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black p-4 flex gap-6">
        <button 
          className="hover:drop-shadow-[0_0_1px_#FFFFFF]" 
          onClick={() => scrollToSection(aboutRef)}
        >
          Sobre mí
        </button>
        <button 
          className="hover:drop-shadow-[0_0_1px_#FFFFFF]" 
          onClick={() => scrollToSection(projectsRef)}
        >
          Proyectos
        </button>
        <button 
          className="hover:drop-shadow-[0_0_1px_#FFFFFF]" 
          onClick={() => scrollToSection(contactRef)}
        >
          Contacto
        </button>
      </nav>
    </div>
  );
}
