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
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vanzel Dsilva",
  title: "Hi, I'm Vanzel Dsilva",
  subTitle: emoji(
    "A Software Developing Engineer"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vanzel27",
  linkedin: "https://www.linkedin.com/in/vanzeldsilva/",
  gmail: "dsilvavanzel@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Tech Stack - I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications"),
    emoji(
      "⚡ I’m very flexible with time zone communications & locations I'm based in Boston, USA and open to work in USA ."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "sass",
    fontAwesomeClassname: "fab fa-sass"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "expressjs",
    fontAwesomeClassname: "fas fa-server" // Alternative for Express
  },
  {
    skillName: "c/c++",
    fontAwesomeClassname: "fas fa-file-code" // No direct C/C++ icon in Font Awesome
  },
  {
    skillName: "swift",
    fontAwesomeClassname: "fab fa-swift"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  // display: true, // Set false to hide this section, defaults to true
  // schools: [
  //   {
  //     schoolName: "Harvard University",
  //     logo: require("./assets/images/harvardLogo.png"),
  //     subHeader: "Master of Science in Computer Science",
  //     duration: "September 2017 - April 2019",
  //     desc: "Participated in the research of XXX and published 3 papers.",
  //     descBullets: [
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  //     ]
  //   },
  //   {
  //     schoolName: "Stanford University",
  //     logo: require("./assets/images/stanfordLogo.png"),
  //     subHeader: "Bachelor of Science in Computer Science",
  //     duration: "September 2013 - April 2017",
  //     desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
  //     descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
  //   }
  // ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Ipserlab",
      companylogo: require("./assets/images/comp.jpeg"),
      date: "Feb 2025 – Present",
      desc: "Developed a customizable meal interface using React.js/Redux that improved system performance by 30% and user engagement through responsive UI design and client feedback integration.",
    },
    {
      role: "Software Engineer(QA)",
      company: "Montran",
      companylogo: require("./assets/images/comp2.jpeg"),
      date: "Oct 2022 – Aug 2023",
      desc: "Automated NEFT/IMPS payment testing with Selenium and Jenkins, reducing deployment times by 40% while leading a team of 4 to cut manual testing efforts by 50% through reusable test scripts."
    },
    {
      role: "Software Engineer",
      company: "Gbytes",
      companylogo: require("./assets/images/img.png"),
      date: "Jun 2021 – Sep 2022",
      desc: "Built an invoice portal using React/Node.js with JWT authentication that increased user retention by 30%, while implementing Elasticsearch to accelerate platform search speeds by 25%."
    },
    {
      role: "Front-End Developer",
      company: "Dark Horse Media",
      companylogo: require("./assets/images/Image.jpeg"),
      date: "Dec 2019 – May 2020",
      desc: "Delivered SEO-optimized websites using React.js and modern CSS that boosted client traffic by 20% and improved performance metrics by 25% through responsive design implementations."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  // title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  // projects: [
  //   {
  //     image: require("./assets/images/saayaHealthLogo.webp"),
  //     projectName: "Saayahealth",
  //     projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://saayahealth.com/"
  //       }
  //       //  you can add extra buttons here.
  //     ]
  //   },
  //   {
  //     image: require("./assets/images/nextuLogo.webp"),
  //     projectName: "Nextu",
  //     projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     footerLink: [
  //       {
  //         name: "Visit Website",
  //         url: "http://nextu.se/"
  //       }
  //     ]
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  // title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  // achievementsCards: [
  //   {
  //     title: "Google Code-In Finalist",
  //     subtitle:
  //       "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
  //     image: require("./assets/images/codeInLogo.webp"),
  //     imageAlt: "Google Code-In Logo",
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
  //       },
  //       {
  //         name: "Award Letter",
  //         url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
  //       },
  //       {
  //         name: "Google Code-in Blog",
  //         url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
  //       }
  //     ]
  //   },
  //   {
  //     title: "Google Assistant Action",
  //     subtitle:
  //       "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
  //     image: require("./assets/images/googleAssistantLogo.webp"),
  //     imageAlt: "Google Assistant Action Logo",
  //     footerLink: [
  //       {
  //         name: "View Google Assistant Action",
  //         url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
  //       }
  //     ]
  //   },

  //   {
  //     title: "PWA Web App Developer",
  //     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
  //     image: require("./assets/images/pwaLogo.webp"),
  //     imageAlt: "PWA Logo",
  //     footerLink: [
  //       {name: "Certification", url: ""},
  //       {
  //         name: "Final Project",
  //         url: "https://pakistan-olx-1.firebaseapp.com/"
  //       }
  //     ]
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Projects",
  subtitle:
    "With Love for Developing cool stuff, I love to develope and teach others what I have done.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/vanzel27",
      title: "Recipe Generation Using AI",
      description:
        "Built a React and Express-based app using OpenAI API to generate personalized recipes. Integrated Firebase for scalable performance and achieved 40% faster recipe delivery."
    },
    {
      url: "https://github.com/vanzel27",
      title: "Rental Car",
      description:
        "Developed a car rental system using Spring Boot and MySQL with features like car availability, booking, and user management."
    },
    {
      url: "https://github.com/vanzel27",
      title: "Brew Bot",
      description:
        "Created an AI chatbot for coffee shops using LLMs, NLP, and React Native to enhance customer interaction and order handling."
    },
    {
      url: "https://github.com/vanzel27",
      title: "College Project Plagiarism System",
      description:
        "Designed a machine learning model using CNN and RNN to detect plagiarism in student documents with high accuracy."
    },
    {
      url: "https://github.com/vanzel27",
      title: "Spam SMS Detector",
      description:
        "Built a spam classifier using NLP and machine learning to accurately detect and label SMS messages as spam or ham."
    },
    {
      url: "https://github.com/vanzel27",
      title: "Blogging Website",
      description:
        "Developed a Node.js blogging platform integrating OpenAI, Google, and Yelp APIs for real-time content updates, improving server response time by 25%."
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  // title: "Resume",
  // subtitle: "Feel free to download my resume",

  // // Please Provide with Your Podcast embeded Link
  // display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.",
  // number: "+92-0000000000",
  email_address: "dsilvavanzel@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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