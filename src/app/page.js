import BentoGrid from "@/components/dashboard/BentoGrid";
import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";
import { createClient } from "@supabase/supabase-js";

export default async function Page() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (
    <main className="min-h-screen bg-[#050816] flex">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <section
        id="dashboard-content"
        className="flex-1 overflow-auto"
      >
        <BentoGrid courses={courses || []} />
      </section>

      {/* Mobile Navigation */}
      <MobileNav />
    </main>
  );
}
