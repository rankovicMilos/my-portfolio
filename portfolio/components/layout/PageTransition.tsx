"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}
