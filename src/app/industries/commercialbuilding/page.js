import CommercialBuilding from "./cbcontent";

export const metadata = {
  title:
    "Electrical Engineering Solutions for Commercial Buildings in UAE | JEF UAE",

  description:
    "Expert electrical engineering solutions for commercial buildings in UAE including power system studies, arc flash analysis, earthing, lightning protection and power quality assessments. Ensure safety, compliance and reliable electrical performance with JEF UAE.",

  keywords: [
    "commercial building electrical engineering UAE",
    "power system studies commercial UAE",
    "arc flash study Abu Dhabi",
    "building earthing study UAE",
    "lightning protection commercial building UAE",
    "power quality analysis UAE",
    "electrical consultants commercial sector UAE",
    "JEF UAE"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/industries/commercialbuilding",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Electrical Engineering Solutions for Commercial Buildings in UAE | JEF UAE",
    description:
      "Advanced electrical engineering services for offices, malls, hospitals, hotels and mixed-use developments across UAE including arc flash, grounding, lightning protection and power quality studies.",
    url: "https://www.jefuae.com/industries/commercialbuilding",
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
        <CommercialBuilding />
    );
}