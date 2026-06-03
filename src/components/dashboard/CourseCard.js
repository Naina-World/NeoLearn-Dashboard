"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import ProgressBar from "./ProgressBar";

/**
 * Dynamically resolve Lucide icon from string
 * Example: "BookOpen" → <BookOpen />
 */
function getIcon(iconName) {
    const Icon = LucideIcons[iconName];

    // fallback icon if invalid name comes from DB
    return Icon ? (
        <Icon className="w-5 h-5 text-white" />
    ) : (
        <LucideIcons.BookOpen className="w-5 h-5 text-white" />
    );
}

export default function CourseCard({ course }) {
    return (
        <motion.article
            className="relative h-full rounded-xl border border-white/10
                 bg-white/5 p-4 overflow-hidden
                 hover:bg-white/10 transition"

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
            {/* Glow overlay (hover effect without layout shift) */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-blue-500/10" />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-3 h-full">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-white/10">
                        {getIcon(course.icon_name)}
                    </div>

                    <span className="text-xs text-white/50">
                        {course.progress}%
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-medium leading-tight">
                    {course.title}
                </h3>

                {/* Progress Bar */}
                <div className="mt-auto">
                    <ProgressBar value={course.progress} />
                </div>
            </div>
        </motion.article>
    );
}