import cementManufacture from "../../assets/projectImage/cement.jpg";
import windEnergy from "../../assets/projectImage/windTurbine.png";
import optimization from "../../assets/projectImage/optimization.webp";
import greenEnergy from "../../assets/projectImage/greenEnergy.jpg";
import steelBars from "../../assets/projectImage/steelBars.webp";
import coalImage from "../../assets/projectImage/coalImage.webp";
import pallet from "../../assets/projectImage/pallet.jpg";
import fire from "../../assets/projectImage/fire.jpg";
import damage from "../../assets/projectImage/damage.jpg";
import bbsExtraction from "../../assets/projectImage/bbsExtraction.png";
import tender from "../../assets/projectImage/tender.jpg";
import summerise from "../../assets/projectImage/summerise.webp";
import legalimage from "../../assets/projectImage/legalimage.webp"
export const AiSolutionsData = [
  {
    id: "ml",
    title: "Machine Learning",
    cards: [
      {
        title: "Optimization of Machine Downtime",
        description:
          "Predict machine failures for Prima13, reducing downtime, enhancing efficiency, and ensuring seamless steel rod processing in manufacturing industries.",
        imageSrc: optimization,
      },
      {
        title: "Wind Turbine Failure Detection",
        description:
          "AI transforms wind energy by predicting turbine failures, ensuring efficiency, reducing downtime, and revolutionizing renewable energy production.",
        imageSrc: windEnergy,
      },
      {
        title: "Construction Automatic BBS Generation",
        description:
          "Streamline bar bending schedules using AI, extracting details accurately and automating processes for enhanced construction efficiency.",
        imageSrc: bbsExtraction,
      },
    ],
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    cards: [
      {
        title:
          "Automated Legal Document Analysis for Penalty and Bail Determination",
        description:
          "Uses AI, NLP, and LLMs to automate legal document analysis, identifying key sections, penalties, and bail eligibility for faster, more accurate decisions.",
        imageSrc: legalimage,
      },
      {
        title: "Automated News Article Summarization Using LLM Technique.",
        description:
          "Uses LLM techniques to efficiently summarize news, ensuring accurate, relevant content extraction and high readability for faster, informed reading.",
        imageSrc: summerise,
      },
      {
        title: "Transforming Customer Service with AiTutor",
        description:
          "AiTutor revolutionizes customer service automation with GenAI, PALM-2, and RAG techniques, providing instant, accurate responses to customer queries.",
        imageSrc:
          "https://via.placeholder.com/200x150?text=Machine+Translation",
      },
    ],
  },
  {
    id: "cv",
    title: "Computer Vision",
    cards: [
      {
        title: "Intelligent Bar Count",
        description:
          "Automate steel rod inventory management, reducing errors, optimizing resources, and enabling smarter construction workflows.",
        imageSrc: steelBars,
      },
      {
        title: "AI Object Detection for Pallet Counting",
        description:
          "Revolutionize warehouses with precise pallet counting, reducing errors and optimizing inventory management effortlessly.",
        imageSrc: pallet,
      },
      {
        title: "Detecting Biodegradable Waste",
        description:
          "Use AI for waste sorting, identifying biodegradable materials, and advancing sustainable waste management practices.",
        imageSrc: greenEnergy,
      },
    ],
  },
  {
    id: "pa",
    title: "Predictive Analysis",
    cards: [
      {
        title: "Coal Price Forecasting",
        description:
          "Accurately predict coal prices, ensuring cost efficiency and strategic planning for manufacturing industries.",
        imageSrc: coalImage,
      },
      {
        title: "Tender Price Prediction",
        description:
          "Estimate competitive tender prices with AI, increasing contract wins and improving financial planning.",
        imageSrc: tender,
      },
      {
        title: "Demand Forecasting",
        description:
          "Optimize production planning by predicting machinery demand, reducing inventory issues, and meeting customer needs seamlessly.",
        imageSrc: damage,
      },
    ],
  },
  {
    id: "custom",
    title: "Custom AI Development",
    cards: [
      {
        title: "Pallet Damage Detection",
        description:
          "Detect damaged pallets with AI, improving safety, efficiency, and operational quality in warehouses.",
        imageSrc: pallet,
      },
      {
        title: "AI for Industrial Safety",
        description:
          "Prevent accidents by identifying flammable items and hazardous materials, ensuring safety in industrial environments.",
        imageSrc: fire,
      },
      {
        title: "Cement Quality Assurance with AI",
        description:
          "Enhance cement manufacturing by replacing manual inspections with real-time AI-based quality predictions.",
        imageSrc: cementManufacture,
      },
    ],
  },
];
