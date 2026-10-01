import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Compass,
  MonitorPlay,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="overflow-hidden min-h-screen">
      {/* ---------------- HERO ---------------- */}
      <section className="bg-[#0E0E10]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-2 lg:px-8 lg:pt-28">
          {/* Left column */}
          <div>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-200 sm:text-6xl">
              <span className="block text-slate-200">Transform X Posts</span>
              <span className="block">
                into{" "}
                <span className="bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Beautiful
                </span>
              </span>
              <span className="block text-slate-200">Templates</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500">
              Convert any X post into a professional, downloadable template
              within seconds. Elevate your content with precision-crafted
              designs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate("/templates")}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-colors hover:bg-blue-700"
              >
                Generate Template
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate("/templates")}
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Explore Templates
              </button>
            </div>
          </div>

          {/* Right column — mock preview cards */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-6 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-700" />
                  <div className="h-3 w-32 rounded bg-slate-700" />
                </div>
                <div className="mt-5 space-y-2">
                  <div className="h-2.5 w-full rounded bg-slate-800" />
                  <div className="h-2.5 w-11/12 rounded bg-slate-800" />
                  <div className="h-2.5 w-3/5 rounded bg-slate-800" />
                </div>
                <div className="mt-6 flex gap-3">
                  <div className="h-9 w-9 rounded-lg bg-blue-600/40" />
                  <div className="h-9 w-9 rounded-lg bg-blue-600/40" />
                  <div className="h-9 w-9 rounded-lg bg-blue-600/40" />
                </div>
              </div>

              <div className="relative -mt-6 ml-10 flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-xl">
                <div className="h-8 w-8 shrink-0 rounded-full bg-blue-500" />
                <div className="h-2.5 w-40 rounded bg-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATS BAR ---------------- */}
      <section className="bg-[#0E0E10]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-16 text-center sm:grid-cols-4 lg:px-8">
          {[
            ["500k+", "Templates Created"],
            ["99.9%", "Uptime Guarantee"],
            ["0.5s", "Generation Time"],
            ["4.9/5", "User Satisfaction"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-4xl font-extrabold text-blue-600">{value}</p>
              <p className="mt-2 text-sm text-slate-700">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FEATURES ---------------- */}
      <section className="bg-[#0E0E10] py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-200">
            Crafted for Quality
          </h2>
          <p className="mt-4 text-slate-500">
            Everything you need to turn your insights into viral visual content,
            optimized for every platform.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              desc: "Get your design in milliseconds. Our high-performance engine renders templates faster than you can blink.",
            },
            {
              icon: Compass,
              title: "Professional Grade",
              desc: "Designed by experts. Every template follows rigorous design principles to ensure your brand looks premium.",
            },
            {
              icon: MonitorPlay,
              title: "4K High Resolution",
              desc: "Export crisp, high-resolution templates ready for any platform, from feeds to billboards.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg shadow-blue-500/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15">
                <Icon className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- PRECISION PREVIEW ---------------- */}
      <section className="bg-[#0E0E10]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8 mb-5">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-blue-700">
              The Precision Preview
            </h2>
            <p className="mt-4 max-w-md text-slate-700">
              Experience our signature glass aesthetic. Tweak colors, fonts, and
              layouts in real-time with an interface designed for professionals.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Real-time X integration",
                "Custom brand palettes",
                "Batch export capabilities",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preview mock */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-2xl">
              <div className="h-40 w-full rounded-lg bg-slate-800" />
              <div className="mt-4 space-y-2">
                <div className="h-2.5 w-4/5 rounded bg-slate-700" />
                <div className="h-2.5 w-3/5 rounded bg-slate-700" />
              </div>
            </div>
            <div className="absolute -top-6 -left-6 hidden items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-xl sm:flex">
              <div className="h-7 w-7 rounded-full bg-blue-500" />
              <div className="h-2.5 w-24 rounded bg-slate-700" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
