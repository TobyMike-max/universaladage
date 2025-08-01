"use client"

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AnimatedSection from "@/components/AnimatedSection";
import SliderOne from "@/components/ui/Slider";
import { useRef } from "react";
import FAQS from "./faq";
import Brands from "./brand";
import Headlines from "@/components/Headline";


import { Poppins } from 'next/font/google'
import Footer from "./footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function Home() {

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToHeadline = () => {
    headlineRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToService = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={`${poppins.className}`}> {/*className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"*/}
      <main> {/*className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start" */}
        <AnimatedSection>
          <Hero
            scrollToFaq={scrollToFaq}
            scrollToService={scrollToService}
            scrollToHeadline={scrollToHeadline}
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="w-full pt-3 bg-[#D9D9D9]">
            <SliderOne />
          </div>
        </AnimatedSection>

        {/*<div>
          <AnimatedSection delay={0.3}>
          // max-w-6xl mx-auto 
            <Artist />
          </AnimatedSection>
        </div> */}

        <div ref={headlineRef}>
          <AnimatedSection delay={0.3}>
            <Headlines />
          </AnimatedSection>
        </div>

        <div>
          <AnimatedSection delay={0.5}>
            <Brands />
          </AnimatedSection>
        </div>

        <div ref={serviceRef}>
          <AnimatedSection delay={0.7}>
            <Services />
          </AnimatedSection>
        </div>

        <div ref={faqRef}>
          <AnimatedSection delay={0.9}>
            <FAQS />
          </AnimatedSection>
        </div>
      </main>
      <Footer color={'bg-[#000]'} />
    </div>
  );
}
