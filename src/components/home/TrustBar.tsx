import { StaggerContainer, StaggerItem } from "@/components/ui/FadeInView";

export default function TrustBar() {
  const items = [
    {
      icon: "factory",
      title: "Factory Direct",
      description:
        "Cut out the middleman. We manufacture everything in-house at our S.I.T.E. facility.",
    },
    {
      icon: "precision_manufacturing",
      title: "Custom Engineering",
      description:
        "From specific Micron ranges to complex 6-color flexo printing, we build to your specs.",
    },
    {
      icon: "local_shipping",
      title: "Nationwide Logistics",
      description:
        "Reliable, scheduled bulk deliveries to industrial zones across Pakistan.",
    },
  ];

  return (
    <section className="bg-primary py-12">
      <StaggerContainer className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 text-center">
        {items.map((item, idx) => (
          <StaggerItem
            key={item.title}
            className={`flex flex-col items-center gap-3 py-6 md:py-0 md:pt-0 ${
              idx < items.length - 1 ? "border-b border-white/20 md:border-b-0 md:border-r" : ""
            }`}
          >
            <span className="material-symbols-outlined text-5xl text-white mb-2">
              {item.icon}
            </span>
            <h3 className="text-2xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-base text-white/80 max-w-xs">
              {item.description}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
