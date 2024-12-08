import { Github, Linkedin } from "lucide-react";
import {
  LogoVsc,
  LogoPython,
  LogoPandas,
  LogoMatPlotLib,
  LogoPlotly,
  LogoIpython,
  LogoNumpy,
  LogoPySpark,
  LogoHue,
  LogoJira,
  LogoSQL,
  LogoDBVisualizer,
  LogoJupyter,
  LogoAnaconda,
  LogoExcel,
  LogoInfosys,
} from "../assets/logos";

export const server = import.meta.env.VITE_SERVER_URL;

export const NavbarLinks = [
  {
    label: "About",
    href: "about",
  },
  {
    label: "Skills",
    href: "skills",
  },
  {
    label: "My Experiences",
    href: "experience",
  },
  {
    label: "Work",
    href: "work",
  },
];

export const skills = [
  {
    label: "Python",
    logo: LogoPython,
    url: "https://www.python.org/",
  },
  {
    label: "Pandas",
    logo: LogoPandas,
    url: "https://pandas.pydata.org/",
  },
  {
    label: "Matplotlib",
    logo: LogoMatPlotLib,
    url: "https://matplotlib.org/",
  },
  {
    label: "Plotly",
    logo: LogoPlotly,
    url: "https://plotly.com/",
  },
  {
    label: "IPython",
    logo: LogoIpython,
    url: "https://ipython.org/",
  },
  {
    label: "NumPy",
    logo: LogoNumpy,
    url: "https://numpy.org/",
  },
  {
    label: "PySpark",
    logo: LogoPySpark,
    url: "https://spark.apache.org/docs/latest/api/python/index.html",
  },
  {
    label: "Hue",
    logo: LogoHue,
    url: "https://gethue.com/",
  },
  {
    label: "Jira",
    logo: LogoJira,
    url: "https://www.atlassian.com/software/jira",
  },
  {
    label: "SQL",
    logo: LogoSQL,
    url: "https://www.mysql.com/",
  },
  {
    label: "DB Visualizer",
    logo: LogoDBVisualizer,
    url: "https://www.dbvis.com/",
  },
  {
    label: "Jupyter Notebook",
    logo: LogoJupyter,
    url: "https://jupyter.org/",
  },
  {
    label: "Anaconda",
    logo: LogoAnaconda,
    url: "https://www.anaconda.com/",
  },
  {
    label: "Excel",
    logo: LogoExcel,
    url: "https://www.microsoft.com/en-us/excel/",
  },
  {
    label: "Visual Studio Code",
    logo: LogoVsc,
    url: "https://code.visualstudio.com/",
  },
];

export const experiences = [
  {
    logo: LogoInfosys,
    logoAlt: "Infosys logo",
    position: "Data Analyst",
    startDate: new Date(2021, 6),
    endDate: new Date(2024, 0),
    currentlyWorkHere: false,
    summary: [
      "Performed data analysis by writing optimised SQL queries, reducing data analysis time by 40% and providing valuable business insights to stakeholders",
      "Extensive experience in SQL, and Python for complex dataset analysis, processing and manipulation",
      "Performed and executed the POC successfully to visualise the data fetched from the database, using Python libraries like Plotly, Dash, Pandas, Numpy",
      "Collect and wrangle data from various sources, clean and prepare data, perform data analysis using statistical methods and visualization tools",
      "Developed and maintained Python scripts for ETL processes, handling large-scale  data transformation for the data platform, improving data processing efficiency",
    ],
  },
];

export const email = "saimohan.soundararajan@gmail.com";
export const phone = "+91 6360341873";

export const socialLinks = [
  {
    label: "Github",
    icon: Github,
    url: "https://github.com/Saimohan2-4",
  },
  {
    label: "Linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/saimohan-soundararajan-988aa7270/",
  },
];

export const myProjects = [
  {
    name: "Unveiling Insights in Retail Sales Data",
    description:
      "Exploring a vast retail sales dataset comprising 10k+ records unveils trends, product performance, product dynamics, and optimization opportunities for sales management.",
    url: "https://sales-analysis-sai.vercel.app/",
    previewImage: "/sales-analysis-preview.jpg",
    technologies: [
      "NextJs",
      "Typescript",
      "Tailwindcss",
      "shadcn/ui",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Python (AI Script)",
      "Hugging face",
      "Whisper Jax",
    ],
  },
  {
    name: "Customer Segmentation Analysis",
    description:
      "A data-driven analysis that categorises e-commerce customers based on their buying behaviour, demographics, and engagement patterns to enhance marketing strategies.",
    url: "https://pouncing-mat-b02.notion.site/Customer-Segmentation-Analysis-1236cd4fdd4880b4928ce11af68ec3a2",
    previewImage: "/customer-segmentation-analysis-preview.gif",
    technologies: [
      "NextJs",
      "Typescript",
      "Tailwindcss",
      "shadcn/ui",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Python (AI Script)",
      "Hugging face",
      "Whisper Jax",
    ],
  },
];
