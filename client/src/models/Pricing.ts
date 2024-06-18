import { ICard } from "../interfaces/Pricing";

export const cards: ICard[] = [
  {
    plan: "Basic",
    price: 10000,
    about: "Single Page • Static Content",
    points: [
      "Web Application Design",
      "Front-End Web Application",
      "Responsive Web Design",
      "Basic SEO Optimization",
      "Post Production Development",
      "Complete Hosting",
      "One Revision",
      "One Month Support",
    ],
  },
  {
    plan: "Standard",
    price: 15000,
    about: "Multiple Pages • Dynamic Content",
    points: [
      "Web Application Design",
      "Full-Stack Web Application",
      "Simple Database Integration",
      "Advanced SEO Optimization",
      "Post Production Development",
      "Complete Hosting",
      "Basic Security Features",
      "Three Revisions",
      "Three Months Support",
    ],
  },
  {
    plan: "Premium",
    price: 25000,
    about: "Powerful Features • Large Database",
    points: [
      "Web Application Design",
      "Full-Stack Web Application",
      "Complex Database Integration",
      "Advanced SEO Optimization",
      "Payment Gateway Integration",
      "Analytics and Reporting",
      "Post Production Development",
      "Complete Hosting",
      "Advanced Security Features",
      "Performance Optimization",
      "Unlimited Revisions",
      "Six Months Support",
    ],
  },
];
