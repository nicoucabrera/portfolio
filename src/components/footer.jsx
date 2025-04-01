export default function Footer() {
  return (
    <footer className=" text-gray-800 text-center">
      <p class="text-4x1">
         <p className="text-3xl text-slate-200">🚀 Creado con</p><p className="text-3xl text-blue-400 font-bold ">Vite</p><p className="text-3xl text-green-400 font-bold">React</p><p className="text-3xl text-teal-400 font-bold">TailwindCSS</p>
      </p>
      <p className="text-2xl opacity-70 mt-1 text-slate-200">© {new Date().getFullYear()} - Nicolas Cabrera</p>
    </footer>
  );
}
