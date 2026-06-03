"use client";

import { motion } from "framer-motion";

export default function AnimatedCard({ children, className = "" }) {
  return (
    <motion.div
      className={`relative rounded-xl border border-white/10 bg-white/5 overflow-hidden ${className}`}
      
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}

      whileHover={{
        scale: 1.02,
      }}
    >
      {/* Hover glow layer (no layout shift) */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}