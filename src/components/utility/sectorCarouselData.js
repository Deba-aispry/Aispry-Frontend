
import ecommerce from "../../assets/homePage/ecommerce.webp";
import financial from "../../assets/homePage/financial.webp";
import manufacturing from "../../assets/homePage/manufacturing.webp";
import fmcgImage from "../../assets/homePage/fmcgImage.webp";
import esgImage from "../../assets/homePage/esgImage.webp";
import healthcare from "../../assets/homePage/medical.webp"; 
import energy from "../../assets/homePage/energy.webp"
export const sectorCarouselData = [
  {
    id: 1,
    title: "Healthcare & Life Sciences",
    description:
      "Empowering healthcare providers with intelligent systems for faster diagnoses, enhanced patient care, and groundbreaking research capabilities.",
    image: healthcare,
    highlights: [
      {
        title: "AI Diagnostics",
        detail:
          "Early disease detection through computer vision and pattern recognition in medical imaging.",
      },
      {
        title: "Personalized Healthcare",
        detail:
          "Machine learning models for custom treatment plans based on patient history.",
      },
      {
        title: "Safety Innovation",
        detail:
          "Smart systems to monitor laboratory and hospital environments for compliance and safety.",
      },
      {
        title: "Resource Optimization",
        detail:
          "Intelligent scheduling and allocation of hospital resources like beds, staff, and equipment to enhance patient care and reduce operational bottlenecks.",
      },
      {
        title: "Hospital Pharmacy Optimization",
        detail:
          "AI-driven demand forecasting to ensure medication availability, reduce waste, and improve stock management.",
      },
    ],
  },
  {
    id: 2,
    title: "Energy & Utilities",
    description:
      "Drive sustainability and efficiency with AI solutions tailored for energy production and distribution. Predict outages, reduce waste, and ensure workplace safety.",
    image: energy,
    highlights: [
      {
        title: "Energy Forecasting",
        detail:
          "Predictive analytics for renewable energy production and grid stability.",
      },
      {
        title: "Asset Health Management",
        detail:
          "AI to predict equipment failures and optimize repairs.",
      },
      {
        title: "Workplace Hazard Prevention",
        detail:
          "Computer vision for monitoring high-risk environments.",
      },
    ],
  },
  {
    id: 3,
    title: "FMCG & Food and Beverage",
    description:
      "Reimagine supply chains, enhance safety, and optimize inventory with AI tailored for the fast-moving consumer goods and food sectors.",
    image: fmcgImage,
    highlights: [
      {
        title: "Dynamic Route Optimization",
        detail:
          "Adaptive algorithms to adjust routes in real-time based on traffic, weather, and demand.",
      },
      {
        title: "Safety Innovations",
        detail:
          "Computer vision to monitor loading zones and prevent forklift hazards.",
      },
      {
        title: "Predictive Fleet Maintenance",
        detail:
          "Minimize downtime with AI models that forecast vehicle breakdowns.",
      },
      {
        title: "Digital Twins for Logistics",
        detail:
          "Simulating supply chain scenarios to test and improve operations.",
      },
    ],
  },
  {
    id: 4,
    title: "Retail & E-commerce",
    description:
      "Deliver personalized experiences and smarter operations. Elevate your retail and e-commerce business with AI that predicts, analyzes, and adapts.",
    image: ecommerce,
    highlights: [
      {
        title: "AI-Powered Merchandising",
        detail:
          "Dynamic product placements based on consumer behavior.",
      },
      {
        title: "Conversational Commerce",
        detail:
          "GenAI chatbots for personalized support and instant analytics.",
      },
      {
        title: "Predictive Inventory Management",
        detail:
          "Avoid stockouts or overstocks with real-time demand forecasting.",
      },
      {
        title: "Immersive Shopping",
        detail:
          "Augmented reality (AR) integrations for enhanced online shopping experiences.",
      },
    ],
  },
  {
    id: 5,
    title: "Financial Services",
    description:
      "Make smarter, safer decisions with AI in finance. Automate processes, detect fraud, and deliver personalized financial solutions for your customers.",
    image: financial,
    highlights: [
      {
        title: "Fraud detection and risk management",
        detail: "Early and accurate identification of fraudulent activities.",
      },
      {
        title: "Customer Behavior Analytics",
        detail: "Tailored services based on customer data analysis.",
      },
      {
        title: "Process Automation",
        detail: "Streamlining financial operations for improved efficiency.",
      },
      {
        title: "Procurement Insights",
        detail: "Identify cost-saving opportunities in procurement.",
      },
    ],
  },
  {
    id: 6,
    title: "Environmental, Social, and Governance (ESG)",
    description:
      "Monitor, measure, and act for a better tomorrow. Use AI to track environmental impact, enhance sustainability, and ensure compliance with ESG goals.",
    image: esgImage,
    highlights: [
      {
        title: "AI for Carbon Neutrality",
        detail:
          "Advanced monitoring and forecasting tools to track and minimize emissions.",
      },
      {
        title: "Sustainable Supply Chains",
        detail:
          "AI to assess supplier practices and recommend greener alternatives.",
      },
      {
        title: "Compliance Automation",
        detail:
          "Intelligent systems for ESG regulation adherence.",
      },
      {
        title: "AI-Powered Risk Assessment",
        detail: "Identifying and mitigating environmental risks in real-time.",
      },
    ],
  },
  {
    id: 7,
    title: "Manufacturing & Industrial",
    description:
      "Pioneering Industry 4.0 with transformative solutions that enhance productivity, minimize downtime, and ensure safety. From smart factories to streamlined operations, we power the next industrial revolution.",
    image: manufacturing,
    highlights: [
      {
        title: "Predictive Maintenance",
        detail: "Ensuring equipment reliability and preventing breakdowns.",
      },
      {
        title: "Real-time Quality Inspection",
        detail: "Using computer vision for high-speed defect detection.",
      },
      {
        title: "AI-Powered Hazard Detection",
        detail:
          "Tracking employees and environments to prevent accidents.",
      },
      {
        title: "Stock Management",
        detail:
          "Algorithms to evaluate stock levels and predict reorder points.",
      },
      {
        title: "Energy-efficient Solutions",
        detail: "Process optimization to reduce energy consumption.",
      },
    ],
  },
];
