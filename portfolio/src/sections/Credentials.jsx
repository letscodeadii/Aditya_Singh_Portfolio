import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiBookOpen, FiStar } from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import { education, certifications, achievements } from "../data/resumeData";

const TABS = [
  { key: "education", label: "Education", icon: FiBookOpen },
  { key: "certifications", label: "Certifications", icon: FiAward },
  { key: "achievements", label: "Achievements", icon: FiStar },
];

export default function Credentials() {
  const [tab, setTab] = useState("education");

  return (
    <section id="credentials" className="section-pad relative py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          comment="// Credentials"
          title="Education,"
          highlight="proof & wins."
          align="center"
        />

        {/* Tab switcher */}
        <div className="glass mx-auto mt-10 flex w-fit gap-1 rounded-full border border-violet/15 p-1">
          {TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`relative flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs transition-colors sm:px-5 ${
                tab === key ? "text-white" : "opacity-55 hover:opacity-90"
              }`}
            >
              {tab === key && (
                <motion.span
                  layoutId="cred-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-violet to-violet-dim"
                />
              )}
              <Icon className="relative z-10" size={14} />
              <span className="relative z-10 hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        {/* Panels */}
        <div className="mt-10 min-h-[280px]">
          <AnimatePresence mode="wait">
            {tab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                {education.map((ed) => (
                  <GlassCard key={ed.degree} className="p-6">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div>
                        <h3 className="font-display text-lg font-semibold">
                          {ed.degree}
                        </h3>
                        <p className="mt-1 text-sm opacity-60">{ed.school}</p>
                      </div>
                      <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                        <span className="font-mono text-xs text-violet-light">
                          {ed.start} — {ed.end}
                        </span>
                        <span className="font-mono text-sm font-semibold text-cyan-light">
                          {ed.score}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </motion.div>
            )}

            {tab === "certifications" && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="grid gap-4 sm:grid-cols-3"
              >
                {certifications.map((cert) => (
                  <GlassCard key={cert.title} className="p-6">
                    <FiAward className="mb-3 text-violet-light" size={22} />
                    <h3 className="font-display text-base font-semibold">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-xs opacity-60">{cert.note}</p>
                    <p className="mt-3 font-mono text-[11px] text-cyan-light">
                      {cert.issuer}
                    </p>
                  </GlassCard>
                ))}
              </motion.div>
            )}

            {tab === "achievements" && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="grid gap-4 sm:grid-cols-3"
              >
                {achievements.map((a) => (
                  <GlassCard key={a.title} className="p-6">
                    <FiStar className="mb-3 text-amber" size={22} />
                    <h3 className="font-display text-base font-semibold">
                      {a.title}
                    </h3>
                    <p className="mt-1 text-sm opacity-65">{a.detail}</p>
                  </GlassCard>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
