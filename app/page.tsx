import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import GithubCalendarView from "./components/GithubCalendar";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-4">
        <div className="flex items-center justify-between w-full max-w-2xl px-6 py-3 rounded-full bg-background/70 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <span className="font-semibold text-sm tracking-tight">ap.</span>
          <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a>
            <a href="#experience" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projects</a>
            <a href="#blog" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Blog</a>
            <a href="/resume" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Resume</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full px-6 pt-32 pb-20">
        <div className="w-full max-w-2xl flex flex-col gap-12">

          {/* Hero Section */}
          <ScrollReveal id="about" className="flex flex-col gap-6 ">
            <div className="flex items-center gap-6">
              <img src="/avatar.png" alt="Ankit Pandit" className="w-24 h-24 rounded-full shadow-sm object-cover bg-yellow-400" />
              <div className="flex flex-col">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Ankit Pandit
                </h1>
                <div className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-2 mt-2">
                  Engineer <span className="text-zinc-300 dark:text-zinc-700">•</span> Polymath <span className="text-zinc-300 dark:text-zinc-700">•</span>
                  Hacker <span className="text-zinc-300 dark:text-zinc-700"></span>
                </div>
              </div>
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
              I'm a full-stack engineer passionate about building seamless, highly performant web applications. I focus on creating clean architectures and delightful user experiences.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              <MapPin className="w-4 h-4" />
              <span>New Delhi, India</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-4 animate-pulse"></span>
              <span className="text-emerald-600 dark:text-emerald-400">Open to work</span>
            </div>
          </ScrollReveal>
          {/* Experience Section */}
          <ScrollReveal id="experience" className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              Experience
            </h2>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/student-ankitpandit/gemini-cli" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2 p-4 -mx-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300">
                <div className="flex items-baseline justify-between w-full">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Open Source Contributor <span className="text-zinc-400 dark:text-zinc-500 font-normal">· gemini-cli</span></h3>
                  <span className="text-sm text-zinc-500 font-mono shrink-0 ml-4">Feb - Mar 2026</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Contributed to the open-source gemini-cli repository, building and fixing features for the command-line interface.
                </p>
              </a>
            </div>
          </ScrollReveal>

          {/* Projects Section */}
          <ScrollReveal id="projects" className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Project 1 */}
              <a href="https://rackleai.vercel.app" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-3 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-300">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Rackle</h3>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                  An open-source AI agents observability platform. Enables developers to monitor, trace, and debug exactly what their AI agents are doing in real-time.
                </p>
              </a>
              {/* Project 2 */}
              <a href="https://mdease.vercel.app" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-3 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-300">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Mindease</h3>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                  A mental health platform designed specifically for youths to help them navigate the tensions and stress of exams, societal expectations, and career choices.
                </p>
              </a>
            </div>
          </ScrollReveal>

          {/* Blog Section */}
          <ScrollReveal id="blog" className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              Blogs
            </h2>
            <div className="flex flex-col gap-4">
              {/* Blog Post 1 */}
              <a href="/blog/medium-blogs" className="group flex flex-col gap-2 p-4 -mx-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300">
                <div className="flex items-baseline justify-between w-full">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Advancing Large Language Models</h3>
                  <span className="text-sm text-zinc-500 font-mono shrink-0 ml-4">Oct 2024</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  Addressing key challenges in the development of Large Language Models and exploring solutions for more robust AI systems.
                </p>
              </a>

            </div>
          </ScrollReveal>


          {/* Tech Stack Section */}
          <ScrollReveal id="tech-stack" className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              Tech Stack
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'JavaScript', 'Python', 'Go', 'HTML/CSS'].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'Fastify', 'Prisma', 'Drizzle', 'TanStack Query'].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Tools & Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'Redis', 'MongoDB', 'Docker', 'AWS', 'Vercel', 'Git', 'Github'].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <GithubCalendarView />

          {/* Workspace & Gears Section */}
          {/* Development Section */}
          <ScrollReveal id="development" className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              Development
            </h2>
            <div className="flex flex-col gap-4">
              <a href="/development/setup" className="flex flex-col gap-1 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Setup</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">VSCode / Cursor configuration and extensions guide.</p>
              </a>
              <a href="/development/terminal" className="flex flex-col gap-1 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Terminal</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Zsh, Starship, Fastfetch, and shell configuration.</p>
              </a>
            </div>
          </ScrollReveal>

          {/* Personal Section */}
          <ScrollReveal id="personal" className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              Personal
            </h2>
            <div className="flex flex-col gap-4">
              <a href="/personal/books" className="flex flex-col gap-1 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Books</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Books that have influenced my thinking and growth.</p>
              </a>
            </div>
          </ScrollReveal>
          {/* Quote Section */}
          <ScrollReveal className="w-full">
            <div className="relative w-full p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-[#111111] border border-zinc-200 dark:border-zinc-800/50 overflow-hidden">
              <div className="absolute top-0 left-2 text-zinc-200 dark:text-zinc-800/40 font-serif text-[140px] leading-none select-none pointer-events-none font-bold">
                “
              </div>
              <div className="relative z-10 flex flex-col gap-6 pl-2 sm:pl-8 pt-4">
                <p className="font-mono italic text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  "Do your work, don't worry about the results."
                </p>
                <div className="text-right text-zinc-500 font-mono text-sm">
                  — Bhagavad Gita
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Footer / Connect */}
          <ScrollReveal className="flex flex-col gap-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Connect</h2>
            <div className="flex items-center gap-4">
              <a href="https://github.com/student-ankitpandit" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/ankitpanditdev" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="mailto:devankitpanditio@gmail.com" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/panditankit" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-8">
              © {new Date().getFullYear()} Ankit Pandit. All rights reserved.
            </p>
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
