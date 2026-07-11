import { useEffect, useRef } from "react";

/**
 * Tracks pointer position into a ref (no re-renders) for use with
 * CSS custom properties / imperative style updates — keeps the
 * mouse-follow glow effect smooth at 60fps.
 */
export default function useMousePosition() {
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      position.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return position;
}
