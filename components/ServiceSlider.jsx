import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FaGithub, FaVideo, FaLock } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md"; // Fixed import path
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Project data from resume
const serviceData = [
  {
    Icon: BsRobot,
    title: "Noiceless",
    description: "Motion Capture Tech - 3D Human BVH Model from Video with advanced smoothing techniques.",
    link: "https://github.com/Harish24-10-2005/3d_Human_BVH_model_from_video",
    year: "2024",
    isPatented: true
  },
  {
    Icon: BsRobot,
    title: "Sketch Mentor",
    description: "AI Agentic Platform for math problem solving with real-time handwritten equation recognition.",
    link: "https://www.youtube.com/watch?feature=shared&v=qdQFVhxujs0",
    year: "2025",
    videoLink: true
  },
  {
    Icon: FaVideo,
    title: "HorixYt",
    description: "AI Agentic Video Generation for YouTube automation with 98% production process automation.",
    link: "https://github.com/Harish24-10-2005/YouTube_Shorts_Automation",
    year: "2025"
  },
  {
    Icon: MdAutoGraph,
    title: "Yeildify",
    description: "ML-Based Agriculture system for novice farmers with 94% accuracy in plant prediction.",
    link: "https://github.com/Harish24-10-2005/Yieldify",
    year: "2024"
  },
  {
    Icon: RxDesktop,
    title: "ShopLens AI",
    description: "AI E-Commerce platform for product detection from videos and real-time price comparison.",
    link: "https://github.com/Harish24-10-2005/ShopLens-",
    year: "2025"
  },
  {
    Icon: MdAutoGraph,
    title: "AItalytics",
    description: "AI Data Science platform for data sourcing, synthetic data generation, and automated model building.",
    link: "#",
    year: "Present"
  }
];

const ServiceSlider = () => {
  // Function to handle card click
  const handleCardClick = (link) => {
    if (link && link !== "#") {
      window.open(link, '_blank');
    }
  };

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div 
            onClick={() => handleCardClick(item.link)}
            className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
          >
            {/* icon */}
            <div className="text-4xl text-accent mb-4 flex justify-between w-full">
              <item.Icon aria-hidden />
              <div className="flex gap-2">
                {item.isPatented && (
                  <FaLock className="text-2xl text-accent/80" title="Patented" />
                )}
                {item.videoLink && (
                  <FaVideo className="text-2xl text-accent/80" title="Video Available" />
                )}
              </div>
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg flex justify-between">
                <span>{item.title}</span>
                <span className="text-accent text-sm">{item.year}</span>
              </div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              {item.link !== "#" ? (
                <FaGithub 
                  className="group-hover:text-accent transition-all duration-300"
                  aria-hidden
                />
              ) : (
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                  aria-hidden
                />
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;