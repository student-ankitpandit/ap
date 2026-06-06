import { ArrowLeft } from "lucide-react";

export default function TerminalPage() {
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
                Terminal
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                Zsh, Starship, Fastfetch, and shell configuration.
              </p>
            </header>

            <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Core Stack</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Emulator:</strong> Warp. It's a Rust-based, blazingly fast modern terminal with built-in AI, IDE-like text editing, and block-based output.</li>
                  <li><strong>Shell:</strong> Zsh. Reliable, fast, and incredibly customizable.</li>
                  <li><strong>Prompt:</strong> Starship. A cross-shell prompt that is minimal, blazing fast, and extremely informative.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">CLI Utilities</h2>
                <p className="mb-4">I replace standard Unix commands with their modern, Rust-based equivalents for better performance and DX:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>zoxide:</strong> A smarter <code>cd</code> command that learns your habits.</li>
                  <li><strong>eza:</strong> A modern replacement for <code>ls</code> with better colors and Git integration.</li>
                  <li><strong>fzf:</strong> A general-purpose command-line fuzzy finder. I use it for everything from finding files to searching bash history.</li>
                  <li><strong>bat:</strong> A <code>cat</code> clone with syntax highlighting and Git integration.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
