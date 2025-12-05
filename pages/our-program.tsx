import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Clock, Sun, BookOpen, Music, Home, Users, Heart, 
  Activity, Smile, Star, Cloud, Zap, PenTool, 
  MapPin, Rocket, Palette, Swords
} from "lucide-react";

// --- Components (Nav/Footer) ---
// Replace these with your actual imports
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Banner } from "../components/banner"; 

// --- Animation Variants ---
const floatVariant = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const popIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", bounce: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- Reusable Decorative Elements ---

const FloatingIcon = ({ icon: Icon, color, size, top, left, right, bottom, delay = 0, rotate = 0 }: any) => (
  <motion.div
    variants={floatVariant}
    animate="animate"
    initial={{ rotate: rotate }}
    className={`absolute z-0 text-${color} hidden md:block opacity-80`}
    style={{ top, left, right, bottom, transitionDelay: `${delay}s` }}
  >
    {/* This creates a "Sticker" effect with a white outline */}
    <div className="relative">
      <Icon size={size} strokeWidth={2.5} className="drop-shadow-xl filter" style={{ stroke: "white", strokeWidth: "4px", fill: "currentColor" }} />
      <Icon size={size} strokeWidth={2.5} className="absolute top-0 left-0" />
    </div>
  </motion.div>
);

const PolkaDotPattern = ({ color = "bg-gray-200" }) => (
  <div className="absolute inset-0 z-0 opacity-20" 
       style={{ backgroundImage: `radial-gradient(${color} 2px, transparent 2px)`, backgroundSize: '30px 30px' }}>
  </div>
);

const SectionHeading = ({ title, subtitle, color = "text-gray-800", highlightColor = "bg-yellow-300" }: any) => (
  <div className="relative z-10 text-center mb-16 max-w-4xl mx-auto px-4">
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="inline-block relative"
    >
      <span className={`absolute -bottom-2 left-0 w-full h-4 ${highlightColor} -rotate-1 rounded-full opacity-60`}></span>
      <h2 className={`relative text-4xl md:text-6xl font-black ${color} tracking-tight mb-4`}>
        {title}
      </h2>
    </motion.div>
    {subtitle && (
      <p className="text-xl text-gray-600 font-bold mt-4">{subtitle}</p>
    )}
  </div>
);

export default function Feature() {
  return (
    <div className="font-sans overflow-x-hidden bg-white selection:bg-yellow-300 selection:text-black">
      <Head>
        <title>Our Playful Programs</title>
        <meta name='description' content='Fun and educational play-based learning.'/>
        <link rel="icon" href="/whitelogo.svg" />
      </Head>

      <Nav />
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative pt-32 pb-32 bg-amber-300 overflow-hidden">
        <PolkaDotPattern color="#F59E0B" />
        
        {/* Floating Decorations */}
        <FloatingIcon icon={Sun} size={120} color="orange-500" top="10%" right="5%" rotate={12} />
        <FloatingIcon icon={Cloud} size={100} color="white" top="20%" left="5%" rotate={-10} />
        <FloatingIcon icon={Rocket} size={80} color="rose-500" bottom="10%" left="15%" delay={1} rotate={-45} />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="bg-white/40 backdrop-blur-sm p-8 rounded-[3rem] border-4 border-white inline-block shadow-xl"
          >
            <h1 className="text-6xl md:text-8xl font-black text-gray-800 mb-6 drop-shadow-sm tracking-tighter">
              Ready, Set, <span className="text-sky-600">Grow!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 font-bold max-w-2xl mx-auto leading-relaxed">
              Our Program is a playground for the mind.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= REGULAR PROGRAM (TIMELINE CARDS) ================= */}
      <section className="relative py-24 bg-sky-100">
        <FloatingIcon icon={Clock} size={90} color="sky-500" top="-40px" right="20%" rotate={20} />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading 
            title="Regular Programs" 
            subtitle="Pick the perfect time for your little explorer."
            highlightColor="bg-pink-300"
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            <ProgramTicket 
              time="8:40 - 2:40" 
              title="Full Day Fun" 
              sub="6 Hours of Joy"
              bg="bg-orange-400"
              icon={<Sun size={40} />}
              rotate="-rotate-2"
            />
            <ProgramTicket 
              time="8:40 - 12:40" 
              title="Morning Spark" 
              sub="4 Hours of Play"
              bg="bg-emerald-400"
              icon={<Cloud size={40} />}
              rotate="rotate-2"
              marginTop="lg:mt-12"
            />
            <ProgramTicket 
              time="1:30 - 4:00" 
              title="Afternoon Delight" 
              sub="2.5 Hours Session"
              bg="bg-rose-400"
              icon={<Star size={40} />}
              rotate="-rotate-1"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= STAGES GRID ================= */}
      <section className="relative py-24 bg-emerald-50">
        <PolkaDotPattern color="#10B981" />
        <FloatingIcon icon={Palette} size={80} color="purple-500" top="5%" left="5%" rotate={-15} />

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Steps to Success" highlightColor="bg-orange-300" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Adjustment", img: "/Adjustment/adjustment (1).webp", color: "border-orange-400" },
              { title: "Beginners", img: "/Adjustment/adjustment (2).webp", color: "border-blue-400" },
              { title: "Advance", img: "/Adjustment/adjustment (3).webp", color: "border-pink-400" },
              { title: "Ready for School", img: "/Adjustment/adjustment (4).webp", color: "border-yellow-400" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={popIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10, rotate: idx % 2 === 0 ? 2 : -2 }}
                className={`bg-white p-3 rounded-[2rem] shadow-xl border-b-8 ${item.color} flex flex-col`}
              >
                <div className="relative h-56 w-full rounded-[1.5rem] overflow-hidden mb-4 bg-gray-100">
                   <Image 
                    src={item.img} 
                    layout="fill" 
                    objectFit="cover" 
                    alt={item.title}
                    className="hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <h3 className="text-2xl font-black text-gray-800 text-center pb-4">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SHORT TERM (BENTO) ================= */}
      <section className="py-24 bg-rose-50 overflow-hidden">
        <FloatingIcon icon={Zap} size={100} color="yellow-400" bottom="10%" right="5%" rotate={45} />

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Skill Boosters" subtitle="Short sessions, big impact." highlightColor="bg-sky-300" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              "Beginner 1", "Beginner 2", "Inter 1", "Inter 2",
              "Advance 1", "Advance 2", "School Ready 1", "School Ready 2"
            ].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`
                  p-6 rounded-2xl text-center shadow-lg cursor-pointer
                  flex flex-col items-center justify-center min-h-[160px]
                  ${i % 4 === 0 ? 'bg-yellow-400 rotate-1' : ''}
                  ${i % 4 === 1 ? 'bg-sky-400 -rotate-1' : ''}
                  ${i % 4 === 2 ? 'bg-rose-400 rotate-1' : ''}
                  ${i % 4 === 3 ? 'bg-emerald-400 -rotate-1' : ''}
                `}
              >
                <div className="bg-white/30 p-3 rounded-full mb-3 text-white">
                  {i % 2 === 0 ? <Star fill="currentColor" /> : <Smile />}
                </div>
                <h4 className="text-white font-black text-lg md:text-xl leading-tight">{title}</h4>
                <p className="text-white/90 text-sm font-bold mt-2">3 Months</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AFTER SCHOOL (PLAYFUL BLOCKS) ================= */}
      <section className="relative py-24 bg-white">
        <div className="absolute top-0 left-0 w-full h-4 bg-repeat-x" style={{ backgroundImage: 'linear-gradient(45deg, #fbbf24 25%, transparent 25%), linear-gradient(-45deg, #fbbf24 25%, transparent 25%)', backgroundSize: '20px 20px', backgroundColor: '#fff' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="After School programs" highlightColor="bg-green-300" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { t: "Intensive Support", i: <BookOpen />, img: "/after school/afterschool (1).webp", bg: "bg-blue-50" },
              { t: "Piano & Music", i: <Music />, img: "/after school/afterschool (2).webp", bg: "bg-yellow-50" },
              { t: "Home Management", i: <Home />, img: "/after school/afterschool (3).webp", bg: "bg-pink-50" },
              { t: "Karate Kids", i: <Swords />, img: "/after school/afterschool (4).webp", bg: "bg-green-50" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className={`group relative rounded-[3rem] overflow-hidden ${item.bg} border-4 border-dashed border-gray-200`}
              >
                 <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                      <Image src={item.img} layout="fill" objectFit="cover" alt={item.t} />
                    </div>
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-start">
                      <div className="p-4 bg-white rounded-2xl shadow-sm text-gray-800 mb-4 group-hover:rotate-12 transition-transform">
                        {React.cloneElement(item.i, { size: 32 })}
                      </div>
                      <h3 className="text-2xl font-black text-gray-800 mb-2">{item.t}</h3>
                      
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERTS (AVATARS) ================= */}
      <section className="py-24 bg-indigo-50">
         <FloatingIcon icon={Heart} size={60} color="red-500" top="10%" right="10%" rotate={-10} />
         
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Services" subtitle="services are provided by CRP professionals." highlightColor="bg-purple-300" />

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
             <ExpertBadge title="Occupational Therapy" icon={<Activity />} color="bg-orange-400" />
             <ExpertBadge title="Speech Therapy" icon={<Users />} color="bg-sky-400" />
             <ExpertBadge title="Behaviour Therapy" icon={<Smile />} color="bg-emerald-400" />
             <ExpertBadge title="Physio Therapy" icon={<Heart />} color="bg-rose-400" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// --- Sub-Components ---

function ProgramTicket({ time, title, sub, bg, icon, rotate, marginTop = "" }: any) {
  return (
    <motion.div 
      variants={popIn}
      whileHover={{ scale: 1.05, rotate: 0 }}
      className={`relative ${marginTop} ${rotate} transition-transform duration-300`}
    >
      {/* Tape Effect */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-md rotate-1 shadow-sm z-20"></div>
      
      <div className={`p-8 rounded-3xl shadow-xl text-white ${bg} border-4 border-white/50 border-dashed flex flex-col items-center text-center h-full justify-center`}>
        <div className="mb-4 text-white drop-shadow-md">
          {icon}
        </div>
        <h3 className="text-3xl font-black mb-1">{title}</h3>
        <p className="text-lg font-bold opacity-90 mb-6">{sub}</p>
        <div className="bg-white text-gray-900 px-6 py-2 rounded-full font-black shadow-lg">
          {time}
        </div>
      </div>
    </motion.div>
  );
}

function ExpertBadge({ title, icon, color }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="flex flex-col items-center w-40 text-center"
    >
      <div className={`w-24 h-24 rounded-full ${color} flex items-center justify-center text-white shadow-xl border-4 border-white mb-4`}>
        {React.cloneElement(icon, { size: 40 })}
      </div>
      <h4 className="font-bold text-gray-700 text-lg leading-tight">{title}</h4>
    </motion.div>
  )
}