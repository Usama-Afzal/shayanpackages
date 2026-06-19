import Logo from "@/components/ui/Logo";
import { BUSINESS, WHATSAPP_LINKS } from "@/lib/business";

const footerLinks = {
  company: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/#products" },
    { label: "Capabilities", href: "/#manufacturing" },
    { label: "Process", href: "/#process" },
  ],
  resources: [
    { label: "FAQ", href: "/faq" },
    { label: "Free Samples", href: "/samples" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-container-high border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Brand */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <Logo className="h-10 w-auto" />
            <p className="text-base text-on-surface-variant">
              {BUSINESS.description}
            </p>
            <div className="flex flex-col gap-1 text-sm text-on-surface-variant mt-2">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">location_on</span>
                {BUSINESS.address.full}
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">call</span>
                <a href={`tel:${BUSINESS.phone}`} className="text-on-surface-variant hover:text-primary no-underline">{BUSINESS.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">mail</span>
                <a href={`mailto:${BUSINESS.email}`} className="text-on-surface-variant hover:text-primary no-underline">{BUSINESS.email}</a>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <span className="material-symbols-outlined text-base">schedule</span>
                <span>{BUSINESS.hours.weekdays}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-on-surface mb-2">
              Company
            </h4>
            {footerLinks.company.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-on-surface-variant hover:text-primary hover:underline transition-all duration-200 no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-on-surface mb-2">
              Resources
            </h4>
            {footerLinks.resources.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-on-surface-variant hover:text-primary hover:underline transition-all duration-200 no-underline"
              >
                {link.label}
              </a>
            ))}
            <h4 className="text-sm font-semibold uppercase tracking-widest text-on-surface mb-2 mt-4">
              Legal
            </h4>
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-on-surface-variant hover:text-primary hover:underline transition-all duration-200 no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* WhatsApp CTA + Map */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <svg className="w-8 h-8 shrink-0 text-[#25D366]" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
                </svg>
                <div>
                  <h4 className="text-base font-semibold text-on-surface">
                    Order via WhatsApp — Fastest Response
                  </h4>
                  <p className="text-sm text-on-surface-variant mt-1">
                    Our team typically responds within 5 minutes on WhatsApp. Send us your requirements and get a quote instantly.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a
                      href={WHATSAPP_LINKS.quote}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:brightness-90 transition-all no-underline inline-flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
                      </svg>
                      Get Bulk Quote
                    </a>
                    <a
                      href={WHATSAPP_LINKS.samples}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-surface text-on-surface border border-outline-variant text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-surface-container transition-all no-underline inline-flex items-center gap-2"
                    >
                      Request Free Samples
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden border border-outline-variant h-[200px] bg-surface-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115966.04885942816!2d66.97637910909615!3d24.879072048141977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3e1a1a1a1b%3A0x1a1a1a1a1a1a1a1a!2sS.I.T.E.%20Industrial%20Area%2C%20Karachi!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shayan Packages - S.I.T.E. Industrial Area, Karachi"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. All Rights Reserved.</p>
          <p className="text-xs">ISO 9001:2015 Certified Manufacturing Facility</p>
        </div>
      </div>
    </footer>
  );
}
