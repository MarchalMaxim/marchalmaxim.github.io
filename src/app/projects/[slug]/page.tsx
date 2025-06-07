// app/projects/[slug]/page.tsx
import { PROJECTS } from "@/data/PROJECTS";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectPage from "@/app/components/ProjectPage";

export type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectPage {...project} />;
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
