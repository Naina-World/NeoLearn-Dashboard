"use client";

import { motion } from "framer-motion";

const activity = [
  1, 2, 3, 4, 2, 1, 0,
  2, 3, 4, 1, 0, 2, 3,
  4, 2, 1, 3, 4, 2, 1,
  0, 1, 2, 3, 4, 2, 1,
  3, 4, 2, 1, 0, 2, 3,
];

const colors = {
  0: "bg-white/5",
  1: "bg-emerald-500/20",
  2: "bg-emerald-500/40",
  3: "bg-emerald-500/60",
  4: "bg-emerald-500/80",
};

export default function ActivityTile() {
  return (
    <motion.article
      className="relative h-full w-full rounded-xl border border-white/10 bg-white/5 p-5 overflow-hidden"
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
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div>
          <h2 className="text-white font-semibold text-lg">
            Activity
          </h2>

          <p className="text-white/50 text-sm">
            Learning consistency this month
          </p>
        </div>

        {/* Stats */}
        <div className="mt-3">
          <span className="text-2xl font-bold text-white">
            127
          </span>

          <span className="ml-2 text-sm text-emerald-400">
            contributions
          </span>
        </div>

        {/* Activity Grid */}
        <div className="mt-4 flex-1 flex items-end">
          <div className="grid grid-cols-7 gap-1 w-full">
            {activity.map((level, i) => (
              <motion.div
                key={i}
                className={`h-6 rounded-sm ${colors[level]}`}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: i * 0.02,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}