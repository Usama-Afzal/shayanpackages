import FadeInView from "@/components/ui/FadeInView";
import { BUSINESS, WHATSAPP_LINKS } from "@/lib/business";

export default function SamplesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-section-gap-mobile md:pt-section-gap-desktop pb-12 px-margin-mobile md:px-margin-desktop text-center">
        <FadeInView direction="up" className="max-w-container-max mx-auto">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
            Quality Assurance
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-on-surface mb-6">
            Experience Our Quality
            <br />
            Request Free Samples
          </h1>
          <p className="text-lg leading-relaxed text-on-surface-variant max-w-3xl mx-auto">
            We understand that in bulk B2B procurement, tangible proof is
            required. We provide physical samples so procurement managers and
            facility operators can rigorously verify Micron thickness, printing precision,
            and material tear strength before committing to high-volume orders.
          </p>
        </FadeInView>
      </section>

      {/* Split Content */}
      <section className="pb-section-gap-mobile md:pb-section-gap-desktop px-margin-mobile md:px-margin-desktop">
        {/* WhatsApp Priority Banner (outside grid) */}
        <FadeInView direction="up" delay={0.2}>
          <div className="max-w-container-max mx-auto mb-8">
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 shrink-0 text-[#25D366]" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
                </svg>
                <div>
                  <p className="font-semibold text-on-surface">Prefer WhatsApp? We recommend it — fastest response time!</p>
                  <p className="text-sm text-on-surface-variant">Send us your sample requirements directly on WhatsApp and get a confirmation within minutes.</p>
                </div>
              </div>
              <a
                href={WHATSAPP_LINKS.samples}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest px-6 py-3 rounded-lg hover:brightness-90 transition-all no-underline shrink-0 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
                </svg>
                Send via WhatsApp
              </a>
            </div>
          </div>
        </FadeInView>
        <FadeInView direction="up" delay={0.3} className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left: Value Prop & Process */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            {/* Value Props */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant">
              <h2 className="text-3xl font-bold text-on-surface mb-6">
                Why Test Our Materials?
              </h2>
              <ul className="flex flex-col gap-6">
                {[
                  {
                    icon: "straighten",
                    title: "Verify Exact Micron",
                    desc: "Feel the exact micron weight and thickness to ensure it meets your specific load-bearing requirements.",
                  },
                  {
                    icon: "format_paint",
                    title: "Assess Print Adhesion",
                    desc: "Review the clarity and durability of our flexographic printing directly on the substrate.",
                  },
                  {
                    icon: "fitness_center",
                    title: "Test Tensile Strength",
                    desc: "Subject our industrial liners and bags to physical stress tests replicating your conditions.",
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-on-surface mb-1">
                        {item.title}
                      </h3>
                      <p className="text-base text-on-surface-variant">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Timeline */}
            <div className="pl-4">
              <h2 className="text-2xl font-semibold text-on-surface mb-8">
                What to Expect
              </h2>
              <div className="relative border-l-2 border-primary/30 pl-8 pb-4 flex flex-col gap-8">
                {[
                  {
                    title: "1. Submit Request",
                    desc: "Fill out the comprehensive form indicating your industry and exact packaging needs.",
                  },
                  {
                    title: "2. Verification Call",
                    desc: "A technical sales representative will contact you via WhatsApp or phone to confirm specifications.",
                  },
                  {
                    title: "3. Samples Dispatched",
                    desc: "Your customized sample kit is assembled at our facility and dispatched via priority courier.",
                  },
                ].map((step) => (
                  <div key={step.title} className="relative">
                    <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-surface" />
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-on-surface mb-1">
                      {step.title}
                    </h4>
                    <p className="text-base text-on-surface-variant">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <form
              action="/api/samples"
              method="POST"
              className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 md:p-10 shadow-[0_0_8px_rgba(0,0,0,0.04)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <h2 className="text-3xl font-bold text-on-surface mb-2">
                Sample Kit Request
              </h2>
              <p className="text-base text-on-surface-variant mb-8">
                Please provide detailed information to help us curate the most
                relevant samples for your operational needs.
              </p>

              <div className="flex flex-col gap-6">
                {/* Name & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="fullName"
                      className="text-sm font-semibold uppercase tracking-widest text-on-surface"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-base text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="companyName"
                      className="text-sm font-semibold uppercase tracking-widest text-on-surface"
                    >
                      Company Name *
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      placeholder="Acme Logistics Ltd."
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-base text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* WhatsApp & Industry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="whatsapp"
                      className="text-sm font-semibold uppercase tracking-widest text-on-surface"
                    >
                      WhatsApp Number *
                    </label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      placeholder="+92 300 0000000"
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-base text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="industry"
                      className="text-sm font-semibold uppercase tracking-widest text-on-surface"
                    >
                      Industry Sector *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-base text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    >
                      <option value="">Select an industry...</option>
                      <option value="retail">Retail & Fashion</option>
                      <option value="manufacturing">
                        Industrial Manufacturing
                      </option>
                      <option value="healthcare">
                        Healthcare & Medical
                      </option>
                      <option value="fmcg">FMCG & Groceries</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <hr className="border-outline-variant my-2" />

                {/* Bag Type */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-semibold uppercase tracking-widest text-on-surface">
                    Type of Bags Required (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {[
                      { value: "shopping", label: "Shopping Bags", desc: "Die-cut, loop handle, D-cut" },
                      { value: "garbage", label: "Garbage Bags", desc: "Heavy duty, clinical, standard" },
                      { value: "industrial", label: "Industrial Liners", desc: "Drum liners, box liners, heavy gauge" },
                      { value: "custom", label: "Custom Film/Rolls", desc: "Shrink wrap, stretch film, tubing" },
                    ].map((bag) => (
                      <label
                        key={bag.value}
                        className="flex items-start gap-3 p-4 rounded-lg border border-outline-variant bg-surface cursor-pointer hover:border-primary transition-colors"
                      >
                        <input
                          type="checkbox"
                          name="bagTypes"
                          value={bag.value}
                          className="mt-1 w-5 h-5 text-primary bg-surface-container-lowest border-outline-variant rounded focus:ring-primary"
                        />
                        <div>
                          <span className="block text-sm font-semibold uppercase tracking-widest text-on-surface">
                            {bag.label}
                          </span>
                          <span className="block text-xs text-on-surface-variant mt-1">
                            {bag.desc}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="additionalInfo"
                    className="text-sm font-semibold uppercase tracking-widest text-on-surface"
                  >
                    Additional Specifications (Optional)
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Specific colors, printing requirements, or dimension ranges..."
                    rows={3}
                    className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-base text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>

                {/* Submit */}
                <div className="mt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 px-8 py-4 bg-primary text-on-primary text-sm font-semibold uppercase tracking-widest rounded-lg hover:brightness-90 transition-all shadow-[0_0_8px_rgba(0,0,0,0.04)] cursor-pointer"
              >
                Submit Form
              </button>
              <a
                href={WHATSAPP_LINKS.samples}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest px-6 py-4 rounded-lg hover:brightness-90 transition-all no-underline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
                </svg>
                Send via WhatsApp (Recommended)
              </a>
            </div>
            <p className="text-xs text-on-surface-variant mt-3 text-center md:text-left">
              By submitting, you agree to our verification process. Samples
              are complimentary for qualifying B2B entities.
            </p>
                </div>
              </div>
            </form>
          </div>
      </FadeInView>
      </section>

      {/* Technical CTA */}
      <FadeInView direction="up" className="bg-surface-container-low py-16 px-margin-mobile md:px-margin-desktop border-y border-outline-variant">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-on-surface mb-3">
              Require Specialized Formulations?
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl">
              If your operations require UV protection, anti-static properties,
              or highly specific tensile strength ratios, our engineering team is
              available for a deep-dive consultation before sample production.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={WHATSAPP_LINKS.technical}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-surface-container-lowest text-primary border border-outline-variant text-sm font-semibold uppercase tracking-widest rounded-lg hover:bg-surface-variant transition-colors flex items-center gap-2 no-underline cursor-pointer"
            >
              <span className="material-symbols-outlined">engineering</span>
              Consult Technical Team
            </a>
          </div>
        </div>
      </FadeInView>
    </>
  );
}
