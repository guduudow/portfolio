"use client";
import Image from "next/image";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <div className="w-full py-20 bg-primary relative z-10" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h4 className="text-2xl font-semibold text-background mb-8 text-center md:text-left">
          projects
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-background rounded-lg p-4 flex flex-col justify-between h-full"
            >
              <div className="pb-3 flex justify-center">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={200}
                  height={200}
                  className="max-w-full h-auto object-contain"
                />
              </div>
              <div className="pt-3 text-center flex-grow">
                <h4 className="text-lg font-semibold text-main">
                  {project.name}
                </h4>
              </div>
              <div className="py-3 text-justify flex-grow">{project.desc}</div>
              <div className="py-3 flex items-center justify-between">
                {project.pagelink ? (
                  <a
                    href={project.pagelink}
                    className="bg-primary text-background px-4 py-2 text-sm font-medium rounded-lg"
                  >
                    Visit Site
                  </a>
                ) : null}
                <a
                  href={project.repolink}
                  className="bg-accent text-background px-4 py-2 text-sm font-medium rounded-lg"
                >
                  View on Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
