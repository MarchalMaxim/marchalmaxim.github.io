import Image from 'next/image';
import { ProjectsOverview } from "./components/ProjectsOverview";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="container mx-auto grid min-h-[60vh] place-content-center px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
          Hi, I’m <span className="text-primary">Maxim</span>
        </h1>
        <p className="mb-6 max-w-xl text-base opacity-80 sm:text-lg">
          I build small useful stuff for the web.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="/contact" className="btn btn-outline">
            Get in touch
          </a>
        </div>
      </section>

      {/* ── Featured projects (placeholder cards) ─────────────── */}
      <ProjectsOverview />

      {/* ── About snapshot ─────────────────────────────────────── */}
      <section className="container mx-auto mb-24 flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div className="avatar avatar-online">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <Image src="https://avatars.githubusercontent.com/u/31852259?v=4" alt="Headshot of the author" className='rounded-full' fill />
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-semibold">About me</h2>
          <p className="max-w-prose opacity-80">
            I make small tools for the web. Mostly practical stuff, sometimes just for fun. Here’s a bit more about me.
          </p>
          <a href="/about" className="btn btn-link no-underline">
            Read more →
          </a>
        </div>
      </section>

      {/* ── Contact teaser band ───────────────────────────────── */}
      <section className="bg-primary text-primary-content">
        <div className="container mx-auto flex flex-col items-center gap-4 py-10 px-4 sm:flex-row sm:justify-between">
          <h2 className="text-xl font-semibold">
            Have an idea? Let’s build it together.
          </h2>
          <a href="/contact" className="btn btn-secondary">
            Contact me
          </a>
        </div>
      </section>
    </>
  )
}
