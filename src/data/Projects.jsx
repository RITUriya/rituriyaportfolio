import React from "react";
import { demoProjects } from "./projectlist";
import ProjectCard from "../components/ProjectCard";
import { Project_Repo } from "../const/pageText";

const Projects = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8f9fa] via-[#e3f2fd] to-[#f1f8ff] text-white px-4 md:px-12 py-12 projects-container">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-white mb-12 projects-title">
          {Project_Repo}
        </h1>
        <div className="grid gap-8 md:grid-cols-2 projects-description">
          {demoProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
