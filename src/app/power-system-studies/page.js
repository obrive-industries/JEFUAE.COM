import PSS from "./pss";

export const metadata = {
  title:
    "Power System Studies & Analysis in UAE | Load Flow, Short Circuit & Arc Flash | JEF UAE",

  description:
    "Expert power system studies in UAE including load flow analysis, short circuit study, arc flash analysis, relay coordination, motor starting & stability studies. Ensure electrical safety, compliance & system reliability with JEF UAE.",

  keywords: [
    "power system studies UAE",
    "load flow analysis UAE",
    "short circuit study Abu Dhabi",
    "arc flash analysis UAE",
    "relay coordination study UAE",
    "motor starting analysis",
    "electrical network analysis UAE",
    "power system consultants UAE",
    "JEF UAE"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/power-system-studies",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Power System Studies & Analysis in UAE | Load Flow, Short Circuit & Arc Flash | JEF UAE",
    description:
      "Professional load flow, short circuit, arc flash, relay coordination and stability studies ensuring IEC/IEEE/NFPA compliance for industrial and utility power systems in UAE.",
    url: "https://www.jefuae.com/power-system-studies",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function PSSPage() {
    return (
        <>
            <PSS />
        </>
    );
}   