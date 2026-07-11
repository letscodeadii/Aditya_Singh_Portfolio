import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import { projects } from "../data/resumeData";

const accentMap = {
  violet: {
    text: "text-violet-light",
    ring: "border-violet/30",
    glow: "from-violet/30",
  },
  cyan: {
    text: "text-cyan-light",
    ring: "border-cyan/30",
    glow: "from-cyan/25",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          comment="// Projects"
          title="Things I've"
          highlight="shipped."
          description="Two full-stack builds that pushed me from tutorials into real architecture decisions."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => {
            const accent = accentMap[project.accent];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
              >
                <GlassCard className="group relative h-full overflow-hidden p-8">
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${accent.glow} to-transparent blur-3xl transition-opacity duration-500 group-hover:opacity-80`}
                  />

                  <div className="relative flex items-start justify-between">
                    <span className={`font-mono text-sm ${accent.text}`}>
                      {project.index}
                    </span>
                    <FiArrowUpRight
                      className={`${accent.text} transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1`}
                      size={20}
                    />
                  </div>

                  <h3 className="relative mt-4 font-display text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className={`relative mt-1 font-mono text-xs ${accent.text}`}>
                    {project.subtitle}
                  </p>

                  <p className="relative mt-4 text-sm leading-relaxed opacity-70">
                    {project.description}
                  </p>

                  <ul className="relative mt-5 space-y-2 border-t border-white/10 pt-5">
                    {project.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm opacity-65 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-violet-light"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-md border ${accent.ring} px-2.5 py-1 font-mono text-[11px] opacity-80`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
