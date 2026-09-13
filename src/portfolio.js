/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {
  faBrain,
  faClipboardCheck,
  faCodePullRequest,
  faFlask,
  faRobot,
  faTerminal,
  faUsersGear,
  faWandMagicSparkles
} from "@fortawesome/free-solid-svg-icons";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Daga",
  title: emoji("Hi all, I'm Daga"),
  subTitle: emoji(
    "🇨🇴 I'm a Colombian Full Stack Developer 💻 and an active researcher 🔬 with the Infelcom research group at UPTC 🏫. I lead projects focused on artificial intelligence 🤖 and enjoy exploring innovative solutions in technology 🚀."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Daga321",
  linkedin: "https://linkedin.com/in/daga3211",
  gmail: "daga70414@gmail.com",
  linktree: "https://linktr.ee/Daga321",
  whatsapp: "https://api.whatsapp.com/send?phone=573007798350",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Full Stack developer focused on backend, automation, deployment, and applied AI — with .NET and Python as my strongest foundations, supported by AI-assisted development workflows.",
  /* 
    Make Sure to include correct Font Awesome or devicon Classname to view your icon
      https://fontawesome.com/icons?d=gallery
      https://devicon.dev/
  */
  skillGroups: [
    {
      title: "Full Stack",
      description:
        "Backend, APIs and software delivery with .NET and pragmatic front-end implementation.",
      skills: [
        {name: "C#", iconType: "devicon", icon: "devicon-csharp-plain", lightColor: "#6a5cff", darkColor: "#9c8cff"},
        {name: ".NET", iconType: "devicon", icon: "devicon-dotnetcore-plain", lightColor: "#512bd4", darkColor: "#b99bff"},
        {name: "Blazor", iconType: "devicon", icon: "devicon-blazor-original", lightColor: "#6b7cff", darkColor: "#9bb2ff"},
        {name: "ASP.NET", iconType: "devicon", icon: "devicon-dotnetcore-plain", lightColor: "#3d7af0", darkColor: "#92bdff"},
        {name: "Django", iconType: "devicon", icon: "devicon-django-plain", lightColor: "#0f7b5c", darkColor: "#84e6ba"},
        {name: "Python", iconType: "devicon", icon: "devicon-python-plain", lightColor: "#3776ab", darkColor: "#8cc9ff"},
        {name: "JavaScript", iconType: "devicon", icon: "devicon-javascript-plain", lightColor: "#d6a72d", darkColor: "#ffe08d"},
        {name: "TypeScript", iconType: "devicon", icon: "devicon-typescript-plain", lightColor: "#007acc", darkColor: "#92d0ff"},
        {name: "React", iconType: "devicon", icon: "devicon-react-original", lightColor: "#61dafb", darkColor: "#9ee9ff"},
        {name: "SQL", iconType: "devicon", icon: "devicon-microsoftsqlserver-plain", lightColor: "#e64a19", darkColor: "#ff9a6b"},
        {name: "Java", iconType: "devicon", icon: "devicon-java-plain", lightColor: "#f89820", darkColor: "#ffd08a"},
        {name: "springboot", iconType: "devicon", icon: "devicon-spring-plain", lightColor: "#6db33f", darkColor: "#b8e986"}
      ]
    },
    {
      title: "Cloud & DevOps",
      description:
        "Git-driven delivery, pipelines, deployment automation and operational consistency across environments.",
      skills: [
        {name: "Git", iconType: "devicon", icon: "devicon-git-plain", lightColor: "#f05032", darkColor: "#ff9b82"},
        {name: "GitHub", iconType: "devicon", icon: "devicon-github-original", lightColor: "#171515", darkColor: "#f0f6fc"},
        {name: "Actions", iconType: "devicon", icon: "devicon-githubactions-plain", lightColor: "#2088ff", darkColor: "#8ec5ff"},
        {name: "Docker", iconType: "devicon", icon: "devicon-docker-plain", lightColor: "#2496ed", darkColor: "#8ed2ff"},
        {name: "AWS", iconType: "devicon", icon: "devicon-amazonwebservices-plain-wordmark", lightColor: "#ff9900", darkColor: "#ffd166"},
        {name: "CI/CD", iconType: "devicon", icon: "devicon-gitlab-plain", lightColor: "#e24329", darkColor: "#ff9c8a"},
        {name: "Ubuntu server", iconType: "devicon", icon: "devicon-ubuntu-plain", lightColor: "#e95420", darkColor: "#ffb28a"}
      ]
    },
    {
      title: "AI & Data",
      description:
        "Machine learning, applied experimentation and intelligent workflows that support product and technical decisions.",
      skills: [
        {name: "Python", iconType: "devicon", icon: "devicon-python-plain", lightColor: "#3776ab", darkColor: "#8cc9ff"},
        {name: "NumPy", iconType: "devicon", icon: "devicon-numpy-plain", lightColor: "#4d77ff", darkColor: "#9eb8ff"},
        {name: "TensorFlow", iconType: "devicon", icon: "devicon-tensorflow-original", lightColor: "#ff6f00", darkColor: "#ffc166"},
        {name: "Keras", iconType: "devicon", icon: "devicon-keras-plain", lightColor: "#d00000", darkColor: "#ff8a80"},
        {name: "scikit", iconType: "devicon", icon: "devicon-scikitlearn-plain", lightColor: "#f39c12", darkColor: "#ffd166"}
      ]
    },
    {
      title: "Mobile & Interactive",
      description:
        "UI prototyping and app/game-oriented experiences where I can contribute with speed and technical flexibility.",
      skills: [
        {name: "Flutter", iconType: "devicon", icon: "devicon-flutter-plain", lightColor: "#4cc2ff", darkColor: "#a7e3ff"},
        {name: "Dart", iconType: "devicon", icon: "devicon-dart-plain", lightColor: "#00c4ff", darkColor: "#8fe9ff"},
        {name: "Unity", iconType: "devicon", icon: "devicon-unity-plain", lightColor: "#111111", darkColor: "#f4f4f5"},
        {name: "C#", iconType: "devicon", icon: "devicon-csharp-plain", lightColor: "#6a5cff", darkColor: "#bbb3ff"}
      ]
    },
    {
      title: "Leadership & Delivery",
      description:
        "Repository structure, technical coordination, testing and project management across delivery teams.",
      skills: [
        {name: "Leadership", iconType: "fontawesome", icon: faUsersGear, lightColor: "#6366f1", darkColor: "#c7d2fe"},
        {name: "PRs", iconType: "fontawesome", icon: faCodePullRequest, lightColor: "#0ea5e9", darkColor: "#8ed2ff"},
        {name: "Validation", iconType: "fontawesome", icon: faClipboardCheck, lightColor: "#22c55e", darkColor: "#86efac"},
        {name: "Experimentation", iconType: "fontawesome", icon: faFlask, lightColor: "#f59e0b", darkColor: "#ffd166"},
        {name: "Planning", iconType: "devicon", icon: "devicon-trello-plain", lightColor: "#1c75d1", darkColor: "#9ad0ff"},
        {name: "Docs", iconType: "devicon", icon: "devicon-markdown-original", lightColor: "#2f2f2f", darkColor: "#e5e7eb"}
      ]
    },
    {
      title: "AI-Assisted Workflow",
      description:
        "Using AI agents and modern tooling to accelerate implementation, validation, exploration, and product iteration.",
      skills: [
        {name: "Agent Workflows", iconType: "fontawesome", icon: faRobot, lightColor: "#2ea8ff", darkColor: "#9ae1ff"},
        {name: "Prompt Design", iconType: "fontawesome", icon: faWandMagicSparkles, lightColor: "#5b5bd6", darkColor: "#cbc8ff"},
        {name: "Reasoning", iconType: "fontawesome", icon: faBrain, lightColor: "#10b981", darkColor: "#86efac"},
        {name: "CLI Automation", iconType: "fontawesome", icon: faTerminal, lightColor: "#2563eb", darkColor: "#bfdbfe"}
      ]
    }
  ],
  skills: [
    emoji(
      "⚡ Full-stack delivery with .NET, C#, Blazor, and pragmatic front-end work supported by AI-assisted development."
    ),
    emoji(
      "⚡ Cloud, DevOps and deployment automation with Git, GitHub, Docker, GitHub Actions, pipelines, and AWS."
    ),
    emoji(
      "⚡ Applied AI and data work with Python, NumPy, TensorFlow, Keras, scikit-learn, LLM workflows, and AI-enabled product development."
    ),
    emoji(
      "⚡ Project leadership, repository management, testing, and delivery coordination across teams and environments."
    )
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps & Automation",
      progressPercentage: "65%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "60%"
    },
    {
      Stack: "Artificial Intelligence",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Pedagogica y Tecnológica de Colombia",
      logo: require("./assets/images/UPTC_logo.webp"),
      subHeader: "System and Computer Engineering",
      duration: "April 2019 - Present",
      desc: "Engaged in advanced studies with a strong focus on research and innovation. Contributed to collaborative projects, gaining experience in scientific problem-solving and academic competitions.",
      descBullets: [
        "Active member of the Infelcom research group",
        "Participated in various research marathons and competitions",
        "Upcoming publications in scientific journals"
      ]
    }
  ]
};

// Work experience section
// Keep each experience easy to scan: summary explains the role's focus, while
// highlights lists concrete contributions, outcomes, or responsibilities.
// Future entries should follow this shape:
// {
//   role: "Role title",
//   company: "Company name",
//   companylogo: require("./assets/images/company_logo.webp"),
//   date: "Month Year - Month Year",
//   summary: "One or two sentences describing the role's main focus.",
//   highlights: ["Action or outcome", "Action or outcome"]
// }

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "JR developer II",
      company: "ControlBox Corp.",
      companylogo: require("./assets/images/controlbox_logo.webp"),
      date: "Jul 2025 – Current",
      summary: "Full Stack Developer improving a SaaS platform for financial services and remittances, with a focus on usability, scalability, and reliable integrations.",
      highlights: [
        "Improve UI and UX across administrative and end-user systems.",
        "Integrate banking, biometric identification, and third-party services into end-to-end workflows.",
        "Develop and document remittance APIs for storage, e-commerce, and customer-facing solutions.",
        "Support production deployments, feature releases, and post-release improvements."
      ]
    },
    {
      role: "Jr Developer / University Intern",
      company: "Datanalisis de Colombia SAS",
      companylogo: require("./assets/images/Datanalisis_logo.webp"),
      date: "Sep 2024 – Jan 2025",
      summary: "Developed a secure gateway during the company's ERP migration, enabling controlled access to information from multiple microservices.",
      highlights: [
        "Designed and implemented a secure gateway module",
        "Integrated authentication with JSON Web Tokens",
        "Tested across various servers and environments",
        "Contributed to ERP system migration"
      ]
    },
    {
      role: "Full Stack .NET Developer",
      company: "Freelancer",
      companylogo: require("./assets/images/Freelancer_logo.webp"),
      date: "Jun 2023 – Aug 2024",
      summary: "Built and supported an information system for training materials delivered to Colombia's mining sector through the UPTC and ANM agreement.",
      highlights: [
        "Frontend development using Blazor",
        "Backend development with .NET REST APIs",
        "Deployment automation and DevOps",
        "System support and maintenance"
      ]
    },
    {
      role: "Programming Instructor",
      company: "UPTC",
      companylogo: require("./assets/images/UPTC_logo.webp"),
      date: "Jun 2022 – May 2024",
      summary: "Supported university students in strengthening their programming foundations and solving technical challenges across multiple technology stacks.",
      highlights: [
        "Guided students through PHP, virtualization, web development, web services, and RESTful APIs.",
        "Answered technical questions and helped resolve course-related challenges.",
        "Reinforced programming concepts to improve learning outcomes and academic performance."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
//Projects

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
//Startups

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/UPTC_logo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "A showcase of my awards, certifications, and notable accomplishments.",

  achievementsCards: [
    {
      title: "Monthly Employment Recognition",
      subtitle:
        "Highlighted for going beyond requirements, challenging assumptions, and identifying improvements that benefit both the business and the end-user experience. My adaptability, attention to detail, and ability to quickly contribute after a short onboarding period were also recognized by the team.",
      image: require("./assets/images/Employee-of-ther-month.webp"),
      imageAlt: "Monthly Employment Recognition logo",
      footerLink: [
        {
          name: "View Linkedin Post",
          url: "https://lnkd.in/p/eCA9aWvA",
          newTab: true
        }
      ]
    },
    {
      title: "AWS Community Day Colombia 2025",
      subtitle:
        "Participated in AWS Community Day Colombia, engaging with cloud professionals and expanding my expertise in AWS technologies.",
      image: require("./assets/images/AWS_community_day_logo.webp"),
      imageAlt: "AWS Community Day Colombia 2025 logo",
      footerLink: []
    },
    {
      title: "Professional Certifications",
      subtitle:
        "A collection of certifications demonstrating my skills in software development, cloud computing, and related technologies.",
      image: require("./assets/images/Certifications_logo.webp"),
      imageAlt: "Certifications Logo",
      footerLink: [
        {
          name: "View Certifications",
          url: "/certifications",
          newTab: false
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+57 3007798350",
  email_address: "daga70414@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
