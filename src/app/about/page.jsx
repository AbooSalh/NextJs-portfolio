"use client";
import { landPage } from "@/static infos/statics";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
const skillClasses =
  "rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black";
const AboutPage = () => {
  return (
    <motion.div
      className="h-full w-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="">
        {/* text container */}
        <div className="sm:p-8 md:p-12 lg:p-20 xl:p-40 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* biography container */}
          <div className=" flex flex-col gap-12 justify-center p-2">
            <h1 className="font-bold text-2xl">
              {"biography".toLocaleUpperCase()}
            </h1>
            <p className="text-lg">{landPage.biography}</p>
            <span className="italic">
              Transforming your ideas into interactive realities
            </span>
            <Image
              src="/sign.png"
              width={200}
              height={200}
              alt="my signature"
              className="self-end"
            ></Image>
            <FontAwesomeIcon icon={faDownLong} bounce width="100px" />
          </div>
          {/* skills container */}
          <div className=" flex flex-col gap-12 justify-center p-2">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* skills list */}
            <div className="flex gap-4 flex-wrap">
              <div className={skillClasses}>HTML</div>
              <div className={skillClasses}>SEO</div>
              <div className={skillClasses}>javaScript</div>
              <div className={skillClasses}>javaScript</div>
              <div className={skillClasses}>javaScript</div>
              <div className={skillClasses}>javaScript</div>
              <div className={skillClasses}>javaScript</div>
            </div>
            {/* scroll svg  */}
            <FontAwesomeIcon icon={faDownLong} bounce width="100px" />
          </div>
          {/* Experience container */}
          <div>Experience</div>
        </div>
        {/* svg container */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
