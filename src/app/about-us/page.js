import AboutUsContent from "./AboutUsContent";

export const metadata = {
  title: "About JEF UAE | Electrical Engineering & Safety Experts in Abu Dhabi",
  description:
    "Learn about JEF UAE — leading electrical engineering consultants in Abu Dhabi specializing in earthing studies, lightning protection, power system studies, safety audits, and power quality solutions across UAE and global industries.",

  keywords: [
    "JEF UAE",
    "Electrical Engineering Abu Dhabi",
    "Earthing Study UAE",
    "Lightning Protection UAE",
    "Power System Studies UAE",
    "Electrical Safety Consultants UAE",
    "Power Quality Analysis UAE",
    "Engineering Consultants Abu Dhabi"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/about-us",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "About JEF UAE | Electrical Engineering & Safety Experts in Abu Dhabi",
    description:
      "Leading electrical engineering consultants in Abu Dhabi specializing in earthing studies, lightning protection, and power system studies.",
    url: "https://www.jefuae.com/about-us",
    siteName: "JEF UAE",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    "ICBM": "24.4539, 54.3773",
  },
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}