import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Navigation, Camera, 
  Sun, Cloud, X, ZoomIn 
} from 'lucide-react';

import Nav from '../components/nav';
import Footer from '../components/footer';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 20 }
  }
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
};

// --- Decorative Components ---
const PolkaDotPattern = ({ color = "#e5e7eb" }) => (
  <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" 
       style={{ backgroundImage: `radial-gradient(${color} 3px, transparent 3px)`, backgroundSize: '24px 24px' }}>
  </div>
);

const Tape = ({ rotate = "rotate-3", top = "-top-4" }) => (
  <div className={`absolute ${top} left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 backdrop-blur-md shadow-sm z-20 ${rotate}`}></div>
);

export default function Contact() {
  return (
    <div className="bg-stone-50 min-h-screen font-sans overflow-x-hidden selection:bg-orange-300 selection:text-black">
      <Head>
        <title>Contact Us | Our Playful Branches</title>
        <meta property='og:title' content='Contact Us'/>
        <meta name='description' content='Visit our preschool campuses in Gulshan and Uttara.'/>
        <link rel="icon" href="/whitelogo.svg" />
      </Head>

      <Nav />
      
      {/* --- Page Header --- */}
      <div className="relative pt-32 pb-24 bg-sky-400 overflow-hidden text-center">
        <PolkaDotPattern color="#bae6fd" />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-md mb-4 tracking-tight">
            Come Say Hello!
          </h1>
          <p className="text-xl text-sky-50 font-bold max-w-2xl mx-auto">
            Find your nearest campus below. We can't wait to meet you.
          </p>
        </motion.div>
        
        {/* Floating Decorations */}
        <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-10 text-white/20">
          <Cloud size={100} fill="currentColor" />
        </motion.div>
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 right-10 text-yellow-300">
          <Sun size={80} fill="currentColor" />
        </motion.div>
      </div>

      {/* --- Branch 1: Gulshan (Orange Theme) --- */}
      <BranchSection 
        name="Gulshan Branch"
        theme="amber"
        address="House 40, Flat B2, Road 1, Gulshan 1, Dhaka"
        phones={["01746503232", "02222298584"]}
        email="littlewondersgulshan2@gmail.com"
  mapSrc="https://www.google.com/maps?q=Road+1+Block+A+Niketon+Gulshan+1+Dhaka&output=embed"
        imageFolder="Gulshan"
        imageCount={6}
      />

      {/* --- Separator --- */}
      <div className="h-24 w-full bg-stone-50 relative overflow-hidden flex items-center justify-center">
         <div className="w-full h-1 bg-gray-200 absolute"></div>
         <div className="bg-white p-4 rounded-full shadow-sm z-10 border-4 border-gray-100">
            <Navigation className="text-gray-400" />
         </div>
      </div>

      {/* --- Branch 2: Uttara (Teal/Emerald Theme) --- */}
      <BranchSection 
        name="Uttara Branch"
        theme="emerald"
        address="House 56, Road 13, Sector 3, Uttara, Dhaka"
        phones={["01746503232", "0248950214"]}
        email="littlewonders_uttara@yahoo.com"
        mapSrc="https://maps.google.com/maps?q=Road%2013,%20Sector%203,%20Uttara,%20Dhaka+(Little%20wonders%20Play%20and%20Learn)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
        imageFolder="Uttara"
        imageCount={6}
      />

      <Footer />
    </div>
  );
}

// --- Reusable Branch Component ---

function BranchSection({ name, address, phones, email, mapSrc, theme, imageFolder, imageCount }: any) {
  // Theme Color Mapping
  const colors: any = {
    amber: { bg: "bg-orange-50", accent: "text-orange-600", border: "border-orange-200", btn: "bg-orange-500", iconBg: "bg-orange-100" },
    emerald: { bg: "bg-emerald-50", accent: "text-emerald-600", border: "border-emerald-200", btn: "bg-emerald-500", iconBg: "bg-emerald-100" },
  };
  const c = colors[theme];
  
  // Create array of image objects
  const images = Array.from({ length: imageCount }, (_, i) => ({
    id: i + 1,
    src: `/ALBUM/${imageFolder}/${imageFolder} (${i + 1}).jpeg`
  }));

  // Lightbox State
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className={`relative py-20 ${c.bg}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Title Badge */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className={`bg-white px-10 py-5 rounded-[2rem] shadow-xl border-b-8 ${c.border}`}
          >
            <h2 className={`text-3xl md:text-5xl font-black ${c.accent} tracking-tight uppercase flex items-center gap-3`}>
              <MapPin size={36} strokeWidth={3} /> {name}
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 items-start mb-24">
          
          {/* Left: Contact Info (Card Style) */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full xl:w-5/12 relative group"
          >
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gray-200 rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl relative border-4 border-white">
               
               <div className="space-y-8">
                  <ContactItem icon={MapPin} title="Visit Us" text={address} theme={c} />
                  
                  <div className="flex items-start gap-5">
                    <div className={`p-4 rounded-2xl ${c.iconBg} ${c.accent}`}>
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-xl mb-1">Call Us</h4>
                      {phones.map((p: string) => (
                        <p key={p} className="text-gray-600 font-medium text-lg font-mono">{p}</p>
                      ))}
                    </div>
                  </div>

                  <ContactItem icon={Mail} title="Email Us" text={email} theme={c} />
               </div>

            </div>
          </motion.div>

          {/* Right: Map (Wide Window Style) */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full xl:w-7/12"
          >
             <div className="bg-white p-3 rounded-[2rem] shadow-lg border-4 border-white h-[450px] overflow-hidden">
                <iframe 
                  className="w-full h-full rounded-[1.5rem] bg-gray-200"
                  frameBorder="0" 
                  scrolling="no" 
                  src={mapSrc}
                  title={`${name} Map`}
                ></iframe>
             </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <div className="relative">
          <div className="flex items-center gap-4 mb-10">
            <div className={`p-3 rounded-full text-white shadow-md ${c.btn}`}>
              <Camera size={32} />
            </div>
            <h3 className="text-4xl font-black text-gray-800 tracking-tight">Gallery</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <motion.div
                key={img.id}
                layoutId={`image-${name}-${img.id}`}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => setSelectedImage(img.src)}
                className="cursor-pointer group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-gray-200"
              >
                <img
                  src={img.src} 
                   
                   
                  alt={`${name} gallery ${img.id}`}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 bg-white/90 p-3 rounded-full shadow-lg text-gray-800">
                        <ZoomIn size={32} />
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                <X size={32} />
            </button>

            <motion.div 
                variants={modalVariants}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
                <img
                    src={selectedImage}
                    
                    alt="Gallery Fullscreen"
                />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

// --- Helper Component ---

function ContactItem({ icon: Icon, title, text, theme }: any) {
  return (
    <div className="flex items-start gap-5">
      <div className={`p-4 rounded-2xl ${theme.iconBg} ${theme.accent}`}>
        <Icon size={28} />
      </div>
      <div>
        <h4 className="font-bold text-gray-800 text-xl mb-1">{title}</h4>
        <p className="text-gray-600 font-medium text-lg leading-relaxed">{text}</p>
      </div>
    </div>
  )
}