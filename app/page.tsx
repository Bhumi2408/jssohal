import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Counters from "@/components/Counters";
import BakeryIntro from "@/components/BakeryIntro";
import About from "@/components/About";
import TopProducts from "@/components/TopProducts";
import Expertise from "@/components/Expertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import Heritage from "@/components/Heritage";
import WhoUses from "@/components/WhoUses";
import SelectionGuide from "@/components/SelectionGuide";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Floaters from "@/components/Floaters";
import { homeSchema } from "@/lib/schema";

const title = "Best Bakery Machine Manufacturer in Delhi | J. S. Engineering";
const description =
  "J. S. Engineering is a trusted bakery machine manufacturer in Delhi NCR. Explore bread slicers, toast slicers, cake slicing machines and more. Contact us now!";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "Bakery Machine Manufacturer",
    "Bakery Machine Manufacturer in Delhi",
    "Best Bakery Machine Manufacturer in Delhi NCR",
  ],
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "website", url: "/", siteName: "J. S. Engineering" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <TopBar />
      <Navbar />

      <div id="home">
        <Hero />
        <Counters />
      </div>

      {/* Section order follows the SEO content brief */}
      <About />
      <Heritage />
      <Expertise />
      <TopProducts />
      <WhyChooseUs />
      {/* <WhoUses /> */}
      <SelectionGuide />
      {/* <CTA /> */}
      <Testimonials />
      {/* <BakeryIntro /> */}
      <FAQ />
      <Clients />
      <ContactForm />
      <Footer />
      <Floaters />
    </>
  );
}
