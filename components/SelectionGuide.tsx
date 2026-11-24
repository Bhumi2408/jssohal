import Reveal from "./Reveal";

const steps = [
  {
    title: "Understand Your Product Range",
    desc: "First, identify the bakery products you manufacture. Bread, toast, cakes and round rolls may require different types of slicing equipment. Understanding your product range will help you identify the appropriate machine.",
  },
  {
    title: "Estimate Your Production Volume",
    desc: "Consider how many products your business needs to process regularly. Your production requirements will help determine the type of machine you should evaluate.",
  },
  {
    title: "Check Machine Specifications",
    desc: "Review the available machine specifications, dimensions and operating requirements. Make sure the equipment is suitable for your intended application.",
  },
  {
    title: "Consider Your Production Space",
    desc: "The available floor space and arrangement of your bakery facility should be considered before purchasing machinery. Proper planning can help maintain an organized production area.",
  },
  {
    title: "Discuss Your Requirements with the Manufacturer",
    desc: "Contact the machinery manufacturer to understand the available models and their applications. Sharing your product details and production requirements can make the selection process easier.",
  },
  {
    title: "Evaluate Long-Term Business Requirements",
    desc: "Consider your future production plans before selecting machinery. The equipment should be suitable for your current operations and the expected requirements of your business.",
  },
];

export default function SelectionGuide() {
  return (
    <section id="selection-guide" className="py-24 bg-paper-2">
      <div className="max-w-content mx-auto px-6">
        <Reveal className="max-w-[760px] mx-auto text-center mb-12">
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            BUYING GUIDE
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            How to Select the Right Bakery Machinery for Your Business?
          </h2>
          <p className="text-[15.5px] text-[#5b564d] leading-relaxed">
            Choosing bakery machinery requires an understanding of your products, production process
            and business requirements. Before investing in equipment, it is useful to evaluate the
            following points.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={(i % 3) * 0.06}
              className="relative bg-white border border-black/10 rounded-2xl p-7 overflow-hidden"
            >
              <span className="absolute top-0 left-0 h-[3px] w-full bg-ember" />
              <span className="font-display font-extrabold text-[32px] leading-none text-ember/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-extrabold text-[17px] leading-snug mt-3 mb-2">
                {i + 1}. {step.title}
              </h3>
              <p className="text-[14px] text-[#5b564d] leading-relaxed">{step.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="max-w-[760px] mx-auto text-center mt-10 text-[15.5px] text-[#5b564d] leading-relaxed">
            A careful evaluation of these factors can help businesses choose equipment that fits their
            bakery operations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
