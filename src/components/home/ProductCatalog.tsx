import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/ui/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeInView";
import { WHATSAPP_LINKS } from "@/lib/business";

const products = [
  {
    title: "Retail Shopping Bags",
    description:
      "Premium custom-printed carriers for retail and grocery. Available in T-shirt, D-cut, and Loop handle variations.",
    specs: ["HDPE/LDPE Blend Options", "Up to 6-Color Print"],
    moq: "2,000 pcs",
    image: "shopping_bag",
  },
  {
    title: "Industrial Liners",
    description:
      "Heavy-duty liners for drums, cartons, and bulk containers. Engineered for maximum puncture resistance.",
    specs: ["High Micron Thickness", "Gusseted Bottoms Available"],
    moq: "500 kg",
    image: "industrial_liner",
  },
  {
    title: "HD Bags (High-Density)",
    description:
      "Extra-strong, lightweight HD bags ideal for retail, grocery, and general merchandise. Superior tensile strength with excellent print surface.",
    specs: ["High Strength-to-Weight Ratio", "Crisp Print Surface", "100% Virgin Material"],
    moq: "5,000 pcs",
    image: "hd_bag",
  },
  {
    title: "Food-Grade Packaging",
    description:
      "FDA-compliant pristine Poly Bags for direct food contact, ensuring hygiene and extended shelf life.",
    specs: ["Virgin Resin Guaranteed", "High Clarity Finish"],
    moq: "5,000 pcs",
    image: "food_packaging",
  },
  {
    title: "Security & Courier Bags",
    description:
      "Tamper-evident flyer bags with permanent adhesive closures and integrated POD jackets for logistics.",
    specs: ["Opaque Co-extruded Film", "Strong Hot-Melt Adhesive"],
    moq: "2,000 pcs",
    image: "courier_bag",
  },
];

const productIcons: Record<string, string> = {
  shopping_bag: "shopping_bag",
  industrial_liner: "inventory_2",
  hd_bag: "checklist",
  food_packaging: "restaurant",
  courier_bag: "local_shipping",
};

export default function ProductCatalog() {
  return (
    <section
      id="products"
      className="py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <SectionHeading
        title="Industrial Packaging Catalog"
        description="Engineered Poly Bags solutions for retail, industrial, and specialized sectors."
      />

      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {products.map((product) => (
          <StaggerItem
            key={product.title}
            className="flex flex-col md:flex-row gap-6 bg-surface border border-outline-variant p-6 rounded-xl hover:shadow-lg transition-shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full md:w-1/3 aspect-square bg-surface-container rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-primary/40">
                {productIcons[product.image]}
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {product.title}
              </h3>
              <p className="text-base text-on-surface-variant mb-4">
                {product.description}
              </p>
              <ul className="space-y-2 mb-6 text-xs text-on-background">
                {product.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-brand-red text-sm">
                      check_circle
                    </span>
                    {spec}
                  </li>
                ))}
              </ul>
              <div className="mt-auto border-t border-outline-variant pt-4 flex justify-between items-center">
                <span className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant">
                  MOQ: {product.moq}
                </span>
                <a
                  href={WHATSAPP_LINKS.inquire}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-semibold uppercase tracking-widest hover:underline flex items-center gap-1 no-underline"
                >
                  Inquire on WhatsApp
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
