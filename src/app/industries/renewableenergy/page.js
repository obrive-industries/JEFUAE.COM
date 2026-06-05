import RenewableEnergyResource from "./recontent";

export const metadata = {
  title:
    "Electrical Engineering Solutions for Renewable Energy in UAE | Solar & Grid Studies | JEF UAE",

  description:
    "Specialized electrical engineering solutions for renewable energy projects in UAE including solar power system studies, grid integration analysis, earthing, lightning protection and power quality assessments. Ensure safe, compliant and efficient renewable operations with JEF UAE.",

  keywords: [
    "renewable energy electrical engineering UAE",
    "solar power system studies UAE",
    "grid integration study Abu Dhabi",
    "renewable earthing study UAE",
    "solar arc flash analysis UAE",
    "wind power electrical studies UAE",
    "battery energy storage system study UAE",
    "power system consultants renewable UAE",
    "JEF UAE"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/industries/renewableenergy",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Electrical Engineering Solutions for Renewable Energy in UAE | Solar & Grid Studies | JEF UAE",
    description:
      "Advanced electrical engineering services for solar, wind and hybrid renewable projects across UAE including grid stability studies, protection coordination, grounding and power quality analysis.",
    url: "https://www.jefuae.com/industries/renewableenergy",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function RenewableEnergyPage() {
    return (
        <RenewableEnergyResource />
    );
}