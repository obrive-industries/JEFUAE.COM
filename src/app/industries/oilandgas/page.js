import OilandGas from "./oilandgascontent";

export const metadata = {
  title:
    "Electrical Engineering Solutions for Oil & Gas Industry in UAE | JEF UAE",

  description:
    "Specialized electrical engineering solutions for the Oil & Gas industry in UAE including power system studies, earthing, lightning protection, EMI/EMC analysis, and root cause investigation. Ensure safety, compliance & operational reliability with JEF UAE.",

  keywords: [
    "oil and gas electrical engineering UAE",
    "power system studies oil and gas UAE",
    "earthing studies oil and gas Abu Dhabi",
    "electrical safety oil and gas UAE",
    "lightning protection oil and gas UAE",
    "EMI EMC oil and gas UAE",
    "industrial electrical consultants UAE",
    "JEF UAE"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/industries/oilandgas",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Electrical Engineering Solutions for Oil & Gas Industry in UAE | JEF UAE",
    description:
      "Comprehensive electrical engineering services for upstream, midstream & downstream oil & gas facilities including power system analysis, grounding, lightning protection and EMI/EMC compliance.",
    url: "https://www.jefuae.com/industries/oilandgas",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function OilandGasPage() {
    return (
        <OilandGas />
    );
}