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
            className="flex flex-col md:flex-row items-stretch overflow-hidden rounded-lg border border-gray-200 shadow-sm"
          >
            <Link
              href={`/projects/${project.slug}`}
              className={`group relative block w-full md:w-1/2 h-64 md:h-auto ${
                index % 2 !== 0 ? "md:order-last" : ""
              }`}
            >
              <div className="overflow-hidden h-full w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill={true}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-2xl font-bold hover:underline">
                  {project.title}
                </h3>
              </Link>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{project.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge badge-primary badge-outline transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-content"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-300 flex-grow">
                {project.description}
              </p>
              <div className="mt-6 flex items-center justify-end gap-4">
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
