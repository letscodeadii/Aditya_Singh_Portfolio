import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          comment="// Experience"
          title="Currently"
          highlight="in training."
          description="Where I'm sharpening full-stack fundamentals right now."
        />

        <div className="relative mt-16 border-l border-violet/20 pl-8 sm:pl-10">
          {experience.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[41px] top-1.5 grid h-5 w-5 place-items-center rounded-full border-2 border-violet bg-ink sm:-left-[49px]">
                <span className="h-2 w-2 rounded-full bg-violet-light" />
              </span>

              <GlassCard className="p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm opacity-60">{role.org}</p>
                  </div>
                  <span className="font-mono text-xs whitespace-nowrap text-violet-light">
                    {role.start} — {role.end}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm opacity-75">
                      <FiCheckCircle className="mt-0.5 shrink-0 text-cyan" size={15} />
                      {point}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
