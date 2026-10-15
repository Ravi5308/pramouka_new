import React from "react";
import { Lightbulb, Code2, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Consulting",
    tag: "Strategy & Architecture",
    desc: "Data strategy, AI roadmaps, and platform architecture tailored to your business outcomes — turning ambiguity into a clear, sequenced plan.",
    points: ["Data maturity assessment", "AI roadmap & use-case sizing", "Reference architecture", "Governance & compliance design"],
  },
  {
    icon: Code2,
    title: "Development",
    tag: "Engineering & Deployment",
    desc: "Production-grade data pipelines, ML models, and AI applications — built, tested, and deployed into your environment with operational rigor.",
    points: ["Data engineering & pipelines", "ML / LLM model development", "MLOps & deployment", "Analytics & dashboards"],
  },
  {
    icon: GraduationCap,
    title: "Training",
    tag: "Enablement & Academy",
    desc: "Hands-on programs that upskill your teams in data engineering, ML, and AI adoption — so capability stays in-house long after we leave.",
    points: ["Role-based curricula", "Live project labs", "Certification tracks", "Executive briefings"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700">
            What we do
          </p>
          <h2 className="mt-3 font-heading font-bold tracking-tight text-slate-900 text-3xl sm:text-4xl md:text-5xl">
            Three pillars, one outcome
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We cover the complete journey from raw data to deployed AI — strategy,
            engineering, and the people who sustain it.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white p-8 md:p-10 hover:bg-blue-50/40 transition-colors duration-300"
            >
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-blue-700/10 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                <s.icon className="w-6 h-6" />
              </span>
              <p className="mt-6 text-xs font-mono tracking-wide uppercase text-blue-600">
                {s.tag}
              </p>
              <h3 className="mt-1 font-heading font-bold text-2xl text-slate-900">
                {s.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:gap-2.5 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}