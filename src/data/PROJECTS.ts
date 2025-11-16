// src/lib/projects.ts
import type { StaticImageData } from "next/image";

/* ---------- hero images ---------- */
import resizeHero from "@public/projects/resize-responsibly/hero.png";
import kmsHero    from "@public/projects/kilometerschrijven/hero.png";
import mapHero    from "@public/projects/map-my-chat/hero.png";
import tsPlaygroundHero from "@public/projects/typescript-playground/hero.png";

/* ---------- optional galleries ---------- */
import resizeSlide1 from "@public/projects/resize-responsibly/gallery-1.png";
import resizeSlide2 from "@public/projects/resize-responsibly/gallery-2.png";

import kmsSlide1 from "@public/projects/kilometerschrijven/gallery-1.png";
import kmsSlide2 from "@public/projects/kilometerschrijven/gallery-2.png";


export type ImageLike = string | StaticImageData;

/* ---------- meta type ---------- */
export interface ProjectMeta {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  featured: boolean;
  image: ImageLike;
  gallery?: ImageLike[];
  links: {
    live?: string;
    repo?: string;
  };
  skills: string[];
}

/* ---------- data ---------- */
export const PROJECTS: ProjectMeta[] = [
  {
    id: 1,
    slug: "resize-responsibly",
    title: "Resize Responsibly",
    tagline:
      "A domain-wide crawler that captures fully responsive screenshots of every page you own—spot layout break-points before your users do.",
    description:
      "Resize Responsibly traverses your (sub)domain and captures screenshots at multiple viewport widths, helping you catch responsive design issues before they go live.",
    featured: true,
    image: resizeHero,
    gallery: [resizeSlide1, resizeSlide2],
    links: { live: "", repo: "" },
    skills: ["Next.js", "Selenium", "Web Scraping", "UI Automation"],
  },
  {
    id: 2,
    slug: "kilometer-schrijven",
    title: "Kilometerschrijven",
    tagline:
      "A smart proxy between Google Sheets and Google Maps that logs business mileage, caches distance look-ups and gracefully handles API quota limits—bookkeeping without the busywork.",
    description:
      "Mileage Bridge seamlessly syncs your business trip data from Google Maps into Google Sheets, applying intelligent caching and fallback for the Maps API to keep your logs accurate without exceeding quotas.",
    featured: true,
    image: kmsHero,
    gallery: [kmsSlide1, kmsSlide2],
    links: { live: "https://kilometerschrijven.nl", repo: "" },
    skills: ["Google APIs", "Node.js", "Caching Strategies", "OAuth", "Rate limiting strategies"],
  },
  {
    id: 3,
    slug: "map-my-chat",
    title: "Map My Chat",
    tagline:
      "Turns raw WhatsApp conversations into interactive timelines, heat-maps and word clouds, giving you instant visual insights into your chats.",
    description:
      "MapMyChat parses exported WhatsApp conversation histories and generates interactive timeline charts, heat maps, and word clouds, letting you explore your chat patterns visually.",
    featured: false,
    image: mapHero,
    links: { live: "", repo: "" },
    skills: [
      "Data Visualization",
      "P5js",
      "Javascript",
      "Natural Language Processing",
    ],
  },
  {
    id: 4,
    slug: "typescript-playground",
    title: "TypeScript Playground",
    tagline:
      "A playground for testing out AST transformers for TypeScript.",
    description:
      "TypeScript Playground is an interactive environment for experimenting with Abstract Syntax Tree (AST) transformers for TypeScript. Test, debug, and visualize code transformations in real-time.",
    featured: true,
    image: tsPlaygroundHero,
    links: { live: "https://maximmarchal.nl/typescript-playground", repo: "" },
    skills: [
      "TypeScript",
      "AST",
      "Code Transformation",
      "Compiler Design",
    ],
  },

];
