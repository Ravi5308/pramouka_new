import React, { useState } from "react";
import { Send, Check, Loader2 } from "lucide-react";


export default function CTA() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

const onSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const fd = new FormData(form);

  setError("");
  setSending(true);

  try {
    const response = await fetch("/contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: fd.get("name"),
        email: fd.get("email"),
        company: fd.get("company"),
        interest: fd.get("interest"),
        message: fd.get("message"),
      }),
    });

    const result = await response.json();

    if (!response.ok || result.success !== true) {
      throw new Error(
        result.message || `Request failed: HTTP ${response.status}`
      );
    }

    setSent(true);
    form.reset();
  } catch (err) {
    console.error("Contact form error:", err);
    setError(
      err.message || "Unable to send your request. Please try again."
    );
  } finally {
    setSending(false);
  }
};

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rounded-3xl bg-blue-800 overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_55%)]" />
          <div className="relative grid md:grid-cols-2 gap-10 p-8 sm:p-12 md:p-16">
            <div>
              <h2 className="font-heading font-bold tracking-tight text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
                Let's map your data-to-AI journey
              </h2>
              <p className="mt-5 text-blue-100/85 text-lg leading-relaxed max-w-md">
                Tell us where you are today. We'll send a tailored next-step
                recommendation — no obligation, no jargon.
              </p>
              <ul className="mt-8 space-y-3 text-blue-50">
                {["Free 30-min strategy call", "Tailored roadmap summary", "No commitment required"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2.5 text-sm">
                      <span className="grid place-items-center w-5 h-5 rounded-full bg-white/15">
                        <Check className="w-3 h-3" />
                      </span>
                      {t}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="md:pl-6">
              {sent ? (
                <div className="h-full grid place-items-center text-center rounded-2xl bg-white/10 p-10">
                  <div>
                    <div className="mx-auto grid place-items-center w-14 h-14 rounded-full bg-white/15">
                      <Check className="w-7 h-7 text-white" />
                    </div>
                    <p className="mt-4 text-white font-semibold text-lg">
                      Request received
                    </p>
                    <p className="mt-1 text-blue-100/80 text-sm">
                      We'll reach out within one business day.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="rounded-2xl bg-white p-6 sm:p-7 space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name" name="name" placeholder="Jane Doe" />
                    <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Company" name="company" placeholder="Company Inc." />
                    <SelectField
                      label="Interest"
                      name="interest"
                      options={["Consulting", "Development", "Training", "Not sure yet"]}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us about your data and goals…"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3.5 py-2.5">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        Sending <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send request <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}

function SelectField({ label, name, options }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
        {label}
      </label>
      <select
        name={name}
        className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}