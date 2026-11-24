import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="pt-24 pb-24">
      <div className="max-w-content mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
        <Reveal className="relative hidden md:block">
          <Image
            src="/aboutimage.webp"
            alt="J. S. Engineering Company"
            width={520}
            height={480}
            className="w-full h-auto rounded-2xl border border-black/10 object-cover"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow inline-flex items-center gap-2.5 text-[12.5px] tracking-[0.14em] font-semibold text-ember">
            ABOUT J. S. ENGINEERING
          </span>
          <h1 className="font-display font-extrabold leading-[1.15] tracking-tight text-[28px] sm:text-[34px] lg:text-[40px] my-4">
            Bakery Machine Manufacturer in Delhi NCR – J. S. Engineering
          </h1>
          <Image
            src="/aboutimage.webp"
            alt="J. S. Engineering Company"
            width={520}
            height={480}
            className="md:hidden w-full h-auto rounded-2xl border border-black/10 object-cover mb-6"
          />
          <div className="space-y-4 text-[15.5px] text-[#4a453e] leading-relaxed">
            <p>
              J. S. Engineering is an experienced{" "}
              <a href="/#contact" className="font-semibold text-ember hover:underline">
                Bakery Machine Manufacturer
              </a>{" "}
              based in Delhi, India, specializing in bakery machinery for commercial bakeries and food
              production businesses. Established in 1948, the company has developed its manufacturing
              experience across three generations. With a strong understanding of bakery production
              requirements, we offer specialized machines designed for different slicing applications.
            </p>
            <p>
              Our product range includes High Speed Bread Slicers, High Speed Toast Slicers, Gravity
              Bread Slicers, Cake Slicing Machines and Round Roll Slicing Machines. Along with
              machinery, we also provide Bakery Projects &amp; Consultancy to support businesses in
              planning their bakery production facilities.
            </p>
            <p>
              Whether you operate a commercial bakery, a bread manufacturing unit or a food processing
              business, choosing suitable machinery is important for maintaining production efficiency
              and product consistency. At J. S. Engineering, we focus on providing practical bakery
              machinery solutions according to the operational requirements of different businesses.
            </p>
          </div>
          <div className="border-l-[3px] border-ember bg-paper-2 rounded-r-lg px-5 py-4 my-6 text-[15px] font-medium text-ink-3">
            &ldquo;From traditional bakery equipment to high-speed automated slicing solutions, we
            engineer machines around real production needs.&rdquo;
          </div>
          <a
            href="#range"
            className="inline-flex items-center gap-2.5 border border-black/10 hover:border-ink text-ink font-semibold px-6 py-3.5 rounded-md transition-colors group"
          >
            Discover Our Story <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 mt-8 border-t border-black/10 pt-6">
            {[
              { year: "1948", label: "Foundation, by S. Jaswant Singh Sohal" },
              { year: "1970s", label: "Bread slicing innovation, 2nd generation" },
              { year: "Today", label: "Advanced bakery machinery, 3rd generation" },
            ].map((t) => (
              <div key={t.year} className="flex-1 relative pr-5 before:content-[''] before:absolute before:-top-[25px] before:left-0 before:w-[38px] before:h-[2px] before:bg-ember before:hidden sm:before:block">
                <b className="block font-display font-extrabold text-[17px]">{t.year}</b>
                <span className="text-[13px] text-steel">{t.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
