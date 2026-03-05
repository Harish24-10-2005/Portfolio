import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const profileCards = [
  {
    title: "LeetCode",
    metric: "Rating 1866 · Top 6%",
    detail: "800+ problems · 70+ contests · Knight",
    href: "https://leetcode.com/u/harishravikumar2005/",
  },
  {
    title: "CodeChef",
    metric: "Max 1490 · 2★",
    detail: "Global Rank: 28893",
    href: "https://www.codechef.com/users/harishr2005",
  },
  {
    title: "GitHub",
    metric: "AI + Backend Repositories",
    detail: "JobStream, HorixYt, Big-Data systems",
    href: "https://github.com/Harish24-10-2005",
  },
  {
    title: "HackerRank",
    metric: "Problem Solving Track",
    detail: "Consistent algorithm practice",
    href: "https://www.hackerrank.com/profile/harish_r2023ai_1",
  },
];

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-28 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 gap-8 items-start">
          <motion.div variants={fadeIn("right", 0.25)} initial="hidden" animate="show" exit="hidden">
            <h2 className="h2 mb-4">
              Competitive <span className="text-accent">Programming</span>
            </h2>
            <p className="text-white/80 max-w-xl mb-8">
              This page highlights live coding strength, contest readiness, and public profile consistency for recruiter
              review. All links open to real profiles and current competitive data.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {profileCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:border-accent/60 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{card.title}</h3>
                    <BsArrowUpRight className="text-accent" aria-hidden />
                  </div>
                  <p className="text-sm text-accent">{card.metric}</p>
                  <p className="text-xs text-white/70 mt-1">{card.detail}</p>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="rounded-2xl border border-white/10 bg-[rgba(18,13,33,0.8)] p-4 sm:p-6"
          >
            <h3 className="text-xl font-semibold mb-3">LeetCode Live Snapshot</h3>
            <p className="text-sm text-white/75 mb-4">
              Auto-updating card/graph powered by LeetCode public profile stats (username: harishravikumar2005).
            </p>

            <div className="space-y-4">
              <img
                src="https://leetcard.jacoblin.cool/harishravikumar2005?theme=dark&font=Karma&ext=contest"
                alt="LeetCode live rating and profile graph"
                className="w-full rounded-xl border border-white/10"
              />
              <Link
                href="https://leetcode.com/u/harishravikumar2005/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-accent text-sm tracking-wide"
              >
                Open LeetCode Profile <BsArrowUpRight aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
