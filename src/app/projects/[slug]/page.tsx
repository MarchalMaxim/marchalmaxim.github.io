
import ProjectPage from "@/app/components/ProjectPage";
import { PROJECTS } from "@/data/PROJECTS";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find(p => p.slug === params.slug)!;
  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      images: [project.image],
    },
  };
}

export default function ProjectSlugPage({ params }: Props) {
  const project = PROJECTS.find(p => p.slug === params.slug);

  if (!project) {
    // You could render a custom 404 here instead
    throw new Error("Project not found");
  }

  return (
    <ProjectPage {...project}>
      {/* OPTIONAL custom content per project */}
      {project.slug === "resize-responsibly" && (
        <ul className="mt-4 list-disc pl-6">
          <li>Domain-wide crawler with robots.txt honouring</li>
          <li>Headless Chrome screenshots at 5 breakpoints</li>
          <li>Slack + email alerts when layouts break</li>
        </ul>
      )}
    </ProjectPage>
  );
}
