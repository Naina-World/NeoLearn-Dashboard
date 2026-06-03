"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";

import BentoGrid from "@/components/dashboard/BentoGrid";
import CourseCard from "@/components/dashboard/CourseCard";
import ActivityTile from "@/components/dashboard/ActivityTile";
import HeroTile from "@/components/dashboard/HeroTile"; // ⚠️ check name

export default function DashboardClient({ courses }) {
    const [active, setActive] = useState("home");

    const renderSection = () => {
        switch (active) {
            case "home":
                return (
                    <>
                        <BentoGrid courses={courses} />
                    </>
                );

            case "courses":
                return (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {courses?.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                );

            case "activity":
                return <ActivityTile />;

            case "settings":
                return (


                    <article className="h-full rounded-xl border border-white/10 bg-white/5 p-4">
                        <h3 className="text-white font-medium">
                            Settings
                        </h3>

                        <p className="text-white/50 text-sm mt-2">
                            Dashboard preferences coming soon.
                        </p>
                    </article>

                );

            default:
                return (
                    <>

                        <BentoGrid courses={courses} />
                    </>
                );
        }
    };

    return (
        <main className="min-h-screen flex bg-[#050816]">
            {/* Sidebar (desktop) */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            {/* Content */}
            <section className="flex-1 overflow-auto">
                {renderSection()}
            </section>

            {/* Mobile Nav */}
            <MobileNav active={active} setActive={setActive} />
        </main>
    );
}