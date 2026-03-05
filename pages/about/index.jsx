import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaDocker, FaPython, FaReact } from "react-icons/fa";
import {
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const highlights = [
  {
    title: "Data Engineering Intern · INEUDATA",
    value: "40%",
    description: "workflow automation via Kafka + Spark + Airflow ETL",
  },
  {
    title: "LeetCode Knight",
    value: "1866",
    description: "Top 6% with 800+ solved and 70+ contests",
  },
  {
    title: "Multi-Agent Architecture",
    value: "8",
    description: "autonomous agents orchestrated in JobStream",
  },
  {
    title: "YouTube Automation",
    value: "95%",
    description: "manual production effort reduced in HorixYt",
  },
];

const timelines = [
  {
    section: "Education",
    items: [
      "B.Tech AI & DS · Sri Eshwar College of Engineering · CGPA 8.34 (2023-2027)",
      "HSC · Jawahar Matriculation HSS · 91.6% (2021-2023)",
      "SSLC · Jawahar Matriculation HSS (2020-2021)",
    ],
  },
  {
    section: "Latest Experience & Projects",
    items: [
      "Data Engineering Intern at INEUDATA (2025)",
      "JobStream · Autonomous AI job application platform (2025)",
      "HorixYt · AI agentic YouTube generation pipeline (2025)",
      "Big Data + AI Agents · real-time ETL dashboard (2025)",
      "Sketch Mentor · AI math solver with QLoRA fine-tuning (2024)",
    ],
  },
  {
    section: "Certifications",
    items: [
      "Supervised ML: Regression & Classification · Stanford (2024)",
      "Advanced ML Algorithms · Stanford (2024)",
      "Data Structures and Algorithms Mastery · Udemy (2024)",
      "Programming in C · NPTEL (2024)",
    ],
  },
];

const techStack = [
  { name: "Python", Icon: FaPython },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "React", Icon: FaReact },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "Docker", Icon: FaDocker },
];

const About = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-28 xl:py-20 text-center xl:text-left overflow-y-auto xl:overflow-hidden">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[240px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid xl:grid-cols-[1.05fr,1fr] gap-8 items-start">
          <motion.div variants={fadeIn("right", 0.25)} initial="hidden" animate="show" exit="hidden">
            <h2 className="h2 mb-4">
              Profile built for <span className="text-accent">recruiters</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto xl:mx-0 mb-6">
              I am Harish R (age 20), an AI & Data Science undergraduate focused on production-ready systems. I build
              autonomous multi-agent platforms, high-throughput ETL pipelines, and scalable backends with strong
              engineering fundamentals.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[rgba(20,14,38,0.75)] backdrop-blur-sm p-4"
                >
                  <div className="text-2xl font-bold text-accent mb-1">
                    {item.value.includes("%") ? (
                      item.value
                    ) : (
                      <>
                        <CountUp start={0} end={Number(item.value)} duration={2.5} />
                        {item.value === "1866" ? "" : "+"}
                      </>
                    )}
                  </div>
                  <p className="text-sm font-semibold mb-1">{item.title}</p>
                  <p className="text-xs text-white/70">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-[rgba(16,12,30,0.82)] p-5">
              <h3 className="text-lg font-semibold mb-3">Core Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {techStack.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 border border-white/10 bg-white/5"
                  >
                    <item.Icon className="text-accent" aria-hidden />
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", 0.3)} initial="hidden" animate="show" exit="hidden" className="space-y-4">
            {timelines.map((block) => (
              <div
                key={block.section}
                className="rounded-2xl border border-white/10 bg-[rgba(20,14,38,0.75)] backdrop-blur-sm p-5"
              >
                <h3 className="text-lg font-semibold mb-3 text-accent">{block.section}</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  {block.items.map((entry) => (
                    <li key={entry} className="pl-4 relative before:content-[''] before:w-2 before:h-2 before:bg-accent before:rounded-full before:absolute before:left-0 before:top-2">
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
