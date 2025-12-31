import { jsPDF } from "jspdf";

export const generateResume = () => {
  const doc = new jsPDF();
  const lineHeight = 5;
  let yPos = 20;

  // --- Header ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Priyanka Ponnam", 105, yPos, { align: "center" });
  yPos += 8;

  doc.setFontSize(12);
  doc.setTextColor(100);
  doc.text("Data Engineer | Cloud AI Engineer", 105, yPos, { align: "center" });
  yPos += 8;

  doc.setFontSize(10);
  doc.setTextColor(0);
  doc.text("priyanka240630@gmail.com | 716-452-7552", 105, yPos, { align: "center" });
  yPos += 5;
  doc.text("LinkedIn: linkedin.com/in/priyanka-ponnam-95b322270", 105, yPos, { align: "center" });
  yPos += 10;

  doc.setLineWidth(0.5);
  doc.line(20, yPos, 190, yPos);
  yPos += 10;

  // --- Professional Summary ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Professional Summary", 20, yPos);
  yPos += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const summary = 
    "Google Cloud Certified Professional Data Engineer with 10+ years of experience in Data Engineering and Cloud Architecture. " +
    "Expertise in building scalable batch/streaming pipelines on AWS and GCP, and deploying Generative AI solutions using Bedrock, Gemini, and RAG frameworks. " +
    "Proficient in Big Data technologies (Spark, Kafka, Hadoop) and Data Warehousing (Snowflake, Redshift, BigQuery). " +
    "Strong background in business intelligence, requirement gathering, and process modeling.";
  
  const summaryLines = doc.splitTextToSize(summary, 170);
  doc.text(summaryLines, 20, yPos);
  yPos += (summaryLines.length * lineHeight) + 5;

  // --- Technical Skills ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Technical Skills", 20, yPos);
  yPos += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  
  const skills = [
    ["Cloud Platforms:", "AWS (S3, Lambda, Redshift, Glue, EMR), GCP (BigQuery, Vertex AI, Dataflow)"],
    ["Generative AI:", "Gemini, Agno, GPT-4, Claude, Llama 2/3, LangChain, RAG, Amazon Bedrock, Vector DBs"],
    ["Big Data & ETL:", "Apache Spark, Kafka, Airflow, Talend, dbt, Snowflake, Databricks"],
    ["Programming:", "Python, SQL, PySpark, Scala, Shell Scripting"],
    ["DevOps:", "Terraform, Docker, Kubernetes, Jenkins, GitLab CI/CD"]
  ];

  skills.forEach(([category, list]) => {
    doc.setFont("helvetica", "bold");
    doc.text(category, 20, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(list, 55, yPos);
    yPos += 5;
  });
  yPos += 5;

  // --- Experience ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Professional Experience", 20, yPos);
  yPos += 7;

  const experience = [
    {
      role: "Cloud AI Engineer",
      company: "JPMorgan Chase (via Idolsoft Inc)",
      date: "Feb 2024 - Present",
      bullets: [
        "Built RAG frameworks combining Amazon Kendra with Bedrock-hosted LLMs for dynamic response generation.",
        "Leveraged Agno framework to build autonomous agents for complex orchestration and reasoning tasks.",
        "Integrated Splunk into GenAI pipelines to monitor vector ingestion and API latency.",
        "Designed ETL workflows using Talend to extract, transform, and load large datasets.",
        "Orchestrated migration of substantial data volumes from AWS S3 to Redshift using AWS Glue and EMR."
      ]
    },
    {
      role: "Data Engineer",
      company: "Bank of America",
      date: "Sep 2021 - Feb 2023",
      bullets: [
        "Utilized GCP services like Document AI for extracting data and Vector AI for generating embeddings.",
        "Developed and optimized data processing pipelines in Spark and managed Snowflake data warehousing.",
        "Integrated Vertex AI with BigQuery for AI-driven business intelligence solutions.",
        "Implemented data transformations using dbt and deployed infrastructure using Terraform."
      ]
    },
    {
      role: "Big Data Engineer",
      company: "S&P Global Market Intelligence",
      date: "Sep 2017 - Aug 2021",
      bullets: [
        "Developed scalable pipelines using AWS Step Functions, Lambda, Glue, and EMR.",
        "Created monitoring services using CloudWatch, Grafana, and Elasticsearch.",
        "Orchestrated pipelines using Apache Airflow and managed Kubernetes pods for ETL tasks."
      ]
    },
    {
      role: "Data Analyst",
      company: "HP",
      date: "Jan 2016 - Aug 2017",
      bullets: [
        "Analyzed large datasets and developed automated dashboards using Power BI, Tableau, and Looker.",
        "Performed exploratory data analysis (EDA) and built predictive models in collaboration with data science teams.",
        "Wrote complex SQL queries for PostgreSQL, MySQL, and Redshift to support business decision-making."
      ]
    },
    {
      role: "SQL Developer",
      company: "Nationwide",
      date: "Aug 2014 - Dec 2015",
      bullets: [
        "Designed ETL data flows using SSIS and optimized SQL Server performance.",
        "Developed dimensional data models and built cubes using SSAS.",
        "Created interactive dashboards and reports using SSRS."
      ]
    }
  ];

  experience.forEach(exp => {
    // Page break check (approximate height for an entry)
    if (yPos > 260) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(exp.role, 20, yPos);
    doc.text(exp.date, 190, yPos, { align: "right" });
    yPos += 5;
    
    doc.setFont("helvetica", "italic");
    doc.text(exp.company, 20, yPos);
    yPos += 5;

    doc.setFont("helvetica", "normal");
    exp.bullets.forEach(bullet => {
      const bulletLines = doc.splitTextToSize(`• ${bullet}`, 165);
      // Check if bullet fits, otherwise add page
      if (yPos + (bulletLines.length * lineHeight) > 280) {
          doc.addPage();
          yPos = 20;
      }
      doc.text(bulletLines, 25, yPos);
      yPos += (bulletLines.length * lineHeight);
    });
    yPos += 3;
  });

  // --- Education ---
  if (yPos > 250) {
      doc.addPage();
      yPos = 20;
  }
  
  yPos += 5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Education", 20, yPos);
  yPos += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Masters in Information Technology & Management", 20, yPos);
  doc.text("May 2025", 190, yPos, { align: "right" });
  yPos += 5;
  doc.setFont("helvetica", "italic");
  doc.text("St Francis College, Brooklyn, NY", 20, yPos);
  yPos += 7;

  doc.setFont("helvetica", "normal");
  doc.text("Bachelors in Electronics", 20, yPos);
  doc.text("May 2014", 190, yPos, { align: "right" });
  yPos += 5;
  doc.setFont("helvetica", "italic");
  doc.text("Osmania University", 20, yPos);

  // Save the PDF
  doc.save("Priyanka_Ponnam_Resume.pdf");
};