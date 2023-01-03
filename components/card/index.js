import Link from "next/link";
import Image from "next/image";

export default function Card(props) {

  return (
  <div className="w-full box-border sm:w-1/2 md:w-1/3 p-3">
    <div className="w-full rounded-xl shadow-lg overflow-hidden bg-white">
      <div className="relative border-b-2 border-red-600">
        <div className="aspect-w-1 aspect-h-1">
          <Image className="w-full" src={props?.img} layout='fill'/>
        </div>
      </div>
      <div>
        <h3 className="text-xl text-slate-900 font-semibold p-3 line-clamp-3 pb-0 mb-3">
          {props?.title}
        </h3>
        <div className="h-0 border-t-2 border-red-600 w-12 ml-3"></div>
        <p className="font-base p-3 line-clamp-4 pb-0 mb-3">
          {props?.description}
        </p>
        <Link href={props?.link}>
          <a
            className={`${props?.btn?'inline-block':'hidden'} py-2 px-3 text-xs text-slate-800 border border-slate-200
            bg-transparent hover:border-red-600 hover:text-red-600 rounded-xl duration-300
            transition-all mb-3 ml-3 inline-block`}
          >
            Saber más
          </a>
        </Link>
      </div>
    </div>
  </div>  
  );
}
