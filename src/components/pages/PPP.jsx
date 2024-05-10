"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "../../components/projectCard";
import { landPage } from "../../static infos/statics";

const PPP = () => {
  return (
    <motion.div
      className="h-fit flex justify-evenly flex-wrap gap-4 lg:hidden md:hidden sm:flex "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8 }}
    >
      {landPage.portfolioProject.map((item, i) => {
        return <ProjectCard key={item.id} {...item} />;
      })}
    </motion.div>
  );
};

export default PPP;
