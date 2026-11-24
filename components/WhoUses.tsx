import { Factory, Store, Package, Cake, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const users = [
  { icon: Store, label: "Local commercial bakeries" },
  { icon: Factory, label: "Bread & toast manufacturers" },
  { icon: Cake, label: "Cake & round roll producers" },
  { icon: Package, label: "Larger food production units" },
];

const needs = ["Bread slicing", "Toast slicing", "Cake slicing", "Round roll slicing", "Bakery consultancy"];

export default function WhoUses() {
  return (
    <section id="who-uses" className="relative py-24 bg-ink text-white overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-35" />
      <div
        className="absolute -left-[10%] -bottom-[30%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,72,31,.24), transparent 65%)" }}
      />
      <div className="max-w-content mx-auto px-6 relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            OUR CUSTOMERS
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Bakery Machinery Solutions for Different Business Requirements
          </h2>
          <div className="space-y-4 text-[15.5px] text-[#c9c4bb] leading-relaxed">
            <p>
              The bakery industry includes businesses of different sizes, from local commercial
              bakeries to larger food production units. Each business may have different machinery
              requirements depending on the products it manufactures and its daily production volume.
            </p>
            <p>
              For example, a bread manufacturing business may require a dedicated bread slicing
              machine, while a toast manufacturer may need specialized toast slicing equipment.
              Similarly, cake manufacturers and round roll producers may require machines designed for
              their respective applications.
            </p>
            <p>
              This is why businesses should evaluate machinery according to their actual production
              requirements rather than selecting equipment only on the basis of its general category.
            </p>
            <p>
              J. S. Engineering offers specialized bakery machinery for these applications. Our
              product range focuses on bread, toast, cake and round roll slicing, along with Bakery
              Projects &amp; Consultancy.
            </p>
            <p>
              Our Delhi-based facility allows businesses to connect with us to understand the
              available machinery range and discuss their requirements. Whether you are planning a new
              bakery unit or evaluating equipment for an existing facility, identifying the right
              machine is an important step towards organizing your production operations.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2.5 mt-7">
            {needs.map((need) => (
              <li
                key={need}
                className="inline-flex items-center gap-2 border border-white/15 bg-white/[.04] rounded-full px-4 py-2 text-[13.5px] font-semibold"
              >
                <CheckCircle2 size={16} className="text-ember flex-none" />
                {need}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {users.map((user, i) => (
            <Reveal
              key={user.label}
              delay={i * 0.08}
              className="group border border-white/10 bg-white/[.04] hover:bg-white/[.07] hover:border-ember/50 rounded-2xl p-6 sm:p-7 transition-colors"
            >
              <div className="w-[50px] h-[50px] rounded-xl bg-ember/15 flex items-center justify-center mb-5 group-hover:bg-ember transition-colors">
                <user.icon size={24} className="text-ember group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-[15px] sm:text-[17px] leading-snug">{user.label}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
