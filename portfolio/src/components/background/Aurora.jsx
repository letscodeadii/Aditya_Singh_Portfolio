import { useTheme } from "../../context/ThemeContext";

/**
 * Fixed, full-viewport ambient background: a faint blueprint grid plus
 * slow-drifting aurora blobs. Purely decorative — aria-hidden.
 */
export default function Aurora() {
  const { isDark } = useTheme();

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div
        className={`absolute inset-0 ${isDark ? "bg-ink" : "bg-paper"}`}
      />

      {/* blueprint grid */}
      <div
        className={`absolute inset-0 ${
          isDark ? "bg-grid-dark" : "bg-grid-light"
        } bg-grid`}
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* aurora blobs */}
      <div
        className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full blur-[120px] animate-aurora"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(124,92,252,0.35), transparent 70%)"
            : "radial-gradient(circle, rgba(67,56,202,0.16), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full blur-[120px] animate-aurora"
        style={{
          animationDelay: "-8s",
          background: isDark
            ? "radial-gradient(circle, rgba(34,211,238,0.25), transparent 70%)"
            : "radial-gradient(circle, rgba(15,118,110,0.14), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full blur-[130px] animate-aurora"
        style={{
          animationDelay: "-14s",
          background: isDark
            ? "radial-gradient(circle, rgba(245,165,36,0.12), transparent 70%)"
            : "radial-gradient(circle, rgba(180,70,14,0.1), transparent 70%)",
        }}
      />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(8,9,13,0.6), transparent)"
            : "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(245,243,238,0.5), transparent)",
        }}
      />
    </div>
  );
}
