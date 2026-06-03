import SkeletonCard from "@/components/ui/SkeletonCard";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#050816] p-6">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[180px]">
        <SkeletonCard className="lg:col-span-2 lg:row-span-2" />
        <SkeletonCard className="lg:col-span-2 lg:row-span-2" />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </main>
  );
}