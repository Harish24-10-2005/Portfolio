import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaDatabase
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiFastapi,
  SiJupyter,
  SiPowerbi,
  SiTableau
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming",
        icons: [
          FaPython,
          FaJs,
          FaHtml5,
          FaCss3,
          FaReact,
          FaNodeJs
        ],
      },
      {
        title: "Data Science & ML",
        icons: [SiTensorflow, SiPytorch, SiJupyter, SiPowerbi, SiTableau],
      },
      {
        title: "Backend & Database",
        icons: [SiFastapi, SiExpress, SiMongodb, SiMysql, FaDatabase],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "B.TECH Artificial Intelligence and Data Science - Sri Eshwar College of Engineering",
        stage: "2023 - 2027",
      },
      {
        title: "HSC – JAWAHAR MAT. HR. SEC. SCHOOL (91.6%)",
        stage: "2021 - 2023",
      },
      {
        title: "SSLC - JAWAHAR MAT. HR. SEC. SCHOOL",
        stage: "2020 - 2021",
      },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Intern - G-Zoft Tech Solutions (MERN)", stage: "2025" },
      { title: "Noiceless (PATENTED) - Motion Capture Tech", stage: "2024" },
      { title: "Sketch Mentor - AI Agentic Math Solver", stage: "2025" },
      { title: "HorixYt - AI Video Generation & Automation", stage: "2025" },
      { title: "Yeildify - ML-Based Smart Farming System", stage: "2024" },
      {
        title: "ShopLens AI - E-Commerce Product Detection",
        stage: "2025",
      },
      { title: "AItalytics - AI Data Science Platform", stage: "Present" },
    ],
  },
  {
    title: "coding profiles",
    info: [
      {
        title: "Leetcode",
        stage: "360+ problems | Max Rating: 1,576 | Global Rank: 186,712",
      },
      { title: "Geeks For Geeks", stage: "55+ problems | Institute Rank: 96" },
      {
        title: "Codechef",
        stage: "Max Rating: 1149 | Global Rank: 97,988",
      },
      {
        title: "Skill Rack",
        stage: "170+ problems | Top 18th in Contest | 53+ Bronzes",
      },
    ],
  },

  {
    title: "certifications",
    info: [
      {
        title: "Programming in python for data science - IBM",
        stage: "2024",
      },
      {
        title: "Introduction to Artificial intelligence - IBM in coursera",
        stage: "2024",
      },
      {
        title: "Supervised Machine Learning: Regression and Classification - Stanford",
        stage: "2024",
      },
      {
        title: "Advanced Learning Algorithms - Stanford and Deeplearning",
        stage: "2024",
      },
      {
        title: "Data Structures and Algorithms - Udemy",
        stage: "2024",
      },
      {
        title: "Programming in C - NPTEL",
        stage: "2024",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[240px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Creating <span className="text-accent">innovative</span> solutions
            with AI & Data Science.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
I’m an AI and Data Science enthusiast and the founder of Horix AI—an agentic platform under development—driven to innovate with autonomous systems and smart tech solutions. With hands-on expertise in the MERN stack, machine learning, and AI, I’ve developed a patented 3D motion-capture pipeline, AI-driven video-generation tools, and intelligent smart-farming systems. I thrive on building impactful products that blend deep technical skills with entrepreneurial vision.          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                CEO & Founder
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Horix Ai
                </div>
              </div>
              {/* leetcode */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={360} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Leetcode Problems Solved
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Major Projects Completed
                </div>
              </div>

              {/* skillrack */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1576} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Contest Rating in leetcode
                </div>
              </div>
              {/* certifications */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Professional Certifications
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;