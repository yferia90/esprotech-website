export default function About() {
  return (
  <div className="bg-slate-100">
    <div className="flex flex-wrap justify-center items-stretch bottom-10 relative max-w-5xl mx-auto">
      <div className="w-full px-3 pt-0 pb-5 sm:w-1/2 sm:pb-0">
        <p className="w-full p-3 rounded-xl bg-white text-lg text-slate-900 font-semibold shadow-lg h-full">
          Acompañamos a nuestros clientes en sus desafíos de informatizar sus
          áreas y procesos de negocios, para eso les garantizamos productos y
          servicios que cumplen con altos estándares de <span className="bg-red-600 text-white px-1">calidad</span>.
        </p>
      </div>
      <div className="w-full px-3 pt-0 sm:w-1/2">
        <p className="w-full p-3 rounded-xl bg-white text-lg text-slate-900 font-semibold shadow-lg h-full">
          Constituimos equipos de trabajo <span className="bg-red-600 text-white px-1">IT</span> con profesionales capacitados en
          las tecnologías más demandadas en el mundo del desarrollo de
          aplicaciones móviles y web.
        </p>
      </div>
    </div>
  </div>
  );
}