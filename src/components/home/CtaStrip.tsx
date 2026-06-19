import { WHATSAPP_LINKS } from "@/lib/business";

const industries = [
  { icon: "store", label: "Retail & Fashion" },
  { icon: "precision_manufacturing", label: "Industrial" },
  { icon: "local_hospital", label: "Healthcare" },
  { icon: "restaurant", label: "FMCG & Food" },
  { icon: "local_shipping", label: "Logistics" },
  { icon: "agriculture", label: "Agriculture" },
];

export default function CtaStrip() {
  return (
    <section className="bg-surface-container-high py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop border-y border-outline-variant">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-on-surface mb-3">
          Trusted Across Industries
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          From retail giants to industrial manufacturers — our Poly Bags power
          businesses across Pakistan. Get your custom quote in under 5 minutes.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="flex flex-col items-center gap-2 min-w-[100px]"
            >
              <div className="w-16 h-16 rounded-full bg-surface border border-outline-variant flex items-center justify-center shadow-[0_0_4px_rgba(0,0,0,0.04)]">
                <span className="material-symbols-outlined text-3xl text-primary">
                  {ind.icon}
                </span>
              </div>
              <span className="text-sm font-semibold text-on-surface-variant">
                {ind.label}
              </span>
            </div>
          ))}
        </div>

        <a
          href={WHATSAPP_LINKS.quote}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-lg hover:brightness-90 transition-all no-underline shadow-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
          </svg>
          Get Your Custom Quote Now
          <span className="text-xs opacity-80 font-normal normal-case">
            — Avg. reply 5 min
          </span>
        </a>
      </div>
    </section>
  );
}
