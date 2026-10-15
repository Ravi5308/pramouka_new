import React from "react";
import { TrendingUp, Clock, ShieldCheck } from "lucide-react";

const cases = [
  {
    industry: "Finance",
    title: "Real-time fraud detection platform",
    desc: "Replaced a batch scoring system with a streaming ML pipeline, cutting fraud response time from hours to seconds.",
    metric: "−87%",
    metricLabel: "fraud detection latency",
    icon: Clock,
  },
  {
    industry: "Retail",
    title: "Demand forecasting & inventory AI",
    desc: "Built a forecasting engine across 14k SKUs, reducing stockouts and overstock through demand-sensing models.",
    metric: "+23%",
    metricLabel: "forecast accuracy",
    icon: TrendingUp,
  },
  {
    industry: "Healthcare",
    title: "Clinical data lake & analytics",
    desc: "Unified fragmented records into a governed data lake with HIPAA-ready access controls and self-serve analytics.",
    metric: "6x",
    metricLabel: "faster reporting",
    icon: ShieldCheck,
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700">
            Selected work
          </p>
          <h2 className="mt-3 font-heading font-bold tracking-tight text-slate-900 text-3xl sm:text-4xl md:text-5xl">
            Outcomes, not just deliverables
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-700/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wide text-blue-600">
                  {c.industry}
                </span>
                <span className="grid place-items-center w-9 h-9 rounded-lg bg-blue-50 text-blue-700">
                  <c.icon className="w-4.5 h-4.5" />
                </span>
              </div>
              <h3 className="mt-5 font-heading font-bold text-xl text-slate-900 leading-snug">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {c.desc}
              </p>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="font-heading font-bold text-3xl text-blue-700">
                  {c.metric}
                </div>
                <div className="mt-1 text-xs text-slate-500 font-medium">
                  {c.metricLabel}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}