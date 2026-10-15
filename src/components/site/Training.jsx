import React from "react";
import { BarChart3, ArrowRight } from "lucide-react";

const courses = [
  {
    level: "Foundation",
    title: "Data Engineering Essentials",
    desc: "Pipelines, warehousing, and data modeling fundamentals for teams starting their data journey.",
    duration: "6 weeks",
    difficulty: 2,
  },
  {
    level: "Intermediate",
    title: "Applied Machine Learning",
    desc: "Hands-on model development, evaluation, and deployment with real datasets and MLOps basics.",
    duration: "8 weeks",
    difficulty: 3,
  },
  {
    level: "Advanced",
    title: "LLM & Generative AI in Production",
    desc: "RAG systems, fine-tuning, evaluation, and safe deployment of generative AI applications.",
    duration: "10 weeks",
    difficulty: 4,
  },
];

function Meter({ level }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-6 rounded-full ${
            i < level ? "bg-blue-600" : "bg-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function Training() {
  return (
    <section id="training" className="py-24 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700">
              The Academy
            </p>
            <h2 className="mt-3 font-heading font-bold tracking-tight text-slate-900 text-3xl sm:text-4xl md:text-5xl">
              Build capability that stays in-house
          </h2>
            <p className="mt-4 text-lg text-slate-600">
              Role-based programs with live project labs — your teams ship real
              work while they learn.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:gap-2.5 transition-all shrink-0"
          >
            Enroll a team <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl bg-white border border-slate-200 p-7 hover:shadow-lg hover:shadow-blue-700/5 transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wide text-blue-600">
                  {c.level}
                </span>
                <BarChart3 className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="mt-4 font-heading font-bold text-xl text-slate-900">
                {c.title}
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                {c.desc}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 mb-1.5">Difficulty</div>
                  <Meter level={c.difficulty} />
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 mb-1.5">Duration</div>
                  <div className="text-sm font-semibold text-slate-800">
                    {c.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}