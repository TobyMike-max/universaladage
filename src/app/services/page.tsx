import HoverEffect from "@/components/ui/card-hover-effect";
import { SiMediamarkt, SiTalenthouse } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { DiWebplatform } from "react-icons/di";
import { IoLogoGoogleplus } from "react-icons/io";
import { RiDeviceRecoverFill } from "react-icons/ri";
import { FaWikipediaW } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";


const services = [
    { icon: <div className="bg-blue-100 p-4 rounded-full"><SiMediamarkt className="w-8 h-8 text-blue-600"/></div>, title: "Social Media Management", description: "Build a powerful online presence."},
    { icon: <div className="bg-blue-100 p-4 rounded-full"><TbSeo className="w-8 h-8 text-blue-600"/></div>, title: "SEO & Advertising", description: "Maximize visibility across digital platforms."},
    { icon: <div className="bg-blue-100 p-4 rounded-full"><DiWebplatform className="w-8 h-8 text-blue-600"/></div>, title: "Website Development", description: "High-performance websites for brands."},
    { icon: <div className="bg-blue-100 p-4 rounded-full"><IoLogoGoogleplus className="w-8 h-8 text-blue-600"/></div>, title: "Google Profiling", description: "Securing credibility with Google Knowledge Panels & verification."},
    { icon: <div className="bg-blue-100 p-4 rounded-full"><RiDeviceRecoverFill className="w-8 h-8 text-blue-600"/></div>, title: "Account Recovery & Branding", description: "Restoring access and optimizing online reputation."},
    { icon: <div className="bg-blue-100 p-4 rounded-full"><FaWikipediaW className="w-8 h-8 text-blue-600"/></div>, title: "Wikipedia & PR Services", description: "Establishing authority through trusted media platforms."},
    { icon: <div className="bg-blue-100 p-4 rounded-full"><SiTalenthouse className="w-8 h-8 text-blue-600"/></div>, title: "Talent & Artist Management", description: "Elevating artists and creatives with expert strategy."},
    { icon: <div className="bg-blue-100 p-4 rounded-full"><MdLocalMovies className="w-8 h-8 text-blue-600"/></div>, title: "Music & Movie Distribution", description: "Expanding reach on all major streaming platforms."},  
  ];
  
  const Services = () => {
    return (
      <section>
        <div className="bg-black py-10">
        <h2 className="text-center text-4xl font-bold md:pb-8 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-gray-500 to-sky-200 bg-opacity-50">Streamline your busines<br /> with our services</h2>
        <p className="my-2 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">From Talent and Artist Management to Social Media Management, We offer a wide range of services to help you grow your business</p>
        <HoverEffect items={services} />
        </div>
      </section>
    );
  };
  
  export default Services;
  