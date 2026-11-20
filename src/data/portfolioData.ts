export interface Experience {
  company: string;
  role: string;
  period: string;
  type?: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  validity?: string;
  credentialId?: string;
  featured?: boolean;
  category: 'cloud' | 'k8s' | 'linux' | 'database';
  badgeColor: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  architecture: string[];
  techStack: string[];
  metrics?: string;
  iconName: string;
}

export interface Reference {
  name: string;
  designation: string;
  company: string;
  email: string;
  phone: string;
}

export const portfolioData = {
  personal: {
    name: "Kasun Pradeep Marasinghe",
    tagline: "DevOps & Cloud Infrastructure Engineer",
    subheadline: "AWS Certified Solutions Architect & Certified Kubernetes Administrator",
    bio: "Dedicated and detail-oriented DevOps Engineer with 3+ years of hands-on experience in cloud infrastructure management, system monitoring, CI/CD automation, and application support. Specialized in architecting resilient AWS environments, managing Kubernetes clusters, and creating automated zero-downtime deployment pipelines.",
    location: "Kendawa, Bulathkohupitiya, Sri Lanka",
    email: "kasunpradeepmarasinghe@gmail.com",
    phone: "+94 78 183 0584",
    linkedin: "https://www.linkedin.com/in/kasunmarasinghe",
    github: "https://github.com/kasunmarasinghe",
    status: "Available for DevOps & Cloud Opportunities",
    availability: "Immediate / Full-time",
  },

  stats: [
    { label: "Years Experience", value: "3+", icon: "Briefcase" },
    { label: "Target System Uptime", value: "99.99%", icon: "Activity" },
    { label: "AWS & Cloud Services", value: "15+", icon: "Cloud" },
    { label: "Certifications", value: "9+", icon: "Award" },
  ],

  skillCategories: [
    {
      name: "Cloud Platforms",
      icon: "Cloud",
      skills: [
        "AWS (EC2, ECS, RDS, Lambda, SQS, SNS)",
        "Kafka",
        "Load Balancers & Auto Scaling",
        "CloudFront & Route 53",
        "VPC & IAM Security",
        "AWS CloudWatch & SES",
        "Lightsail & Linode Server"
      ]
    },
    {
      name: "Containers & Orchestration",
      icon: "Boxes",
      skills: [
        "Kubernetes (CKA)",
        "Docker & Containerization",
        "Container Security",
        "Cluster Monitoring",
        "Microservices Deployment"
      ]
    },
    {
      name: "CI/CD & DevOps Automation",
      icon: "GitBranch",
      skills: [
        "Jenkins Automation",
        "GitLab CI/CD",
        "AWS CodePipeline",
        "Terraform (IaC)",
        "Ansible Configuration",
        "Automated Testing & Builds"
      ]
    },
    {
      name: "Monitoring & Observability",
      icon: "Cpu",
      skills: [
        "Prometheus",
        "Grafana Dashboards",
        "AWS CloudWatch",
        "Incident Management",
        "Performance Optimization",
        "Alerting & Logs"
      ]
    },
    {
      name: "Systems & Scripting",
      icon: "Terminal",
      skills: [
        "Linux Server Administration (Ubuntu, RedHat)",
        "Bash & Shell Scripting",
        "Git Version Control",
        "SSL Certificate Management",
        "Application Support & Troubleshooting"
      ]
    },
    {
      name: "Databases & Tools",
      icon: "Database",
      skills: [
        "MySQL",
        "MongoDB",
        "Jira",
        "Trello",
        "Redmine Ticketing System"
      ]
    }
  ],

  experiences: [
    {
      company: "Nimbus Venture (Pvt) Ltd",
      role: "Application Support Engineer",
      period: "December 2024 – Present",
      location: "Sri Lanka",
      description: "Managing mission-critical AWS environments, container workloads, incident resolution, and CI/CD pipelines ensuring 99.99% system availability.",
      highlights: [
        "Managed and maintained high-traffic production and development environments on AWS cloud platform.",
        "Configured and supported core AWS services: EC2, ECS, RDS, IAM, VPC, Security Groups, ALBs, Lambda, SQS, SNS, Kafka, CloudWatch, and Budget Alerts.",
        "Engineered and automated CI/CD build and release workflows using Jenkins, reducing manual deployment overhead.",
        "Monitored server health and proactive metrics using Prometheus, Grafana, and AWS CloudWatch alarms.",
        "Orchestrated containerized workloads using Kubernetes and Docker.",
        "Troubleshot complex incidents, identified root causes, and resolved critical production bottlenecks.",
        "Handled ticketing workflows and task allocation through Redmine."
      ],
      technologies: ["AWS", "ECS", "Kubernetes", "Docker", "Jenkins", "Kafka", "Prometheus", "Grafana", "RDS", "Linux", "Redmine"]
    },
    {
      company: "Web Lankan (Pvt) Ltd",
      role: "System Engineer",
      period: "July 2023 – December 2024",
      location: "Sri Lanka",
      description: "Administered hybrid cloud environments across AWS and Linode with automated deployment pipelines and robust security monitoring.",
      highlights: [
        "Managed cloud infrastructure on AWS and Linode environments for production and development systems.",
        "Utilized EC2, Lightsail, Load Balancers, Auto Scaling Groups, RDS, Route 53, CloudFront, and automated SSL certificate renewals.",
        "Automated end-to-end application deployment processes using Jenkins and GitLab CI/CD pipelines.",
        "Configured continuous server performance and system health monitoring using Prometheus, Grafana, and AWS CloudWatch.",
        "Managed project tasks and issue tracking using Jira and Trello.",
        "Provided L2/L3 cloud application support, incident management, and infrastructure optimization."
      ],
      technologies: ["AWS", "Linode", "GitLab CI/CD", "Jenkins", "Route 53", "CloudFront", "Prometheus", "Grafana", "Jira", "SSL"]
    },
    {
      company: "hSenid Mobile Solutions (Pvt) Ltd",
      role: "Implementation Engineer (Trainee)",
      period: "August 2022 – April 2023",
      location: "Sri Lanka",
      description: "Gained enterprise-grade experience deploying telco and mobile application releases, testing staging environments, and database scripting.",
      highlights: [
        "Deployed enterprise application releases to production servers and monitored deployment metrics.",
        "Tested and validated new application releases on staging environments prior to client rollout.",
        "Generated automated reports using database scripts (SQL) to support operational data analysis.",
        "Monitored server resource consumption and operational stability."
      ],
      technologies: ["Linux", "SQL", "Database Scripting", "Application Testing", "Production Deployment", "Enterprise Support"]
    }
  ] as Experience[],

  certifications: [
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation (CNCF) / Linux Foundation",
      validity: "2026 – 2028",
      featured: true,
      category: "k8s",
      badgeColor: "border-blue-500/50 bg-blue-500/10 text-blue-400"
    },
    {
      title: "AWS Certified Solutions Architect – Associate (SAA-C03)",
      issuer: "Amazon Web Services (AWS)",
      validity: "2026 – 2029",
      featured: true,
      category: "cloud",
      badgeColor: "border-amber-500/50 bg-amber-500/10 text-amber-400"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      validity: "2024",
      featured: true,
      category: "cloud",
      badgeColor: "border-orange-500/50 bg-orange-500/10 text-orange-400"
    },
    {
      title: "Certified Multicloud Network Associate",
      issuer: "Aviatrix",
      validity: "2025 – 2028",
      featured: true,
      category: "cloud",
      badgeColor: "border-indigo-500/50 bg-indigo-500/10 text-indigo-400"
    },
    {
      title: "Linux Server Management and Security",
      issuer: "Vibernets Academy",
      validity: "Verified",
      featured: false,
      category: "linux",
      badgeColor: "border-cyan-500/50 bg-cyan-500/10 text-cyan-400"
    },
    {
      title: "NDG Linux Essentials",
      issuer: "Cisco Networking Academy",
      validity: "Verified",
      featured: false,
      category: "linux",
      badgeColor: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
    },
    {
      title: "Introduction to Microsoft Azure Cloud Services",
      issuer: "Coursera",
      validity: "Verified",
      featured: false,
      category: "cloud",
      badgeColor: "border-sky-500/50 bg-sky-500/10 text-sky-400"
    },
    {
      title: "SQL for Data Science",
      issuer: "Professional Certification",
      validity: "Verified",
      featured: false,
      category: "database",
      badgeColor: "border-purple-500/50 bg-purple-500/10 text-purple-400"
    },
    {
      title: "Server Administration with Ubuntu / RedHat",
      issuer: "Vibernets Academy",
      validity: "Verified",
      featured: false,
      category: "linux",
      badgeColor: "border-red-500/50 bg-red-500/10 text-red-400"
    }
  ] as Certification[],

  projects: [
    {
      title: "Enterprise AWS High-Availability Cloud Infrastructure",
      category: "Cloud Architecture",
      description: "Designed and configured a resilient multi-tier AWS environment featuring ECS clusters, RDS Multi-AZ failover, VPC peering, and Application Load Balancers with CloudWatch autoscaling policies.",
      architecture: [
        "VPC with Public/Private subnets across multiple AZs",
        "ECS Fargate for containerized microservice execution",
        "RDS MySQL with automated snapshots & Multi-AZ replication",
        "CloudFront CDN with SSL termination via ACM"
      ],
      techStack: ["AWS ECS", "VPC", "ALB", "RDS Multi-AZ", "Route 53", "CloudFront"],
      metrics: "Target 99.99% Uptime with automated failover",
      iconName: "Cloud"
    },
    {
      title: "Automated Multi-Stage CI/CD Deployment Engine",
      category: "CI/CD & DevOps",
      description: "Constructed automated Jenkins and GitLab CI/CD pipelines capable of multi-branch builds, static security scanning, Docker image packaging, and deployment to staging and production clusters.",
      architecture: [
        "Webhook triggers on branch merge requests",
        "Automated linting, security scanning, and unit testing",
        "Multi-stage Docker builds pushed to private container registry",
        "Automated rolling rollout to Kubernetes clusters"
      ],
      techStack: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "Shell Scripting"],
      metrics: "Reduced deployment lead time from hours to under 8 minutes",
      iconName: "GitBranch"
    },
    {
      title: "Full-Stack Observability & Incident Response Hub",
      category: "Monitoring & Observability",
      description: "Implemented a comprehensive monitoring ecosystem using Prometheus, Grafana, and AWS CloudWatch, delivering real-time metric visualization, latency tracking, and threshold-based Slack/Email alerts.",
      architecture: [
        "Prometheus node-exporter and blackbox exporter telemetry",
        "Custom Grafana operational dashboards for CPU, memory, and IOPS",
        "AWS CloudWatch composite alarms and SNS notifications",
        "Automated runbooks for incident remediation"
      ],
      techStack: ["Prometheus", "Grafana", "AWS CloudWatch", "SNS", "Bash"],
      metrics: "Proactive alert detection before client-facing impact",
      iconName: "Activity"
    },
    {
      title: "Containerized Orchestration & Cluster Management",
      category: "Kubernetes & Containers",
      description: "Deployed and maintained containerized workloads on Kubernetes with custom resource limits, Horizontal Pod Autoscalers (HPA), ingress routing, and automated rollback strategies.",
      architecture: [
        "Namespace isolation for multi-environment deployments",
        "ConfigMaps and Secrets for decoupled configuration",
        "Liveness and readiness probes for zero-downtime rolling updates",
        "Persistent Volumes (PV/PVC) backed by cloud storage"
      ],
      techStack: ["Kubernetes (CKA)", "Docker", "Helm", "Linux Server Admin"],
      metrics: "Zero-downtime rolling deployments achieved",
      iconName: "Boxes"
    }
  ] as Project[],

  education: [
    {
      institution: "Wrexham University – UK",
      degree: "BSc (Hons) in Computer Networking & Security",
      period: "2023 – 2024",
      location: "United Kingdom",
      description: "Focused on advanced enterprise network architecture, cloud security frameworks, vulnerability assessments, and distributed systems."
    },
    {
      institution: "Institute of Technology, University of Moratuwa",
      degree: "Diploma of Electronic and Telecommunication Engineering Technology (NDT)",
      period: "2019 – 2023",
      location: "Sri Lanka",
      description: "In-depth foundation in telecommunication systems, server administration, embedded systems, and computing infrastructure."
    }
  ] as Education[],

  references: [
    {
      name: "Mr. Nemanka Bandara",
      designation: "Senior DevOps Engineer",
      company: "Web Lankan (Pvt) Ltd",
      email: "nemankakc@gmail.com",
      phone: "+94 71 915 2478"
    },
    {
      name: "Mr. Pubudu Gunasiri",
      designation: "Tech Lead",
      company: "Nimbus Venture (Pvt) Ltd",
      email: "pubudug@nimbusventure.com",
      phone: "+94 71 745 1546"
    }
  ] as Reference[],

  languages: [
    { language: "English", level: "Professional Working Proficiency" },
    { language: "Sinhala", level: "Native / Bilingual" }
  ]
};
