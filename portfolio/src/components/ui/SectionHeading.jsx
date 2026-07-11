import { motion } from "framer-motion";

/**
 * Consistent section header: a code-comment style eyebrow ("// About")
 * followed by a large display heading. Encodes the "developer's editor"
 * motif used throughout the site.
 */
export default function SectionHeading({
  comment,
  title,
  highlight,
  align = "left",
  description,
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="eyebrow mb-3"
      >
        {comment}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-current"
      >
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-4 max-w-2xl text-base opacity-70 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
