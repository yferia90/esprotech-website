import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";

const Header =  () => {

  // abrir y cerrar el menu movil
  const [openMenu, setOpenMenu] = useState(false);
  const menu = () => {
    if(openMenu){
      setOpenMenu(false);
    }else{
      setOpenMenu(true);
    }
  }

  return(
    <>
    <header className="flex z-40 items-center justify-between bg-white py-3 px-5 shadow-lg fixed top-0 w-full">
      <div>
        <a href="/">
          <Image className=""
          src='/logo-esprotech.png' alt='EsproTech' width={150} height={31}/>
        </a>
      </div>
      <div>
        <div onClick={menu} className="md:hidden w-11 h-11 py-2 flex justify-center items-center text-lg border border-transparent text-slate-800 rounded-xl hover:border-slate-200
          hover:text-red-600 hover:bg-slate-100 transition-all duration-300">
          {openMenu ? (
            <FontAwesomeIcon icon={faXmark}/>
          ):(
            <FontAwesomeIcon icon={faBars}/>
          )}
        </div>

        {/*MENU EN PC*/}
        <nav className="flex-wrap hidden md:flex justify-end bg-white">
          <a className="py-2 px-3 text-lg border border-transparent text-slate-800 rounded-xl hover:border-red-600
          hover:text-red-600 hover:bg-transparent transition-all duration-300"
          href="#">Inicio</a>
          <a className="py-2 px-3 text-lg border border-transparent text-slate-800 rounded-xl hover:border-red-600
          hover:text-red-600 hover:bg-transparent transition-all duration-300"
          href="#">¿Quiénes somos?</a>
          <a className="py-2 px-3 text-lg border border-transparent text-slate-800 rounded-xl hover:border-red-600
          hover:text-red-600 hover:bg-transparent transition-all duration-300"
           href="#">Productos y servicios</a>
          <a className="py-2 px-3 text-lg border border-transparent text-slate-800 rounded-xl hover:border-red-600
          hover:text-red-600 hover:bg-transparent transition-all duration-300"
           href="#">Equipos IT</a>
          <a className="py-2 px-3 text-lg border border-transparent text-slate-800 rounded-xl hover:border-red-600
          hover:text-red-600 hover:bg-transparent transition-all duration-300"
           href="#">Contáctanos</a>
        </nav>
      </div>
    </header>

    {/*MENU EN EL MOVIL*/}
    <nav className={`${openMenu?'right-0':'-right-72'} transition-all duration-300 flex-wrap flex md:hidden fixed bg-white 
    w-64 h-screen top-16 z-30 flex-col items-center pt-6 px-3 shadow-lg`}>
      <a onClick={menu} className="py-2 px-3 text-lg border border-transparent text-slate-800 rounded-xl hover:border-red-600
      hover:text-red-600 hover:bg-transparent transition-all duration-300 block w-full text-center"
      href="#">Inicio</a>
      <a onClick={menu} className="py-2 px-3 text-lg border border-transparent text-slate-800 rounded-xl hover:border-red-600
      hover:text-red-600 hover:bg-transparent transition-all duration-300 block w-full text-center"
      href="#">¿Quiénes somos?</a>
      <a onClick={menu} className="py-2 px-3 text-lg border border-transparent text-slate-800 rounded-xl hover:border-red-600
      hover:text-red-600 hover:bg-transparent transition-all duration-300 block w-full text-center"
       href="#">Productos y servicios</a>
      <a onClick={menu} className="py-2 px-3 text-lg border border-transparent text-slate-800 rounded-xl hover:border-red-600
      hover:text-red-600 hover:bg-transparent transition-all duration-300 block w-full text-center"
       href="#">Equipos IT</a>
      <a onClick={menu} className="py-2 px-3 text-lg border border-transparent text-slate-800 rounded-xl hover:border-red-600
      hover:text-red-600 hover:bg-transparent transition-all duration-300 block w-full text-center"
       href="#">Contáctanos</a>
    </nav>

    {/*IMAGEN DE PORTADA*/}
    <div className="w-full h-60vh bg-[url('/img-header.jpg')] bg-cover bg-center mt-16 flex justify-center items-end">
      <h3 className="pb-16 px-3 text-center text-2xl md:text-3xl text-white font-semibold">
      ¿Quiénes somos?
      </h3>
    </div>
    </>
  )
}

export default Header;