// components/landing/Footer.tsx
import Link from 'next/link';
import { cn } from "@/lib/utils"; // Assuming you might want cn later

const Footer = () => {
  return (
    <footer className="bg-black border-t border-neutral-800 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm gap-4">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Uvoyage. All rights reserved. (Work in Progress!)
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
          {/* TODO: Replace # with actual links */}
          <Link href="#" className="hover:text-purple-400 transition-colors duration-200">Privacy Policy</Link>
          <Link href="#" className="hover:text-purple-400 transition-colors duration-200">Terms of Service</Link>
          <Link href="#" className="hover:text-purple-400 transition-colors duration-200">Contact</Link>
          {/* Maybe add social links later */}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
