import React from "react";

const stats = [
  { value: "120+", label: "Data pipelines shipped" },
  { value: "40+", label: "AI models in production" },
  { value: "2.5PB", label: "Data processed monthly" },
  { value: "1,800+", label: "Professionals trained" },
];

export default function Stats() {
  return (
    <section className="bg-blue-800 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-heading font-bold text-4xl md:text-5xl text-white tracking-tight">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-blue-100/80 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}