import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const imageVariants = {
  initial: { y: 0 },
  animate: {
    y: [-20, 20, 0], // Moves up, down, then back to original
    transition: {
      duration: 7,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

const AboutSection = () => {
  return (
    <div className="bg-black mx-auto flex flex-col lg:flex-row items-center py-35 px-6 mb-9">
      {/* Left Side - Images */}
      <div className="relative w-full lg:w-1/2 h-[500px] flex justify-center">
        {/* Smallest Image (Top) */}
        <motion.div
          className="absolute top-[-50] left-90 w-40 md:w-48 lg:w-56 z-10"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/audiomack2.jpg"
            alt="Small Artist Image"
            width={230}
            height={150}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Biggest Image (Middle - Overlapping Smallest by 1/4) */}
        <motion.div
          className="absolute top-14 left-20 w-56 md:w-72 lg:w-80 z-20"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/koleyewon.jpg"
            alt="Large Artist Image"
            width={1000}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </motion.div>

        {/* Medium Image (Bottom - Overlapping Biggest by 2/5) */}
        <motion.div
          className="absolute bottom-[-80] left-80 w-48 md:w-56 lg:w-64 z-10"
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/KOLORADO.jpg"
            alt="Medium Artist Image"
            width={256}
            height={320}
            className="rounded-lg shadow-md"
          />
        </motion.div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 mt-30 lg:mt-0 lg:pl-16 text-center lg:text-left">
        <h2 className="text-4xl font-bold text-4xl md:pb-8 md:text-7xl text-center font-bold 
        bg-clip-text text-transparent bg-gradient-to-b from-gray-500 to-[#FDEBA3] bg-opacity-50">Meet Our Artists</h2>
        <p className="mt-4 text-gray-300">
          We are dedicated to discovering, nurturing, and elevating artists to new heights. Our roster
          includes some of the most promising talents in the industry, pushing the boundaries of creativity
          and excellence.
        </p>
        <button className="mt-6 px-6 py-3 bg-gold text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutSection;

