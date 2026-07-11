import { useRef } from "react";
import { motion } from "framer-motion";

/**
 * A button/link with a subtle magnetic hover pull and an animated
 * gradient-shimmer sweep. `as="a"` renders an anchor, otherwise a button.
 */
export default function MagneticButton({
  children,
  onClick,
  href,
  as,
  variant = "primary",
  className = "",
  type = "button",
  target,
  rel,
}) {
  const ref = useRef(null);
  const Tag = as === "a" ? motion.a : motion.button;

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-sm tracking-wide transition-colors duration-300 overflow-hidden";

  const styles =
    variant === "primary"
      ? "bg-violet text-white shadow-[0_0_0_1px_rgba(124,92,252,0.4),0_8px_30px_-8px_rgba(124,92,252,0.6)] hover:shadow-[0_0_0_1px_rgba(124,92,252,0.6),0_8px_40px_-6px_rgba(124,92,252,0.8)]"
      : "glass border border-violet/30 hover:border-violet/60";

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      type={as === "a" ? undefined : type}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.2s ease-out" }}
      className={`${base} ${styles} ${className}`}
    >
      <span className="btn-shimmer absolute inset-0 animate-shimmer opacity-60 pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Tag>
  );
}
