import { ArrowLeft } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans selection:bg-indigo-500/30">
      <main className="flex-1 flex flex-col items-center w-full px-6 pt-32 pb-20">
        <div className="w-full max-w-4xl flex flex-col gap-8 h-full">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back
          </a>
          
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out flex-1 min-h-[75vh]">
            <header className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-8">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                Resume
              </h1>
              <a 
                href="https://docs.google.com/document/d/1euhNdzxOGSondntTllwrrkSJ9fEY9uAMPe69lVury3Y/edit?tab=t.0#heading=h.vg3kwiaelf4a" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap text-center"
              >
                Open in Google Docs
              </a>
            </header>
            
            <iframe 
              src="https://docs.google.com/document/d/1euhNdzxOGSondntTllwrrkSJ9fEY9uAMPe69lVury3Y/preview" 
              className="w-full h-full min-h-[600px] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
