"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import ScrollReveal from "./ScrollReveal";

export default function GithubCalendarView() {
  const [totalContributions, setTotalContributions] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://github-contributions-api.deno.dev/student-ankitpandit.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.totalContributions) {
          setTotalContributions(data.totalContributions);
        }
      })
      .catch((err) => console.error("Failed to fetch contributions:", err));
  }, []);

  return (
    <ScrollReveal id="github" className="flex flex-col gap-8 w-full">
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base max-w-3xl">
        Most of my work lives at the intersection of full-stack engineering and execution—building robust systems, shipping features, and ensuring they perform reliably in production.
      </p>

      <div className="flex flex-col gap-2">
        <div className="text-zinc-500 font-mono text-sm">github:</div>
        <div className="flex items-center justify-between w-full">
          <div className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">
            @student-ankitpandit
          </div>
          {totalContributions !== null && (
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">{totalContributions}</span> contributions
            </div>
          )}
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-hidden pb-2">
        <div className="min-w-fit pr-4">
          <GitHubCalendar 
            username="student-ankitpandit" 
            blockSize={11}
            blockMargin={4}
            fontSize={12}
            theme={{
              light: ['#f4f4f5', '#d4d4d8', '#a1a1aa', '#71717a', '#3f3f46'],
              dark: ['#27272a', '#3f3f46', '#52525b', '#71717a', '#a1a1aa'],
            }}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}
