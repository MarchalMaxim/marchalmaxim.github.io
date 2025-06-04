'use client';

import { ImageLike } from "@/data/PROJECTS";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export interface ProjectPageProps {
  title: string;
  tagline: string;
  description: string;
  image: ImageLike;
  links: { live?: string; repo?: string };
  gallery?: ImageLike[];
  children?: ReactNode;
}

export default function ProjectPage({
  title,
  tagline,
  description,
  image,
  links,
  gallery,
  children,
}: ProjectPageProps) {
  return (
    <article className="mx-auto max-w-7xl px-4 py-24">
      {/* Hero Section */}
      <section className="flex flex-col-reverse gap-16 md:flex-row md:items-center">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl font-light text-base-content/80 leading-relaxed">
              {tagline}
            </p>
          </div>

          <p className="prose prose-lg prose-neutral dark:prose-invert">
            {description}
          </p>

          {/* Action Buttons */}

          <div className="flex gap-6">
            {links.live && (
              <Link
                href={links.live}
                target="_blank"
                rel="noopener"
                className="btn btn-primary btn-lg hover:scale-105 transition-transform"
              >
                Visit Live Site
              </Link>
            )}
            {links.repo && (
              <Link
                href={links.repo}
                target="_blank"
                rel="noopener"
                className="btn btn-outline btn-lg hover:scale-105 transition-transform group"
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  View Source →
                </span>
              </Link>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[600px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-shadow duration-500">
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      {gallery && gallery.length > 0 && (
        <section className="mt-32">
          <div className="carousel w-full">
            {gallery.map((src, idx) => (
              <div
                key={idx}
                id={`slide${idx}`}
                className="carousel-item relative w-full"
              >
                <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src={src}
                    alt={`${title} gallery image ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority={idx === 0}
                  />
                </div>
                {/* Navigation buttons */}
                <div className="absolute inset-0 flex items-center justify-between px-8">
                  <button
                    onClick={() => {
                      document.querySelector(`#slide${(idx - 1 + gallery.length) % gallery.length}`)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                    className="btn btn-circle btn-lg btn-primary glass hover:scale-110 transition-transform"
                  >
                    ←
                  </button>
                  <button 
                    onClick={() => {
                      document.querySelector(`#slide${(idx + 1) % gallery.length}`)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                    className="btn btn-circle btn-lg btn-primary glass hover:scale-110 transition-transform"
                  >
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Custom Content Section */}
      {children && <section className="mt-32">{children}</section>}
    </article>
  );
}
