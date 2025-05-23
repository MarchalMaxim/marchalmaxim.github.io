import { PROJECTS } from "@/data/PROJECTS";
import Link from "next/link";
import Image from "next/image";

export function ProjectsOverview() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section
      id="projects"
      className="container mx-auto mb-24 max-w-6xl space-y-8 px-4"
    >
      <h2 className="text-2xl font-semibold">Featured projects</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <Link key={project.id} href={`/projects/${project.slug}`}> 
            {/* <a className="card cursor-pointer border transition hover:shadow-lg"> */}
              <figure className="aspect-video bg-base-200 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="opacity-80">{project.tagline}</p>
              </div>
            {/* </a> */}
          </Link>
        ))}
      </div>
    </section>
  );
}