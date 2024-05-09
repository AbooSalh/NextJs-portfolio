/* eslint-disable react/no-unescaped-entities */
"use client";

import { PortfolioCard } from "../../components/portfolioCard";
import PPP, { ProjectsPage } from "../../components/pages/PPP";
import { landPage } from "../../static infos/statics";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const screesSizes = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const PortfolioPage = () => {
  const ref = useRef();
  const router = useRouter();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // Check for width on the client-side using conditional rendering

  return (
    <>
      <PPP />
      <motion.div
        className="h-full sm:hidden lg:block md:block xsm:hidden"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[600vh] relative" ref={ref}>
          <div className="w-full h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
            My Works
          </div>
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex">
              <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
              {landPage.portfolioProject.map((item, i) => (
                <div
                  key={i}
                  className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} z-[100]`}
                >
                  <PortfolioCard
                    title={item.title}
                    desc={item.desc}
                    id={item.id}
                    img={item.img}
                    link={{
                      code: item.link.code,
                      show: item.link.show,
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full h-screen flex flex-col gap-16 items-center justify-center text-center">
            <h1 className="text-5xl">Do you have a project?</h1>
            <div className="relative">
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                viewBox="0 0 300 300"
                className="w-64 h-64 md:w-[500px] md:h-[500px] "
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <text fill="#000">
                  <textPath xlinkHref="#circlePath" className="text-xl">
                    Front-end Developer and UI Designer
                  </textPath>
                </text>
              </motion.svg>
              <Link
                href="/contact"
                className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
              >
                Hire Me
              </Link>
            </div>
          </div>
          <div className="w-full h-screen flex flex-col gap-16 items-center justify-center text-center">
            <h1 className="text-5xl">I'm not convinced yet, show me more !</h1>
            <div className="relative">
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                viewBox="0 0 300 300"
                className="w-64 h-64 md:w-[500px] md:h-[500px] "
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <text fill="#000">
                  <textPath xlinkHref="#circlePath" className="text-xl">
                    Go to projects page - FrontEnd Developer -
                  </textPath>
                </text>
              </motion.svg>
              <Link
                href="/projects"
                className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
              >
                load more
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default PortfolioPage;
