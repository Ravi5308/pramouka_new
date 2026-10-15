import React from "react";
import { Search, Layers, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Discover",
    desc: "We map your data landscape, business goals, and constraints — identifying the highest-impact opportunities and the gaps blocking them.",
  },
  {
    n: "02",
    icon: Layers,
    title: "Architect",
    desc: "We design the data foundation and AI blueprint: pipelines, models, governance, and a phased delivery plan tied to measurable outcomes.",
  },
  {
    n: "03",
    icon: Cpu,
    title: "Build",
    desc: "We engineer and train in sprints — data pipelines, ML/LLM models, and applications — with continuous validation and your teams in the loop.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Deploy & Scale",
    desc: "We ship to production with MLOps, monitoring, and enablement — then iterate so the system compounds in value as your data grows.",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700">
            How we work
          </p>
          <h2 className="mt-3 font-heading font-bold tracking-tight text-slate-900 text-3xl sm:text-4xl md:text-5xl">
            A method that turns data into outcomes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Four phases, each de-risking the next — so AI investment compounds
            instead of stalling.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-blue-700 text-white shadow-md shadow-blue-700/25">
                  <s.icon className="w-5 h-5" />
                </span>
                <span className="font-mono text-sm font-semibold text-blue-600">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 font-heading font-bold text-xl text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2.5 text-slate-600 leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(100%-1.5rem)] w-3 h-px bg-slate-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}