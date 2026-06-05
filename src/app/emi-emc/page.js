import EmiEmc from "./emiemc";

export const metadata = {
  title:
    "EMI / EMC Studies in UAE | Electromagnetic Interference & Compatibility Analysis | JEF UAE",

  description:
    "Professional EMI / EMC studies in UAE for electromagnetic interference analysis, compatibility testing, grounding integration, and compliance with IEC & IEEE standards. Protect industrial systems, instrumentation & power networks with JEF UAE experts.",

  keywords: [
    "EMI EMC studies UAE",
    "electromagnetic interference analysis UAE",
    "electromagnetic compatibility study Abu Dhabi",
    "EMC testing consultants UAE",
    "industrial EMI study UAE",
    "grounding and EMI analysis UAE",
    "electrical interference assessment UAE",
    "JEF UAE"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/emi-emc",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "EMI / EMC Studies in UAE | Electromagnetic Interference & Compatibility Analysis | JEF UAE",
    description:
      "Comprehensive EMI / EMC analysis including interference source identification, compliance evaluation, grounding & shielding design review for industrial and utility facilities across UAE.",
    url: "https://www.jefuae.com/emi-emc",
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
            <EmiEmc />
        </>
    );
}  