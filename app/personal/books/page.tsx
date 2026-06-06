import { ArrowLeft } from "lucide-react";

export default function BooksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans selection:bg-indigo-500/30">
      <main className="flex-1 flex flex-col items-center w-full px-6 pt-32 pb-20">
        <div className="w-full max-w-2xl flex flex-col gap-8">
          <a href="/#personal" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back
          </a>

          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
            <header className="flex flex-col gap-2 pb-2">
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                Books
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                Books that have influenced my thinking and growth.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Atomic Habits */}
              <div className="flex flex-col gap-1 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 transition-colors">Atomic Habits</h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">James Clear</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
