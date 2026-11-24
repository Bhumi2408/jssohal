import { SITE_URL, faqs, topProducts } from "./data";

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const address = {
  "@type": "PostalAddress",
  streetAddress: "C-57, Wazirpur Industrial Area",
  addressLocality: "Delhi",
  addressRegion: "Delhi",
  postalCode: "110052",
  addressCountry: "IN",
};

const description =
  "J. S. Engineering is a bakery machine manufacturer in Delhi NCR, established in 1948, offering High Speed Bread Slicers, High Speed Toast Slicers, Gravity Bread Slicers, Cake Slicing Machines, Round Roll Slicing Machines and Bakery Projects & Consultancy.";

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "J. S. Engineering",
  alternateName: "J. S. Engineering Company",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-js.png`,
  },
  image: `${SITE_URL}/desktopbanner.jpeg`,
  description,
  foundingDate: "1948",
  founder: { "@type": "Person", name: "S. Jaswant Singh Sohal" },
  address,
  telephone: "+91-9811163270",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9811163270",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9811163217",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  knowsAbout: [
    "Bakery Machine Manufacturer",
    "Bakery Machine Manufacturer in Delhi",
    "Bread Slicing Machine",
    "Toast Slicing Machine",
    "Cake Slicing Machine",
    "Round Roll Slicing Machine",
    "Bakery Projects & Consultancy",
  ],
};

const localBusiness = {
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  name: "J. S. Engineering",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/desktopbanner.jpeg`,
  logo: `${SITE_URL}/logo-js.png`,
  description,
  telephone: "+91-9811163270",
  address,
  foundingDate: "1948",
  parentOrganization: { "@id": ORG_ID },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bakery Machinery",
    itemListElement: topProducts.map((p) => ({
      "@type": "Offer",
      itemOffered:
        p.name === "Bakery Projects & Consultancy"
          ? { "@type": "Service", name: p.name, description: p.description }
          : {
              "@type": "Product",
              name: p.name,
              description: p.description,
              image: `${SITE_URL}${p.image}`,
              brand: { "@type": "Brand", name: "J. S. Engineering" },
              manufacturer: { "@id": ORG_ID },
            },
    })),
  },
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "J. S. Engineering",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
};

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [organization, localBusiness, website, faqPage],
};
