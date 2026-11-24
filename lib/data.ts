export type TopProduct = {
  name: string;
  description: string;
  tag: string;
  image: string;
  imageFit?: "cover" | "contain";
  details: string[];
};

export const topProducts: TopProduct[] = [
  {
    name: "High Speed Bread Slicer",
    description: "Designed for bakeries that need to slice bread efficiently during regular production.",
    tag: "BEST SELLER",
    image: "/high-speed-bread-slicer.webp",
    details: [
      "A High Speed Bread Slicer is designed for bakeries that need to slice bread efficiently during regular production. Bread slicing is an important stage in commercial bakery operations, particularly when products need to be prepared for packaging and distribution.",
      "This machine helps streamline the bread slicing process and supports businesses handling regular bread production. It is suitable for commercial bakeries and bread manufacturing units looking for dedicated bread slicing equipment.",
      "Before selecting a bread slicer, businesses should consider their daily production requirements, bread dimensions and desired slicing specifications. These factors help determine whether a particular machine is suitable for their production process.",
    ],
  },
  {
    name: "High Speed Toast Slicer",
    description: "Specialized equipment for consistent toast slicing ahead of handling, packaging and distribution.",
    tag: "POPULAR",
    image: "/high-speed-toast-slicer.webp",
    details: [
      "The High Speed Toast Slicer is designed for bakery businesses that require specialized equipment for toast slicing. Toast products need consistent slicing to support further handling, packaging and distribution.",
      "Using a dedicated toast slicing machine can help organize this stage of bakery production. It is suitable for commercial bakeries and food production units that regularly manufacture toast products.",
      "When choosing a toast slicer, businesses should evaluate their production volume, product dimensions and slicing requirements. Selecting suitable equipment can help maintain an organized production workflow.",
    ],
  },
  {
    name: "Gravity Bread Slicer",
    description: "Bread slicing through a gravity-based feeding mechanism.",
    tag: "COMPACT",
    image: "/gravity-slicer.webp",
    details: [
      "The Gravity Bread Slicer is designed for bread slicing through a gravity-based feeding mechanism. It provides a specialized option for bakeries looking for equipment suited to their bread processing requirements.",
      "Different bakery businesses may have different production volumes and operating preferences. Therefore, it is important to understand the working mechanism and application of a bread slicing machine before making a purchase.",
      "J. S. Engineering offers Gravity Bread Slicers as part of its machinery range, giving businesses another option to consider for their bread slicing operations.",
    ],
  },
  {
    name: "Cake Slicing Machine",
    description: "Cuts cakes into portions for further handling, packaging or display.",
    tag: "PRECISION",
    image: "/high-speed-cake-slicer.webp",
    details: [
      "A Cake Slicing Machine is designed to cut cakes into portions for further handling, packaging or display. Cake slicing requires attention to portion size and cutting consistency, particularly for businesses involved in regular cake production.",
      "Commercial bakeries and cake manufacturers can consider dedicated cake slicing equipment according to their product types and production requirements.",
      "Before selecting a cake slicing machine, businesses should evaluate the dimensions of their cakes, required portion sizes and expected production volume. These considerations help identify suitable equipment for their cake processing operations.",
    ],
  },
  {
    name: "Round Roll Slicing Machine",
    description: "Developed for bakery businesses that manufacture and process round rolls.",
    tag: "SPECIALIST",
    image: "/High-Speed-Round-Roll-Toast-Slicing-Machine.webp",
    details: [
      "The Round Roll Slicing Machine is developed for bakery businesses that manufacture and process round rolls. Since round bakery products have a different shape from regular bread loaves, they may require equipment designed specifically for their slicing application.",
      "This machine helps businesses address their round roll slicing requirements as part of their regular production process. It is relevant for commercial bakeries and food production units manufacturing round bakery products.",
      "When selecting this machine, businesses should consider the dimensions of their rolls, desired slicing results and production requirements.",
    ],
  },
  {
    name: "Bakery Projects & Consultancy",
    description: "Support with bakery setup planning and machinery requirements.",
    tag: "CONSULTANCY",
    image: "/consultaion.webp",
    imageFit: "contain",
    details: [
      "Starting a new bakery production unit or planning to improve an existing facility requires proper machinery selection and production planning. Businesses need to understand which machines are required for their products and how different equipment fits into their production setup.",
      "J. S. Engineering also provides Bakery Projects & Consultancy to support businesses with their bakery setup planning and machinery requirements.",
      "This service can be useful for entrepreneurs planning a commercial bakery, existing bakery owners considering production expansion and businesses evaluating machinery for specific bakery applications.",
      "Understanding the production process before purchasing equipment can help businesses plan their machinery requirements more effectively.",
    ],
  },
];

export const faqs = [
  {
    q: "Who is the best bakery machine manufacturer in Delhi?",
    a: "J. S. Engineering is an established bakery machine manufacturer in Delhi with manufacturing experience dating back to 1948. The company offers bread slicers, toast slicers, cake slicing machines and other specialized bakery equipment.",
  },
  {
    q: "Where can I find a bakery machine manufacturer in Delhi?",
    a: "You can contact J. S. Engineering at C-57, Wazirpur Industrial Area, Delhi – 110052, to explore its bakery machinery range and discuss your business requirements.",
  },
  {
    q: "What types of bakery machines does J. S. Engineering offer?",
    a: "J. S. Engineering offers High Speed Bread Slicers, High Speed Toast Slicers, Gravity Bread Slicers, Cake Slicing Machines, Round Roll Slicing Machines and Bakery Projects & Consultancy.",
  },
  {
    q: "Which machine is suitable for commercial bread slicing?",
    a: "A High Speed Bread Slicer is designed for commercial bread slicing applications. The suitable machine depends on your bread dimensions, production volume and slicing requirements.",
  },
  {
    q: "What is the difference between a High Speed Bread Slicer and a Gravity Bread Slicer?",
    a: "A High Speed Bread Slicer is designed for high-speed bread slicing applications, while a Gravity Bread Slicer uses a gravity-based feeding mechanism. The choice depends on your production requirements and preferred machine application.",
  },
  {
    q: "Which machine is used for slicing toast?",
    a: "A High Speed Toast Slicer is designed specifically for toast slicing requirements in commercial bakeries and food production units.",
  },
  {
    q: "Can a cake slicing machine be used in commercial bakeries?",
    a: "Yes, a Cake Slicing Machine is designed for cake portioning applications and can be considered by commercial bakeries and cake manufacturers according to their production needs.",
  },
  {
    q: "Does J. S. Engineering provide bakery project consultancy?",
    a: "Yes, J. S. Engineering offers Bakery Projects & Consultancy to help businesses understand their bakery setup and machinery requirements.",
  },
  {
    q: "What should I consider before purchasing bakery machinery?",
    a: "Consider the product application, production volume, machine specifications, available space, operating requirements and suitability for your bakery products.",
  },
  {
    q: "How can I get a quotation for bakery machines from J. S. Engineering?",
    a: "You can contact J. S. Engineering through its website or visit its Wazirpur Industrial Area facility in Delhi to discuss your machinery requirements and request product details or a quotation.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#why" },
  { label: "Clients", href: "#clients" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const megaMenuLinks = [
  { label: "Bread Slicing Machines", href: "#products" },
  { label: "Toast Slicing Machines", href: "#products" },
  { label: "Gravity Bread Slicers", href: "#products" },
  { label: "Cake Slicing Machines", href: "#products" },
  { label: "Round Roll Slicing Machines", href: "#range" },
  { label: "Small Bakery Equipment", href: "#range" },
  { label: "Bakery Machinery", href: "#range" },
  { label: "Project Consultancy", href: "#expertise" },
];

export const clients = ["Britannia", "Modern Bread", "Harvest Gold", "Bonn", "Kitty Industries"];

export const testimonials = [
  {
    quote:
      "Consistent slicing performance and robust machine construction have made these machines a reliable part of our production process.",
    name: "Rajesh Malhotra",
    role: "Bakery Production Manager, Delhi",
    initial: "R",
  },
  {
    quote:
      "The slicing thickness stays accurate shift after shift, and the blades are straightforward to replace when needed.",
    name: "Suresh Kapoor",
    role: "Operations Head, Industrial Bakery",
    initial: "S",
  },
  {
    quote:
      "Their team helped us plan the full slicing line layout, not just supply a machine. That project support made the difference.",
    name: "Amrit Bakshi",
    role: "Director, Regional Bakery Chain",
    initial: "A",
  },
];

export const COMPANY = {
  name: "J. S. Engineering Company",
  shortName: "J. S. ENGINEERING",
  tagline: "Finest Quality Slicing Solutions Since 1948",
  phone: "+91 9811163270 | +91 9811163217",
  phoneHref: "tel:+919811163270",
  whatsappHref: "https://wa.me/919811163270",
  address: "C-57, Wazirpur Industrial Area, Delhi - 110052, India",
  location: "Delhi, India",
};

export const SITE_URL = "https://bakerymachinemanufacturer.com";

// Web3Forms keys are public by design; submissions go to the email tied to this key.
export const WEB3FORMS_ACCESS_KEY = "c3c42454-5713-4551-a131-34dec2597d6f";
