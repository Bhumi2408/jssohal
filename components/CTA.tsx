import { ArrowRight, Building2, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { COMPANY } from "@/lib/data";

export default function CTA() {
  return (
    <section id="contact-info" className="relative py-24 bg-ink text-white overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-35" />
      <div
        className="absolute -right-[10%] -top-[30%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,72,31,.28), transparent 65%)" }}
      />
      <div className="max-w-content mx-auto px-6 relative text-center max-w-[820px]">
        <Reveal>
          <h2 className="font-display font-extrabold leading-[1.15] text-[28px] sm:text-[36px] lg:text-[44px] mb-5">
            Contact J. S. Engineering for Bakery Machinery
          </h2>
          <div className="space-y-4 text-[#c9c4bb] text-base leading-relaxed mb-8">
            <p>
              Are you searching for an experienced{" "}
              <strong className="text-white">Bakery Machine Manufacturer</strong> for your commercial
              bakery or food production business? J. S. Engineering offers specialized bakery slicing
              machines and Bakery Projects &amp; Consultancy to support different business
              requirements.
            </p>
            <p>
              With manufacturing experience dating back to 1948, we understand the machinery
              requirements of different bakery applications. Explore our range of High Speed Bread
              Slicers, High Speed Toast Slicers, Gravity Bread Slicers, Cake Slicing Machines and Round
              Roll Slicing Machines.
            </p>
            <p>
              If you are planning a new bakery setup or looking for machinery for an existing
              production facility, connect with our team to discuss your product application,
              production requirements and suitable equipment options.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-left mb-8">
            <div className="flex items-start gap-3 border border-white/10 bg-white/[.04] rounded-xl px-5 py-4">
              <Building2 size={20} className="text-ember flex-none mt-0.5" />
              <div>
                <div className="text-[12px] tracking-[0.12em] font-semibold text-[#8b8378]">COMPANY</div>
                <div className="font-display font-bold">J. S. Engineering</div>
              </div>
            </div>
            <div className="flex items-start gap-3 border border-white/10 bg-white/[.04] rounded-xl px-5 py-4">
              <MapPin size={20} className="text-ember flex-none mt-0.5" />
              <div>
                <div className="text-[12px] tracking-[0.12em] font-semibold text-[#8b8378]">ADDRESS</div>
                <address className="not-italic font-display font-bold">
                  C-57, Wazirpur Industrial Area, Delhi – 110052, India.
                </address>
              </div>
            </div>
          </div>

          <p className="text-[#c9c4bb] text-base leading-relaxed mb-8">
            Contact J. S. Engineering to request product information and discuss your bakery machinery
            requirements.
          </p>

          <div className="flex flex-wrap gap-3.5 justify-center mb-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-ember hover:bg-ember-dark text-white font-semibold px-6 py-3.5 rounded-md transition-colors group"
            >
              Request a Quote <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 border border-white/35 hover:border-white hover:bg-white/[.06] text-white font-semibold px-6 py-3.5 rounded-md transition-colors"
            >
              Talk to an Expert
            </a>
          </div>
          <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2.5 font-display font-extrabold text-lg">
            <Phone size={18} className="text-ember" /> {COMPANY.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
