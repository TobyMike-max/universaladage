"use client"

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AnimatedSection from "@/components/AnimatedSection";
import SliderOne from "@/components/ui/Slider";
import { useRef } from "react";
import FAQS from "./faq";
import Footer from "./footer";
import Brands from "./brand";
import Headlines from "@/components/Headline";

export default function Home() {

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToBrandDesign = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToService = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="container"> {/*className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"*/}
      <main> {/*className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start" */}
        <AnimatedSection>
          <Hero
            scrollToFaq={scrollToFaq}
            scrollToService={scrollToService}
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

        <div>
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
      <Footer />
    </div>
  );
}
