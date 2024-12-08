import React from "react";
import { projects } from "./project-data";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col sm:flex-row bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-700">
              {/* Imagen del proyecto */}
              <div className="sm:w-1/2 w-full flex justify-center sm:justify-start">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full sm:w-[80%] h-48 object-cover object-center transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
              {/* Información del proyecto */}
              <div className="sm:ml-8 mt-4 sm:mt-0 flex flex-col justify-between text-black dark:text-white">
                <div className="w-full flex justify-between items-baseline">
                  <span className="font-medium tracking-tight">
                    {project.title}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {project.year}
                  </span>
                </div>
                <p className="prose prose-neutral dark:prose-invert pt-3">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
