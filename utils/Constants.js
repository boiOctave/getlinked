export const links = [
  { name: "Timeline", to: "#", id: 1 },
  { name: "Overview", to: "#", id: 2 },
  { name: "FAQs", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 },
];

export const navVariants = {
  closed: {
    opacity: 0,
    right: -500,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  open: {
    opacity: 1,
    right: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
  exit: {
    opacity: 0,
    right: -500,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
};

export const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },

  exit: {
    opacity:0
  }
};

export const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    }},
};

export const starVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.4,
      staggerDirection: 1,
    },
  },

};

export const glowariants = {
  closed: {
    opacity: 0,
    scale:0
  },
  open: { opacity: 0.5,
    scale:1.1
},

  exit: {
    opacity:0,
    scale:0
  }
};


export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      duration:0.1,
    },
  },
};


export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});


export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});


export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-200%' : direction === 'right' ? '300%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
      stiffness:100
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});