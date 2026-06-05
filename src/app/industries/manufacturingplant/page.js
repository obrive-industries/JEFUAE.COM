import ManufacturingPlant from "./mpcontent";

export const metadata = {
  title:
    "Electrical Engineering Solutions for Manufacturing Plants in UAE | JEF UAE",

  description:
    "Specialized electrical engineering solutions for manufacturing plants in UAE including power system studies, arc flash analysis, industrial earthing, power quality assessment, EMI/EMC analysis and root cause investigation. Improve plant reliability, safety & operational efficiency with JEF UAE.",

  keywords: [
    "manufacturing plant electrical engineering UAE",
    "industrial power system studies UAE",
    "arc flash analysis manufacturing UAE",
    "plant earthing studies Abu Dhabi",
    "power quality manufacturing UAE",
    "EMI EMC industrial plant UAE",
    "electrical consultants manufacturing UAE",
    "JEF UAE"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/industries/manufacturingplant",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Electrical Engineering Solutions for Manufacturing Plants in UAE | JEF UAE",
    description:
      "Advanced electrical engineering services for industrial manufacturing facilities including arc flash, grounding, protection coordination, and reliability assessment across UAE.",
    url: "https://www.jefuae.com/industries/manufacturingplant",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function ManufacturingPlantPage() {
    return (
        <ManufacturingPlant />
    );
}