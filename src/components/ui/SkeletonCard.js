"use client";

import { motion } from "framer-motion";

export default function SkeletonCard({ className = "" }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/5 ${className}`}
      
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content placeholders */}
      <div className="relative p-4 space-y-3">
        
        {/* Icon placeholder */}
        <div className="w-8 h-8 rounded-lg bg-white/10" />

        {/* Title placeholder */}
        <div className="h-4 w-3/4 rounded bg-white/10" />

        {/* Subtitle placeholder */}
        <div className="h-3 w-1/2 rounded bg-white/10" />

        {/* Progress placeholder */}
        <div className="h-2 w-full rounded bg-white/10 mt-4" />
      </div>
    </motion.div>
  );
}