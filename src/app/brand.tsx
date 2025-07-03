"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

const logos = [
  {
    id: 3,
    image: "/logo/meta-new-facebook-2021-seeklogo.png",
  },
  {
    id: 5,
    image: "/logo/youtube-2017-seeklogo.png",
  },
  {
    id: 6,
    image: "/logo/google.png",
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
      <div id="brands" className=" p-4 mx-auto relative z-10 w-full py-8 md:pt-20 bg-black mb-4">
        <div className="text-4xl md:pb-8 md:text-7xl text-center font-bold 
        bg-clip-text text-white bg-opacity-50">
          Brands we work with
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          From small businesses to large corporations, we have helped
          brands and artists elevate their business.
        </p>

        <div className="grid grid-cols-3 justify-center mx-auto md:w-3/6 cursor-pointer mt-10">
          {logos.map((logo, i) => (
            <motion.div
            key={i}
            className="p-4 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
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