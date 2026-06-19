import FadeInView from "@/components/ui/FadeInView";

const capabilities = [
  {
    material: "HDPE (High-Density)",
    thickness: "10 - 80 Micron",
    size: "6\" to 36\"",
    print: "Up to 6-color Flexo",
    leadTime: "7-10 Days",
  },
  {
    material: "LDPE (Low-Density)",
    thickness: "20 - 150 Micron",
    size: "8\" to 48\"",
    print: "Up to 6-color Flexo",
    leadTime: "7-12 Days",
  },
  {
    material: "LLDPE (Linear)",
    thickness: "15 - 100 Micron",
    size: "10\" to 48\"",
    print: "Line Art / Spot Color",
    leadTime: "10-15 Days",
  },
  {
    material: "Co-Extruded Films",
    thickness: "40 - 120 Micron",
    size: "10\" to 30\"",
    print: "Up to 4-color Flexo",
    leadTime: "14-21 Days",
  },
];

export default function Capabilities() {
  return (
    <section
      id="manufacturing"
      className="bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b-2 border-primary pb-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2">
              Technical Specifications
            </h2>
            <p className="text-lg text-on-surface-variant">
              Our facility&apos;s baseline production capabilities.
            </p>
          </div>
          <a
            href="#"
            className="text-brand-red text-sm font-semibold uppercase tracking-widest hover:underline flex items-center gap-2 mt-4 md:mt-0 no-underline"
          >
            Download Full Spec Sheet
            <span className="material-symbols-outlined">download</span>
          </a>
        </div>

        <FadeInView direction="up" className="bg-surface rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.04)] border border-outline-variant overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-primary text-on-primary text-sm font-semibold uppercase tracking-widest">
                  <th className="p-6 font-semibold border-r border-white/20">
                    Material Type
                  </th>
                  <th className="p-6 font-semibold border-r border-white/20">
                    Thickness (Micron)
                  </th>
                  <th className="p-6 font-semibold border-r border-white/20">
                    Size Range (Width)
                  </th>
                  <th className="p-6 font-semibold border-r border-white/20">
                    Print Capability
                  </th>
                  <th className="p-6 font-semibold">
                    Standard Lead Time
                  </th>
                </tr>
              </thead>
              <tbody className="text-base text-on-background divide-y divide-outline-variant">
                {capabilities.map((row, i) => (
                  <tr
                    key={row.material}
                    className={`hover:bg-surface-container-lowest transition-colors ${
                      i % 2 === 1 ? "bg-surface-container-low" : ""
                    }`}
                  >
                    <td className="p-6 font-semibold">{row.material}</td>
                    <td className="p-6 text-on-surface-variant">
                      {row.thickness}
                    </td>
                    <td className="p-6 text-on-surface-variant">
                      {row.size}
                    </td>
                    <td className="p-6 text-on-surface-variant">
                      {row.print}
                    </td>
                    <td className="p-6 text-on-surface-variant">
                      {row.leadTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
