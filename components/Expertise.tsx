import { Layers, BarChart3, Ruler, Maximize, Settings } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    num: "01",
    icon: Layers,
    title: "Product Application",
    desc: "Identify whether the machine will be used for bread, toast, cakes or round rolls.",
  },
  {
    num: "02",
    icon: BarChart3,
    title: "Production Requirements",
    desc: "Consider the quantity of products that needs to be processed during regular operations.",
  },
  {
    num: "03",
    icon: Ruler,
    title: "Slicing Requirements",
    desc: "Evaluate the required slice size, product shape and consistency.",
  },
  {
    num: "04",
    icon: Maximize,
    title: "Available Space",
    desc: "Check whether the machine can be accommodated within your existing production facility.",
  },
  {
    num: "05",
    icon: Settings,
    title: "Operating Requirements",
    desc: "Understand the machine's working process and suitability for your bakery operations.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 bg-ink text-white overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="max-w-content mx-auto px-6 relative">
        <Reveal className="max-w-[820px] mb-12">
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-[#e8a184]">
            OUR EXPERTISE
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4 text-white">
            Specialized Bakery Machines for Commercial Production
          </h2>
          <div className="space-y-4 text-[15.5px] text-[#c9c4bb] leading-relaxed">
            <p>
              Commercial bakeries require appropriate machinery to manage their daily production
              activities. As production requirements increase, manual processing can become
              time-consuming and difficult to manage consistently. Suitable bakery equipment helps
              businesses organize their operations and handle specific production tasks more
              efficiently.
            </p>
            <p>
              Different bakery products also require different types of machinery. Bread slicing,
              toast slicing, cake cutting and round roll slicing involve separate processing
              requirements. Therefore, selecting a machine according to the product application is
              important.
            </p>
            <p>
              J. S. Engineering offers specialized bakery machines to address these requirements. Our
              range covers different slicing applications and helps businesses identify equipment
              according to their production needs.
            </p>
            <p className="text-white font-semibold">
              When selecting bakery machinery, businesses should consider the following factors:
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[.14] border border-white/[.14] rounded-2xl overflow-hidden">
            {items.map((item) => (
              <div key={item.num} className="bg-ink hover:bg-ink-3 transition-colors p-8 min-h-[230px] flex flex-col">
                <span className="font-display font-extrabold text-sm text-[#8b8378] tracking-wide">{item.num}</span>
                <div className="w-11 h-11 rounded-lg bg-ember/[.14] border border-ember/30 flex items-center justify-center my-4">
                  <item.icon size={22} className="text-ember" />
                </div>
                <h3 className="text-[16.5px] font-bold mb-2">{item.title}</h3>
                <p className="text-[13.3px] text-[#b7b1a6] leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 text-[15.5px] text-[#c9c4bb] leading-relaxed max-w-[820px]">
            Considering these factors before purchasing equipment can help businesses make a more
            suitable machinery selection.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
