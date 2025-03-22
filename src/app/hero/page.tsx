"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";


interface HeroProps {
  scrollToServiceDesign: () => void;
  scrollToFaqDesign: () => void;
}

const Hero: React.FC<HeroProps> = ({
scrollToFaqDesign, scrollToServiceDesign})  => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 300], [0, -100]); // Moves text upwards on scroll
  const yImage = useTransform(scrollY, [0, 300], [0, 50]);  // Moves background slower for depth

  return (
    <div className="relative h-screen w-full text-center text-light text-white overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full overflow-hidden" style={{ y: yImage }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay for readability */}
        <div className="w-full h-full flex items-center justify-center">
            
        </div>
      </motion.div>

<script async src="//www.instagram.com/embed.js"></script>
      {/* Semi-transparent Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-50">
        <Navbar 
        scrollToFaqDesign={scrollToFaqDesign}
        scrollToServiceDesign={scrollToServiceDesign}/>
      </div>

      <Spotlight className="hidden md:flex md:left-80 md:top-80"
      fill="white"/>
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center h-full justify-center text-left font-[Montserrat] mx-auto">

        <motion.h1
          style={{ y: yText }}
          className="text-3xl md:text-6xl font-[Montserrat] text-gray-100 font-semibold drop-shadow-xl max-w-6xl text-center"
        >
          We Build Legacies <br /> That Stand The Test Of Time.
        </motion.h1>
        <motion.p
          style={{ y: yText }}
          className="text-lg md:text-xl md:w-3/7 font-[Montserrat] text-[2E2E2E] drop-shadow-xl items-left my-5 text-center"
        >
          Committed to transforming creatives into globally recognized brands.
        </motion.p>

        <motion.button
          style={{ y: yText }}
          // onClick={scrollToServiceDesign}
          className="text-xl inline-flex h-12 animate-shimmer items-center justify-center mt-15 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 py-7 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <Link href="/contact" className="hover:text-gold hover-effect"> 
            Get Started
          </Link>
          </motion.button>
      </div>
    </div>
  );
}

export default Hero;