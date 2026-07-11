import { motion, AnimatePresence } from "framer-motion";

/**
 * A short "compiling" boot sequence that mimics a terminal / build tool,
 * on-brand for a developer portfolio. Auto-dismisses via the `show` prop
 * controlled in App.jsx.
 */
export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-2xl text-violet-light"
            >
              &lt;/&gt;
            </motion.div>
            <div className="font-mono text-2xl tracking-widest text-white/50">
              <TypingLine text=" Aditya Singh" />
            </div>
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-violet to-cyan"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TypingLine({ text }) {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{ duration: 0.9, ease: "linear" }}
      className="inline-block overflow-hidden whitespace-nowrap align-bottom"
    >
      {text}
      <span className="animate-blink">▌</span>
    </motion.span>
  );
}
