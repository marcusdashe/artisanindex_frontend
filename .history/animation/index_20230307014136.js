export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const stagger = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    },
  },
  whileHover: { scale: 1.3 },
};
