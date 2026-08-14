import artisanImg from "../assets/Project/artisan.jpg";
import compilerImg from "../assets/Project/compiler.jpg";
import churnImg from "../assets/Project/customer_churn.avif";
import financeImg from "../assets/Project/finance_1.jpg";
import gitImg from "../assets/Project/git.webp";
import portfolioImg from "../assets/Project/portfolio_.jpg";
import productsImg from "../assets/Project/products-and-services-1024x1024.webp";
import roadImg from "../assets/Project/road.jpg";
import robotImg from "../assets/Project/Robot_thinking.jpg";
import sortingImg from "../assets/Project/sorting_.jpg";

export const FILTER_OPTIONS = [
  { id: "all", label: "All" },
  { id: "open-source", label: "Open Source" },
  { id: "cpp", label: "C++" },
  { id: "full-stack", label: "Full Stack" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "generative-ai", label: "Generative AI" },
];

export const TIMELINE_STEPS = [
  {
    step: "01",
    phase: "First OOP Project",
    project: "Shopping-Cart",
    tech: "C++",
  },
  {
    step: "02",
    phase: "Full Stack",
    project: "ArtisansChain",
    tech: "React / Full Stack",
  },
  {
    step: "03",
    phase: "Algorithms & Open Source",
    project: "AlgoLab / Sorting Visualizer",
    tech: "Visualization",
  },
  {
    step: "04",
    phase: "AI / ML",
    project: "Road Accident Detection · Churn · Compiler · Sentiment",
    tech: "Deep Learning · NLP · ML",
  },
  {
    step: "05",
    phase: "Generative AI",
    project: "Currently Exploring",
    tech: "LLMs / RAG / AI Agents",
  },
];

export const GITHUB_PROFILE = "https://github.com/GauravSingh0248";

export const projects = [
  {
    id: "shopping-cart",
    title: "Shopping-Cart",
    categoryLabel: "C++ • OOP",
    description:
      "My first project built purely around Object-Oriented Programming in C++. A command-line shopping cart backend where users can add, remove, and manage products, calculate prices, and complete checkout directly through the terminal.",
    image: null,
    technologies: ["C++", "OOP", "CLI"],
    github: "https://github.com/GauravSingh0248/Shopping-Cart",
    live: null,
    status: "completed",
    featured: true,
    layout: "milestone",
    filters: ["cpp"],
    milestone: "Where it started",
    label: "First OOP Project",
    badges: [],
  },
  {
    id: "artisanschain",
    title: "ArtisansChain Marketplace",
    categoryLabel: "Full Stack",
    description:
      "A web-based marketplace designed to connect local artisans directly with buyers, allowing artisans to showcase and sell handcrafted products while receiving fair value for their work.",
    image: artisanImg,
    imageFit: "cover",
    technologies: ["React", "Vite", "Tailwind CSS", "DaisyUI", "Full Stack"],
    github:
      "https://github.com/GauravSingh0248/A-Web-Based-Marketplace-for-Local-Artisans-and-Handcrafted-Products",
    live: null,
    status: "completed",
    featured: true,
    layout: "featured",
    filters: ["full-stack"],
    githubLabel: "View Source →",
    badges: ["Full Stack"],
  },
  {
    id: "finance",
    title: "Finance Management System",
    categoryLabel: "Full Stack",
    description:
      "A complete full-stack finance management application for managing expenses and financial data.",
    image: financeImg,
    imageFit: "cover",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github:
      "https://github.com/GauravSingh0248/Financial-Expenses-Management-System",
    live: null,
    status: "completed",
    featured: false,
    layout: "card",
    filters: ["full-stack"],
    badges: ["Full Stack"],
  },
  {
    id: "sorting-visualizer",
    title: "Sorting Algorithm Visualizer",
    categoryLabel: "Full Stack / Algorithms",
    description:
      "An interactive educational tool that visualizes and compares sorting algorithms in real time, helping students understand how different algorithms behave.",
    image: sortingImg,
    imageFit: "cover",
    technologies: ["JavaScript", "HTML", "CSS", "Algorithms", "Visualization"],
    github: "https://github.com/GauravSingh0248/Sorting-Algorithm-Visualizer",
    live: "https://gauravsingh0248.github.io/Sorting-Algorithm-Visualizer/",
    status: "completed",
    featured: true,
    layout: "featured",
    filters: ["full-stack"],
    badges: [],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    categoryLabel: "Full Stack / AI",
    description:
      "A personal portfolio showcasing my journey, projects, skills, experiments, and experience across software development and AI/ML. Built with AI-assisted development while continuously improving my fundamentals.",
    image: portfolioImg,
    imageFit: "cover",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "AI-assisted Development",
    ],
    github: "https://github.com/GauravSingh0248",
    live: null,
    status: "completed",
    featured: false,
    layout: "card",
    filters: ["full-stack"],
    badges: ["AI-Assisted / Vibe Coded"],
    vibeCoded: true,
  },
  {
    id: "algolab",
    title: "AlgoLab – Learn ML Algorithms Visually",
    categoryLabel: "Open Source Contribution",
    description:
      "An interactive open-source project designed to make Machine Learning algorithms easier to understand through visual learning and interactive demonstrations.",
    image: gitImg,
    imageFit: "cover",
    technologies: ["Open Source", "Machine Learning", "Visualization"],
    github: "https://github.com/manasvi-0/AlgoLab",
    live: null,
    status: "completed",
    featured: true,
    layout: "featured",
    filters: ["open-source", "ai-ml"],
    githubLabel: "View on GitHub →",
    badges: ["Open Source", "Machine Learning", "Visualization"],
  },
  {
    id: "road-accident",
    title: "Road Accident Detection & Alert System",
    categoryLabel: "AI / ML • Deep Learning",
    description:
      "An AI-powered system designed to detect road accidents from images/video and trigger alerts, helping reduce emergency response time.",
    image: roadImg,
    imageFit: "cover",
    technologies: [
      "Python",
      "Deep Learning",
      "CNN",
      "Computer Vision",
      "OpenCV",
      "TensorFlow",
    ],
    github:
      "https://github.com/GauravSingh0248/Road-Accident-Detection-System-And-Alert-System-Using-Deep-Learning",
    live: null,
    status: "completed",
    featured: true,
    layout: "featured-ai",
    filters: ["ai-ml"],
    overlayLabel: "AI / COMPUTER VISION",
    badges: [],
  },
  {
    id: "customer-churn",
    title: "Customer Churn Prediction",
    categoryLabel: "AI / ML",
    description:
      "A machine learning system that predicts whether a customer is likely to leave a banking service.",
    image: churnImg,
    imageFit: "cover",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "EDA",
      "Model Evaluation",
    ],
    github:
      "https://github.com/GauravSingh0248/Project---Customer-Churn-Prediction",
    live: null,
    status: "completed",
    featured: false,
    layout: "pipeline",
    filters: ["ai-ml"],
    pipeline: ["Data", "Preprocessing", "Training", "Evaluation", "Prediction"],
    badges: [],
  },
  {
    id: "autotuning-compiler",
    title: "Machine Learning Based Auto-Tuning Compiler",
    categoryLabel: "AI / ML",
    description:
      "A machine learning approach to compiler optimization that predicts suitable GCC optimization flags such as -O0, -O1, -O2, and -O3 instead of relying purely on guesswork.",
    image: compilerImg,
    imageFit: "cover",
    technologies: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "C",
      "Compiler Optimization",
    ],
    github: "https://github.com/GauravSingh0248/autotuning-compiler-ml",
    live: null,
    status: "completed",
    featured: false,
    layout: "pipeline",
    filters: ["ai-ml"],
    pipeline: [
      "C Program",
      "Feature Extraction",
      "ML Model",
      "Optimization Flag",
    ],
    badges: [],
  },
  {
    id: "sentiment-analysis",
    title: "Product Review Sentiment Analysis",
    categoryLabel: "AI / ML • NLP",
    description:
      "An NLP-based system that analyzes product reviews and classifies sentiment as positive, negative, or neutral.",
    image: productsImg,
    imageFit: "contain",
    technologies: [
      "Python",
      "NLP",
      "Scikit-learn",
      "TF-IDF",
      "Pandas",
      "Machine Learning",
    ],
    github:
      "https://github.com/GauravSingh0248/Product-Review-Sentiment-Analysis-System",
    live: null,
    status: "completed",
    featured: false,
    layout: "sentiment",
    filters: ["ai-ml"],
    badges: [],
  },
  {
    id: "generative-ai",
    title: "Generative AI Projects",
    categoryLabel: "Generative AI",
    description:
      "I'm currently exploring Generative AI, LLM applications, RAG, AI agents, and AI-assisted development through practical projects and experimentation.",
    image: robotImg,
    imageFit: "cover",
    technologies: [
      "LLMs",
      "Generative AI",
      "RAG",
      "AI Agents",
      "LangChain",
      "Google Gemini",
    ],
    github: null,
    live: null,
    status: "in-progress",
    featured: true,
    layout: "in-progress",
    filters: ["generative-ai"],
    badges: ["Currently Working"],
  },
];
