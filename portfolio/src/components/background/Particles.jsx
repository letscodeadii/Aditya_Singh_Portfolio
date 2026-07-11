import { useMemo } from "react";
import { useTheme } from "../../context/ThemeContext";

/**
 * A small field of softly floating dots. Positions/timings are randomized
 * once via useMemo so they don't reshuffle on re-render.
 */
export default function Particles({ count = 18, className = "" }) {
  const { isDark } = useTheme();

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 6 + Math.random() * 8,
        delay: -Math.random() * 10,
      })),
    [count]
  );

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-float-slow"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: isDark
              ? "rgba(124,92,252,0.5)"
              : "rgba(67,56,202,0.35)",
            boxShadow: isDark
              ? "0 0 8px rgba(124,92,252,0.6)"
              : "0 0 6px rgba(67,56,202,0.3)",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
