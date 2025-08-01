"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";



interface NavbarProps {
  scrollToService: () => void,
  scrollToFaq: () => void,
  scrollToHeadline: () => void,
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToFaq,
  scrollToService,
  scrollToHeadline,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 bg-opacity-90 bg-dark text-light shadow-lg w-full text-white hero-bg">
      <div className="max-w-screen mx-auto items-center justify-between p-4 px-4 sm:px-6 md:px-6 lg:px-8"> {/*Edit the spacing to the right and left of the navbar*/}
        <div className="flex justify-between h-16 max-w-[85rem] mx-auto">
          <div className="flex items-center gap-1 mt-3">{/*flex items-center gap-2*/}
            <Link href="/">
              <Image src="/UA-logo-typo-gray.png" alt="Universaladage Logo" width={50} height={50} className="w-auto h-10 sm:h-12" />
            </Link>
            <Link href="/">
              <Image src="/UA-logo-Icon-black.png" alt="Universaladage Logo" width={50} height={50} className="w-auto h-10 sm:h-12" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-light focus:outline-none text-2xl font-medium">
              ☰
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex text-[white] cursor-pointer md:text-lg text-sm items-center space-x-9 font-medium">
            <Link href="/" className="hover:text-gold hover-effect">Spotlight</Link>
            <div onClick={scrollToHeadline} className="hover:text-gold hover-effect">Headline</div>            
            <div onClick={scrollToService} className="hover:text-gold hover-effect">Services</div>
            {/* <div onClick={scrollToFaq} className="hover:text-gold hover-effect">FAQ</div> */}
            <Link href="/nextup" className="hover:text-gold hover-effect">Nextup</Link>
            <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <Link href="/contact" className="hover:text-gold hover-effect">Contact us</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <motion.div className="md:hidden w-screen h-screen bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 flex flex-col items-center text-slate-300 absolute top-20 left-0 right-0 z-50 rounded-t-3xl"
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5 }}
          >
            <Link onClick={() => setIsOpen(false)} href="/" className="block mt-4 py-6 px-4 hover:text-gold text-black">Spotlight</Link>
            <div onClick={() => {scrollToService(); setIsOpen(false);}} className="block py-6 px-4 hover-effect text-black">Services</div>
            <div onClick={() => {setIsOpen(false); scrollToHeadline()}} className="block py-6 px-4 hover-effect text-black">Headline</div>
            <Link onClick={() => setIsOpen(false)} href="/contact" className="block py-6 px-4 hover-effect text-black">Contact</Link>
            <Link onClick={() => setIsOpen(false)} href="/nextup" className="block py-6 px-4 hover-effect text-black">Nextup</Link>
            {/* <div onClick={scrollToFaq} className="block py-6 px-4 hover-effect text-black">FAQ</div> */}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
