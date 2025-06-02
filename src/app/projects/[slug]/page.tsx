// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/data/PROJECTS";
import ProjectPage from "@/app/components/ProjectPage";

export function generateStaticParams() {
    return PROJECTS.map(({ slug }) => ({ slug }));
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

/* ——— 2. Page component must also be async ——— */
export default async function ProjectSlugPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const project = PROJECTS.find(p => p.slug === slug);
    if (!project) notFound();

    const gallery = project.gallery ?? [];

    return <ProjectPage {...project} gallery={gallery} />;
}
