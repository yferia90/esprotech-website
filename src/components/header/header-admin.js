import Image from "next/image";
import Link from "next/link";

const HeaderAdmin =  () => {
  return(
    <>
    <header className="flex z-40 items-center justify-between bg-white py-3 px-5 shadow-lg fixed top-0 w-full">
      <div>
        <Link href="/admin/admin">
          <a>
            <Image className=""
            src='/logo-esprotech.png' alt='EsproTech' width={150} height={31}/>
          </a>
        </Link>
      </div>      
    </header>
    <div className="w-full h-60vh bg-[url('/img-header.jpg')] bg-cover bg-center mt-16 flex justify-center items-end">
        <h3 className="pb-16 px-3 text-center text-2xl md:text-3xl text-white font-semibold">
            Administración de finanzas
        </h3>
    </div>
    </>
  )
}

export default HeaderAdmin;