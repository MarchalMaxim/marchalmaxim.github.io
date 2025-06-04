import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const ContactPage = () => {
  const email = "maximalexandermarchal@gmail.com";
  const GITHUB_USERNAME = "marchalmaxim";
  const LINKEDIN_PROFILE_ID = "maxim-marchal";

  // Basic email obfuscation: replace "." and "@"
  const obfuscatedEmail = email.replace(/\./g, " [dot] ").replace(/@/g, " [at] ");

  return (
    <div className="container mx-auto min-h-screen p-4 md:p-8 bg-base-100 text-base-content">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-primary">Get in Touch</h1>
        <p className="text-lg text-base-content/80">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LinkedIn Card */}
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body items-center text-center">
            <FiLinkedin className="text-6xl text-info mb-4" />
            <h2 className="card-title">LinkedIn</h2>
            <p>Connect with me on LinkedIn for my professional network and background.</p>
            <div className="card-actions justify-end mt-4">
              <a
                href={`https://www.linkedin.com/in/${LINKEDIN_PROFILE_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body items-center text-center">
            <FiMail className="text-6xl text-accent mb-4" />
            <h2 className="card-title">Email</h2>
            <p>For direct inquiries, feel free to send me an email.</p>
            <div className="card-actions justify-end mt-4">
              {/* Obfuscated email display */}
              <p className="text-lg select-all">{obfuscatedEmail}</p>
              <a
                href={`mailto:${email}`}
                className="btn btn-outline"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body items-center text-center">
            <FiGithub className="text-6xl text-neutral mb-4" />
            <h2 className="card-title">GitHub</h2>
            <p>Check out my projects and contributions on GitHub.</p>
            <div className="card-actions justify-end mt-4">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center mt-20 py-8 border-t border-base-300">
        <p className="text-base-content/70">Looking forward to hearing from you!</p>
      </footer>
    </div>
  );
};

export default ContactPage; 