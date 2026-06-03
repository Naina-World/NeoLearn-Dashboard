"use client";

import { motion } from "framer-motion";
import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseCard from "./CourseCard";

const tileVariant = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function BentoGrid({ courses = [] }) {
  return (
    <motion.section
      className="
        w-full p-4 md:p-6
        grid gap-4
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        auto-rows-[180px]
      "
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {/* Hero Tile */}
      <motion.section
        id="home"
        variants={tileVariant}
        className="lg:col-span-2 lg:row-span-2"
      >
        <HeroTile />
      </motion.section>

      {/* Activity Tile */}
      <motion.section
        id="activity"
        variants={tileVariant}
        className="lg:col-span-2 lg:row-span-2"
      >
        <ActivityTile />
      </motion.section>

      {/* Courses Section */}
      <section id="courses" className="contents">
        {courses.map((course) => (
          <motion.section
            key={course.id}
            variants={tileVariant}
            className="col-span-1"
          >
            <CourseCard course={course} />
          </motion.section>
        ))}
      </section>

      {/* Settings Tile */}
      <motion.section
        id="settings"
        variants={tileVariant}
        className="col-span-1"
      >
        <article className="h-full rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-white font-medium">
            Settings
          </h3>

          <p className="text-white/50 text-sm mt-2">
            Dashboard preferences coming soon.
          </p>
        </article>
      </motion.section>
    </motion.section>
  );
}