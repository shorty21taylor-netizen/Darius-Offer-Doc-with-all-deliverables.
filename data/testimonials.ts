export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  role: string;
  quote: string;
  resultHighlight: string;
  rating: number;
  videoUrl?: string;
  photoUrl?: string;
}

export interface ResultScreenshot {
  id: string;
  imageUrl: string;
  caption?: string;
}

export interface PageTestimonials {
  modalTitle: string;
  subtitle: string;
  statsRow: string[];
  ctaLink: string;
  ctaText: string;
  backLink: string;
  backText: string;
  testimonials: Testimonial[];
  screenshots?: ResultScreenshot[];
}

export const testimonialsByPage: Record<string, PageTestimonials> = {
  home: {
    modalTitle: "Real Results. Real People. Real Transformation.",
    subtitle: "Don't take our word for it — see what our clients have to say.",
    statsRow: ["500+ Clients Served", "$10M+ In Funding", "100+ Success Stories"],
    ctaLink: "/",
    ctaText: "Explore Our Programs",
    backLink: "/",
    backText: "Back to Home",
    testimonials: [
      {
        id: "home-1",
        name: "Marcus T.",
        initials: "MT",
        avatarColor: "#d4af37",
        role: "Inner Circle Member",
        quote:
          "Placeholder testimonial — replace with real testimonial content. This person talks about their overall experience with Influence2Impact and Darius.",
        resultHighlight: "$XXX,XXX result placeholder",
        rating: 5,
      },
      {
        id: "home-2",
        name: "Sarah K.",
        initials: "SK",
        avatarColor: "#3b82f6",
        role: "Digital Mastermind Client",
        quote:
          "Placeholder testimonial — replace with real testimonial content. This person talks about their transformation across multiple programs.",
        resultHighlight: "$XX,XXX/month placeholder",
        rating: 5,
      },
      {
        id: "home-3",
        name: "David R.",
        initials: "DR",
        avatarColor: "#22c55e",
        role: "Funding Program Graduate",
        quote:
          "Placeholder testimonial — replace with real testimonial content. This person talks about getting funded and changing their life.",
        resultHighlight: "$XXX,XXX funded placeholder",
        rating: 5,
      },
    ],
  },

  saas: {
    modalTitle: "Fund2Grow Is Changing the Game",
    subtitle: "See how funding professionals are scaling with our platform.",
    statsRow: ["XX+ Active Users", "XXX+ Auto Applies/Month", "XX% Time Saved"],
    ctaLink: "http://www.fund2grow.ai/",
    ctaText: "Start Your Free Trial",
    backLink: "/saas",
    backText: "Back to Fund2Grow",
    testimonials: [
      {
        id: "saas-1",
        name: "Jason L.",
        initials: "JL",
        avatarColor: "#3b82f6",
        role: "Fund2Grow User — Growth Plan",
        quote:
          "Placeholder testimonial — replace with real content about using the Fund2Grow SaaS platform to scale their funding business.",
        resultHighlight: "XX clients managed placeholder",
        rating: 5,
      },
      {
        id: "saas-2",
        name: "Angela M.",
        initials: "AM",
        avatarColor: "#3b82f6",
        role: "Fund2Grow User — Solo Plan",
        quote:
          "Placeholder testimonial — replace with real content about automating their funding applications with the platform.",
        resultHighlight: "XX auto-applies/month placeholder",
        rating: 5,
      },
      {
        id: "saas-3",
        name: "Chris P.",
        initials: "CP",
        avatarColor: "#3b82f6",
        role: "Fund2Grow User — Growth Plan",
        quote:
          "Placeholder testimonial — replace with real content about the CRM and client management features.",
        resultHighlight: "$XX,XXX revenue placeholder",
        rating: 5,
      },
    ],
  },

  funding: {
    modalTitle: "Our Clients Are Getting Funded",
    subtitle: "Real results from real people in our funding program.",
    statsRow: ["20+ Video Testimonials", "$100K+ Months Achieved", "Real Telegram Proof"],
    ctaLink: "https://www.fanbasis.com/agency-checkout/Dariusbenders/PZRW",
    ctaText: "Get Started Today",
    backLink: "/funding-mastery",
    backText: "Back to Funding Program",
    testimonials: [
      {
        id: "fund-1",
        name: "Angel Spear",
        initials: "AS",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/ANGEL%20SPEAR.mp4",
        quote: "",
        resultHighlight: "",
        rating: 5,
      },
      {
        id: "fund-2",
        name: "Kimon",
        initials: "KM",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/August%2012%20-%20Kimon.mp4",
        quote: "",
        resultHighlight: "",
        rating: 5,
      },
      {
        id: "fund-3",
        name: "Denzel",
        initials: "DZ",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/August%2026%20-%20Denzel%20-%2020k.mp4",
        quote: "",
        resultHighlight: "$20K Funded",
        rating: 5,
      },
      {
        id: "fund-4",
        name: "Gee",
        initials: "GE",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/FEB%2024%20-%20GEE.mp4",
        quote: "",
        resultHighlight: "",
        rating: 5,
      },
      {
        id: "fund-5",
        name: "Credit Approved",
        initials: "CA",
        avatarColor: "#22c55e",
        role: "Funding Program Client — Credit Approved",
        videoUrl: "https://funding.b-cdn.net/FEB%2024--APROVED%20CREDIT%20.mp4",
        quote: "",
        resultHighlight: "Credit Approved",
        rating: 5,
      },
      {
        id: "fund-6",
        name: "Cedrick",
        initials: "CE",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/FEB%2024--Cedrick%20120K%20AND%2020K%20.mp4",
        quote: "",
        resultHighlight: "$120K + $20K Funded",
        rating: 5,
      },
      {
        id: "fund-7",
        name: "Gabriel",
        initials: "GA",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/Gabriel-04222025.mp4",
        quote: "",
        resultHighlight: "",
        rating: 5,
      },
      {
        id: "fund-8",
        name: "Hollie Garret",
        initials: "HG",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/HOLLIE%20GARRET.mp4",
        quote: "",
        resultHighlight: "",
        rating: 5,
      },
      {
        id: "fund-9",
        name: "Cedrick",
        initials: "CE",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/JAN%2027%20-%20Cedrick%20%2430k%20and%20%247k.mp4",
        quote: "",
        resultHighlight: "$30K + $7K Funded",
        rating: 5,
      },
      {
        id: "fund-10",
        name: "Cykeem",
        initials: "CK",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/JAN%2027%20-%20Cykeem%20Make%20up%20for%20the%20%2410k.mp4",
        quote: "",
        resultHighlight: "$10K Funded",
        rating: 5,
      },
      {
        id: "fund-11",
        name: "Rusell",
        initials: "RU",
        avatarColor: "#d4af37",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/JAN%2027%20-%20Rusell%20%24100k%20month.mp4",
        quote: "",
        resultHighlight: "$100K Month",
        rating: 5,
      },
      {
        id: "fund-12",
        name: "Tracy Williams",
        initials: "TW",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/JAN%2027%20-%20Tracy%20Williams%2050k%2070k.mp4",
        quote: "",
        resultHighlight: "$50K–$70K Funded",
        rating: 5,
      },
      {
        id: "fund-13",
        name: "Jeffrey",
        initials: "JE",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/Jeffrey%20-%20got%205%20credit%20repair%20clients%20for%20.mp4",
        quote: "",
        resultHighlight: "5 Credit Repair Clients",
        rating: 5,
      },
      {
        id: "fund-14",
        name: "Joy Sneed",
        initials: "JS",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/JOY%20SNEED.mp4",
        quote: "",
        resultHighlight: "",
        rating: 5,
      },
      {
        id: "fund-15",
        name: "Michael Alexander",
        initials: "MA",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/Michael%20Alexander%20-%20got%20about%2030%20peop.mp4",
        quote: "",
        resultHighlight: "30+ People Helped",
        rating: 5,
      },
      {
        id: "fund-16",
        name: "Noreen",
        initials: "NO",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/Noreen.mov",
        quote: "",
        resultHighlight: "",
        rating: 5,
      },
      {
        id: "fund-17",
        name: "Renee Sterrett",
        initials: "RS",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/RENEE%20STERRETT.mp4",
        quote: "",
        resultHighlight: "",
        rating: 5,
      },
      {
        id: "fund-18",
        name: "Shawn & Eliana",
        initials: "SE",
        avatarColor: "#22c55e",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/Shawn%20and%20Eliana-04222025.mp4",
        quote: "",
        resultHighlight: "",
        rating: 5,
      },
      {
        id: "fund-19",
        name: "Steven Eleazar",
        initials: "SE",
        avatarColor: "#d4af37",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/Steven%20Eleazar%20-%20got%20%2450K%20from%20Lightst.mp4",
        quote: "",
        resultHighlight: "$50K Funded",
        rating: 5,
      },
      {
        id: "fund-20",
        name: "Tamira",
        initials: "TA",
        avatarColor: "#d4af37",
        role: "Funding Program Client",
        videoUrl: "https://funding.b-cdn.net/TAMIRA%20-%2060K.mp4",
        quote: "",
        resultHighlight: "$60K Funded",
        rating: 5,
      },
    ],
    screenshots: [
      {
        id: "ss-1",
        imageUrl: "https://funding.b-cdn.net/Screenshot%202025-03-31%20at%2011.19.04%E2%80%AFPM.png",
      },
      {
        id: "ss-2",
        imageUrl: "https://funding.b-cdn.net/Screenshot%202025-04-03%20at%2011.02.59%E2%80%AFPM.png",
      },
      {
        id: "ss-3",
        imageUrl: "https://funding.b-cdn.net/Screenshot%202025-04-03%20at%2011.06.34%E2%80%AFPM.png",
        caption: "+$1,510 Result",
      },
      {
        id: "ss-4",
        imageUrl: "https://funding.b-cdn.net/Screenshot%202025-04-03%20at%2011.07.31%E2%80%AFPM.png",
      },
      {
        id: "ss-5",
        imageUrl: "https://funding.b-cdn.net/Screenshot%202025-04-03%20at%2011.08.47%E2%80%AFPM.png",
      },
      {
        id: "ss-6",
        imageUrl: "https://funding.b-cdn.net/Screenshot%202025-04-03%20at%2011.09.16%E2%80%AFPM.png",
      },
      {
        id: "ss-7",
        imageUrl: "https://funding.b-cdn.net/Screenshot%202025-04-03%20at%2011.14.56%E2%80%AFPM.png",
      },
      {
        id: "ss-8",
        imageUrl: "https://funding.b-cdn.net/Screenshot%202025-04-03%20at%2011.18.33%E2%80%AFPM.png",
      },
    ],
  },

  digital: {
    modalTitle: "Scaling to 5 Figures and Beyond",
    subtitle: "Our clients are closing deals and building empires with webinars.",
    statsRow: ["XX+ Funnels Built", "$X.XM+ Collected", "XX Students Scaling"],
    ctaLink: "https://www.fanbasis.com/agency-checkout/Dariusbenders/Qx89",
    ctaText: "Join The Mastermind",
    backLink: "/digital-mastery",
    backText: "Back to Digital Mastermind",
    testimonials: [
      {
        id: "digi-1",
        name: "Rachel S.",
        initials: "RS",
        avatarColor: "#f97316",
        role: "Digital Mastermind — Pay In Full",
        quote:
          "Placeholder testimonial — replace with real content about scaling with webinar selling and the digital mastermind program.",
        resultHighlight: "$XX,XXX/week placeholder",
        rating: 5,
      },
      {
        id: "digi-2",
        name: "Brandon H.",
        initials: "BH",
        avatarColor: "#f97316",
        role: "Digital Mastermind — Pay In Full",
        quote:
          "Placeholder testimonial — replace with real content about building their webinar funnel and getting results.",
        resultHighlight: "$XXX,XXX collected placeholder",
        rating: 5,
      },
      {
        id: "digi-3",
        name: "Mia J.",
        initials: "MJ",
        avatarColor: "#f97316",
        role: "Funnel Build Client",
        quote:
          "Placeholder testimonial — replace with real content about the DFY funnel build and results from running webinars.",
        resultHighlight: "XXX leads generated placeholder",
        rating: 5,
      },
    ],
  },

  innerCircle: {
    modalTitle: "The Inner Circle Speaks for Itself",
    subtitle: "Hear from the entrepreneurs who are building generational wealth.",
    statsRow: [
      "11 Students Hit $100K Days",
      "$1M+ Days — Twice",
      "4 Live Masterminds/Year",
    ],
    ctaLink: "https://www.fanbasis.com/agency-checkout/Dariusbenders/0RDmy",
    ctaText: "Apply For Inner Circle",
    backLink: "/inner-circle",
    backText: "Back to Inner Circle",
    testimonials: [
      {
        id: "ic-1",
        name: "Darnell F.",
        initials: "DF",
        avatarColor: "#d4af37",
        role: "Inner Circle Member — Year 1",
        quote:
          "Placeholder testimonial — replace with real content about partnering with Darius and running $100K+ days.",
        resultHighlight: "$XXX,XXX single day placeholder",
        rating: 5,
      },
      {
        id: "ic-2",
        name: "Tiffany C.",
        initials: "TC",
        avatarColor: "#d4af37",
        role: "Inner Circle Member — Year 1",
        quote:
          "Placeholder testimonial — replace with real content about the in-person masterminds and coaching experience.",
        resultHighlight: "$X,XXX,XXX annual placeholder",
        rating: 5,
      },
      {
        id: "ic-3",
        name: "Andre W.",
        initials: "AW",
        avatarColor: "#d4af37",
        role: "Inner Circle Member — Year 2",
        quote:
          "Placeholder testimonial — replace with real content about the 7-figure webinar framework and scaling results.",
        resultHighlight: "$XXX,XXX/month placeholder",
        rating: 5,
      },
    ],
  },
};
