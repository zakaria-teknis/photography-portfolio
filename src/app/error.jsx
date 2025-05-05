"use client";

export default function ErrorPage() {
  return (
    <main className="max-w-7xl h-screen mx-auto p-5 sm:p-10 text-zinc-50">
      <div className="h-full bg-zinc-950 rounded-2xl px-6 sm:px-12 pt-7 sm:pt-14 pb-6 sm:pb-12 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-fluid-7xl">500 Server Error</h1>
        <p className="font-medium text-center">
          Something went wrong! Please refresh in a few seconds.
        </p>
      </div>
    </main>
  );
}
