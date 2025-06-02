// src/components/ProjectPage.tsx
import { ImageLike } from "@/data/PROJECTS";
import Image from "next/image";
import { ReactNode } from "react";

export interface ProjectPageProps {
  title: string;
  tagline: string;
  description: string;
  image: ImageLike;
  links: { live?: string; repo?: string };
  gallery?: ImageLike[];      // ← array of image URLs for carousel
  children?: ReactNode;
}

export default function ProjectPage({
  title,
  tagline,
  description,
  image,
  links,
  gallery,   // ← pull in gallery
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
              <button className="btn btn-outline">
                <a href={links.repo} target="_blank" rel="noopener">
                  View source
                </a>
              </button>
            )}
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="md:w-1/2">
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

      {/* ⬇ Optional DaisyUI carousel */}
      {gallery && gallery.length > 0 && (
        <section className="mt-16">
          <div className="carousel w-full">
            {gallery.map((src, idx) => (
              <div
                key={idx}
                id={`slide${idx}`}
                className="carousel-item relative w-full"
              >
                <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={src}
                    alt={`${title} gallery image ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
                {/* Navigation buttons */}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <a
                    href={`#slide${(idx - 1 + gallery.length) % gallery.length}`}
                    className="btn btn-circle btn-primary"
                  >
                    &lt;
                  </a>
                  <a
                    href={`#slide${(idx + 1) % gallery.length}`}
                    className="btn btn-circle btn-primary"
                  >
                    &gt;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* OPTIONAL CUSTOM SECTION */}
      {children && <section className="mt-16">{children}</section>}
    </article>
  );
}
