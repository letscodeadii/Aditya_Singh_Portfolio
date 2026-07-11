import { useRef } from "react";
import { motion } from "framer-motion";

/**
 * Glassmorphism card with a faint gradient border and a gentle 3D
 * tilt that follows the pointer. Used across Skills/Projects/Certs.
 */
export default function GlassCard({ children, className = "", tilt = true }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${
      x * 6
    }deg) translateZ(0)`;
  }

  function handleMouseLeave() {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.35s cubic-bezier(.2,.8,.2,1)" }}
      className={`card-border glass rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
