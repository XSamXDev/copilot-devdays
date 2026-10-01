import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-(--border) bg-(--bg)">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <div className="max-w-md">
            <h2 className="text-left text-2xl font-bold text-blue-500 transition sm:text-3xl hover:*:text-blue-400 cursor-pointer" onClick={() => navigate("/")}  >
              XPostGen
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-(--text-muted) sm:mt-8 sm:text-base lg:text-base">
              Helping creators turn everyday posts into clean, confident,
              scroll-stopping visuals that actually feel like them.
            </p>

            <p className="mt-6 text-xs text-(--text-muted) sm:text-sm">
              © 2024 XPostGen. Built with 💕.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 xl:gap-20">
            <div className="flex flex-col">
              <h3 className="mb-4 text-lg font-semibold text-(--text) sm:text-xl">
                Products
              </h3>

              <div className="flex flex-col gap-3 sm:gap-4">
                <Link
                  to="/templates"
                  className="text-sm text-(--text-muted) transition hover:text-(--text) sm:text-base"
                >
                  Templates
                </Link>

                <Link
                  to="/faq"
                  className="text-sm text-(--text-muted) transition hover:text-(--text) sm:text-base"
                >
                  FAQ's
                </Link>

                <Link
                  to="/guides"
                  className="text-sm text-(--text-muted) transition hover:text-(--text) sm:text-base"
                >
                  Guides
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="mb-4 text-lg font-semibold text-(--text)ext-xl">
                Company
              </h3>

              <div className="flex flex-col gap-3 sm:gap-4">
                <Link
                  to="/privacy"
                  className="text-sm text-(--text-muted) transition hover:text-(--text) sm:text-base"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms"
                  className="text-sm text-(--text-muted) transition hover:text-(--text) sm:text-base"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="mb-4 text-lg font-semibold text-(--text) sm:text-xl">
                Connect
              </h3>

              <div className="flex flex-col gap-3 sm:gap-4">
                <a
                  href="https://twitter.com/xsamxdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-(--text-muted) transition hover:text-(--text) sm:text-base"
                >
                  Twitter
                </a>

                <a
                    href="https://www.linkedin.com/in/xsamxdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-(--text-muted) transition hover:text-(--text) sm:text-base"
                >
                  LinkedIn
                </a>

                <Link
                  to="/contact"
                  className="text-sm text-(--text-muted) transition hover:text-(--text) sm:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
