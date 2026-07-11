import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { profile } from "../data/resumeData";
import MagneticButton from "../components/ui/MagneticButton";
import Particles from "../components/background/Particles";

const ROLES = [
  "Full-Stack Developer",
  "Java & Spring Boot Engineer",
  "React Developer",
  "AI-Integrated App Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect cycling through role titles
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="section-pad relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <Particles count={14} />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full border border-violet/25 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs tracking-wide opacity-80">
              open to full-stack roles
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm{" "}
            <span className="text-gradient">{profile.firstName}</span>
            <br />
            {profile.tagline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 flex h-7 items-center font-mono text-lg opacity-80 sm:text-xl"
          >
            <span className="mr-2 text-violet-light">$</span>
            {displayText}
            <span className="ml-0.5 animate-blink text-violet-light">▌</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed opacity-70"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#projects"
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#projects");
                if (window.__lenis && el) window.__lenis.scrollTo(el, { offset: -60 });
              }}
            >
              View My Work <FiArrowDown className="rotate-[-45deg]" />
            </MagneticButton>
            <MagneticButton
              as="a"
              href={profile.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Download CV <FiDownload />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: signature code editor panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-violet/25 via-cyan/10 to-transparent blur-2xl" />
          <div className="card-border glass-strong overflow-hidden rounded-2xl shadow-2xl">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-amber-400/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-xs opacity-50">developer.json</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <code>
                <Line n={1}>
                  <Key>const</Key> <Var>developer</Var> = {"{"}
                </Line>
                <Line n={2} indent={1}>
                  <Prop>name</Prop>: <Str>"Aditya Singh"</Str>,
                </Line>
                <Line n={3} indent={1}>
                  <Prop>role</Prop>: <Str>"Full-Stack Developer"</Str>,
                </Line>
                <Line n={4} indent={1}>
                  <Prop>stack</Prop>: [<Str>"Java"</Str>, <Str>"Spring"</Str>, <Str>"React"</Str>],
                </Line>
                <Line n={5} indent={1}>
                  <Prop>focus</Prop>: <Str>"scalable, AI-integrated apps"</Str>,
                </Line>
                <Line n={6} indent={1}>
                  <Prop>basedIn</Prop>: <Str>"Pune, India"</Str>,
                </Line>
                <Line n={7} indent={1}>
                  <Prop>available</Prop>: <Bool>true</Bool>
                </Line>
                <Line n={8}>{"};"}</Line>
              </code>
            </pre>
          </div>

          {/* floating badge */}
          <motion.div
            className="glass absolute -bottom-6 -left-6 rounded-xl border border-violet/25 px-4 py-3 shadow-lg animate-float"
          >
            <p className="font-display text-xl font-semibold text-gradient">90%</p>
            <p className="font-mono text-[10px] opacity-60">manual effort cut</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Line({ children, n, indent = 0 }) {
  return (
    <div className="flex">
      <span className="mr-4 w-4 select-none text-right opacity-30">{n}</span>
      <span style={{ paddingLeft: `${indent * 1.1}rem` }}>{children}</span>
    </div>
  );
}
const Key = ({ children }) => <span className="text-violet-light">{children}</span>;
const Var = ({ children }) => <span className="opacity-90">{children}</span>;
const Prop = ({ children }) => <span className="text-cyan-light">{children}</span>;
const Str = ({ children }) => <span className="text-amber">{children}</span>;
const Bool = ({ children }) => <span className="text-violet-light">{children}</span>;
