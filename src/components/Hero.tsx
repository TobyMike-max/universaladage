"use client";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";


interface HeroProps {
  scrollToService: () => void
  scrollToFaq: () => void
  scrollToHeadline: () => void
}

const slides = [
  {
    src: '/UZOR-ARUKUWE.png',
    artist: 'Uzor Arukwe',
    leftText: 'AMVCA Nominee',
    leftParagraph: '2025',
    leftImg: '/uzor_arukwe.png',
    rightParagraph: 'Best supporting actor',
    rightImg: undefined,
    link: 'https://en.wikipedia.org/wiki/Uzor_Arukwe',
  },
  {
    src: '/NAZO-EKEZIE.png',
    artist: 'Nazo Ekezie',
    leftText: 'City People Movie Award Winner',
    leftParagraph: '2017',
    leftImg: '/nazo_ezekie.png',
    rightParagraph: 'Best Upcoming Actress',
    rightImg: undefined,
    link: 'https://en.wikipedia.org/wiki/Nazo_Ekezie',
  },
  {
    src: '/ERMA.png',
    artist: 'ERMA',
    leftText: 'DYANA',
    leftParagraph: '2025',
    leftImg: '/erma_pic.png',
    rightParagraph: 'DYANA Music Video',
    rightImg: undefined,
    link: 'https://app.chartmetric.com/artist/12015611',
  },
  {
    src: '/MR-FROSH.png',
    artist: 'Mr Frosh',
    leftText: 'Remedy',
    leftParagraph: '2024',
    leftImg: '/frosh_pic_1.jpg',
    rightParagraph: 'Music that transcends boundaries.',
    rightImg: undefined,
    link: 'https://g.co/kgs/G7isBvN',
  },
  {
    src: '/ecious_obd_9_3000x2000.jpg',
    artist: 'ECIOUS OBD',
    leftText: 'HP',
    leftParagraph: '2025',
    leftImg: 'ecious_pic_1.png',
    rightParagraph: 'Every beat tells a story.',
    rightImg: undefined,
    link: 'https://g.co/kgs/v92dJxv',
  },
  {
    src: '/MR-HENRY.png',
    artist: 'Mr Henry Agbai',
    leftText: 'AMVCA Participant',
    leftParagraph: '2022',
    leftImg: '/henry_agbai_pic.png',
    rightParagraph: '',
    rightImg: undefined,
    link: 'https://wikitia.com/wiki/Mr_Henry_Agbai',
  },
];

const Hero = ({ scrollToFaq, scrollToService, scrollToHeadline }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setTransitioning(false);
      }, 4000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full text-center text-light text-white overflow-hidden">

      <div className="relative z-60">
        <Navbar
          scrollToFaq={scrollToFaq}
          scrollToService={scrollToService}
          scrollToHeadline={scrollToHeadline} />
      </div>
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.artist}
            className={cn(
              'absolute inset-0 w-full h-full animate-fadeInOut',
              index === currentIndex ? 'opacity-100' : 'opacity-0',
            )}
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 10%',
              backgroundRepeat: 'no-repeat',
            }}
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1.2 : 1,
            }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{
              duration: 8, // Adjust duration for the slow scaling effect
            }}
          ></motion.div>
        ))}

        {/* Left Image and Text */}
        <div className="absolute left-80 top-[20%] flex flex-col items-start gap-3">
          {/* <motion.img
            src={slides[currentIndex].leftImg} // Replace with the actual path to your left image
            alt="Left Image"
            className={cn(
              'w-50 h-50 object-cover',
              transitioning ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            )}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: transitioning ? 1 : 0,
              opacity: transitioning ? 1 : 0,
            }}
            transition={{
              duration: 3, // Matches the duration of the text animation
              delay: 0.03, // Matches the delay of the text animation
            }}
          /> */}
          <Link href={slides[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <p
            className={cn(
              'text-[gold] md:text-xl text-base font-bold transition-transform duration-[3000ms] delay-[30ms]',
              transitioning ? 'translate-y-10 opacity-100' : 'translate-y-50 opacity-0'
            )}
          >
            {slides[currentIndex].leftText}
          </p>
          <p
            className={cn(
              'text-white text-sm pt-0 mt-0 font-extrabold transition-transform duration-[3000ms] delay-[30ms]',
              transitioning ? 'translate-y-10 opacity-100' : 'translate-y-50 opacity-0'
            )}
          >
            {slides[currentIndex].leftParagraph}
          </p>
          </Link>
        </div>

        {/* Center Text */}
        <motion.h1
          key={slides[currentIndex].artist}
          className="absolute bottom-20 text-2xl md:text-5xl font-bold tracking-wide text-white z-20 font-playfair"
          initial={{
            opacity: 0,
            filter: 'blur(8px)',
            color: '#d4af37', // Light gold
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
            color: '#ffffff', // Full white
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
          }}
        >
          {slides[currentIndex].artist}
        </motion.h1>


        {/* Right Image and Text */}
        {slides[currentIndex].rightImg !== undefined ? 
        <div className="absolute right-80 bottom-[20%] flex flex-col items-end gap-3">
          <p
            className={cn(
              'text-white text-lg font-bold transition-transform duration-[3000ms] delay-[30ms]',
              transitioning ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            )}
          >
            {slides[currentIndex].rightParagraph}
          </p>
          <motion.img
            src={slides[currentIndex].rightImg} // Replace with the actual path to your right image
            alt="Right Image"
            className={cn(
              'w-45 h-25 object-cover',
              transitioning ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            )}
            style={{ backgroundPosition: 'center 40%'}}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: transitioning ? 1 : 0,
              opacity: transitioning ? 1 : 0,
            }}
            transition={{
              duration: 3, // Matches the duration of the text animation
              delay: 0.03, // Matches the delay of the text animation
            }}
          /> 
          </div> : <></>
}

        {/* Dots Navigation */}
        <div className="absolute bottom-8 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'w-4 h-4 rounded-full transition-all duration-300',
                index === currentIndex ? 'bg-white scale-125' : 'bg-gray-400'
              )}
            ></button>
          ))}
        </div>

        {/* Fade-in & Fade-out Animation */}
        <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-scaleUp {
    animation: scaleUp 6s ease-in-out infinite;
  }
      `}</style>

      </section>
    </div>
  );
}

export default Hero;