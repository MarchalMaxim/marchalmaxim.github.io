'use client';

import Image from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export interface ProjectPageProps {
  title: string;
  tagline: string;
  description: string;
  image: string;
  links: { live?: string; repo?: string };
  children?: ReactNode;           // optional “extras” section per project
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
    <article className="mx-auto max-w-5xl px-4 py-10">
      {/* HERO */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg text-base-content/80">{tagline}</p>
      </motion.header>

      {/* HERO IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="mt-8 overflow-hidden rounded-2xl shadow-lg"
      >
        <Image
          src={image}
          alt={`${title} preview`}
          width={1600}
          height={900}
          className="h-auto w-full"
          priority
        />
      </motion.div>

      {/* DESCRIPTION */}
      <section className="prose prose-neutral dark:prose-invert mx-auto mt-8">
        <p>{description}</p>
        {children}
      </section>

      {/* CTAs */}
      <footer className="mt-10 flex flex-wrap justify-center gap-4">
        {links.live && (
          <Link className="primary" href={links.live} target="_blank" rel="noopener">Visit live</Link>
        )}
        {links.repo && (
          <Link className="outline" href={links.repo} target="_blank" rel="noopener">View source</Link>
        )}
      </footer>
    </article>
  );
}
