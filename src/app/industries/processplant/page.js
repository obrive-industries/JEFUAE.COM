import ProcessPlant from "./p2content";

export const metadata = {
  title:
    "Electrical Engineering Solutions for Process Plants in UAE | JEF UAE",

  description:
    "Advanced electrical engineering solutions for process plants in UAE including power system studies, arc flash analysis, industrial earthing, power quality assessment, EMI/EMC analysis and root cause investigation. Improve safety, compliance & operational reliability with JEF UAE experts.",

  keywords: [
    "process plant electrical engineering UAE",
    "power system studies process plant UAE",
    "arc flash analysis Abu Dhabi",
    "industrial earthing process plant UAE",
    "power quality process plant UAE",
    "EMI EMC process plant UAE",
    "electrical consultants UAE",
    "JEF UAE"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/industries/processplant",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Electrical Engineering Solutions for Process Plants in UAE | JEF UAE",
    description:
      "Specialized electrical engineering services for chemical, petrochemical, refinery and industrial process facilities across UAE including arc flash, grounding, protection coordination and system reliability studies.",
    url: "https://www.jefuae.com/industries/processplant",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function ProcessPlantPage() {
    return (
        <ProcessPlant />
    );
}