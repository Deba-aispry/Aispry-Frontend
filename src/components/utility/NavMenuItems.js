// import { path } from "framer-motion/client";

export const NavMenuItems = [
  {
    label: "AI Solutions",
    submenu: [
      { name: "Machine Learning", id: "ml" , path:"/ai-solutions"},
      { name: "Natural Language Processing", id: "nlp" , path:"/ai-solutions"},
      { name: "Computer Vision", id: "cv" , path:"/ai-solutions"},
      { name: "Predictive Analytics", id: "pa", path:"/ai-solutions" },
      { name: "Custom AI Development", id: "custom", path:"/ai-solutions" },
    ],
  },
  {
    label: "Industry Applications",
    submenu: [
      { name: "Manufacturing & Industrial", path: "/industry/manufacturing" },
      { name: "Healthcare & Life Sciences",  path: "/industry/healthcare" },
      { name: "Transportation & Logistics", path: "/industry/transportation" },
      { name: "Retail & E-commerce",  path:"/industry/ecommerce" },
      { name: "Energy & Utilities", path: "/industry/energy" },
      // { name: "FMCG & Food and Beverage", path: "/industry/fmcg" },
      // { name: "Financial Services", path: "/industry/financial" },
      // { name: "ESG", path: "/industry/esg" },
    ],
  },
 
  // {
  //   label: "Resources",
  //   submenu: [
  //     { name: "Case Studies" },
  //     { name: "White Papers" },
  //     { name: "Webinars" },
  //     { name: "Blog" },
  //     { name: "FAQs" },
  //   ],
  // },
];
