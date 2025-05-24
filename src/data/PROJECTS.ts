import { CDN } from "./cdn";

export interface ProjectMeta { 
    id: number;
    slug: string;
    title: string;
    tagline: string;
    description: string;
    featured: boolean;
    image: string;
    links: {
        live?: string;
        repo?: string;
    }
}

export const PROJECTS: ProjectMeta[] = [
  {
    id: 1,
    slug: "resize-responsibly",
    title: "Resize Responsibly",
    tagline: "A domain-wide crawler that captures fully responsive screenshots of every page you own—spot layout break-points before your users do.",
    description: "Resize Responsibly traverses your (sub)domain and captures screenshots at multiple viewport widths, helping you catch responsive design issues before they go live.",
    featured: true,
    image: `${CDN}/images/resize-responsibly-cropped.PNG`,
    links: {
      live: "",
      repo: ""
    }
  },
  {
    id: 2,
    slug: "kilometer-schrijven",
    title: "Kilometerschrijven",
    tagline: "A smart proxy between Google Sheets and Google Maps that logs business mileage, caches distance look-ups and gracefully handles API quota limits—bookkeeping without the busywork.",
    description: "Mileage Bridge seamlessly syncs your business trip data from Google Maps into Google Sheets, applying intelligent caching and fallback for the Maps API to keep your logs accurate without exceeding quotas.",
    featured: true,
    image: `${CDN}/images/kms_banner_cropped.PNG`,
    links: {
      live: "https://kilometerschrijven.nl",
      repo: ""
    }
  },
  {
    id: 3,
    slug: "map-my-chat",
    title: "Map My Chat",
    tagline: "Turns raw WhatsApp conversations into interactive timelines, heat-maps and word clouds, giving you instant visual insights into your chats.",
    description: "MapMyChat parses exported WhatsApp conversation histories and generates interactive timeline charts, heat maps, and word clouds, letting you explore your chat patterns visually.",
    featured: true,
    image: `${CDN}/images/map-my-chat-cropped.PNG`,
    links: {
      live: "",
      repo: ""
    }
  }
];