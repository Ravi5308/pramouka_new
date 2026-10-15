import React from "react";
import { ArrowRight, Sparkles, Activity } from "lucide-react";
import { Image } from "@/components/ui/image";

const BG_URL =
  "https://media.base44.com/images/public/6acf84ad8d99817e207822d5/decfbaabb_generated_81560225.png";

const HERO_IMAGE =
  "https://media.base44.com/images/public/6acf84ad8d99817e207822d5/898633a62_generated_image.png";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-50">
      {/* Background asset */}
      <div className="absolute inset-0">
        <img
          src={BG_URL}
          alt="Abstract blue data transformation background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Digital Data Transformation · AI to Data
          </div>

          <h1 className="mt-6 font-heading font-bold tracking-tight text-slate-900 text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Turn raw data into
            <span className="block text-blue-700">autonomous intelligence.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
            We engineer the full data-to-AI pipeline — strategy consulting,
            production-grade development, and team training — so your
            organization moves from scattered data to deployed, decision-ready AI.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-700/25"
            >
              Start Transformation
              <ArrowRight className="w-4.5 h-4.5" />
            </a>
            <a
              href="#methodology"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-colors"
            >
              View Methodology
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-600" />
              <span>End-to-end delivery</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>From strategy to production</span>
            </div>
          </div>
          </div>

          <div className="relative -mx-6 sm:mx-0">
            <div className="absolute inset-6 rounded-full bg-blue-500/15 blur-3xl" />
            <Image
              src={HERO_IMAGE}
              alt="Raw data flowing through pipelines into a glowing neural network"
              className="relative w-full aspect-square [mask-image:radial-gradient(ellipse_at_center,black_42%,transparent_82%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_42%,transparent_82%)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}