import IES from "./ies";

export const metadata = {
  title:
    "Instrumentation Earthing Studies in UAE | Clean Earth & Signal Grounding | JEF UAE",

  description:
    "Professional instrumentation earthing studies in UAE for clean earth systems, signal grounding, and noise reduction in oil & gas, industrial and utility facilities. Ensure compliance, equipment protection & reliable control system performance with JEF UAE.",

  keywords: [
    "instrumentation earthing studies UAE",
    "clean earth system UAE",
    "signal grounding study Abu Dhabi",
    "control system grounding UAE",
    "instrumentation grounding oil and gas UAE",
    "earthing for PLC and DCS systems UAE",
    "electrical safety consultants UAE",
    "JEF UAE"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/instrumentation-earthing-studies",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Instrumentation Earthing Studies in UAE | Clean Earth & Signal Grounding | JEF UAE",
    description:
      "Clean earth and signal grounding studies for PLC, DCS and SCADA systems ensuring noise-free control performance and IEC/IEEE compliant instrumentation safety across UAE industrial facilities.",
    url: "https://www.jefuae.com/instrumentation-earthing-studies",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function InstrumentationEarthingStudiesPage() {
    return (
        <IES />
    );
}