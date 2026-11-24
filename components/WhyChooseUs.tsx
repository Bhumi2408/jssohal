import { History, Layers, MapPin, Puzzle, ClipboardList } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: History,
    title: "Manufacturing Experience Since 1948",
    desc: "J. S. Engineering has been associated with bakery machinery manufacturing since 1948. Its manufacturing journey across three generations reflects long-standing experience in the bakery machinery field.",
  },
  {
    icon: Layers,
    title: "Specialized Bakery Machinery Range",
    desc: "We offer machines for different bakery applications, including bread slicing, toast slicing, cake slicing and round roll slicing. This allows businesses to explore equipment based on their specific product requirements.",
  },
  {
    icon: MapPin,
    title: "Delhi-Based Manufacturing Facility",
    desc: (
      <>
        Our facility is located in Wazirpur Industrial Area, Delhi. Businesses searching for the{" "}
        <strong className="text-ink">Best Bakery Machine Manufacturer in Delhi</strong> can connect
        with our team to discuss their machinery requirements and explore available equipment.
      </>
    ),
  },
  {
    icon: Puzzle,
    title: "Solutions for Different Bakery Applications",
    desc: "Different bakery products require different processing equipment. Our product range covers several specialized slicing applications for commercial bakery operations.",
  },
  {
    icon: ClipboardList,
    title: "Bakery Projects & Consultancy",
    desc: "Along with machinery, we offer Bakery Projects & Consultancy for businesses planning their bakery production setup. This provides additional support when evaluating machinery requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <Reveal className="max-w-[760px] mx-auto text-center mb-12">
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            WHY CHOOSE US
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Why Choose J. S. Engineering as Your Bakery Machine Manufacturer?
          </h2>
          <div className="space-y-4 text-[15.5px] text-[#5b564d] leading-relaxed">
            <p>
              Selecting a bakery machinery supplier is an important decision for any commercial bakery
              or food manufacturing business. The right equipment should match the products being
              manufactured, the required production volume and the available operating setup.
            </p>
            <p>
              J. S. Engineering brings manufacturing experience and a specialized range of bakery
              slicing machines to meet different business requirements.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-black/10 border border-black/10 rounded-2xl overflow-hidden">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white p-7 ${i === items.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="w-[46px] h-[46px] rounded-lg bg-paper-2 flex items-center justify-center mb-4.5">
                  <item.icon size={22} className="text-ember" />
                </div>
                <h3 className="text-base font-extrabold mb-2">
                  {i + 1}. {item.title}
                </h3>
                <p className="text-[13.5px] text-[#5b564d] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="max-w-[760px] mx-auto text-center mt-8 text-[15.5px] text-[#5b564d] leading-relaxed">
            When comparing machinery suppliers, businesses should consider manufacturing experience,
            product applications, machine specifications and the suitability of equipment for their
            production needs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
