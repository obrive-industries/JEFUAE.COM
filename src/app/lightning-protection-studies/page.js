import LPS from "./lps";

export const metadata = {
  title:
    "Lightning Protection System Studies in UAE | LPS Risk Assessment & Design | JEF UAE",

  description:
    "Professional lightning protection system (LPS) studies in UAE including risk assessment, surge protection analysis, grounding integration, and IEC 62305 compliance. Protect industrial, commercial & utility facilities with expert engineering solutions.",

  keywords: [
    "lightning protection studies UAE",
    "LPS risk assessment UAE",
    "lightning protection system design Abu Dhabi",
    "IEC 62305 lightning study",
    "surge protection analysis UAE",
    "grounding and lightning audit",
    "electrical safety consultants UAE",
    "JEF UAE"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/lightning-protection-studies",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Lightning Protection System Studies in UAE | LPS Risk Assessment & Design | JEF UAE",
    description:
      "IEC 62305 compliant lightning protection system studies including risk assessment, surge coordination, and grounding integration across UAE industrial and commercial facilities.",
    url: "https://www.jefuae.com/lightning-protection-studies",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function LPSPage() {
  return (
    <>
      <LPS />
    </>
  )
}