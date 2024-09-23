import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Akhil S Nair",
  initials: "AN",
  location: "Kerala, India",
  locationLink: "https://www.google.com/maps/place/Kerala",
  description:
    "Robotics and Automation Engineer & Tech Enthusiast. Very active on Insta.",
  summary:
    "At the end of 2023, I completed my degree in Robotics and Automation Engineering and have since focused on building innovative robotic solutions. During my studies, I worked on a range of projects from autonomous navigation systems to drone surveillance. I've also participated in several robotics workshops and competitions, constantly pushing the boundaries of automation and AI.",
  avatarUrl: "/me.png",
  skills: [
    "ROS",
    "Pathfinding Algorithms",
    "Obstacle Avoidance",
    "Mapping",
    "Python",
    "AI",
    "Navigation",
    "NLP",
    "Machine Learning",
    "Localization",
    "C++","MATLAB", "LabVIEW", "SCADA",
    "SolidWorks","Blender",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "akhil.rb1923@saintgits.org",
    tel: "+91 8089213103",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/akhi1-s",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/akhil-nair-ab5384195",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/akhi1_s",
        icon: Icons.x,

        navbar: true,
      },
   
      email: {
        name: "Send Email",
        url: "mailto:theakhil2000@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Saintgits College of Engineering",
      degree: "B.Tech in Robotics and Automation Engineering",
      start: "2019",
      end: "2023",
    },
    {
      school: "Aravinda Vidyamandiram",
      degree: "12th Grade, CBSE Board",
      start: "2017",
      end: "2019",
    },
    {
      school: "Girideepam Bethany Central School",
      degree: "10th Grade, CBSE Board",
      start: "2016",
      end: "2017",
    },
  ],
  academicProjects: [
    {
      title: "Fire Extinguisher Robot Prototype",
      description: "Developed a robot capable of detecting and extinguishing fires autonomously in controlled environments.",
      skills: ["C++", "Arduino", "Flame Sensors", "Robotics Control"],
      achievement: "Created a fully functioning prototype that successfully demonstrated fire extinguishing in a simulated environment.",
    },
    {
      title: "Floor Cleaning Robot",
      description: "Built an autonomous robot designed for efficient floor cleaning using mapping and navigation techniques.",
      skills: ["Python", "ROS", "LIDAR", "SLAM"],
      achievement: "Implemented a navigation system that maximizes coverage and minimizes cleaning time, with successful testing in domestic environments.",
    },
    {
      title: "Wild Animal Surveillance and Detection using Autonomous Drones",
      description: "Developed an autonomous drone system for wildlife surveillance using camera sensors and AI-based animal detection algorithms.",
      skills: ["Drone Programming", "Python", "OpenCV", "Machine Learning"],
      achievement: "Achieved a fully functional autonomous drone that can track animals in outdoor environments with a success rate of 85% in detection accuracy.",
    },
    {
      title: "Stroke Prediction Based on Lifestyle and Clinical Parameters",
      description: "Designed a machine learning model to predict the likelihood of a stroke based on lifestyle and clinical health parameters.",
      skills: ["Python", "Machine Learning", "Data Science", "Medical Data Analysis"],
      achievement: "Achieved 92% accuracy with the prediction model and demonstrated its potential use in preventive healthcare.",
    },
    {
      title: "Emotion Recognition from Human Faces",
      description: "Developed a system that can recognize and categorize human emotions based on facial expressions using machine learning techniques.",
      skills: ["Python", "OpenCV", "Deep Learning", "TensorFlow"],
      achievement: "Successfully trained a model to classify emotions with over 90% accuracy in controlled test environments.",
    },
    {
      title: "Autonomous Navigation of Cars using Line Detection",
      description: "Built a robotic car capable of autonomously navigating using line detection and following algorithms.",
      skills: ["C++", "OpenCV", "Arduino", "Robotics Control"],
      achievement: "Implemented real-time navigation in a controlled track environment, showcasing advanced path planning and control systems.",
    },
    {
      title: "Maze Clearance Robot",
      description: "Designed a robot capable of autonomously navigating and clearing a maze using obstacle detection and pathfinding algorithms.",
      skills: ["C++", "ROS", "Pathfinding Algorithms", "Obstacle Avoidance"],
      achievement: "Successfully deployed the robot to clear mazes of varying complexity with an average success rate of 95%.",
    },
    {
      title: "Human Follower Robot Based on Face Detection and Commands",
      description: "Developed a robot that tracks and follows a human using facial detection technology.",
      skills: ["Python", "OpenCV", "Face Recognition", "ROS"],
      achievement: "Implemented a robust face detection and tracking algorithm with real-time performance, providing smooth and accurate following behavior.",
    },
    {
      title: "Industrial Pick and Place Warehouse Robot",
      description: "Built an automated pick-and-place robot designed for industrial warehouse tasks.",
      skills: ["C++", "SolidWorks", "Object Detection", "Robotics Automation"],
      achievement: "Successfully demonstrated the system's ability to increase efficiency in warehouse operations by automating repetitive tasks.",
    },
  ],

  
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  
} as const;
