import HoverEffect from "@/components/ui/card-hover-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faGlobe, faHashtag, faMusic } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faWikipediaW, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { MdLocalMovies } from "react-icons/md";


const services = [
  { icon: <div className="bg-[#A8923C] p-4 rounded-full"><FontAwesomeIcon icon={faHashtag} className="w-6 h-6 text-[1A237E]" /></div>, title: "Social Media Management", description: "Build a powerful online presence." },
  { icon: <div className="bg-[#A8923C] p-4 rounded-full"><FontAwesomeIcon icon={faMap} className="w-6 h-6 text-[1A237E]" /></div>, title: "SEO & Advertising", description: "Maximize visibility across digital platforms." },
  { icon: <div className="bg-[#A8923C] p-4 rounded-full"><FontAwesomeIcon icon={faGlobe} className="w-6 h-6 text-[1A237E]" /></div>, title: "Website Development", description: "High-performance websites for brands." },
  { icon: <div className="bg-[#A8923C] p-4 rounded-full"><FontAwesomeIcon icon={faGoogle} className="w-6 h-6 text-[1A237E]" /></div>, title: "Google Profiling", description: "Securing credibility with Google Knowledge Panels & verification." },
  { icon: <div className="bg-[#A8923C] p-4 rounded-full"><FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-[1A237E]" /></div>, title: "Account Recovery & Branding", description: "Restoring access and optimizing online reputation." },
  { icon: <div className="bg-[#A8923C] p-4 rounded-full"><FontAwesomeIcon icon={faWikipediaW} className="w-6 h-6 text-[1A237E]" /></div>, title: "Wikipedia & PR Services", description: "Establishing authority through trusted media platforms." },
  { icon: <div className="bg-[#A8923C] p-4 rounded-full"><FontAwesomeIcon icon={faMusic} className="w-6 h-6 text-[1A237E]" /></div>, title: "Talent & Artist Management", description: "Elevating artists and creatives with expert strategy." },
  { icon: <div className="bg-[#A8923C] p-4 rounded-full"><MdLocalMovies className="w-6 h-6 text-[1A237E]" /></div>, title: "Music & Movie Distribution", description: "Expanding reach on all major streaming platforms." },
];


const Services = () => {
  return (
    <section className="bg-black w-full">
      <div className="container mx-auto py-15 md:px-18">
        <h2 className="text-center text-4xl font-bold md:pb-8 md:text-7xl bg-clip-text text-white bg-opacity-50">Streamline your busines<br /> with our services</h2>
        <p className="my-2 text-lg font-normal text-neutral-300 text-center mx-auto">From Talent and Artist Management to Social Media Management, We offer a wide range of services to help you grow your business or talent</p>
        <HoverEffect items={services} />
      </div>
    </section>
  );
};

export default Services;
