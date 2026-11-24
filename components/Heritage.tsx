import Image from "next/image";
import Reveal from "./Reveal";

export default function Heritage() {
  return (
    <section id="range" className="py-24 bg-paper-2">
      <div className="max-w-content mx-auto px-6">
        <Reveal className="max-w-[820px] mx-auto text-center mb-12">
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            OUR HERITAGE
          </span>
          <h2 className="font-display font-extrabold leading-[1.14] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            About J. S. Engineering – Bakery Machinery Manufacturing Since 1948
          </h2>
          <div className="space-y-4 text-[15.5px] text-[#5b564d] leading-relaxed">
            <p>
              J. S. Engineering has been associated with bakery machinery manufacturing since 1948.
              Founded under the guidance of S. Jaswant Singh Sohal, the company has continued its
              manufacturing journey through three generations. This experience has helped us
              understand the changing requirements of commercial bakeries and food production units.
            </p>
            <p>
              Located at C-57, Wazirpur Industrial Area, Delhi, our company specializes in bakery
              machinery for various slicing applications. Over the years, bakery production methods
              have evolved, and businesses increasingly require equipment that can support regular
              operations and consistent product preparation.
            </p>
            <p>
              Our approach is based on understanding the purpose of each machine and the requirements
              of the business using it. From bread and toast slicing to cake and round roll processing,
              we offer machinery designed for specific bakery applications.
            </p>
            <p>
              As an experienced <strong className="text-ink">Bakery Machine Manufacturer in Delhi</strong>,
              J. S. Engineering serves businesses looking for specialized bakery equipment and bakery
              project consultancy. Our manufacturing background and product range make us a suitable
              company to consider when evaluating machinery for commercial bakery operations.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Image
            src="/heritage.webp"
            alt="Heritage journey of J. S. Sohal, J. S. Engineering Company"
            width={1536}
            height={1024}
            className="w-full h-auto rounded-2xl border border-black/10"
          />
        </Reveal>
      </div>
    </section>
  );
}
