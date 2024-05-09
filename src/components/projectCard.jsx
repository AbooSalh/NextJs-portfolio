import Image from "next/image";
import "./social.css";
export const ProjectCard = ({ id, title, desc, img, link, techs }) => {
  return (
    <div id="container" className="flex card flex-col  w-[550px] ">
      <div className="product-details flex flex-col gap-1 justify-between w-full">
        <div className="text-4xl xmd:text-3xl">{title}</div>
        <p className="information w-full ">{desc}</p>
        <div className="flex w-full justify-between mt-10">
          <a
            href={link.code}
            target="_blank"
            className="rounded bg-gray-300 p-2 hover:bg-black  hover:text-white transition w-[40%] text-center"
          >
            Github
          </a>
          <a
            href={link.show}
            target="_blank"
            className="rounded bg-gray-300 p-2 hover:bg-black  hover:text-white transition w-[40%] text-center"
          >
            Demo
          </a>
        </div>
      </div>
      <div className="product-image w-full">
        <Image
          src={img}
          width={256}
          height={260}
          alt="hi"
          className="w-full"
        ></Image>
        <div className="info">
          <h2 className="text-2xl my-4">Technologies</h2>
          <ul className="ml-6">
            {techs?.map((tech) => {
              return (
                <li key={tech.key}>
                  <strong>{tech.key} : </strong> {tech.desc}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
