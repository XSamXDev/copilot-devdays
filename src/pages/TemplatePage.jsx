import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TEMPLATE_LIST } from "../data/templates.js";

function TemplatePage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#0E0E10] px-6 py-12 text-white sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
            <Sparkles className="h-3.5 w-3.5" />
            Curated designs
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
            Pick a style that makes your post stand out
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Turn your X posts into polished, share-ready visuals with a
            template designed for your content.
          </p>
        </section>

        <section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPLATE_LIST.map((template, index) => {
            const TemplateComponent = template.Component;
            const templateName =
              template.name || `Template ${String(index + 1).padStart(2, "0")}`;

            return (
              <article
                key={`${template.id}-${index}`}
                className="group rounded-3xl border border-slate-800/80 bg-slate-900/50 p-3 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900"
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-2">
                  <div className="pointer-events-none transition duration-300 group-hover:scale-[1.02]">
                    <TemplateComponent />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                    <button
                      onClick={() =>
                        navigate("/download", {
                          state: { templateId: template.id },
                        })
                      }
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                    >
                      Use this template
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between px-2 pb-1 pt-4">
                  <div>
                    <h2 className="font-semibold text-slate-100">
                      {templateName}
                    </h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Ready to customize
                    </p>
                  </div>
                  <span className="rounded-full border border-slate-700 bg-slate-800/70 px-2.5 py-1 text-[11px] font-medium text-slate-400">
                    4K export
                  </span>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default TemplatePage;
