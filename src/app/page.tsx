"use client"


import Hero from "@/app/hero/page";
import Services from "@/app/services/page";
import ContactForm from "@/app/contact/page";
import AnimatedSection from "@/components/AnimatedSection";
import SliderOne from "@/components/ui/Slider";
import { useRef } from "react";
import FAQS from "./faq";
import Footer from "./footer";

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

  const scrollToServiceDesign = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToFaqDesign = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div> {/*className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"*/}
      <main> {/*className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start" */}
      <AnimatedSection>
      <Hero 
      scrollToFaqDesign={scrollToFaqDesign}
      scrollToServiceDesign={scrollToServiceDesign}
      />
      </AnimatedSection>
      
      <AnimatedSection>
      <div className="w-full pt-3">
        <SliderOne />
      </div>
      </AnimatedSection>

      <div ref={serviceRef}>
      <AnimatedSection delay={0.3}>
      <Services />
      </AnimatedSection>
      </div>

      <div ref={faqRef}>
        <AnimatedSection delay={0.5}>
          <FAQS />
        </AnimatedSection>
      </div>
      </main>
      <Footer />
    </div>
  );
}
