import { PROJECTS } from "@/data/PROJECTS";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          My Projects
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          A collection of projects I&apos;ve built.
        </p>
      </div>

      <div className="mt-12 space-y-16">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-stretch overflow-hidden rounded-lg border border-gray-200 shadow-sm relative group"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="absolute inset-0 z-10"
            >
              <span className="sr-only">View project</span>
            </Link>
            <div
              className={`relative w-full md:w-1/2 h-64 md:h-auto ${
                index % 2 !== 0 ? "md:order-last" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold group-hover:underline">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge badge-primary badge-outline transition-transform hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-gray-500 flex-grow">
                {project.description}
              </p>
              <div className="mt-6 flex items-center justify-end gap-4 relative z-20">
                {project.links.repo && (
                  <Link
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-hover link"
                  >
                    Source Code
                  </Link>
                )}
                {project.links.live && (
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
