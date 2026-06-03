
import DashboardClient from "@/components/dashboard/DashBoardClient";
import { supabase } from "@/lib/supabase";

export default async function Page() {
 
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);

  return < DashboardClient courses={courses || []} />;
}
