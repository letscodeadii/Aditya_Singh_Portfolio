import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

/**
 * A soft radial glow that eases toward the pointer position.
 * Uses direct style mutation (no React state) to stay at 60fps.
 * Hidden on touch devices and when reduced motion is preferred.
 */
export default function MouseGlow() {
  const glowRef = useRef(null);
  const { isDark } = useTheme();
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || reduced) return undefined;

    function handleMove(e) {
      target.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener("pointermove", handleMove, { passive: true });

    let rafId;
    function tick() {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.current.x - 220}px, ${
          current.current.y - 220
        }px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-[5] h-[440px] w-[440px] rounded-full will-change-transform hidden md:block"
      style={{
        background: isDark
          ? "radial-gradient(circle, rgba(124,92,252,0.10) 0%, rgba(34,211,238,0.06) 40%, transparent 70%)"
          : "radial-gradient(circle, rgba(67,56,202,0.06) 0%, rgba(15,118,110,0.04) 40%, transparent 70%)",
      }}
    />
  );
}
