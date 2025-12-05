import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- Custom Icons ---
const Icons = {
  Home: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10l9-8 9 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22v-8h6v8"/></svg>
  ),
  Program: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.5-9 4.5-9-4.5z"/><path d="M21 6.5V17c0 .6-.4 1-1 1h-8"/><path d="M3 6.5V17c0 .6.4 1 1 1h8"/><rect x="9" y="12" width="6" height="8" rx="1"/></svg>
  ),
  About: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M9.5 15a3.5 3.5 0 0 0 5 0"/></svg>
  ),
  Contact: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  ),
};

// --- Desktop Link Component (Now Colorful!) ---
const NavLink = ({ href, icon: Icon, children, hoverBg, hoverText }: any) => {
  return (
    <Link href={href}  >
      <motion.a
        className="group relative px-5 py-3 flex items-center gap-2 font-bold text-teal-50 cursor-pointer rounded-2xl transition-colors"
        whileHover="hover"
        initial="initial"
      >
        {/* Hover Background (Colorful Pill) */}
        <motion.span
          className={`absolute inset-0 rounded-2xl ${hoverBg}`}
          layoutId="navHover"
          initial={{ opacity: 0, scale: 0.8 }}
          variants={{
            hover: { opacity: 1, scale: 1 },
            initial: { opacity: 0, scale: 0.8 }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />

        {/* Icon (Rotates on hover) */}
        <motion.span 
          className={`relative z-10 transition-colors duration-200 group-hover:${hoverText}`}
          variants={{
            hover: { rotate: -10, scale: 1.1 },
            initial: { rotate: 0, scale: 1 }
          }}
        >
          <Icon />
        </motion.span>

        {/* Text */}
        <span className={`relative z-10 text-lg transition-colors duration-200 group-hover:${hoverText}`}>
          {children}
        </span>
      </motion.a>
    </Link>
  );
};

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Since it is relative now, we don't necessarily need scroll effects to shrink it, 
  // but we can keep the shadow effect if desired.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // CHANGED: 'fixed' -> 'relative'. 
    // This ensures the navbar pushes content down and doesn't overlap your pages.
    <nav className="relative w-full z-50 bg-white">
      
      <div className={`
        relative bg-lime-800 transition-all duration-500 ease-in-out shadow-lg
        pt-4 pb-4
      `}>
        
        <div className="container mx-auto px-6 flex justify-between items-center relative z-20">
          
          {/* --- LOGO SECTION --- */}
          <Link href="/"  >
            <a className="flex items-center gap-4 group">
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="relative h-14 w-44" 
              >
                 <Image 
                   src="/lwlogo.svg" 
                   alt="Little Wonders Logo" 
                   layout="fill"
                   objectFit="contain"
                 />
              </motion.div>
            </a>
          </Link>

          {/* --- DESKTOP MENU (Colorful Config) --- */}
          <div className="hidden xl:flex items-center space-x-2">
            <NavLink 
                href="/" 
                icon={Icons.Home} 
                hoverBg="bg-lime-600" 
                hoverText="text-lime-900"
            >
                Home
            </NavLink>
            <NavLink 
                href="/our-program" 
                icon={Icons.Program} 
                hoverBg="bg-emerald-400" 
                hoverText="text-emerald-900"
            >
                Program
            </NavLink>
            <NavLink 
                href="/about-us" 
                icon={Icons.About} 
                hoverBg="bg-violet-400" 
                hoverText="text-violet-900"
            >
                About Us
            </NavLink>
            <NavLink 
                href="/contact" 
                icon={Icons.Contact} 
                hoverBg="bg-sky-400" 
                hoverText="text-sky-900"
            >
                Contact
            </NavLink>
          </div>

          {/* --- ADMISSION BUTTON --- */}
<Link href="https://form.jotform.com/221313177735453" passHref >
    <motion.a 
        // motion.a is the child element. The href is passed to it from Link.
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="
            flex items-center gap-2 px-8 py-3 rounded-2xl 
            bg-yellow-400 text-teal-900 font-black text-lg
            shadow-[0_4px_0_rgb(180,110,0)] hover:shadow-[0_6px_0_rgb(180,110,0)] hover:-translate-y-1
            active:shadow-none active:translate-y-1
            transition-all cursor-pointer border-2 border-yellow-500
        "
    >
        <span>Admission</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </motion.a>
</Link>

          {/* --- MOBILE TOGGLE --- */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="xl:hidden bg-white text-teal-600 p-2 rounded-xl shadow-md active:scale-95 transition-transform"
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* --- DECORATIVE WAVE BOTTOM --- */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-10">
            <svg className="relative block w-[calc(100%+1.3px)] h-[30px] md:h-[45px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-lime-800"></path>
            </svg>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-0 left-0 w-full bg-lime-800 z-[60] overflow-hidden flex flex-col pt-32 pb-10"
          >
             {/* Close Button specific for mobile overlay */}
             <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-6 right-6 bg-white text-lime-800 p-2 rounded-full shadow-lg z-50"
             >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>

             {/* Background Decoration */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-yellow-300 blur-3xl"></div>
             </div>

             <div className="container mx-auto px-6 flex flex-col gap-6 relative z-50">
                {[
                  { name: "Home", href: "/", color: "bg-white text-teal-600" },
                  { name: "Our Program", href: "/our-program", color: "bg-emerald-100 text-emerald-700" },
                  { name: "About Us", href: "/about-us", color: "bg-purple-100 text-purple-700" },
                  { name: "Contact", href: "/contact", color: "bg-orange-100 text-orange-700" },
                ].map((item, idx) => (
                   <motion.div
                     key={item.name}
                     initial={{ x: -50, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ delay: idx * 0.1 }}
                   >
                     <Link href={item.href}  >
                       <a onClick={() => setIsOpen(false)} className={`block w-full p-6 rounded-3xl text-2xl font-black ${item.color} shadow-lg transform active:scale-95 transition-transform`}>
                         {item.name}
                       </a>
                     </Link>
                   </motion.div>
                ))}

                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Link href="https://form.jotform.com/221313177735453"  >
                    <a className="block w-full py-5 rounded-full bg-yellow-400 border-b-4 border-yellow-600 text-teal-900 font-black text-2xl text-center shadow-xl">
                      Apply Now
                    </a>
                  </Link>
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;