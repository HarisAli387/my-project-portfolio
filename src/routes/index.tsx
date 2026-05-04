import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Github, Mail } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Projects — Portfolio" },
      { name: "description", content: "A curated showcase of my live projects — healthcare, real estate, HR, inventory, and travel apps." },
      { property: "og:title", content: "My Projects — Portfolio" },
      { property: "og:description", content: "Explore all my live projects in one place." },
    ],
  }),
  component: Index,
});

type Project = {
  title: string;
  description: string;
  url: string;
  tag: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "Healthcare App",
    description: "A modern healthcare platform connecting patients with care, appointments, and records.",
    url: "https://healthcare-app-pink.vercel.app/",
    tag: "Health",
    accent: "from-pink-400 to-rose-500",
  },
  {
    title: "Astra HR Agent",
    description: "An AI-powered HR assistant streamlining recruitment, onboarding, and employee management.",
    url: "https://astra-hr-agent.vercel.app/",
    tag: "AI · HR",
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "Real Estate Property Manager",
    description: "Manage listings, tenants, and properties with a clean dashboard built for realtors.",
    url: "https://real-estate-property-manager-theta.vercel.app/",
    tag: "Real Estate",
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Nexus Inventory Management",
    description: "Track stock, suppliers, and orders with real-time inventory insights.",
    url: "https://nexus-inventory-management-seven.vercel.app/",
    tag: "Business",
    accent: "from-cyan-400 to-sky-500",
  },
  {
    title: "Trevel — Travel App",
    description: "Discover destinations, plan trips, and explore the world with a beautiful travel UI.",
    url: "https://trevel-one.vercel.app/",
    tag: "Travel",
    accent: "from-emerald-400 to-teal-500",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-accent/25 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-chart-3/20 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg tracking-tight">Portfolio</span>
        </div>
        <nav className="flex items-center gap-3 text-sm text-muted-foreground">
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 pt-16 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground mb-8">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new projects
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto">
          One link.{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent">
            All my projects.
          </span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          A curated collection of live web apps I've built — across healthcare, real estate, HR, inventory and travel. Click any card to explore.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px] shadow-primary/50 hover:scale-105 transition-transform"
          >
            View Projects <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-card transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">{projects.length} live apps · click to open</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />

              <div className="relative flex items-start justify-between mb-6">
                <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${p.accent} px-3 py-1 text-xs font-semibold text-background`}>
                  {p.tag}
                </span>
                <div className="h-10 w-10 rounded-full border border-border bg-background/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <ArrowUpRight className="h-4 w-4 group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>

              <div className="relative">
                <div className="text-xs text-muted-foreground mb-2">0{i + 1}</div>
                <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {p.description}
                </p>
                <div className="text-xs font-mono text-muted-foreground/70 truncate">
                  {p.url.replace(/^https?:\/\//, "")}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-secondary p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Let's build something together</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Have a project in mind or just want to say hi? Reach out and let's chat.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:scale-105 transition-transform">
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-card transition-colors">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-6 py-8 text-center text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} · Built with care.
      </footer>
    </div>
  );
}
