import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const followLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Email", href: "mailto:hello@example.com" },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Works", href: "#" },
  { label: "Break", href: "#" },
  { label: "About", href: "#" },
];

export default function Social() {
  return (
    <footer className="relative w-full pt-12 sm:pt-16">
      <section className="bg-[#e5e4df] text-[#101010]">
        <div className="mx-auto w-full max-w-[1900px] px-5 py-10 sm:px-8 sm:py-12 md:px-12 lg:px-16">
          <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.08em] sm:text-[1.95rem] sm:tracking-[0.05em]">
            <p>(Follow)</p>
            <p>(Navigation)</p>
          </div>

          <div className="mt-6 border-t border-black/70 pt-7 sm:pt-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
              <nav className="flex flex-col items-start gap-1.5">
                {followLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[clamp(2rem,4.5vw,4.3rem)] font-semibold uppercase leading-[0.9] tracking-[-0.01em] transition hover:opacity-70"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href="#"
                className="justify-self-center text-sm font-semibold uppercase tracking-[0.08em] transition hover:opacity-70 sm:pb-1"
              >
                Back To Top
              </a>

              <nav className="flex flex-col items-start gap-1.5 sm:items-end">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[clamp(2rem,4.5vw,4.3rem)] font-semibold uppercase leading-[0.9] tracking-[-0.01em] transition hover:opacity-70"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-[#3a1708] py-6 sm:py-8">
          <p
            className={`${anton.className} whitespace-nowrap text-[clamp(4.4rem,13vw,13.8rem)] uppercase leading-[0.84] tracking-[-0.02em] text-[#e7e5da]`}
          >
            TALK LET&apos;S TALK LET&apos;S TALK LET&apos;S TALK LET&apos;S TALK
            LET&apos;S TALK LET&apos;S
          </p>
        </div>

        <div className="mx-auto w-full max-w-[1900px] px-5 py-4 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.08em] sm:flex-row sm:items-center sm:justify-between">
            <p className="flex flex-wrap items-center gap-x-7 gap-y-1 text-[#181818]">
              <span aria-hidden>●</span>
              <span>New York, US</span>
              <span>4:55 PM</span>
              <span>GMT-4</span>
              <span>36.7783° N, 119.4179°</span>
            </p>
            <p className="text-[#181818]">©2026 All Rights Reserved</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
