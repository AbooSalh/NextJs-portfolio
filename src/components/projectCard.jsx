import Image from "next/image";
import "./social.css";
import Link from "next/link";
export const ProjectCard = ({ id, title, desc, img, link, techs }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between">
      <div className="flex flex-col ">
        <Image
          width={100}
          height={100}
          className="w-full"
          src={img}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {techs.map((item) => {
            return (
              <span
                key={item.key}
                className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{item.key}
              </span>
            );
          })}
        </div>
      </div>
      <div className="buttons flex justify-between px-6 pb-5">
        <Link
          href={link.code}
          target="_blank"
          className="inline-flex h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Github
        </Link>
        <Link
          href={link.show}
          target="_blank"
          className="inline-flex h-9 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Demo
        </Link>
      </div>
    </div>
  );
};
