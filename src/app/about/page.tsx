import Image from 'next/image';
import { Timeline } from '../components/Timeline';
import { EXPERIENCES } from '@/data/EXPERIENCE';

export default function AboutPage() {
  return (
    <div className="min-h-screen p-6 bg-base-100">
      {/* Hero */}
      <section className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="avatar">
          <div className="w-48 h-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
            <Image
              src="https://avatars.githubusercontent.com/u/31852259?v=4"
              alt="Your Name headshot"
              width={128}
              height={128}
              className="w-32 rounded-full"
              priority
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold">Hello, I&apos;m [Your Name]</h1>
          <p className="mt-4 text-lg">
            I&apos;m a fullstack developer specializing in building useful shit on the web.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="container mx-auto mt-16">
        <h2 className="text-3xl font-semibold mb-6">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'daisyUI', 'Git', 'Figma'].map((skill) => (
            <div key={skill} className="badge badge-outline text-base">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="container mx-auto mt-16">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <Timeline items={EXPERIENCES} />
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
        <p className="mb-6">I&apos;m always open to discussing new projects or opportunities.</p>
        <a href="/contact" className="btn btn-primary btn-lg">
          Contact Me
        </a>
      </section>
    </div>
  );
}
