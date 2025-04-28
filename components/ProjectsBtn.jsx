import Image from "next/image";
import Link from "next/link";
import { HiArrowDownTray } from "react-icons/hi2"; // download icon instead of arrow right

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="https://drive.google.com/uc?export=download&id=13VB5fT6nLuCbmiTs-SmklPVAa46-la72"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded.png"
          alt="Download Resume"
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] pointer-events-none select-none"
        />
        <HiArrowDownTray
          className="absolute text-4xl group-hover:translate-y-2 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
