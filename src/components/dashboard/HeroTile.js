"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function HeroTile() {
  const userName = "Naina"; // later we can make this dynamic from Supabase/auth

  return (
    <motion.article
      className="relative h-full w-full rounded-xl border border-white/10
                 bg-white/5 p-6 overflow-hidden"
      
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {/* Animated glow background (no layout shift) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-transparent opacity-70" />
      
      {/* Floating blur blobs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        
        {/* Greeting */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Welcome back, {userName}
          </h1>
          <p className="text-white/60 mt-1 text-sm">
            Keep learning. Small progress every day compounds into mastery.
          </p>
        </div>

        {/* Streak Section */}
        <div className="flex items-center gap-3 mt-6">
          
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/10">
            <Flame className="w-5 h-5 text-orange-400" />

            <span className="text-white text-sm font-medium">
              7 Day Streak
            </span>
          </div>

          <span className="text-white/50 text-xs">
            You're on fire 🔥
          </span>
        </div>
      </div>
    </motion.article>
  );
}