"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";


interface HeroProps {
  scrollToService: () => void
  scrollToFaq: () => void
}

const Hero = ({
  scrollToFaq, 
  scrollToService
}:HeroProps) => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 300], [0, -100]); // Moves text upwards on scroll
  const yImage = useTransform(scrollY, [0, 300], [0, 50]);  // Moves background slower for depth

  return (
    <div className="relative h-screen w-full text-center text-light text-white overflow-hidden">
      {/* Background Image */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-20" style={{ y: yImage }}
      >
        <source src="/videos/Video1.mp4" type="video/mp4" />
      </motion.video>
      {/* Semi-transparent Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-30"></div>
      <div className="relative z-60">
        <Navbar 
        scrollToFaq={scrollToFaq}
        scrollToService={scrollToService}/>
      </div>

      {/* Foreground Content */}
      <div className="relative z-50 flex flex-col items-center h-full justify-center text-left font-[Montserrat] mx-auto">

        <motion.h1
          style={{ y: yText }}
          className="text-3xl md:text-6xl font-[Montserrat] text-gray-100 font-semibold drop-shadow-xl max-w-6xl text-center z-50"
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
          className="text-2xl inline-flex h-12 animate-shimmer items-center justify-center mt-15 rounded-4xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10 py-7 font-medium text-slate-350 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <Link href="/contact" className="hover:text-gold hover-effect"> 
            Get Started
          </Link>
          </motion.button>
      </div>
    </div>
  );
}

export default Hero;