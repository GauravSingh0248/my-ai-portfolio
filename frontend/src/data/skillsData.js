import {
  FaBrain,
  FaChartLine,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaExchangeAlt,
  FaJava,
  FaJs,
  FaPlug,
  FaPython,
  FaReact,
  FaRobot,
  FaSearch,
  FaServer,
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import {
  SiAutoprefixer,
  SiC,
  SiCplusplus,
  SiDaisyui,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGoogle,
  SiGooglecolab,
  SiHuggingface,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiKeras,
  SiLangchain,
  SiMongodb,
  SiNpm,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostcss,
  SiPostman,
  SiPydantic,
  SiPython,
  SiReact,
  SiReactrouter,
  SiScikitlearn,
  SiSpacy,
  SiTailwindcss,
  SiTensorflow,
  SiVite,
  SiCursor,
} from "react-icons/si";

export const FILTER_OPTIONS = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "web", label: "Web" },
  { id: "ai", label: "AI/ML" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools" },
];

export const LEVEL_STYLES = {
  Core: "border-orange-400/30 bg-orange-500/10 text-orange-300",
  "Working Knowledge": "border-blue-400/25 bg-blue-500/10 text-blue-300",
  Basic: "border-white/15 bg-white/5 text-white/55",
  Learning: "border-purple-400/30 bg-purple-500/10 text-purple-300",
};

export const AI_EXPLORING = [
  "Generative AI",
  "LLMs",
  "RAG",
  "AI Agents",
  "NLP",
  "Deep Learning",
];

export const skillCategories = [
  {
    id: "languages",
    filterId: "languages",
    title: "Programming Languages",
    description:
      "Languages I use for problem solving, development, and experimentation.",
    skills: [
      { name: "C", icon: SiC, level: "Core", color: "#a8b9cc" },
      { name: "C++", icon: SiCplusplus, level: "Core", color: "#00599c" },
      { name: "Java", icon: FaJava, level: "Core", color: "#f89820" },
      { name: "Python", icon: SiPython, level: "Core", color: "#3776ab" },
      { name: "JavaScript", icon: SiJavascript, level: "Basic", color: "#f7df1e" },
    ],
  },
  {
    id: "web",
    filterId: "web",
    title: "Web Development",
    description:
      "Basic full-stack web development knowledge with hands-on project experience and AI-assisted development.",
    categoryBadge: "Basic / Working Knowledge",
    subsections: [
      {
        title: "Frontend",
        skills: [
          { name: "HTML", icon: SiHtml5, level: "Core", color: "#e34f26" },
          { name: "CSS", icon: FaCss3Alt, level: "Basic", color: "#1572b6" },
          { name: "JavaScript", icon: FaJs, level: "Basic", color: "#f7df1e" },
          { name: "React.js", icon: SiReact, level: "Working Knowledge", color: "#61dafb" },
          { name: "React Router", icon: SiReactrouter, level: "Working Knowledge", color: "#ca4245" },
          { name: "Tailwind CSS", icon: SiTailwindcss, level: "Working Knowledge", color: "#06b6d4" },
          { name: "Vite", icon: SiVite, level: "Working Knowledge", color: "#646cff" },
          { name: "DaisyUI", icon: SiDaisyui, level: "Basic", color: "#1ad1a5" },
          { name: "PostCSS", icon: SiPostcss, level: "Basic", color: "#dd3a0a" },
          { name: "Autoprefixer", icon: SiAutoprefixer, level: "Basic", color: "#dd3735" },
          { name: "React Icons", icon: FaReact, level: "Working Knowledge", color: "#61dafb" },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Python", icon: FaPython, level: "Core", color: "#3776ab" },
          { name: "FastAPI", icon: SiFastapi, level: "Working Knowledge", color: "#009688" },
          { name: "REST APIs", icon: FaServer, level: "Working Knowledge", color: "#94a3b8" },
          { name: "API Integration", icon: FaPlug, level: "Working Knowledge", color: "#94a3b8" },
          {
            name: "Frontend ↔ Backend",
            icon: FaExchangeAlt,
            level: "Working Knowledge",
            color: "#94a3b8",
          },
          { name: "Uvicorn", icon: FaServer, level: "Basic", color: "#94a3b8" },
          { name: "Pydantic", icon: SiPydantic, level: "Working Knowledge", color: "#e92063" },
        ],
      },
    ],
  },
  {
    id: "ai",
    filterId: "ai",
    title: "AI / ML / Generative AI",
    description:
      "Machine learning, NLP, deep learning, and generative AI technologies I've explored through projects and experimentation.",
    highlighted: true,
    subsections: [
      {
        title: "Machine Learning",
        skills: [
          { name: "Scikit-learn", icon: SiScikitlearn, level: "Core", color: "#f7931e" },
          { name: "Pandas", icon: SiPandas, level: "Core", color: "#150458" },
          { name: "NumPy", icon: SiNumpy, level: "Core", color: "#013243" },
          { name: "Matplotlib", icon: FaChartLine, level: "Working Knowledge", color: "#11557c" },
          { name: "XGBoost", icon: FaChartLine, level: "Core", color: "#1aaba8" },
        ],
      },
      {
        title: "Deep Learning",
        skills: [
          { name: "TensorFlow", icon: SiTensorflow, level: "Working Knowledge", color: "#ff6f00" },
          { name: "Keras", icon: SiKeras, level: "Working Knowledge", color: "#d00000" },
        ],
      },
      {
        title: "NLP / AI",
        skills: [
          { name: "spaCy", icon: SiSpacy, level: "Learning", color: "#09a3d5" },
          { name: "Transformers", icon: SiHuggingface, level: "Learning", color: "#ffd21e" },
          { name: "OpenCV", icon: SiOpencv, level: "Working Knowledge", color: "#5c3ee8" },
        ],
      },
      {
        title: "Generative AI",
        skills: [
          { name: "LangChain", icon: SiLangchain, level: "Learning", color: "#1c3c3c" },
          { name: "Google Gemini", icon: SiGoogle, level: "Learning", color: "#4285f4" },
          { name: "Google GenAI SDK", icon: SiGoogle, level: "Learning", color: "#34a853" },
          { name: "RAG", icon: FaSearch, level: "Learning", color: "#a855f7" },
          { name: "LLM Applications", icon: FaBrain, level: "Learning", color: "#818cf8" },
          { name: "AI Agents", icon: FaRobot, level: "Learning", color: "#f97316" },
        ],
      },
    ],
  },
  {
    id: "databases",
    filterId: "databases",
    title: "Databases",
    description: "Databases I use for storing and managing application data.",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: "Working Knowledge", color: "#47a248" },
      { name: "MongoDB Atlas", icon: SiMongodb, level: "Working Knowledge", color: "#47a248" },
      { name: "SQL", icon: FaDatabase, level: "Core", color: "#94a3b8" },
    ],
  },
  {
    id: "tools",
    filterId: "tools",
    title: "Tools & IDEs",
    description:
      "Tools and environments I use for development, experimentation, version control, and collaboration.",
    skills: [
      { name: "Visual Studio Code", icon: VscCode, level: "Core", color: "#007acc" },
      { name: "Jupyter Notebook", icon: SiJupyter, level: "Core", color: "#f37626" },
      { name: "Google Colab", icon: SiGooglecolab, level: "Core", color: "#f9ab00" },
      { name: "Cursor", icon: SiCursor, level: "Working Knowledge", color: "#ffffff" },
      { name: "Git", icon: SiGit, level: "Core", color: "#f05032" },
      { name: "GitHub", icon: SiGithub, level: "Core", color: "#ffffff" },
      { name: "Postman", icon: SiPostman, level: "Working Knowledge", color: "#ff6c37" },
      { name: "npm", icon: SiNpm, level: "Working Knowledge", color: "#cb3837" },
      { name: "pip", icon: SiPython, level: "Core", color: "#3776ab" },
      { name: "Conda", icon: FaCode, level: "Basic", color: "#43b02a" },
    ],
  },
];
