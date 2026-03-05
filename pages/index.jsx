import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Hi, I&apos;m Harish <br />
            <span className="text-accent">
              <Typewriter
                words={[
                  "20",
                  "AI Engineer",
                  "Data Engineering Intern",
                  "LeetCode Knight (1866)",
                  "Building Multi-Agent Systems",
                  "FastAPI + LangGraph Builder",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-2xl mx-auto xl:mx-0 mb-8 xl:mb-10 text-gray-200"
          >
            AI & Data Science undergrad focused on recruiter-ready, production-grade systems: autonomous job
            application pipelines, agentic YouTube automation, and real-time big-data analytics with Kafka,
            Spark, and Airflow.
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto xl:mx-0 mb-10 grid grid-cols-2 xl:grid-cols-4 gap-3 max-w-3xl"
          >
            {[
              { label: "LeetCode", value: "1866" },
              { label: "Problems Solved", value: "800+" },
              { label: "CGPA", value: "8.34" },
              { label: "Automation Gain", value: "95%" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-3 backdrop-blur-sm">
                <div className="text-accent font-bold text-xl">{item.value}</div>
                <div className="text-xs uppercase tracking-wider text-white/80">{item.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
