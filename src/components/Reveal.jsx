import { motion, useReducedMotion } from "motion/react";

/*
  Scroll-triggered entrance used across every section.
  When the visitor prefers reduced motion we render the content plainly —
  no transform, no delay — rather than a faster version of the same animation.
*/
export default function Reveal({ children, delay = 0, y = 24, className }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
