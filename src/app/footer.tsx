import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#333] text-white py-8 px-6 container">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Logo & Copyright */}
        <div>
          <h2 className="text-2xl font-bold mb-8">UniversalAdage</h2>
          <p className="text-gray-600 mt-6">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold mb-8">Quick Links</h2>
          <ul className="space-y-8 md:space-y-4">
            <li><div className="text-gray-400">About</div></li>
            <li><div className="text-gray-400">Services</div></li>
            <li><Link href="/contact" className="text-gray-400">Contact</Link></li>
            <li><div className="text-gray-400">FAQ</div></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold mb-8">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-20 text-xl">
            <a href="https://www.facebook.com/share/14t5xUp4AR/?mibextid=wwXIfr" className="hover:text-hot-pink" target="_blank"><FaFacebook /></a>
            <a href="https://www.instagram.com/universaladage?igsh=YnA5dHhrcG52cnY3&utm_source=qr" className="hover:text-hot-pink" target="_blank"><FaInstagram /></a>
            <a href="https://github.com" target="_blank" className="hover:text-hot-pink"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
