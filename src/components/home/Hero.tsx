import FadeInView from "@/components/ui/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeInView";
import { BUSINESS, WHATSAPP_LINKS } from "@/lib/business";

export default function Hero() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div className="space-y-8 pr-0 lg:pr-8">
          <FadeInView direction="left" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-variant text-brand-red text-sm font-semibold uppercase tracking-widest rounded-full border border-outline-variant">
              <span className="material-symbols-outlined text-sm">verified</span>
              ISO Certified Manufacturer
            </div>
          </FadeInView>

          <FadeInView direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight -tracking-[0.02em] text-on-background">
              Industrial Poly Bags{" "}
              <span className="text-primary">Packaging Solutions</span>
            </h1>
          </FadeInView>

          <FadeInView direction="up" delay={0.35}>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-xl">
              Direct from our S.I.T.E. factory in Karachi. We engineer
              high-performance printed films, liners, and retail bags for
              businesses across Pakistan.
            </p>
          </FadeInView>

          <FadeInView direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINKS.default}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-on-primary text-sm font-semibold uppercase tracking-widest py-4 px-8 rounded-lg hover:brightness-90 transition-all no-underline"
              >
                <span className="material-symbols-outlined">chat</span>
                Order on WhatsApp
              </a>
              <a
                href="/#products"
                className="inline-flex items-center justify-center bg-surface text-primary border-2 border-primary text-sm font-semibold uppercase tracking-widest py-4 px-8 rounded-lg hover:bg-primary-container transition-all no-underline"
              >
                Explore Products
              </a>
            </div>
          </FadeInView>

          <FadeInView direction="up" delay={0.65}>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-outline-variant">
              <div>
                <div className="text-2xl font-semibold text-primary">500+</div>
                <div className="text-xs text-on-surface-variant font-medium">
                  B2B Partners
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary">35+</div>
                <div className="text-xs text-on-surface-variant font-medium">
                  Years Active
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-primary">
                  Nationwide
                </div>
                <div className="text-xs text-on-surface-variant font-medium">
                  Delivery Network
                </div>
              </div>
            </div>
          </FadeInView>
        </div>

        <FadeInView direction="right" delay={0.3} duration={0.8}>
          <div className="relative rounded-xl overflow-hidden bg-surface-container aspect-video lg:aspect-[4/3] border border-outline-variant shadow-xl mt-8 lg:mt-0">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center p-8">
                <span className="material-symbols-outlined text-8xl text-primary/30">
                  precision_manufacturing
                </span>
                <p className="text-base text-on-surface-variant mt-4 font-semibold">
                  State-of-the-art Extrusion & Printing Facility
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-white text-base font-semibold">
              State-of-the-art Extrusion & Printing Facility, Karachi
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
