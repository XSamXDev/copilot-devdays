import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Download, Pencil, RotateCw } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { getTemplateById } from "../data/templates";
import { getTweetData } from "../services/getPostData";
import { TemplateContext } from "../context/TemplateContext";
import { toPng } from "html-to-image";
import { useUser } from "@clerk/react";
export default function DownloadPage() {
  let count = Number(localStorage.getItem("count")) || 0;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedTemplate = getTemplateById(location.state?.templateId);
  const TemplatePreview = selectedTemplate.Component;
  const { value, setValue } = useContext(TemplateContext);
  const { isSignedIn } = useUser();
  const elementRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },

    reset,
  } = useForm();

  const handleChangeClick = () => {
    navigate("/templates", {
      state: {
        templateId: selectedTemplate.id,
      },
    });
  };

  const onSubmit = async (data) => {
    try {
      if (count === 5 && !isSignedIn) {
        alert(
          "You have reached the maximum number of downloads. Please sign in to continue downloading.",
        );
        return;
      }

      if (count < 5 && !isSignedIn) {
        localStorage.setItem("count", count + 1);
      }

      setLoading(true);

      const response = await getTweetData(data);
      setValue(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false, quality: 1 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = selectedTemplate.id + ".png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    return () => {
      setValue(null);
    };
  }, [setValue]);
  return (
    <main className="min-h-screen bg-[#0E0E10] px-3 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-6 sm:mb-8">
          <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Review your template before you generate.
          </h1>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
          <div className="w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#111214] p-3 shadow-2xl shadow-black/20 sm:p-5 lg:max-w-[55%]">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300 sm:text-xs">
                  Preview panel
                </p>
                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  {selectedTemplate.name}
                </h2>
              </div>

              <button
                type="button"
                onClick={handleChangeClick}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/4 px-3 py-2.5 text-xs font-semibold text-white transition hover:border-white/20 hover:bg-white/8 sm:text-sm"
              >
                <Pencil className="h-4 w-4" />
                Change template
              </button>
            </div>

            <div
              ref={elementRef}
              className="w-full overflow-x-auto p-2 pt-4 sm:p-5"
            >
              <div className="min-w-0">
                <TemplatePreview />
              </div>
            </div>

            {value && (
              <div className="mt-4 flex items-center justify-center">
                <button
                  onClick={htmlToImageConvert}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500 sm:w-auto"
                >
                  Download
                </button>
              </div>
            )}
          </div>

          <div className="w-full rounded-[28px] border border-white/10 bg-[#111214] p-4 shadow-2xl shadow-black/20 sm:p-6 lg:max-w-[45%] lg:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Enter X Post URL
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
                  Transform any post into a downloadable visual asset in
                  seconds.
                </p>
              </div>

              <button
                type="button"
                onClick={() => reset()}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/3 px-3 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/6"
              >
                <RotateCw className="h-4 w-4" />
                Reset
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 space-y-5 sm:mt-8"
            >
              <div>
                <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-transparent sm:flex-row sm:items-center">
                  <input
                    placeholder="Enter URL here: https://x.com/user/status/123456"
                    className="w-full bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none sm:px-5 sm:py-4 sm:text-base"
                    {...register("url", {
                      required: "URL is required",
                      pattern: {
                        value: /^https?:\/\/(www\.)?(x|twitter)\.com\/.+$/,
                        message: "Enter a valid X/Twitter post URL",
                      },
                    })}
                  />
                </div>

                {errors.url && (
                  <p className="mt-2 text-sm text-rose-400">
                    {errors.url.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Download className="h-4 w-4" />
                {loading ? "Generating..." : "Generate download"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
