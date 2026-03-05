import { BsRobot } from "react-icons/bs";
import { FaGithub, FaVideo } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { RxArrowTopRight } from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: BsRobot,
    title: "JobStream",
    year: "2025",
    link: "https://github.com/Harish24-10-2005/Jobstream-backend",
    impact: "85% autonomous application success rate",
    description:
      "Event-driven FastAPI + LangGraph platform with Redis Pub/Sub, Celery, RAG, HITL checkpoints, and production guardrails.",
    tech: ["FastAPI", "LangGraph", "Redis", "Celery", "Supabase"],
  },
  {
    Icon: FaVideo,
    title: "HorixYt",
    year: "2025",
    link: "https://github.com/Harish24-10-2005/Horix-Yt",
    impact: "~95% manual production effort reduced",
    description:
      "Prompt-to-video multi-agent pipeline for YouTube videos and Shorts with async orchestration and scalable publishing.",
    tech: ["Python", "FastAPI", "React", "LLMs", "Docker"],
  },
  {
    Icon: MdAutoGraph,
    title: "Big Data + AI Agents",
    year: "2025",
    link: "#",
    impact: "4 producers + 2 consumers on Kafka streaming",
    description:
      "Real-time ETL and analytics dashboard combining Kafka, Spark, Hadoop, Airflow, and NL-to-SQL agent workflows.",
    tech: ["Kafka", "Spark", "Hadoop", "Airflow", "MySQL"],
  },
  {
    Icon: BsRobot,
    title: "Sketch Mentor",
    year: "2024",
    link: "#",
    impact: "95% reliable Manim code generation",
    description:
      "Interactive AI math tutor with interpret-solve-verify stages and QLoRA fine-tuned Qwen2.5-Coder for precise animation output.",
    tech: ["QLoRA", "Unsloth", "Manim", "FastAPI", "React"],
  },
];

const ServiceSlider = () => {
  const openLink = (link) => {
    if (link && link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 14 },
        768: { slidesPerView: 2, spaceBetween: 16 },
      }}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[390px] sm:h-[420px]"
    >
      {serviceData.map((item) => (
        <SwiperSlide key={item.title}>
          <div
            onClick={() => openLink(item.link)}
            className="h-full rounded-2xl border border-white/10 bg-[rgba(25,18,45,0.75)] p-6 flex flex-col justify-between group hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div>
              <div className="text-3xl text-accent mb-4 flex items-center justify-between">
                <item.Icon aria-hidden />
                <span className="text-xs font-semibold tracking-[0.2em] text-white/60">{item.year}</span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm mb-3">{item.description}</p>
              <p className="text-accent text-sm font-medium mb-4">{item.impact}</p>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-white/5 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-2xl mt-4 text-white/80 group-hover:text-accent transition-all duration-300">
              {item.link === "#" ? <RxArrowTopRight aria-hidden /> : <FaGithub aria-hidden />}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
