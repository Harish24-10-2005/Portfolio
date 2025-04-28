import Link from "next/link";

import {
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
  RiRedditLine,
  RiTwitterXLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/_crimson_comet/",
    Icon: RiInstagramLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harish-r-12372b28b/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/Harish24-10-2005", // <-- update with your actual GitHub link
    Icon: RiGithubLine,
  },
  {
    name: "Reddit",
    link: "https://www.reddit.com/user/Alternative_Bar3067/",
    Icon: RiRedditLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
