const fs = require('fs');
const filePath = 'app/page.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

if (!content.includes('import ScrollReveal')) {
  content = content.replace('import GithubCalendarView from "./components/GithubCalendar";', 'import GithubCalendarView from "./components/GithubCalendar";\nimport ScrollReveal from "./components/ScrollReveal";');
}

content = content.replace(/<section\b/g, '<ScrollReveal');
content = content.replace(/<\/section>/g, '</ScrollReveal>');
content = content.replace(/animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out/g, '');

fs.writeFileSync(filePath, content, 'utf-8');
