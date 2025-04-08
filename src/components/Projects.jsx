"use client"

import { useState } from "react"

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 0,
      title: "Mi Proyecto de Reflex",
      description:
        "Portafolio web desarrollado con Reflex, combinando potencia y elegancia en una interfaz moderna.",
      link: "https://portfolio-cyan-panda.reflex.run",
      github: "https://github.com/username/proyecto-reflex",
      tags: ["Reflex", "Python", "Web"],
      buttonStyle: {
        fontSize: "7rem",
        fontWeight: "bold",
        borderRadius: "15px 35px",
        border: "4px solid",
        backgroundImage:
          "radial-gradient(circle, #00DDEB 4%, #5B42F3 50%, #fa02aa 80%)",
      },
      buttonContent: "N",
      color: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      
      id: 1,
      title: "Landing Page Abogada",
      description:
        "Diseño elegante y profesional para una landing page personalizada, ideal para promoción de servicios legales.",
      link: "https://nicoucabrera.github.io/ColmanLandingPage/",
      github: "https://github.com/nicoucabrera/ColmanLandingPage",
      tags: ["HTML", "CSS", "Vite", "React", "Tailwind", "Responsive"],
      buttonStyle: {
        fontSize: "3rem",
        fontWeight: "bold",
        borderRadius: "20px",
        border: "3px solid #ffb6c1",
        backgroundColor: "#ffe4ec",
        color: "#b4005f",
      },
      buttonContent: "👩‍⚖️",
      color: "from-pink-300 via-pink-400 to-pink-500",
    },
  ]

  return (
    <section id="proyectos" className="py-6 px-4 overflow-hidden relative rounded-xl">
      <div className="absolute inset-0 bg-slate-900 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 animate-slow-spin blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-4">
          <h1 className="text-slate-300 text-3xl md:text-5xl font-extrabold tracking-wide inline-block relative">
            <span className="relative z-10">Proyectos</span>
            <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
          </h1>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                activeProject === index
                  ? "bg-pink-600 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
          <div className="lg:col-span-2 flex justify-center items-center">
            <div className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${projects[activeProject].color} rounded-2xl blur-2xl opacity-30 group-hover:opacity-70 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 p-4 flex justify-center items-center">
                <a
                  href={projects[activeProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button
                    style={projects[activeProject].buttonStyle}
                    className="text-black font-sans p-3 transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-xl"
                  >
                    {projects[activeProject].buttonContent}
                  </button>
                </a>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-sm opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 blur-sm opacity-70"></div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
            <div className="space-y-6">
              <div>
                <h2
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${projects[activeProject].color} text-3xl font-bold mb-3`}
                >
                  {projects[activeProject].title}
                </h2>
                <p className="text-slate-300 text-lg mb-2">{projects[activeProject].description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {projects[activeProject].tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${projects[activeProject].color} bg-opacity-10 text-white`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
