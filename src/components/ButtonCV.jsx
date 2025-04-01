export default function DownloadCV() {
    return (
      <div className="flex justify-center mt-6">
        <a
          href="/portfolio/src/components/NicolásCabreraCV.pdf"
          download="NicolasCabreraCV.pdf"
          className="bg-slate-500 hover:bg-slate-700 text-slate-200 font-bold py-2 px-6 rounded-lg transition-all shadow-md"
        >
          Descargar CV
        </a>
      </div>
    );
  }
  
