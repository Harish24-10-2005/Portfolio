import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>HARISH R | AI Engineer & Data Scientist Portfolio</title>
        <meta
          name="description"
          content="Harish R is an AI Engineer and Data Scientist specializing in AI agents, machine learning, computer vision, and MERN stack development. View projects like Noiceless (Patented), Sketch Mentor, HorixYt, and more."
        />
        <meta
          name="keywords"
          content="Harish R, AI Engineer, Data Scientist, AI Agents, Machine Learning, Computer Vision, Deep Learning, MERN Stack, Python, React, Langchain, Motion Capture, Educational AI, Portfolio, B.Tech AI and Data Science, Sri Eshwar College of Engineering"
        />
        <meta name="author" content="Harish R" />
        <meta name="theme-color" content="#f13024" />
        
        {/* Additional SEO meta tags */}
        <meta property="og:title" content="HARISH R | AI Engineer & Data Scientist Portfolio" />
        <meta property="og:description" content="AI Engineer and Data Scientist with expertise in AI agents, machine learning, computer vision and full-stack development. View my projects and skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" /> {/* Replace with your actual URL */}
        
        {/* Contact information */}
        <meta name="contact:phone" content="8807639930" />
        <meta name="contact:email" content="harishravikumar24@gmail.com" />
        
        {/* Academic and professional details */}
        <meta name="education" content="B.Tech in Artificial Intelligence and Data Science, Sri Eshwar College of Engineering" />
        <meta name="skills" content="AI Agents, Machine Learning, Deep Learning, Computer Vision, MERN Stack, Python, React, Data Science" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com" /> {/* Replace with your actual URL */}
        <link rel="icon" type="image/png" href="/horix.png" />

      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;