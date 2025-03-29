"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

const logos = [
  {
    id: 1,
    image: "/logo/audiomack-seeklogo.png",
  },
  {
    id: 2,
    image: "/logo/facebook.png",
  },
  {
    id: 3,
    image: "/logo/meta-new-facebook-2021-seeklogo.png",
  },
  {
    id: 4,
    image: "/logo/spotify-seeklogo.png",
  },
  {
    id: 5,
    image: "/logo/youtube-2017-seeklogo.png",
  },
  {
    id: 6,
    image: "/logo/master-card-seeklogo.png",
  },
  {
    id: 7,
    image: "/logo/instagram-seeklogo.png",
  },
  {
    id: 8,
    image: "/logo/boomplay.png",
  },
];

const Brands = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("brands");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div id="brands" className=" p-4 mx-auto relative z-10 w-full py-20 md:pt-20 bg-black mb-9 rounded-2xl">
        <div className="text-4xl md:pb-8 md:text-7xl text-center font-bold 
        bg-clip-text text-transparent bg-gradient-to-b from-gray-500 to-[#FDEBA3] bg-opacity-50">
          Brands we work with
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          From small businesses to large corporations, we have helped
          brands and artists elevate their business.
        </p>

        <div className="grid grid-cols-4 items-center justify-center mx-auto md:w-3/5 cursor-pointer">
          {logos.map((logo, i) => (
            <motion.div
            key={i}
            className="p-4 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            exit={{ opacity: 0, y: 30 }}
          >
            <Image priority
                src={logo.image}
                width={100}
                height={100}
                alt="logo"
                className="w-full max-w-full rounded-lg" />
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;