import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="inline-flex items-center rounded-lg bg-white px-3 py-2">
              <img
                src="https://media.base44.com/images/public/6acf84ad8d99817e207822d5/779ace656_logo.png"
                alt="pramouka Technology Services"
                className="h-8 w-auto"
              />
            </div>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              Digital data transformation and AI development — consulting,
              engineering, and training that turn your data into a durable
              competitive advantage.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:bg-blue-700 hover:text-white transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Services"
            links={["Consulting", "Development", "Training", "Methodology"]}
          />
          <FooterCol
            title="Company"
            links={["About", "Work", "Contact", "Careers"]}
          />
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} pramouka Technology Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}