import FadeInView from "@/components/ui/FadeInView";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <FadeInView
      direction="up"
      className={`max-w-3xl mb-16 ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {label && (
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-relaxed text-on-surface-variant">
          {description}
        </p>
      )}
    </FadeInView>
  );
}
