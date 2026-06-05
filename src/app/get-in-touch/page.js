import GetInTouchForm from "./contactpage";

export const metadata = {
  title:
    "Contact JEF UAE | Electrical Engineering Consultants in Abu Dhabi & UAE",

  description:
    "Get in touch with JEF UAE, leading electrical engineering consultants in Abu Dhabi. Contact us for power system studies, earthing audits, lightning protection, EMI/EMC analysis, and industrial electrical safety solutions across UAE and Middle East.",

  keywords: [
    "electrical engineering consultants UAE",
    "power system study consultants Abu Dhabi",
    "earthing audit consultants UAE",
    "lightning protection consultants Abu Dhabi",
    "EMI EMC consultants UAE",
    "industrial electrical safety experts UAE",
    "grid stability consultants UAE",
    "JEF UAE contact details"
  ],

  alternates: {
    canonical: "https://www.jefuae.com/get-in-touch",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Contact JEF UAE | Electrical Engineering Consultants in Abu Dhabi",
    description:
      "Speak with UAE’s trusted electrical engineering consultants for power system studies, grounding audits, lightning protection and grid stability analysis.",
    url: "https://www.jefuae.com/get-in-touch",
    siteName: "JEF UAE",
    type: "website",
  },

  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "geo.position": "24.4539;54.3773",
    ICBM: "24.4539, 54.3773",
  },
};

export default function GetInTouchPage() {
    return (
        <GetInTouchForm />
    );
}