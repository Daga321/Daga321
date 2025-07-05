/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
    "🇨🇴 I'm a Colombian Full Stack Developer 💻 and an active researcher 🔬 with the Infelcm research group at UPTC 🏫. I lead projects focused on artificial intelligence 🤖 and enjoy exploring innovative solutions in technology 🚀."
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
    "Full Stack Developer with experience in multiple technologies and a passion for learning.",
  skills: [
    emoji(
      "⚡ Backend development with Python (Django), Java (Spring Boot), and C# (.NET Core)"
    ),
    emoji("⚡ Game and simulation development with Unity and C#"),
    emoji(
      "⚡ Web development with Blazor, .NET Core, HTML, JavaScript, and CSS"
    ),
    emoji(
      "⚡ Management and modeling of relational databases: SQL Server, MySQL, PostgreSQL"
    ),
    emoji(
      "⚡ AI projects with Python, TensorFlow, Keras, scikit-learn, and NumPy"
    ),
    emoji("⚡ Version control and project management with Git and GitHub"),
    emoji("⚡ Automation and DevOps with CI/CD pipelines in GitHub Actions")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "devicon-python-plain"},
    {skillName: "Django", fontAwesomeClassname: "devicon-django-plain"},
    {skillName: "Java", fontAwesomeClassname: "devicon-java-plain"},
    {skillName: "Spring Boot", fontAwesomeClassname: "devicon-spring-plain"},
    {skillName: "C#", fontAwesomeClassname: "devicon-csharp-plain"},
    {skillName: ".NET Core", fontAwesomeClassname: "devicon-dotnetcore-plain"},
    {skillName: "Unity", fontAwesomeClassname: "devicon-unity-plain"},
    {skillName: "Blazor", fontAwesomeClassname: "devicon-blazor-original"},
    {skillName: "HTML5", fontAwesomeClassname: "devicon-html5-plain"},
    {skillName: "CSS3", fontAwesomeClassname: "devicon-css3-plain"},
    {skillName: "JavaScript", fontAwesomeClassname: "devicon-javascript-plain"},
    {
      skillName: "SQL (Relational DBs)",
      fontAwesomeClassname: "devicon-azuresqldatabase-plain"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "devicon-tensorflow-original"
    },
    {skillName: "Keras", fontAwesomeClassname: "devicon-keras-plain"},
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "devicon-scikitlearn-plain"
    },
    {skillName: "NumPy", fontAwesomeClassname: "devicon-numpy-plain"},
    {skillName: "Git", fontAwesomeClassname: "devicon-git-plain"},
    {skillName: "GitHub", fontAwesomeClassname: "devicon-github-original"},
    {skillName: "Docker", fontAwesomeClassname: "devicon-docker-plain"},
    {skillName: "CI/CD", fontAwesomeClassname: "devicon-gitlab-plain"}
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

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Jr Developer / University Intern",
      company: "Datanalisis de Colombia SAS",
      companylogo: require("./assets/images/Datanalisis_logo.webp"),
      date: "Sep 2024 – Jan 2025",
      desc: "Developed a centralized gateway module enabling secure extraction of information from microservices, using authentication via JSON Web Tokens, as part of the migration of the company's ERP system. Conducted extensive testing across multiple servers and environments to ensure a robust security system.",
      descBullets: [
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
      desc: "Developed an information system serving as a repository for materials resulting from training sessions provided to the mining sector, under the agreement between UPTC and ANM in Colombia. Contributed significantly to both frontend (Blazor) and backend (REST API with .NET), handled deployments using DevOps practices, and provided ongoing system support.",
      descBullets: [
        "Frontend development using Blazor",
        "Backend development with .NET REST APIs",
        "Deployment automation and DevOps",
        "System support and maintenance"
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
      title: "AWS Community Day Colombia 2025",
      subtitle:
        "Participated in AWS Community Day Colombia, engaging with cloud professionals and expanding my expertise in AWS technologies.",
      image: require("./assets/images/AWS_community_day_logo.webp"),
      imageAlt: "AWS Community Day Colombia logo",
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
          url: "https://drive.google.com/drive/folders/1xlZrT0ybE4DTRnvkXQXBhMqW3iOMumD4"
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
