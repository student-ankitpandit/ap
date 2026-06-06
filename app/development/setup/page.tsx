import { ArrowLeft } from "lucide-react";

export default function SetupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans selection:bg-indigo-500/30">
      <main className="flex-1 flex flex-col items-center w-full px-6 pt-32 pb-20">
        <div className="w-full max-w-2xl flex flex-col gap-8">
          <a href="/#development" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back
          </a>

          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
            <header className="flex flex-col gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                Setup
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                VSCode / Cursor configuration and extensions guide.
              </p>
            </header>

            <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Editor</h2>
                <p>
                  I currently use <strong>Cursor</strong> as my primary editor. It's a fork of VS Code built specifically for AI-assisted programming, and it significantly speeds up my workflow.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Theme:</strong> Vercel Theme (Dark)</li>
                  <li><strong>Font:</strong> Geist Mono (14px)</li>
                  <li><strong>AI Model:</strong> Claude 3.5 Sonnet for inline generation and chat.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Essential Extensions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>ESLint & Prettier:</strong> Absolute must-haves for code formatting and catching syntax errors early.</li>
                  <li><strong>Tailwind CSS IntelliSense:</strong> Autocomplete for Tailwind classes makes styling extremely fast.</li>
                  <li><strong>GitLens:</strong> Supercharges Git capabilities right inside the editor (blame annotations are a lifesaver).</li>
                  <li><strong>Error Lens:</strong> Highlights errors and warnings across the entire line, so you can't miss them.</li>
                  <li><strong>Prisma:</strong> Syntax highlighting and formatting for database schemas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
