import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/ui/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeInView";

const steps = [
  {
    icon: "layers",
    title: "1. Extrusion",
    description:
      "High-grade HDPE/LDPE resins melted and blown into continuous film rolls of precise thickness.",
  },
  {
    icon: "print",
    title: "2. Flexo Printing",
    description:
      "Up to 6-color high-speed flexographic printing for vibrant, durable branding.",
  },
  {
    icon: "content_cut",
    title: "3. Cutting & Sealing",
    description:
      "Automated bottom-seal, side-seal, and handle-punching for specific bag styles.",
  },
  {
    icon: "fact_check",
    title: "4. Quality Control",
    description:
      "Rigorous testing for tensile strength, seal integrity, and print consistency before dispatch.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading
          title="Our Manufacturing Process"
          description="End-to-end quality control from raw resin to finished product."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <FadeInView className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-outline-variant z-0" direction="none" />

          {steps.map((step) => (
            <StaggerItem
              key={step.title}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-surface border-4 border-surface-container-lowest shadow-md flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary">
                  {step.icon}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-on-background mb-2">
                {step.title}
              </h3>
              <p className="text-base text-on-surface-variant">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
