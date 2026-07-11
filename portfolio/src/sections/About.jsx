import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { FiMapPin, FiBookOpen } from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import { profile, stats, coreConcepts } from "../data/resumeData";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad relative py-28">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
        {/* Left: text */}
        <div>
          <SectionHeading
            comment="// About"
            title="Grounded in fundamentals,"
            highlight="built for production."
            description={null}
          />

          <p className="mt-6 max-w-xl text-base leading-relaxed opacity-70">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm opacity-75">
            <span className="glass inline-flex items-center gap-2 rounded-full border border-violet/20 px-4 py-2">
              <FiMapPin className="text-violet-light" /> {profile.location}
            </span>
            <span className="glass inline-flex items-center gap-2 rounded-full border border-violet/20 px-4 py-2">
              <FiBookOpen className="text-violet-light" /> PGCP-AC @ C-DAC, Pune
            </span>
          </div>

          <div className="mt-8">
            <p className="eyebrow mb-3">// core concepts</p>
            <div className="flex flex-wrap gap-2">
              {coreConcepts.map((c) => (
                <motion.span
                  key={c}
                  whileHover={{ y: -2, borderColor: "rgba(124,92,252,0.6)" }}
                  className="glass rounded-lg border border-violet/15 px-3 py-1.5 font-mono text-xs"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: stat grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="p-6">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-sm opacity-60">{s.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
