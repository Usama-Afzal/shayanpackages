import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/ui/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeInView";
import { BUSINESS, WHATSAPP_LINKS } from "@/lib/business";

const values = [
  {
    icon: "lightbulb",
    title: "Innovation",
    description:
      "Continuously adopting new polymer technologies to improve packaging performance.",
  },
  {
    icon: "handshake",
    title: "Customer-Centricity",
    description:
      "Tailored solutions designed around the specific supply chain needs of our clients.",
  },
  {
    icon: "eco",
    title: "Sustainability",
    description:
      "Investing in recyclable structures and waste-reduction manufacturing processes.",
  },
  {
    icon: "settings_account_box",
    title: "Operational Excellence",
    description:
      "Lean manufacturing principles ensuring efficiency, scale, and on-time delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[500px] md:h-[600px] bg-surface-container-high flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/90 to-on-surface/40 z-10" />
        <div className="absolute inset-0 bg-surface-variant" />
        <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-3xl">
            <FadeInView direction="left" delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-white backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest mb-6 border border-primary/30">
                <span className="material-symbols-outlined text-sm">
                  verified
                </span>
                ISO 9001:2015 Certified Facility
              </div>
            </FadeInView>
            <FadeInView direction="up" delay={0.25}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-on-primary mb-6">
                Manufacturing Excellence Since 2008.
              </h1>
            </FadeInView>
            <FadeInView direction="up" delay={0.4}>
              <p className="text-lg leading-relaxed text-surface-variant max-w-2xl mb-10">
                For over 35 years, Shayan Packages has been the backbone of
                reliable packaging solutions in the S.I.T.E Industrial Zone,
                Karachi. We deliver precision, scale, and uncompromising quality
                to B2B partners nationwide.
              </p>
            </FadeInView>
            <FadeInView direction="up" delay={0.55}>
              <a
              href={WHATSAPP_LINKS.samples}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-lg hover:brightness-90 transition-all no-underline"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
              </svg>
              Request Free Samples
            </a>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <FadeInView direction="left" className="md:col-span-5 relative">
            <div className="aspect-square bg-surface-container rounded-xl overflow-hidden border border-outline-variant flex items-center justify-center">
              <div className="text-center p-8">
                <span className="material-symbols-outlined text-8xl text-primary/20">
                  history
                </span>
                <p className="text-base text-on-surface-variant mt-4">
                  2008 — Today
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-fixed rounded-lg border border-primary/10 -z-10 hidden md:block" />
          </FadeInView>
          <FadeInView direction="right" className="md:col-span-6 md:col-start-7 space-y-8 mt-8 md:mt-0">
            <div>
              <h2 className="text-3xl font-bold text-on-surface mb-4">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-primary mb-8" />
              <p className="text-base leading-relaxed text-on-surface-variant mb-6">
                What began as a modest extrusion unit has evolved into a
                cornerstone of Karachi&apos;s manufacturing sector. Our journey
                is defined by a relentless pursuit of quality and integrity.
              </p>
              <p className="text-base leading-relaxed text-on-surface-variant mb-6">
                We understood early on that in B2B supply chains, consistency is
                just as critical as capacity. By continuously reinvesting in
                state-of-the-art machinery and rigorous quality control
                protocols, we transformed from a local supplier into a trusted
                national partner.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-surface-variant">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                  35+
                </div>
                <div className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                  50M+
                </div>
                <div className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant">
                  Units Annually
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading
            title="World-Class Infrastructure"
            description="Our S.I.T.E. facility is engineered for scale, equipped with the latest European and Asian extrusion and printing technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden border border-outline-variant group bg-surface">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-9xl text-primary/20">
                  print
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-semibold text-on-primary mb-2">
                  6-Color Flexographic Printing
                </h3>
                <p className="text-base text-surface-container-low max-w-lg">
                  High-speed, precision printing capable of complex gradients
                  on flexible substrates.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-outline-variant bg-surface p-6 flex flex-col justify-between hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">factory</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-on-surface mb-2">
                  High-Speed Extruders
                </h4>
                <p className="text-base text-on-surface-variant">
                  Multi-layer blown film lines ensuring consistent gauge control
                  and superior tensile strength.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-outline-variant bg-surface p-6 flex flex-col justify-between hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">science</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-on-surface mb-2">
                  In-House QA Lab
                </h4>
                <p className="text-base text-on-surface-variant">
                  Rigorous testing for dart impact, tear resistance, and optical
                  properties before dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading
          title="Core Values"
          description="The principles that guide our production lines and our partnerships."
        />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <StaggerItem
                key={value.title}
                className="p-6 bg-surface border border-outline-variant rounded-lg hover:border-primary transition-colors group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-surface-container rounded flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-on-surface mb-3">
                  {value.title}
                </h3>
                <p className="text-base text-on-surface-variant">{value.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-surface-container-lowest border-t border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between">
          <div className="md:max-w-2xl mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-on-surface mb-2">
              Led by Industry Veterans
            </h3>
            <p className="text-base text-on-surface-variant">
              Our engineering and management teams bring decades of combined
              experience in polymer science and industrial manufacturing,
              ensuring every batch meets international standards.
            </p>
          </div>
          <div className="flex gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="w-16 h-16 bg-surface-variant rounded-full overflow-hidden border-2 border-surface border-primary flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-3xl text-primary/60">
                  person
                </span>
              </div>
            ))}
            <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center border-2 border-surface text-primary text-sm font-semibold uppercase tracking-widest">
              +12
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading
            title="Visit Our Facility"
            description="Located in the heart of Pakistan's industrial zone — S.I.T.E. Industrial Area, Karachi."
          />
          <div className="rounded-xl overflow-hidden border border-outline-variant h-[400px] shadow-[0_0_8px_rgba(0,0,0,0.04)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115966.04885942816!2d66.97637910909615!3d24.879072048141977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3e1a1a1a1b%3A0x1a1a1a1a1a1a1a1a!2sS.I.T.E.%20Industrial%20Area%2C%20Karachi!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shayan Packages Factory - S.I.T.E. Industrial Area, Karachi"
            />
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold text-on-surface">{BUSINESS.address.line1}</h3>
              <p className="text-base text-on-surface-variant">{BUSINESS.address.line2}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-on-surface-variant">{BUSINESS.hours.weekdays}</p>
              <p className="text-sm text-on-surface-variant">{BUSINESS.hours.sunday}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-gap-mobile md:py-section-gap-desktop bg-primary text-on-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Packaging?
          </h2>
          <p className="text-lg leading-relaxed text-primary-fixed max-w-2xl mx-auto mb-10">
            Partner with Shayan Packages for reliable, high-volume production
            runs. Contact our technical sales team to discuss specifications,
            timelines, and bulk pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINKS.quote}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-lg hover:brightness-90 transition-all no-underline inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
              </svg>
              Request Bulk Quote on WhatsApp
            </a>
            <a
              href={WHATSAPP_LINKS.inquire || "#"}
              className="bg-transparent border border-outline text-on-primary text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-white/10 transition-all no-underline"
            >
              Download Capabilities Deck
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
