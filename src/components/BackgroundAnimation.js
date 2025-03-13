import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundAnimation() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 500, 1000, 1500],
    ['#0A192F', '#14213D', '#1D2F6F', '#3A0CA3'] // Midnight blue to deep purple gradient
  );

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{ background: backgroundColor }}
      transition={{ duration: 0.5 }}
    />
  );
}