export interface ContactTemplate {
  email: string,
  linkedIn: string
}

export interface EmploymentTemplate {
  employer: string,
  location: string,
  title: string,
  startDate: Date,
  endDate: Date | null,
  details: string[]
}

export interface EducationTemplate {
  name: string,
  date: Date,
  institution: string,
  location: string,
  additionalInfo: string
}

export interface ResumeTemplate {
  name: string,
  homepage: string,
  source: string,
  summary: string,
  contact : ContactTemplate,
  employments: EmploymentTemplate[],
  education: EducationTemplate[],
  technicalSkills: string[]
}

const resume: ResumeTemplate = {
  name: "Jordan Scott",
  homepage: "https://jscott11b.github.io/resume",
  source: "https://github.com/jscott11b/resume",
  summary: "Software Engineer experienced in designing and building full-stack and mobile applications. Focused on reliability, quality, and delivering maintainable, user-focused solutions through automated, repeatable release pipelines.",
  contact: {
    email: "jordan.scott11b@gmail.com",
    linkedIn: "https://www.linkedin.com/in/jscott11b"
  },
  employments: [
    {
      employer: "AIS Technologies Group",
      location: "Windsor ON",
      title: "Software Engineer",
      startDate: new Date(2023, 8),
      endDate: null,
      details: [
        "Redesigned a legacy application into a scalable, cross-platform web application, eliminating reliance on costly licensed libraries by adopting open-source solutions",
        "Owned the full software development lifecycle, from design and implementation through testing and deployment, collaborating closely with end users to deliver features that enhance usability",
        "Independently developed a cross-platform mobile application integrating computer vision and augmented reality to deliver interactive user experiences",
        "Designed and implemented build and release pipelines, incorporating automated testing and streamlined release documentation",
        "Collaborated with management to define project requirements, assess feasibility, and estimate effort and timelines"
      ]
    },
    {
      employer: "Rocket Mortgage",
      location: "Detroit MI",
      title: "Senior Software Engineer",
      startDate: new Date(2015, 10),
      endDate: new Date(2022, 1),
      details: [
        "Designed and implemented secure, scalable, enterprise APIs and back-end services for document storage, classification and data extraction",
        "Worked directly with clients to determine system requirements, prioritize features, and troubleshoot issues",
        "Redesigned existing systems for better security, scalability, performance, and stability",
        "Increased code coverage and automated integration testing in legacy applications, increasing system stability and decreasing code deployment durations",
        "Worked closely with other members of the development team, including pair programming and mentoring junior engineers",
      ]
    },
    {
      employer: "Radix Inc",
      location: "Windsor ON",
      title: "Software Developer/Machine Vision Specialist",
      startDate: new Date(2011, 10),
      endDate: new Date(2015, 10),
      details: [
        "Designed, developed, and tested custom applications to fit customer specific needs",
        "Analyzed existing systems for flaws and made recommendations to customers for improvements",
        "Developed internal tools to automate recurring tasks, increasing productivity",
        "Researched, tested, and recommended new technologies to be implemented in future systems",
        "Worked and coordinated with design teams and customers to provide the solution that best solved customers problem",
        "Provided customer and developer documentation and training specific to individual projects",
        "Refactored existing codebases for better maintainability",
        "Provided emergency technical support to customers"
      ]
    }
  ].slice(0,2),
  education: [
    {
      name: "Bachelor of Applied Science, Honours Electrical Engineering",
      date: new Date(2011,1),
      institution: "University of Windsor",
      location: "Windsor ON",
      additionalInfo: "Concentration in Communications, Minor in Mathematics"
    }
  ],
  technicalSkills: [
    "Git",
    "TFS",
    "CircleCI",
    "Bash",
    "PowerShell",
    "Snyk",
    "SonarQub",
    "Terraform",
    "IIS",
    "Docker EE",
    "MS SQL Server",
    "MySQL",
    "AWS",
    "DynamoDB",
    "RDS",
    "S3",
    "SQS",
    "Event Bridge",
    "ECS",
    "Lambda",
    "C#",
    ".Net",
    "ASP.NET Web API",
    "Entity Framework",
    "WPF",
    "Winforms",
    "Dapper",
    "XUnit",
    "Typescript",
    "Node",
    "Angular",
    "Jest",
    "JSX",
    "React",
    "Redux",
    "Expo",
    "React-Native",
    "Electron"
  ]
}

export default resume;