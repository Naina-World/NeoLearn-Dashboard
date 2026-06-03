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

export default function MobileNav({ active, setActive }) {
  

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden z-50 border-t border-white/10 bg-[#070B1A]/90 backdrop-blur-lg">
      
      <ul className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <li key={item.id} className="relative">
              <button
                onClick={() => setActive(item.id)}
                className="flex flex-col items-center justify-center px-3 py-2 text-white/60 hover:text-white transition"
              >
                
                {/* Active background indicator */}
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                {/* Icon */}
                <Icon className="w-5 h-5 relative z-10" />

                {/* Label */}
                <span className="text-[10px] relative z-10 mt-1">
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}