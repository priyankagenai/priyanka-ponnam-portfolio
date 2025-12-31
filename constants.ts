
import { Experience, Project, SkillCategory, Certification, BlogPost } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  // Insights removed
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Cloud Platforms',
    skills: ['AWS (Redshift, Glue, EMR, Lambda, Bedrock)', 'GCP (BigQuery, Dataflow, Vertex AI, GKE)', 'Azure'],
  },
  {
    category: 'Generative AI & LLMs',
    skills: ['Gemini', 'Agno', 'GPT-4', 'Claude', 'Llama 2/3', 'LangChain', 'LlamaIndex', 'RAG Frameworks', 'Amazon Bedrock'],
  },
  {
    category: 'Data Engineering',
    skills: ['Apache Spark', 'Kafka', 'Airflow', 'Snowflake', 'Databricks', 'Talend', 'dbt', 'Terraform'],
  },
  {
    category: 'Languages & Tools',
    skills: ['Python', 'SQL', 'PySpark', 'Scala', 'Docker', 'Kubernetes', 'Splunk', 'GitLab/Jenkins'],
  },
  {
    category: 'Vector DBs & Embeddings',
    skills: ['Pinecone', 'FAISS', 'ChromaDB', 'Weaviate', 'SentenceTransformers', 'Document AI'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Cloud AI Engineer',
    company: 'JPMorgan Chase (via Idolsoft)',
    period: 'Feb 2024 - Present',
    description: [
      'Designed Retrieval-Augmented Generation (RAG) frameworks combining Amazon Kendra with Bedrock-hosted LLMs for dynamic response generation.',
      'Built chatbot solutions using Amazon Lex, Comprehend, and Bedrock to deliver multilingual, context-aware conversational experiences.',
      'Orchestrated migration of substantial data volumes from AWS S3 to Redshift using AWS Glue and EMR.',
      'Integrated Splunk into GenAI document retrieval pipelines to monitor vector ingestion and API latency.',
      'Designed and implemented ETL workflows using Talend to extract, transform, and load large datasets.',
    ],
    technologies: ['AWS Bedrock', 'Amazon Kendra', 'Terraform', 'Talend', 'Splunk', 'RAG'],
  },
  {
    id: '2',
    role: 'Data Engineer',
    company: 'Bank of America',
    period: 'Sep 2021 - Feb 2023',
    description: [
      'Utilized GCP services like Document AI for extracting data from PDF files and Vector AI for generating embeddings.',
      'Developed and optimized data processing pipelines in Spark and managed Snowflake data warehousing on GCP.',
      'Integrated Vertex AI with BigQuery and Cloud Storage for powerful AI-driven business intelligence solutions.',
      'Implemented data transformations using dbt and deployed infrastructure using Terraform.',
    ],
    technologies: ['GCP Vertex AI', 'Document AI', 'BigQuery', 'Snowflake', 'dbt', 'Spark'],
  },
  {
    id: '3',
    role: 'Big Data Engineer',
    company: 'S&P Global Market Intelligence',
    period: 'Sep 2017 - Aug 2021',
    description: [
      'Developed scalable data pipelines to ingest and transform data streams using AWS Step Functions, Lambda, Glue, and EMR.',
      'Orchestrated workflows with Apache Airflow and loaded data into AWS Redshift and Snowflake.',
      'Created monitoring services using CloudWatch, Grafana, and Elasticsearch.',
      'Deployed Kubernetes pods for ETL tasks and managed containerized applications.',
    ],
    technologies: ['AWS Glue', 'Lambda', 'Airflow', 'Kubernetes', 'Redshift', 'Elasticsearch'],
  },
  {
    id: '4',
    role: 'Data Analyst',
    company: 'HP',
    period: 'Jan 2016 - Aug 2017',
    description: [
      'Analyzed large datasets and developed automated dashboards using Power BI, Tableau, and Looker.',
      'Performed exploratory data analysis (EDA) and built predictive models in collaboration with data science teams.',
      'Wrote complex SQL queries for PostgreSQL, MySQL, and Redshift to support business decision-making.',
    ],
    technologies: ['Power BI', 'Tableau', 'SQL', 'Python', 'R'],
  },
  {
    id: '5',
    role: 'SQL Developer',
    company: 'Nationwide',
    period: 'Aug 2014 - Dec 2015',
    description: [
      'Designed ETL data flows using SSIS and optimized SQL Server performance.',
      'Developed dimensional data models and built cubes using SSAS.',
      'Created interactive dashboards and reports using SSRS.',
    ],
    technologies: ['SQL Server', 'SSIS', 'SSRS', 'SSAS'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'gc-pde',
    name: 'Professional Data Engineer',
    issuer: 'Google Cloud',
    issueDate: '', // Hidden for privacy
    expirationDate: 'Valid through 2026',
    credentialId: '', // Hidden for privacy
    seriesId: '', // Hidden for privacy
    // Switched to clear Google Cloud Logo to ensure no confusion with AWS
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1024px-Google_Cloud_logo.svg.png',
    verifyUrl: '' 
  },
  // You can add AWS certifications here later
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Generative AI RAG & Agentic System (JPMorgan Chase)',
    description: 'Designed and implemented Retrieval-Augmented Generation (RAG) frameworks combining Amazon Kendra for semantic search with Bedrock-hosted LLMs. Leveraged the Agno framework to build autonomous agents for complex orchestration and reasoning tasks, enhancing internal knowledge retrieval.',
    technologies: ['AWS Bedrock', 'Agno', 'Kendra', 'LangChain', 'Python', 'React'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    caseStudy: {
      challenge: 'Internal teams struggled to retrieve relevant compliance documents from a vast, unstructured knowledge base, leading to significant delays in decision-making.',
      solution: 'Architected an Agentic RAG system using Agno and AWS Bedrock. Deployed autonomous agents capable of understanding complex queries, retrieving context from Amazon Kendra, and synthesizing precise answers via LLMs.',
      impact: 'Reduced document search time by 60% and improved query accuracy by 40%, enabling non-technical staff to self-serve critical information instantly.'
    }
  },
  {
    id: 'p2',
    title: 'Intelligent Document Processing (Bank of America)',
    description: 'Leveraged GCP Document AI and Vertex AI to build an automated pipeline for extracting, classifying, and embedding text from large volumes of PDF documents. Generated vector embeddings to power downstream analytics and semantic search capabilities.',
    technologies: ['GCP Document AI', 'Vertex AI', 'BigQuery', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
     caseStudy: {
      challenge: 'Manual processing of financial PDF documents was prone to human error, costly, and created a bottleneck for downstream analytics.',
      solution: 'Built a serverless pipeline using GCP Document AI for OCR and entity extraction, coupled with Vertex AI to generate vector embeddings for semantic understanding. Stored structured data in BigQuery for analysis.',
      impact: 'Automated extraction for 90% of documents, reduced processing time from days to minutes, and enabled semantic search across millions of historical records.'
    }
  },
  {
    id: 'p3',
    title: 'Scalable Data Pipeline Orchestration (S&P Global)',
    description: 'Developed and maintained scalable batch and streaming pipelines using AWS Step Functions, Lambda, Glue, and EMR. Orchestrated complex workflows via Apache Airflow to ingest data into Redshift and Snowflake, ensuring high availability and real-time insights.',
    technologies: ['AWS Glue', 'Redshift', 'Kafka', 'Snowflake', 'Spark'],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
    caseStudy: {
      challenge: 'Legacy on-premise ETL jobs were failing to meet SLAs due to increasing data volume, causing delays in critical financial reporting.',
      solution: 'Migrated ETL workflows to a serverless AWS architecture using Glue and Lambda, orchestrated by Airflow. Implemented auto-scaling EMR clusters for heavy transformations.',
      impact: 'Achieved 99.9% pipeline reliability, reduced data latency by 75%, and reduced infrastructure costs by 30% through on-demand scaling.'
    }
  },
];

export const BLOG_POSTS: BlogPost[] = [
  // Placeholder data - section is hidden but keeping type valid if needed later
  {
    id: '1',
    title: 'Placeholder',
    excerpt: 'Placeholder',
    date: 'Oct 2024',
    readTime: '5 min read',
    category: 'Generative AI',
    linkUrl: '#'
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Priyanka Ponnam's professional portfolio website.
Priyanka is a Data Engineer and Cloud AI Engineer with over 10 years of experience.
She is a Google Cloud Certified Professional Data Engineer.

Here is a summary of her background to answer user questions:
- **Contact**: priyanka240630@gmail.com | 716-452-7552 | LinkedIn: https://www.linkedin.com/in/priyanka-ponnam-95b322270
- **Target Roles**: She is actively looking for full-time opportunities as a Data Engineer, Cloud Data Engineer, AI Engineer, ML Engineer, Data Scientist, or Data Architect.
- **Current Role**: Cloud AI Engineer at JPMorgan Chase (via Idolsoft Inc) (Feb 2024 - Present).
- **Previous Roles**: Data Engineer at Bank of America, Big Data Engineer at S&P Global, Data Analyst at HP, SQL Developer at Nationwide.
- **Key Expertise**:
  - **Generative AI**: RAG frameworks, Agno Agent Framework, LLMs (Gemini, GPT-4, Llama), Amazon Bedrock, Vertex AI, LangChain, Vector DBs (Pinecone, FAISS).
  - **Cloud**: AWS (Redshift, Glue, Lambda, EMR, EKS), GCP (BigQuery, Dataflow, Vertex AI, Composer).
  - **Big Data**: Apache Spark, Kafka, Airflow, Snowflake, Databricks, Hadoop.
  - **DevOps**: Terraform, Docker, Kubernetes, CI/CD (GitLab, Jenkins).
- **Education**: Masters in Information Technology & Management (St Francis College, NY, May 2025), Bachelors in Electronics (Osmania University, 2014).
- **Highlights**: Built enterprise RAG systems, implemented Agno agents for orchestration, migrated large-scale data lakes to cloud, optimized ETL pipelines with Spark and Airflow.
- **Certifications**: Google Cloud Certified Professional Data Engineer (Valid until July 2026).

Tone: Professional, confident, helpful, and concise.
If asked about hiring, mention her specific target roles and encourage them to contact her via email or LinkedIn.
Do not make up facts not present here.
`;