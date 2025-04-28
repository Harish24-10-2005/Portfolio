import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const HorixAI = () => {
  const handleWaitlistClick = () => {
    window.location.href = "https://horix-ai.netlify.app/";
  };

  return (
    <div className="h-screen bg-primary/30 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side content */}
          <motion.div 
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="lg:w-1/2 text-left"
          >
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-4xl lg:text-5xl font-bold mb-6"
            >
              Introducing <span className="text-accent">Horix AI.</span>
            </motion.h2>
            
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-lg mb-8 max-w-xl leading-relaxed"
            >
              Horix AI is building the AI Agentic Marketplace—a next-gen platform where anyone can create, 
              deploy, buy, sell, and rent AI agents with no-code to pro-code flexibility. We're empowering the 
              future of intelligent automation through a collaborative, trust-driven ecosystem for enterprises
              and creators alike.
            </motion.p>
            
            {/* Waitlist button with redirect */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <button 
                onClick={handleWaitlistClick}
                className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Join Waitlist
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right side image */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="lg:w-1/2 flex justify-center mt-12 lg:mt-0"
          >
            <img 
              src="/horix.png" 
              alt="Horix AI Platform" 
              className="rounded-xl shadow-2xl max-w-full lg:max-w-md xl:max-w-lg h-auto object-cover" 
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HorixAI;