import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "Signal Sprint",
    subtitle: "Realtime Product Design System",
    description:
      "Design-to-code workflow with rapid iteration boards and motion-first components.",
    image: "https://picsum.photos/seed/portfolio-01/1600/900",
    tags: ["React", "Design System", "Animation"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    id: "02",
    title: "Flow Studio",
    subtitle: "Brand Experience Toolkit",
    description:
      "A modular canvas for campaign pages, assets, and editorial storytelling.",
    image: "https://picsum.photos/seed/portfolio-02/1200/900",
    tags: ["Brand", "UI", "Web"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    id: "03",
    title: "Community Atlas",
    subtitle: "Onboarding and Collaboration Portal",
    description:
      "Structured onboarding journeys with social features and contributor spaces.",
    image: "https://picsum.photos/seed/portfolio-03/1200/900",
    tags: ["Full Stack", "Auth", "Collaboration"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    id: "04",
    title: "Taste Gap",
    subtitle: "Food Story Illustration Experience",
    description:
      "Long-form visual narrative with immersive transitions and layered content cards.",
    image: "https://picsum.photos/seed/portfolio-04/1600/900",
    tags: ["Concept", "Design", "Motion"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
];

function ProjectCard({ project, full }: { project: Project; full?: boolean }) {
  return (
    <article className="group overflow-hidden border border-white/20 bg-black/25">
      <div
        className={`relative ${full ? "aspect-[16/8] md:aspect-[22/8]" : "aspect-[4/3]"}`}
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes={
            full
              ? "(min-width: 1024px) 92vw, 100vw"
              : "(min-width: 1024px) 46vw, 100vw"
          }
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute left-4 top-4 border border-white/35 bg-black/50 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white/85">
          {project.id}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70 sm:text-sm">
            {project.subtitle}
          </p>
          <h3
            className={`${anton.className} mt-1 text-3xl uppercase leading-[0.95] tracking-[-0.01em] text-white sm:text-5xl`}
          >
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-white/20 bg-black/45 px-4 py-4 sm:px-6 sm:py-5">
        <p className="max-w-4xl text-sm text-white/80 sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
            >
              GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/55 bg-white text-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-white/85"
            >
              Live
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const [first, second, third, fourth] = projects;

  return (
    <section className="relative w-full px-5 pb-28 pt-20 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-[1700px]">
        <h2
          className={`${anton.className} text-[clamp(3.2rem,14vw,14rem)] uppercase leading-[0.82] tracking-[-0.02em] text-white`}
        >
          Featured Works
        </h2>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/30 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/80">
            Design Insights
          </p>
          <div className="flex flex-wrap gap-2">
            {["Conceptual", "Expressive", "Immersive"].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/45 bg-black/65 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-6 sm:space-y-8">
          <ProjectCard project={first} full />

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            <ProjectCard project={second} />
            <ProjectCard project={third} />
          </div>

          <ProjectCard project={fourth} full />
        </div>
      </div>
    </section>
  );
}
