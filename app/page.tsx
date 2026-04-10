import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import FormationShowcase from "@/components/FormationShowcase";
import KickoSection from "@/components/KickoSection";
import AppPreview from "@/components/AppPreview";
import LanguageSupport from "@/components/LanguageSupport";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <FeatureSection />
      <FormationShowcase />
      <KickoSection />
      <AppPreview />
      <LanguageSupport />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
