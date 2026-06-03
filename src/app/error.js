"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050816]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">
          Something went wrong
        </h2>

        <p className="text-white/60 mt-2">
          {error?.message}
        </p>

        <button
          onClick={() => reset()}
          className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}