"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { landPage } from "@/static infos/statics";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8 }}
    >
      <div className="h-[100vh-96px] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-5 items-center">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative flex justify-center">
          <Image src="/hero.png" alt="" width={600} height={500} className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center sm:py-14">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            {landPage.h1}
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            {landPage.welcomP}
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
