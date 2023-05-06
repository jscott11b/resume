export interface ContactTemplate {
  email: string,
  linkedIn: string
}

export interface EmploymentTemplate {
  employer: string,
  location: string,
  title: string,
  startDate: Date,
  endDate: Date,
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
  contact : ContactTemplate,
  summary: string,
  employments: EmploymentTemplate[],
  education: EducationTemplate[],
  technicalSkills: string[]
}

const resume: ResumeTemplate = {
  name: "Jordan Scott",
  homepage: "https://jscott11b.github.io/resume",
  source: "https://github.com/jscott11b/resume",
  contact: {
    email: "jordan.scott11b@gmail.com",
    linkedIn: "https://www.linkedin.com/in/jscott11b"
  },
  summary: "Quality-driven back-end software engineer with 7 years expertise building and maintaining scalable, enterprise APIs, seeking to transition to full-stack development. Experienced in all aspects of the project lifecycle. Adaptable and quick to learn new technologies, programming languages, and tools to meet project requirements. Strong problem-solving skills with a proven track record of implementing innovative solutions.",
  employments: [
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
  ],
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
    "CloudFormation",
    "Auth0",
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
    "NPM",
    "Angular",
    "Jest",
    "RAML",
    "Swagger",
    "REST",
    "JSX",
    "Redux",
    "Redux Thunks",
    "Redux-Saga",
    "Styled-Components"
  ]
}

export default resume;