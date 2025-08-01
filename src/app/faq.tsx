import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const FAQS = () => {
  return (
    <div className={`md:py-10 bg-[#D9D9D9] w-full`}>
      <div className=" p-10 md:p-4 md:px-20 container mx-auto">
        <div className="text-3xl md:text-7xl font-bold text-black">
          Have questions ?
        </div>
        <div className="font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-[#FCDC5A] to-[#FDE791] bg-clip-text text-transparent">
          Get answers.
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Universaladage?</AccordionTrigger>
            <AccordionContent>
              Universaladage is a dynamic powerhouse in digital solutions, branding, and entertainment, committed to<br /> transforming businesses, influencers, and creatives into globally recognized brands.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How to start ?</AccordionTrigger>
            <AccordionContent>
              You can start by contacting us. We will get back to you within 24 hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Pricing ?
            </AccordionTrigger>
            <AccordionContent>
              We offer custom tailored solutions for your business. Contact us to get a quote.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Support ?
            </AccordionTrigger>
            <AccordionContent>
              We offer Monday-Friday support for all our clients.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>);
}

export default FAQS;