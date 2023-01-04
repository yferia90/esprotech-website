import Card from "components/card";

function Services() {
  return (
    <div id="services" className="bg-[url('/bg.jpg')] bg-cover bg-center pb-6">
      <h3 className="text-2xl md:text-3xl text-white px-5 pb-5 pt-12 font-semibold text-center">
        Catálogo de productos y servicios
      </h3>
      <div className="flex flex-wrap justify-center items-start max-w-5xl mx-auto">
        <Card
          img="/products-services/tecopos.png"
          link="#"
          btn='1'
          title="Punto de venta"
          description="TECOPOS puntos de venta listo para lo que te propongas."
        />
        <Card
          img="/products-services/srt.png"
          link="#"
          btn='1'
          title="APP para reserva de turnos"
          description="ART es una APP pensada para la reserva y gestión del acceso a espacios deportivos"
        />
        <Card
          img="/products-services/sge.png"
          link="#"
          btn='1'
          title="Sistema de gestión empresarial"
          description="SGE está pensado para que los pequeños y medianos negocios puedan acceder a una herramienta digital que integra sus procesos"
        />
      </div>
    </div>
  );
}
export default Services;
