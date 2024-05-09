"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projectCard";
import { landPage } from "@/static infos/statics";

const Projects = () => {
  return (
    <motion.div
      className="h-fit flex flex-wrap gap-4"
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

export default Projects;
