import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import { skillGroups } from "../data/resumeData";

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
        <span className="opacity-80">{name}</span>
        <span className="text-violet-light">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          comment="// Skills"
          title="Technologies I"
          highlight="work with daily."
          align="center"
          description="A full-stack toolkit — from Java services to React interfaces — built through coursework, projects, and hands-on practice."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <GlassCard className="h-full p-6">
                <p className="font-mono text-xs text-violet-light opacity-80">
                  {group.comment}
                </p>
                <h3 className="mt-1 mb-6 font-display text-lg font-semibold">
                  {group.title}
                </h3>
                <div className="space-y-5">
                  {group.items.map((item, ii) => (
                    <SkillBar
                      key={item.name}
                      name={item.name}
                      level={item.level}
                      delay={ii * 0.08}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
