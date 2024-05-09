"use client";
import Brain from "../../components/Brain";
import { landPage } from "../../static infos/statics";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const skillClasses =
  "rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black";
const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full w-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full lg:flex lg:overflow-scroll" ref={containerRef}>
        {/* text container */}
        <div className="sm:p-8 md:p-12 lg:p-20 xl:p-40 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:1/2 lg:pr-0">
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
            <FontAwesomeIcon icon={faDownLong} bounce width="100px" size="2x" />
          </div>
          {/* skills container */}
          <div
            className=" flex flex-col gap-12 justify-center p-2"
            ref={skillRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* skills list */}
            <div className="flex gap-4 flex-wrap z-[100]">
              {landPage.skills.map((skill) => {
                return (
                  <motion.div className={skillClasses} key={skill}>
                    {skill}
                  </motion.div>
                );
              })}
            </div>
            {/* scroll svg  */}
            <FontAwesomeIcon icon={faDownLong} bounce width="100px" size="2x" />
          </div>
          {/* Experience container */}
          <div
            className=" flex flex-col gap-12 justify-center p-2 pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-350px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* Experience list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={{ x: 0 }}
              className=""
            >
              {landPage.experiences.map((experience, i) => {
                if (i % 2 != 0) {
                  return (
                    <div
                      className="flex justify-between h-48"
                      key={experience.title}
                    >
                      {/* LEFT */}
                      <div className="w-1/3 "></div>
                      {/* CENTER */}
                      <div className="w-1/6 flex justify-center">
                        {/* LINE */}
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                          {/* LINE CIRCLE */}
                          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                        </div>
                      </div>
                      {/* RIGHT */}
                      <div className="w-1/3 ">
                        {/* JOB TITLE */}
                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                          {experience.title}
                        </div>
                        {/* JOB DESC */}
                        <div className="p-3 text-sm italic">
                          {experience.description}
                        </div>
                        {/* JOB DATE */}
                        <div className="p-3 text-red-400 text-sm font-semibold">
                          {experience.date}
                        </div>
                        {/* JOB COMPANY */}
                        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                          {experience.company}
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="flex justify-between h-48"
                      key={experience.title}
                    >
                      {/* LEFT */}
                      <div className="w-1/3 ">
                        {/* JOB TITLE */}
                        <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                          {experience.title}
                        </div>
                        {/* JOB DESC */}
                        <div className="p-3 text-sm italic">
                          {experience.description}
                        </div>
                        {/* JOB DATE */}
                        <div className="p-3 text-red-400 text-sm font-semibold">
                          {experience.date}
                        </div>
                        {/* JOB COMPANY */}
                        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                          {experience.company}
                        </div>
                      </div>
                      {/* CENTER */}
                      <div className="w-1/6 flex justify-center">
                        {/* LINE */}
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                          {/* LINE CIRCLE */}
                          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                        </div>
                      </div>
                      {/* RIGHT */}
                      <div className="w-1/3 "></div>
                    </div>
                  );
                }
              })}
            </motion.div>
          </div>
        </div>
        {/* svg container */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
