"use client"

import { ArrowDown, Code, FileText, Github } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className={`transition-all duration-500 ease-in-out py-8 ${isSticky ? "sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md shadow-lg py-4" : "min-h-screen flex flex-col items-center justify-center"}`}
    >
      <div
        className={`container mx-auto px-4 flex flex-col items-center ${isSticky ? "flex-row justify-between" : "justify-center text-center"}`}
      >
        <div className={`flex items-center ${isSticky ? "space-x-4" : "flex-col"}`}>
          <img
            className={`object-cover transition-all duration-300 border-4 border-sky-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-sky-600/100 bg-indigo-50 text-cyan-900 hover:drop-shadow-[0_0_10px_#72e3ff] ${isSticky ? "h-12 w-12" : "h-52 w-52 hover:scale-110 my-6"}`}
            src="https://avatars.githubusercontent.com/u/108552455?v=4"
            alt="profile"
          />

          <div>
            <h1
              className={`text-slate-200 font-extrabold px-4 py-2 rounded-lg transition duration-300 hover:drop-shadow-[0_0_10px_#72e3ff] ${isSticky ? "text-2xl" : "text-4xl mt-4"}`}
            >
              Bienvenido a mi portfolio!
            </h1>

            
          </div>
        </div>

        <div className={`flex gap-3 mt-8 ${isSticky ? "mt-0" : ""}`}>
          <a
            href="#proyectos"
            className="flex items-center gap-1 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md transition-all hover:scale-105"
          >
            <Code size={14} />
            <span>Proyectos</span>
          </a>
          <a
            href="#cv"
            className="flex items-center gap-1 bg-transparent border-2 border-sky-600 text-sky-400 hover:bg-sky-900/30 px-4 py-2 rounded-md transition-all hover:scale-105"
          >
            <FileText size={14} />
            <span>Curriculum</span>
          </a>
          <a
            href="https://github.com/nicoucabrera"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-transparent border-2 border-slate-600 text-slate-300 hover:bg-slate-800 px-4 py-2 rounded-md transition-all hover:scale-105"
          >
            <Github size={14} />
            <span className={`${isSticky ? "hidden sm:inline" : ""}`}>GitHub</span>
          </a>
        </div>
      </div>

      {!isSticky && (
        <div className="absolute bottom-10 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-slate-400 hover:text-sky-400 transition-colors">
            <span className="mb-2 text-sm">Scroll</span>
            <ArrowDown size={24} />
          </a>
        </div>
      )}
    </section>
  )
}