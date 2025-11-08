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
  LogoKissflow,
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

export const skills = {
  usingNow: [
    {
      label: "Python",
      logo: LogoPython,
      url: "https://www.python.org/",
    },
    {
      label: "SQL",
      logo: LogoSQL,
      url: "https://www.mysql.com/",
    },
    {
      label: "Pandas",
      logo: LogoPandas,
      url: "https://pandas.pydata.org/",
    },
    {
      label: "NumPy",
      logo: LogoNumpy,
      url: "https://numpy.org/",
    },
    {
      label: "Tableau",
      logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
      url: "https://www.tableau.com/",
    },
    {
      label: "Power BI",
      logo: "https://powerbi.microsoft.com/pictures/application-logos/svg/powerbi.svg",
      url: "https://powerbi.microsoft.com/",
    },
    {
      label: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      url: "https://aws.amazon.com/",
    },
    {
      label: "Azure",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg",
      url: "https://azure.microsoft.com/",
    },
    {
      label: "Excel",
      logo: LogoExcel,
      url: "https://www.microsoft.com/en-us/excel/",
    },
  ],
  learning: [
    {
      label: "PySpark",
      logo: LogoPySpark,
      url: "https://spark.apache.org/docs/latest/api/python/index.html",
    },
    {
      label: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      url: "https://www.mysql.com/",
    },
    {
      label: "Oracle",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      url: "https://www.oracle.com/",
    },
    {
      label: "Hadoop",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original-wordmark.svg",
      url: "https://hadoop.apache.org/",
    },
  ],
  otherSkills: [
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
      label: "Jupyter",
      logo: LogoJupyter,
      url: "https://jupyter.org/",
    },
    {
      label: "VSCode",
      logo: LogoVsc,
      url: "https://code.visualstudio.com/",
    },
  ],
};

// Keep flat array for backward compatibility
export const allSkills = [
  ...skills.usingNow,
  ...skills.learning,
  ...skills.otherSkills,
];

export const experiences = [
  {
    logo: LogoKissflow,
    logoAlt: "Kissflow logo",
    position: "Associate Solutions Consultant (Professional Services team)",
    startDate: new Date(2025, 2), // March 2025
    endDate: null,
    currentlyWorkHere: true,
    summary: [
      "Partnered with enterprise clients to develop customized data solutions, leading discovery workshops and accelerating speed to insight on key business questions",
      "Automated synchronization of 4,000+ S3-based attachments with Kissflow data via Python API integration, enabling optimized batch processing and metadata classification",
      "Architected and deployed scalable data processing solutions using AWS (Lambda, S3, CloudWatch) to automate data ingestion and storage, enhancing system reliability",
      "Developed and managed data pipelines using Azure Data Factory (ADF) to integrate enterprise data from client's diverse Azure sources into the core platform",
      "Collaborated with operations teams to deliver dashboard insights, achieving 15% reduction in procurement cycle time and improved supplier performance",
      "Built operational efficiency dashboards in Tableau tracking Purchase Order Cycle Time and Supplier KPIs",
    ],
  },
  {
    logo: LogoInfosys,
    logoAlt: "Infosys logo",
    position: "Systems Engineer (Data Quality and Analytics team)",
    startDate: new Date(2021, 5), // June 2021
    endDate: new Date(2025, 0), // January 2025
    currentlyWorkHere: false,
    summary: [
      "Delivered actionable insights from a 200M+ record data warehouse; supported a strategic modernization by building and testing ETL prototypes using Azure Databricks and PySpark",
      "Implemented statistical validation frameworks using hypothesis testing, improving data accuracy by 25% across production environments",
      "Leveraged Python (Pandas, NumPy) for statistical analysis and predictive modeling, sourcing large datasets from legacy systems and cloud storage like AWS S3",
      "Developed automated KPI monitoring systems and dashboards adopted as primary tool for weekly compliance reviews",
      "Resolved 200+ data quality issues through root cause analysis using Hadoop distributed systems (SQL, Python) and validated data integrity during migration to Azure Data Lake Storage (ADLS)",
      "Engineered Financial Compliance dashboard in Tableau providing senior management consolidated view of Contracts and Loans KPIs",
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
    name: "E-Commerce Customer Analysis and Segmentation",
    description:
      "Developed customer behavior analysis and segmentation model using statistical techniques and machine learning algorithms. Created interactive Tableau dashboard visualizing customer segments, purchasing patterns, and lifetime value metrics.",
    url: "https://pouncing-mat-b02.notion.site/Customer-Segmentation-Analysis-1236cd4fdd4880b4928ce11af68ec3a2",
    previewImage: "/customer-segmentation-analysis-preview.gif",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Tableau",
      "Machine Learning",
      "Statistical Analysis",
    ],
  },
  {
    name: "Supermarket Sales Analysis",
    description:
      "Analyzed 10K+ transactions using Python, performing data cleaning and identifying purchasing patterns and regional trends. Developed predictive models for inventory management and regional product placement optimization.",
    url: "https://sales-analysis-sai.vercel.app/",
    previewImage: "/sales-analysis-preview.jpg",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Visualization",
      "Predictive Modeling",
    ],
  },
];
