// app/projects/[slug]/page.tsx
import { PROJECTS } from "@/data/PROJECTS";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="rounded-lg object-cover"
          />
          {project.gallery && (
            <div className="mt-4 grid grid-cols-2 gap-4">
              {project.gallery.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${project.title} gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          )}
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">{project.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="badge badge-primary badge-outline transition-all duration-200 hover:bg-primary hover:text-primary-content hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-300">{project.description}</p>
          <div className="mt-8 flex items-center gap-4">
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
    </main>
  );
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;

    const project = PROJECTS.find(p => p.slug === slug);
    if (!project) return {};

    const og = typeof project.image === "string"
        ? project.image
        : project.image.src;

    return {
        title: project.title,
        description: project.tagline,
        openGraph: { images: [og] },
    };
}
