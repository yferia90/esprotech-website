import Card from "../card";

function Develop() {
  return (
    <div id="teams" className="bg-slate-100 pb-6">
      <h3 className="text-2xl md:text-3xl text-slate-900 px-5 pb-5 pt-12 font-semibold text-center">
        Conformamos equipos de desarrollo de software
      </h3>
      <div className="flex flex-wrap justify-center items-start max-w-5xl mx-auto">
        <Card
          img="/teams-develop/nodejs.png"
          link="#"
          title="Backend basado en Microservicios"
          description="Diseñamos e implementamos API REST basadas en Microservicios"
        />
        <Card
          img="/teams-develop/react.png"
          link="#"
          title="Ofrecemos aplicaciones webs modernas"
          description="Desarrollamos las aplicaciones webs empleando tecnología moderna"
        />
        <Card
          img="/teams-develop/odoo.png"
          link="#"
          title="Integramos aplicaciones con el ERP opensource Odoo"
          description="Realizamos integraciones de aplicaciones con el moderno y robusto ERP libre Odoo"
        />
        <Card
          img="/teams-develop/react-native.png"
          link="#"
          title="Ofrecemos Aplicaciones móviles"
          description="Desarrollamos aplicaciones móviles empleando el mismo stack tecnológico para web"
        />
        <Card
          img="/teams-develop/python.png"
          link="#"
          title="Realizamos análisis de datos e IA"
          description="Con el sencillo pero robusto lenguaje python realizamos análisis de datos e IA"
        />
        <Card
          img="/teams-develop/scrum.png"
          link="#"
          title="El producto y el equipo IT"
          description="El equipo IT está orientado por los roles y ceremonias que dicta la metodología ágil SCRUM"
        />
      </div>
    </div>
  );
}
export default Develop;
