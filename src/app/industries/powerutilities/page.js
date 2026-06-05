import PowerUtilites from "./pucontent";

export const metadata = {
  title:
    "Electrical Engineering Solutions for Power & Utilities in UAE | JEF UAE",

  description:
    "Advanced electrical engineering solutions for the power & utilities sector in UAE including power system studies, grid stability analysis, substation earthing, lightning protection, and reliability assessment. Ensure compliance, safety & grid performance with JEF UAE experts.",

  keywords: [
    "power utilities electrical engineering UAE",
    "power system studies utilities UAE",
    "grid stability analysis Abu Dhabi",
    "utility earthing studies UAE",
    "lightning protection utilities UAE",
    "substation analysis UAE",
    "electrical consultants power sector UAE",
    "JEF UAE"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/industries/powerutilities",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Electrical Engineering Solutions for Power & Utilities in UAE | JEF UAE",
    description:
      "Comprehensive electrical engineering services for power generation plants, substations, transmission and distribution networks across UAE’s utility sector.",
    url: "https://www.jefuae.com/industries/powerutilities",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function Page() {
    return (
        <>
            <PowerUtilites />
        </>
    );
}