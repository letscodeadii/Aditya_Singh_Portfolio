import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { profile, socials } from "../../data/resumeData";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
  phone: FiPhone,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const tickerItems = [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "Hibernate",
    "TypeScript",
    "Docker",
    "System Design",
  ];

  return (
    <footer className="section-pad relative border-t border-violet/10 pb-8 pt-16">
      {/* marquee ticker */}
      <div className="mb-14 overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 opacity-40">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="font-mono text-sm tracking-widest whitespace-nowrap"
            >
              {item} <span className="mx-2 text-violet">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <p className="font-display text-2xl">
          Let's build something <span className="text-gradient">worth shipping</span>.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.icon === "mail" || s.icon === "phone" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="glass grid h-11 w-11 place-items-center rounded-full border border-violet/20 transition-colors hover:border-violet/50 hover:text-violet-light"
              >
                <Icon size={17} />
              </a>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col items-center gap-1 text-sm opacity-60">
          <p>
            © {year} {profile.name}. Designed &amp; built from scratch.
          </p>
          <p className="font-mono text-xs">console.log("thanks for scrolling");</p>
        </div>
      </div>
    </footer>
  );
}
