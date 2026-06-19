import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Process from "@/components/home/Process";
import ProductCatalog from "@/components/home/ProductCatalog";
import Capabilities from "@/components/home/Capabilities";
import CtaStrip from "@/components/home/CtaStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Process />
      <ProductCatalog />
      <CtaStrip />
      <Capabilities />
    </>
  );
}
