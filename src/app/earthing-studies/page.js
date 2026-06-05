import EarthingStudiesContent from "./EarthingStudiesContent";

export const metadata = {
  title:
    "Professional Earthing Studies & Grounding System Services in UAE | JEF UAE",

  description:
    "Get comprehensive earthing studies & grounding system integrity testing services in UAE for electrical safety, compliance, and enhanced system performance. Trusted engineering experts with global experience.",

  keywords: [
    "earthing studies UAE",
    "grounding system testing UAE",
    "electrical earthing analysis",
    "earthing integrity testing",
    "JEF UAE",
    "electrical safety services UAE",
    "grounding audit",
    "earthing system experts"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/earthing-studies",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Professional Earthing Studies & Grounding System Services in UAE | JEF UAE",
    description:
      "Comprehensive earthing and grounding system integrity testing services in UAE ensuring electrical safety, IEC/IEEE compliance, and enhanced power system performance.",
    url: "https://www.jefuae.com/earthing-studies",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function EarthingStudiesPage() {
    return (
        <>
            <EarthingStudiesContent />
        </>
    )
}