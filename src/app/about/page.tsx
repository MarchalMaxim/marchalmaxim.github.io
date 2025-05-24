import Image from 'next/image';
import { Timeline } from '../components/Timeline';
import { EXPERIENCES } from '@/data/EXPERIENCE';
import { SKILLS } from '@/data/skills';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base-100 p-6">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="container mx-auto flex flex-col items-center gap-8 md:flex-row">
        <div className="avatar">
          <div className="h-48 w-48 overflow-hidden rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
            <Image
              src="https://avatars.githubusercontent.com/u/31852259?v=4"
              alt="Headshot of Maxim"
              width={192}
              height={192}
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight">Hello, I’m Maxim</h1>
          <p className="mt-4 text-lg opacity-80">
            Full-stack developer who enjoys turning small ideas into practical web tools.
          </p>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────── */}
      <section className="container mx-auto mt-16 max-w-4xl">
        <h2 className="mb-6 text-3xl font-semibold">Skills &amp; Technologies</h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {SKILLS.map((skill) => (
            <li key={skill} className="flex justify-start">
              <span
                className="badge badge-outline badge-primary transition-transform hover:badge-neutral duration-200 hover:scale-150"
              >
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Experience ───────────────────────────────────── */}
      <section className="container mx-auto mt-16 max-w-4xl">
        <h2 className="mb-6 text-3xl font-semibold">Experience</h2>
        <Timeline items={EXPERIENCES} />
      </section>

      {/* ── Contact CTA ──────────────────────────────────── */}
      <section className="container mx-auto mt-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Get in touch</h2>
        <p className="mb-6 opacity-80">Always open to new projects and collaborations.</p>
        <a href="/contact" className="btn btn-primary btn-lg">
          Contact Me
        </a>
      </section>
    </div>
  );
}
