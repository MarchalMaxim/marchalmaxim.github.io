import { HOMEPAGE } from "@/data/homepage/data";
import Image from 'next/image';

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
      <section
        id="projects"
        className="container mx-auto mb-24 max-w-6xl space-y-8 px-4"
      >
        <h2 className="text-2xl font-semibold">Featured projects</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOMEPAGE.projects.map((project) => (
            <article
              key={project.id}
              className="card cursor-pointer border transition hover:shadow-lg"
            >
              {/* replace with Next/Image thumbnail */}
              <figure className="aspect-video bg-base-200" />
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="opacity-80">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── About snapshot ─────────────────────────────────────── */}
      <section className="container mx-auto mb-24 flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div className="avatar avatar-online">
          {/* <div className='w-24 ring-primary ring-offset-base-100 ring-2'>
            <Image
              src="https://avatars.githubusercontent.com/u/31852259?v=4"
              alt="Your Name headshot"
              fill
              priority
              className='rounded-full'
            />
          </div> */}

          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <Image src="https://avatars.githubusercontent.com/u/31852259?v=4" alt="Headshot of the author" className='rounded-full' fill />
          </div>

        </div>

        <div>
          <h2 className="mb-2 text-2xl font-semibold">About me</h2>
          <p className="max-w-prose opacity-80">
            Short intro that links to the full About page. Keep it to 2–3
            sentences so the home remains skim-friendly.
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
