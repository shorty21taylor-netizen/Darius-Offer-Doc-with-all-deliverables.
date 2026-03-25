export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  role: string;
  quote: string;
  resultHighlight: string;
  rating: number;
  photoUrl?: string;
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
    subtitle: "Real people, real funding — see the results for yourself.",
    statsRow: ["500+ Clients Funded", "$10M+ Total Funding", "95% Satisfaction"],
    ctaLink: "https://www.fanbasis.com/agency-checkout/Dariusbenders/PZRW",
    ctaText: "Get Started Today",
    backLink: "/funding-mastery",
    backText: "Back to Funding Program",
    testimonials: [
      {
        id: "fund-1",
        name: "Terrence W.",
        initials: "TW",
        avatarColor: "#22c55e",
        role: "Accelerator Program — 3 Months",
        quote:
          "Placeholder testimonial — replace with real content about getting funded through the credit and funding program.",
        resultHighlight: "$XXX,XXX funded placeholder",
        rating: 5,
      },
      {
        id: "fund-2",
        name: "Nicole B.",
        initials: "NB",
        avatarColor: "#22c55e",
        role: "Mastery Program — 6 Months",
        quote:
          "Placeholder testimonial — replace with real content about credit improvement and business funding results.",
        resultHighlight: "$XXX,XXX funded placeholder",
        rating: 5,
      },
      {
        id: "fund-3",
        name: "Kevin D.",
        initials: "KD",
        avatarColor: "#22c55e",
        role: "Accelerator Program — 3 Months",
        quote:
          "Placeholder testimonial — replace with real content about the 1-on-1 coaching and funding application support.",
        resultHighlight: "$XX,XXX funded placeholder",
        rating: 5,
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
