import { motion } from "framer-motion";
import Image from "next/image"; 
import Link from "next/link"; 
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper"; 
import { Swiper, SwiperSlide } from "swiper/react";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

import "swiper/css"; 
import "swiper/css/free-mode"; 
import "swiper/css/pagination";

// Coding profiles data
const codingProfiles = {
  slides: [
    {
      profiles: [
        {
          title: "LeetCode",
          path: "/leetcode.png",
          link: "https://leetcode.com/u/harishravikumar2005/",
          description: "Solved 360+ problems | Max Rating: 1,576 | Global rank: 186,712"
        },
        {
          title: "GeeksForGeeks",
          path: "/gfg.png",
          link: "https://www.geeksforgeeks.org/user/harishr2aofi/",
          description: "Solved 55+ problems | Institute Rank: 96"
        },
        {
          title: "CodeChef",
          path: "/codechef.png",
          link: "https://www.codechef.com/users/harishr2005",
          description: "Max Rating: 1149 | Global Rank: 97988"
        },
        {
          title: "SkillRack",
          path: "/skillrack.png",
          link: "https://www.skillrack.com/faces/resume.xhtml?id=483833&key=41f6d170fe24aa40df0de65a6ea882d3a958a7eb",
          description: "Solved 170+ problems | Top 18th in Contest - College level | 53+ Bronzes"
        },
      ],
    },
    {
      profiles: [
        {
          title: "GitHub",
          path: "/github.png",
          link: "https://github.com/Harish24-10-2005",
          description: "Open Source Contributions | Personal Projects"
        },
        {
          title: "HackerRank",
          path: "/hackerrank.png",
          link: "https://www.hackerrank.com/profile/harish_r2023ai_1",
          description: "4 Star Problem Solver | Algorithms & Data Structures"
        },
        {
          title: "Codeforces",
          path: "/codeforces.png",
          link: "https://codeforces.com/profile/harishr2005",
          description: "Competitive Programming | Algorithms Expert"
        },
      ],
    },
  ],
};

const CodingProfileSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[400px]"
    >
      {codingProfiles.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {slide.profiles.map((profile, profileIndex) => {
              // Determine if this is a bottom row card (index 2 or 3)
              const isBottomRow = profileIndex >= 2;
              
              return (
                <div
                  className={`relative rounded-lg overflow-hidden flex items-center justify-center group ${
                    isBottomRow ? "mt-4" : ""
                  }`}
                  key={profileIndex}
                  style={{
                    height: isBottomRow ? "75%" : "100%",
                    transform: isBottomRow ? "translateY(-25%)" : "none"
                  }}
                >
                  <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                    {/* image */}
                    <Image
                      src={profile.path}
                      alt={profile.title}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                    />

                    {/* overlay gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                      aria-hidden
                    />

                    {/* title and description */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-300">
                      <h4 className="text-xl font-bold text-white mb-2">{profile.title}</h4>
                      <p className="text-sm text-white text-center px-4">{profile.description}</p>
                      <Link
                        href={profile.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] mt-4 text-white"
                      >
                        <span>VIEW PROFILE</span>
                        <BsArrowRight aria-hidden className="text-xl" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              Coding Profiles <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Check out my coding profiles and competitive programming achievements across various platforms.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <CodingProfileSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;