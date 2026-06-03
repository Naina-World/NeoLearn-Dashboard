"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ value = 0 }) {
  return (
    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
      
      <motion.div
        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
        
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />
    </div>
  );
}