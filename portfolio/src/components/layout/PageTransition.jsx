import { motion } from "framer-motion";

/**
 * Wraps the routed page content with an entrance animation.
 * With a single-page layout this fires once on mount; if React Router
 * is used for additional routes (e.g. a project case-study page),
 * wrap each <Route element> with this component.
 */
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
