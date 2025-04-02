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
}

const slides = [
  {
    src: '/ERMA.png',
    artist: 'ERMA',
    leftText: 'DYANA',
    leftParagraph: '2025',
    leftImg: '/audiomack1.png',
    rightParagraph: 'DYANA Music Video',
    rightImg: '/audiomack1.png',
  },
  {
    src: '/ecious_obd_9_3000x2000.jpg',
    artist: 'ECIOUS OBD',
    leftText: 'Feel the Energy',
    leftParagraph: 'Dive into creativity',
    leftImg: '/audiomack1.png',
    rightParagraph: 'Every beat tells a story.',
    rightImg: '/audiomack1.png',
  },
  {
    src: '/MR-FROSH.png',
    artist: 'Mr Frosh',
    leftText: 'Elevate Your Vibe',
    leftParagraph: 'Unlock new sonic experiences.',
    leftImg: '/audiomack1.png',
    rightParagraph: 'Music that transcends boundaries.',
    rightImg: '/audiomack1.png',
  },
  {
    src: '/MR-HENRY.png',
    artist: 'Mr Henry Agbai',
    leftText: 'Elevate Your Vibe',
    leftParagraph: 'Unlock new experiences.',
    leftImg: '/henry_agbai.jpg',
    rightParagraph: 'Music that transcends.',
    rightImg: '/henry_agbai.jpg',
  },
  {
    src: '/NAZO-EKEZIE.png',
    artist: 'Nazo Ekezie',
    leftText: 'Elevate Your Vibe',
    leftParagraph: 'Unlock new experiences.',
    leftImg: '/audiomack1.png',
    rightParagraph: 'Music that transcends.',
    rightImg: '/audiomack1.png',
  },
  {
    src: '/UZOR-ARUKUWE.png',
    artist: 'Uzor Arukwe',
    leftText: 'Elevate Your Vibe',
    leftParagraph: 'Unlock new experiences.',
    leftImg: '/uzor_arukwe.jpg',
    rightParagraph: 'Music that transcends',
    rightImg: '/wikipedia.jpg',
  },
];



const Hero = ({ scrollToFaq, scrollToService }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [animatedLetters, setAnimatedLetters] = useState<string[]>([]);


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


  // Animate artist name letter by letter in random order
  useEffect(() => {
    const artistName = slides[currentIndex].artist;
    let letters: string[] = artistName.split('');
    let newLetters: string[] = Array(letters.length).fill('');

    let index = 0;
    const interval = setInterval(() => {
      if (index < letters.length) {
        newLetters[index] = letters[index]; // Add letter one by one
        setAnimatedLetters([...newLetters]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Delay between letters

    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
    <div className="relative h-screen w-full text-center text-light text-white overflow-hidden">

      <div className="relative z-60">
        <Navbar
          scrollToFaq={scrollToFaq}
          scrollToService={scrollToService} />
      </div>
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.artist}
            className={cn(
              'absolute inset-0 w-full h-full',
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
        <div className="absolute left-80 top-[19%] flex flex-col items-start gap-3">
          <motion.img
            src={slides[currentIndex].leftImg} // Replace with the actual path to your left image
            alt="Left Image"
            className={cn(
              'w-40 h-50 w-20 h-25 rounded-lg object-cover',
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
          />
          <p
            className={cn(
              'text-white text-xl font-bold transition-transform duration-[3000ms] delay-[30ms]',
              transitioning ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            )}
          >
            {slides[currentIndex].leftText}
          </p>
          <p
            className={cn(
              'text-white text-lg transition-transform duration-[3000ms] delay-[30ms]',
              transitioning ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            )}
          >
            {slides[currentIndex].leftParagraph}
          </p>
        </div>

        {/* Right Image and Text */}
        <div className="absolute right-80 bottom-[19%] flex flex-col items-end gap-3">
          <p
            className={cn(
              'text-white text-lg transition-transform duration-[3000ms] delay-[30ms]',
              transitioning ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            )}
          >
            {slides[currentIndex].rightParagraph}
          </p>
          <motion.img
            src={slides[currentIndex].rightImg} // Replace with the actual path to your right image
            alt="Right Image"
            className={cn(
              'w-32 h-40 rounded-lg object-cover',
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
          />

        </div>

        {/* Artist Name Appears Letter by Letter */}
        <div className="absolute bottom-16 text-white text-3xl font-bold tracking-widest flex gap-1">
          {animatedLetters.map((letter, i) => (
            <span
              key={i}
              className="opacity-0 animate-fadeInOut"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>


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