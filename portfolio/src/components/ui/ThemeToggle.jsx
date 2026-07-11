import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative flex h-9 w-16 items-center rounded-full border border-violet/25 glass px-1"
    >
      <motion.div
        animate={{ x: isDark ? 0 : 28 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-violet to-cyan text-white shadow-md"
      >
        {isDark ? <FiMoon size={14} /> : <FiSun size={14} />}
      </motion.div>
    </button>
  );
}
