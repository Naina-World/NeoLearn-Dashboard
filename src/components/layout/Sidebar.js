"use client";

import { motion } from "framer-motion";
import { Home, BookOpen, BarChart3, Settings } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "activity", label: "Activity", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  const handleClick = (id) => {
    setActive(id);

    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <aside className="h-screen w-20 md:w-64 bg-[#070B1A] border-r border-white/10 flex flex-col justify-between py-6">
      {/* Top Section */}
      <section>
        <h1 className="hidden md:block text-white font-bold text-xl px-6 mb-8">
          NeoLearn
        </h1>

        <nav>
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className="relative w-full flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white transition"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/10 rounded-lg"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}

                    <Icon className="w-5 h-5 relative z-10" />

                    <span className="hidden md:block relative z-10">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>

      {/* Bottom Section */}
      <section className="px-4">
        <p className="hidden md:block text-xs text-white/40">
          v1.0 • Dashboard UI
        </p>
      </section>
    </aside>
  );
}