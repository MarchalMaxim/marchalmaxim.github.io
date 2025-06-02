// src/components/ProjectPage.tsx
import Image from "next/image";
import { ReactNode } from "react";

export interface ProjectPageProps {
  title: string;
  tagline: string;
  description: string;
  image: string;
  links: { live?: string; repo?: string };
  children?: ReactNode;        // optional extras per project
}

export default function ProjectPage({
  title,
  tagline,
  description,
  image,
  links,
  children,
}: ProjectPageProps) {
  return (
    <article className="mx-auto max-w-7xl px-4 py-16">
      {/* 50 / 50 HERO */}
      <section className="flex flex-col-reverse gap-10 md:flex-row md:items-center">
        {/* TEXT BLOCK */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold leading-tight">{title}</h1>
          <p className="mt-2 text-lg text-base-content/80">{tagline}</p>

          <p className="prose prose-neutral dark:prose-invert mt-6">
            {description}
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex gap-4">
            {links.live && (
              <button className="btn btn-primary">
                <a href={links.live} target="_blank" rel="noopener">
                  Visit live
                </a>
              </button>
            )}
            {links.repo && (
               <button className="btn btn-primary">
                <a href={links.repo} target="_blank" rel="noopener">
                  View source
                </a>
              </button>
            )}
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="md:w-1/2">
          {/* keep image from going edge-to-edge and maintain aspect */}
          <div className="relative mx-auto aspect-video w-full max-w-[560px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* OPTIONAL CUSTOM SECTION */}
      {children && <section className="mt-16">{children}</section>}
    </article>
  );
}
