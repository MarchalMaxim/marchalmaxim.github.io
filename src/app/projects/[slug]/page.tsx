// app/projects/[slug]/page.tsx
import ProjectPage from "@/app/components/ProjectPage";
import { PROJECTS } from "@/data/PROJECTS";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export const generateStaticParams = () =>
  PROJECTS.map(({ slug }) => ({ slug }));

export const generateMetadata = ({ params }: Props): Metadata => {
  const project = PROJECTS.find(p => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      images: [project.image],
    },
  };
};

/* ---------------- Page Component --------------------- */
export default function ProjectSlugPage({ params }: Props) {
  const project = PROJECTS.find(p => p.slug === params.slug);

  if (!project) notFound();

  return (
    <ProjectPage {...project}>
      {/* ---- OPTIONAL: per-project extras ---------------- */}
      {project.slug === "resize-responsibly" && null}

      {project.slug === "kilometer-schrijven" && (
        <ul className="mt-4 list-disc pl-6">
          <li>Automatic mileage sync to Google Sheets</li>
          <li>Distance caching to avert Maps API quotas</li>
          <li>CSV export for bookkeepers</li>
        </ul>
      )}

      {/* add more conditional blocks as you add projects */}
    </ProjectPage>
  );
}
