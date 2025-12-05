import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// --- CONSTANTS & DATA ---

// The playful color palette provided
const THEME_COLORS = [
  { bg: 'bg-rose-500', text: 'text-rose-600', border: 'border-rose-200', light: 'bg-rose-100' },
  { bg: 'bg-sky-500', text: 'text-sky-600', border: 'border-sky-200', light: 'bg-sky-100' },
  { bg: 'bg-lime-500', text: 'text-lime-600', border: 'border-lime-200', light: 'bg-lime-100' },
  { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200', light: 'bg-purple-100' },
  { bg: 'bg-yellow-400', text: 'text-yellow-600', border: 'border-yellow-200', light: 'bg-yellow-100' },
];

export default function Home() {
  return (
    <div className="font-sans antialiased text-slate-700 bg-white overflow-x-hidden selection:bg-yellow-300">
      <Head>
        <title>Little Wonders | Play, Learn, Grow</title>
        <meta name='description' content='Little Wonders play & learn is an early learning center...'/>
        <link rel="icon" href="/whitelogo.svg" />
      </Head>

      <Nav />
      
      <HeroSection />
      <MissionSection />
      <InteractiveGallery />
      <Footer />
    </div>
  )
}

// --- SECTIONS ---

function HeroSection() {
  return (
    <div className="relative w-full h-[95vh] min-h-[600px] flex items-center overflow-hidden">
      
      {/* 1. FULL WIDTH BACKGROUND IMAGE (Flipped) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.webp" 
          // Using 'center center' here ensures the full image is visible
          alt="Little Wonders Banner"
          // Flipped image (scale-x-[-1]) and Slow zoom effect
          className="transition-transform scale-x-[-1] duration-[20s] hover:scale-105" 
        />
      </div>

      <div className="absolute inset-0 z-10 bg-black/30"></div> 

      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl" // Limits text width to stay on the left
        >
          {/* Badge: Switched background to white for high contrast */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border-2 border-lime-300 rounded-full px-4 pb-1.5 mb-6 shadow-md">
            <span className="animate-pulse text-lime-600">★</span>
            <span className="font-bold text-slate-800 text-sm tracking-wide uppercase">Enrollment Open 2026</span>
          </div>
          
          {/* Main Title: Switched to white text */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 drop-shadow-lg">
            Where Every <br/>
            Child is a <br/>
            <span className="text-yellow-300 relative inline-block drop-shadow-md">
              Wonder.
              {/* Underline Scribble: Changed to bright purple/rose for pop */}
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-rose-500 fill-current -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          {/* Subtitle: Switched to light text */}
          <p className="text-lg md:text-xl text-gray-200 font-medium mb-8 leading-relaxed max-w-lg">
            We provide a nurturing environment where play meets learning. 
            Join us to give your child the perfect start to their educational journey.
          </p>
          

        </motion.div>
      </div>

      {/* --- 4. DECORATIVE BOTTOM WAVE --- */}
      {/* Adjusted Z-index to ensure it sits on top of the image but below text */}
      <div className="absolute bg-white -bottom-1 left-0 w-full overflow-hidden z-10">
        <svg
          className="block w-full h-[60px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff" 
          />
        </svg>
      </div>

    </div>
  )
}

function MissionSection() {
  return (
    <section className="relative pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Fun Illustration/Image Area */}
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute top-0 right-0 w-full h-full bg-lime-100 rounded-[3rem] rotate-3 scale-95 z-0"></div>
             <div className="absolute top-0 right-0 w-full h-full bg-purple-100 rounded-[3rem] -rotate-2 scale-95 z-0"></div>
             
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="relative z-10 bg-white p-3 rounded-[3rem] shadow-xl border-b-8 border-gray-100"
             >
                <img 
                  width={720} 
                  height={600} 
                  className="rounded-[2.5rem]" 
                  alt="Mission" 
                  src="/mission.webp"
                />
             </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-purple-600 font-extrabold tracking-widest uppercase mb-2">Who We Are</h2>
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-8">
              Our Mission <br/> & Vision
            </h1>

            <div className="space-y-6">
              <InfoCard 
                number="01" 
                title="Individualized Learning" 
                desc="Tailored curriculum for every unique child to ensure school readiness."
                theme="rose"
              />
              <InfoCard 
                number="02" 
                title="Inclusive Opportunity" 
                desc="A safe, one-stop childcare environment welcoming for all families."
                theme="sky"
              />
               <InfoCard 
                number="03" 
                title="Empowerment" 
                desc="Building confidence through sports, arts, and creative play."
                theme="yellow"
              />
            </div>

            <div className="mt-12">
               <a href="/our-program" className="inline-block px-8 py-4 bg-lime-500 text-white font-bold rounded-full shadow-lg hover:bg-lime-600 hover:scale-105 transition-all">
                 See Our Programs &rarr;
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ number, title, desc, theme }) {
  // Map string theme to classes
  const colors = {
    rose: 'bg-rose-50 text-rose-600 border-rose-100',
    sky: 'bg-sky-50 text-sky-600 border-sky-100',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-100'
  }
  
  return (
    <motion.div 
      whileHover={{ x: 10 }}
      className={`flex items-start p-6 rounded-3xl border-2 ${colors[theme]} transition-all`}
    >
      <div className={`flex-shrink-0 h-14 w-14 rounded-full ${theme === 'rose' ? 'bg-rose-500' : theme === 'sky' ? 'bg-sky-500' : 'bg-yellow-500'} flex items-center justify-center text-white font-black text-2xl shadow-md border-4 border-white`}>
        {number}
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="text-slate-600 mt-2 font-medium leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

// --- INTERACTIVE GALLERY ---

function InteractiveGallery() {
  // We have 28 images. Let's break them into logic groups (simulated)
  // 1-10: "Playtime"
  // 11-20: "Learning"
  // 21-28: "Events"
  const [activeFilter, setActiveFilter] = useState('all');

  // Helper to generate image numbers
  const allImages = Array.from({ length: 28 }, (_, i) => i + 1);

  const getFilteredImages = () => {
    if (activeFilter === 'all') return allImages;
    if (activeFilter === 'play') return allImages.slice(0, 10);
    if (activeFilter === 'learn') return allImages.slice(10, 20);
    if (activeFilter === 'events') return allImages.slice(20, 28);
    return [];
  };

  const filtered = getFilteredImages();

  return (
    <section className="relative py-24 bg-yellow-50">
      
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
         <svg className="relative block w-full h-[60px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
         </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-rose-500 font-bold tracking-widest uppercase bg-rose-100 px-4 py-1 rounded-full">Gallery</span>
          <h1 className="text-5xl font-black text-slate-800 mt-4 mb-8">Capturing Joyful Moments</h1>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'play', 'learn', 'events'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-6 py-2 rounded-full font-bold text-lg capitalize transition-all transform hover:scale-105 ${
                  activeFilter === tab 
                  ? 'bg-purple-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-slate-500 border-2 border-slate-200 hover:border-purple-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid using CSS Columns */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 p-4"
        >
          <AnimatePresence>
            {filtered.map((num) => (
              <PolaroidCard key={num} number={num} />
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
      

    </section>
  )
}

function PolaroidCard({ number }) {
  // Random slight rotation for that "pinned on board" feel
  const randomRotate = Math.random() * 6 - 3; // between -3 and 3 degrees
  
  // Assign a random color tape at the top
  const tapeColors = ['bg-rose-400', 'bg-sky-400', 'bg-lime-400', 'bg-yellow-400'];
  const randomTape = tapeColors[number % tapeColors.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.4 }}
      className="break-inside-avoid mb-10 relative group"
    >
      {/* The Polaroid Card */}
      <div 
        className="bg-white p-3 pb-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02] group-hover:rotate-0"
        style={{ transform: `rotate(${randomRotate}deg)` }}
      >
        {/* Washi Tape Effect */}
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 ${randomTape} opacity-80 rotate-[-2deg] shadow-sm z-10`}></div>

        <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
           <img
            src={`/ALBUM/image (${number}).webp`}
            width={500}
            height={400}
            alt={`Little Wonders Memory ${number}`}
            className="group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        </div>
        
        {/* Caption */}
        <div className="absolute bottom-2 left-0 right-0 text-center font-handwriting text-slate-500 font-bold font-cursive">
          Little Wonders #{number}
        </div>
      </div>
    </motion.div>
  )
}