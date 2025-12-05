import Head from "next/head";
import { useEffect } from "react";
import Nav from '../components/nav'; 
import Footer from "../components/footer";
import Image from "next/image";
import { motion } from "framer-motion"; 
import { Heart, BookOpen, Users, Star, Quote } from "lucide-react";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function About() {
  useEffect(() => {
    try { require('tw-elements'); } catch (e) {}
  }, []);

  return (
    <div className="font-sans overflow-x-hidden bg-slate-50 selection:bg-pink-200 selection:text-pink-900">
      <Head>
        <title>About Us | Little Wonders</title>
        <meta name='description' content='Little Wonders play & learn is an early learning center...' />
        <link rel="icon" href="/whitelogo.svg" />
        {/* 'Outfit' is a modern, professional yet friendly font */}
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Nav />

      {/* --- HERO SECTION: Vibrant & Modern --- */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        
        {/* Background Animated Blobs (Subtle) */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-bold tracking-wider mb-4 border border-white/30">
              EST. 2012
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white font-['Quicksand'] mb-6 drop-shadow-md">
              Little Wonders
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto font-['Outfit'] font-light leading-relaxed">
              We don't just teach; we ignite curiosity. An inclusive space where every child finds their own path to brilliance.
            </p>
          </motion.div>
        </div>

        {/* Smooth Wave Divider */}
        <div className="absolute bottom-0 w-full leading-none text-slate-50">
           <svg className="block w-full h-16 md:h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           </svg>
        </div>
      </section>

      <main className="bg-slate-50">

        {/* --- VALUES GRID --- */}
        <section className="py-20 container mx-auto px-6 -mt-20 relative z-20">
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                <ValueCard 
                    icon={<Heart className="w-8 h-8 text-rose-500" />}
                    title="Compassionate Care"
                    desc="We believe emotional security is the foundation of all learning."
                    accent="border-rose-500"
                />
                <ValueCard 
                    icon={<BookOpen className="w-8 h-8 text-indigo-500" />}
                    title="Play-Based Learning"
                    desc="Curriculum designed to turn playtime into deep cognitive development."
                    accent="border-indigo-500"
                />
                <ValueCard 
                    icon={<Users className="w-8 h-8 text-teal-500" />}
                    title="Total Inclusion"
                    desc="A welcoming environment for children of all abilities and needs."
                    accent="border-teal-500"
                />
            </motion.div>
        </section>

        {/* --- FOUNDERS SPOTLIGHT --- */}
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800 font-['Quicksand']">Our Visionaries</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="space-y-24">
                    <FounderSection 
                        img="/Team/Nazneen.webp"
                        name="Nazneen Akhter Ahmed"
                        title="FOUNDER & PRINCIPAL"
                        text="Ms. Nazneen blends the warmth of a mother with the precision of a scholar. With a Vice Chancellor's Gold Medal from BRAC University and specialized ABA training from Australia, she has built Little Wonders on a foundation of academic excellence and genuine love."
                        align="left"
                    />
                     <FounderSection 
                        img="/Team/Mahmooda.webp"
                        name="Ms. Mahmuda Akhter"
                        title="CHIEF ADVISOR"
                        text="A titan in the field of Child Development, Ms. Mahmuda brings decades of experience as the Executive Director of ICHD. Her guidance ensures our curriculum isn't just fun—it's backed by world-class research and developmental science."
                        align="right"
                    />
                </div>
            </div>
        </section>

        {/* --- TEAM SECTION (Modern Grid) --- */}
        <section className="py-24 bg-white relative">
             {/* Decorative Background Element */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-bold text-slate-900 font-['Quicksand'] mb-6">The Dream Team</h2>
                    <p className="text-lg text-slate-600 font-['Outfit']">
                        Meet the passionate educators and therapists who make magic happen every single day.
                    </p>
                </div>

                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {teamData.map((member, i) => (
                        <TeamCard key={i} {...member} />
                    ))}
                </motion.div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

// --- SUB-COMPONENTS ---

function ValueCard({ icon, title, desc, accent }) {
    return (
        <motion.div 
            whileHover={{ y: -10 }}
            className={`bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border-t-4 ${accent} flex flex-col items-center text-center`}
        >
            <div className="p-4 bg-slate-50 rounded-full mb-6">{icon}</div>
            <h3 className="text-xl font-bold text-slate-800 mb-3 font-['Quicksand']">{title}</h3>
            <p className="text-slate-500 font-['Outfit'] leading-relaxed">{desc}</p>
        </motion.div>
    )
}

function FounderSection({ img, name, title, text, align }) {
    const isLeft = align === 'left';
    return (
        <motion.div 
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
        >
            <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${isLeft ? 'from-purple-400 to-pink-400' : 'from-teal-400 to-blue-400'} rounded-[2rem] rotate-6 opacity-20`}></div>
                    <Image 
                        src={img} 
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-[2rem] shadow-2xl relative z-10"
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="text-pink-600 font-bold tracking-widest text-sm uppercase mb-2">{title}</h3>
                <h2 className="text-4xl font-bold text-slate-900 font-['Quicksand'] mb-6">{name}</h2>
                <p className="text-lg text-slate-600 font-['Outfit'] leading-8">
                    {text}
                </p>
            </div>
        </motion.div>
    )
}

function TeamCard({ staff_name, position, view }) {
    // Generate a soft gradient background for the avatar based on name length (for variety)
    const gradients = [
        "bg-gradient-to-br from-pink-100 to-rose-200",
        "bg-gradient-to-br from-blue-100 to-indigo-200",
        "bg-gradient-to-br from-teal-100 to-emerald-200",
        "bg-gradient-to-br from-amber-100 to-orange-200",
    ];
    const bg = gradients[staff_name.length % gradients.length];

    return (
        <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center h-full"
        >
            <div className={`relative w-32 h-32 rounded-full p-1 mb-6 ${bg}`}>
                <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                    <Image 
                        src={`/Team/${staff_name}.webp`} 
                        layout="fill"
                        objectFit="cover"
                        alt={staff_name}
                        className="group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md border border-slate-100">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 font-['Quicksand'] mb-1">{staff_name}</h3>
            <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-4 h-8 flex items-center justify-center">{position}</p>
            
            <div className="relative bg-slate-50 p-4 rounded-xl w-full flex-grow">
                <Quote className="w-4 h-4 text-slate-300 absolute top-2 left-2" />
                <p className="text-slate-600 text-sm italic font-['Outfit'] px-2 pt-2">"{view}"</p>
            </div>
        </motion.div>
    )
}

const teamData = [
    {
      staff_name: "Ms. Shalina Akhter",
      position: "Vice-Principal",
      view: "We must adapt to the unique learning style of every child. If we teach the way they learn, success is inevitable."
    },
    {
      staff_name: "Farzana Mahin Anu",
      position: "Centre In-charge",
      view: "I believe every child can meet expectations when supported with belief, love, and patience."
    },
    {
      staff_name: "Lutfun Nahar (Lata)",
      position: "Admin & Accounts",
      view: "Professionalism and punctuality are my core values. I approach my duties with honesty."
    },
    {
      staff_name: "Kawser Akter",
      position: "Centre In-charge",
      view: "Working with special needs children is a privilege. They make me feel like a special teacher."
    },
    {
      staff_name: "Ishana Fariha",
      position: "Intervention Exec.",
      view: "I prioritize following the child's lead. Building trust is the key to my intervention strategy."
    },
    {
      staff_name: "Md. Aminul Haque",
      position: "Occupational Therapist",
      view: "I am deeply committed to providing specialized services to support children with diverse needs."
    },
    {
      staff_name: "Jahanara Khatun Urmi",
      position: "Intervention Exec.",
      view: "My focus is on improving functional skills, helping children achieve their highest potential."
    },
    {
      staff_name: "Layla Afrin Luna",
      position: "Occupational Therapist",
      view: "I dedicate my knowledge to enabling engagement in daily living activities for all children."
    },
    {
      staff_name: "Fairooz Rabiah Anika",
      position: "Speech Therapist",
      view: "Helping individuals communicate effectively is transformative. I change the world one word at a time."
    },
    {
      staff_name: "MD Parvious Hossain",
      position: "Clinical Audiologist",
      view: "I provide essential treatment for speech and swallowing. I respect this life-changing profession."
    },
    {
      staff_name: "Kaosar Khan",
      position: "Clinical Audiologist",
      view: "Audiology is a noble profession. I strive to provide the highest standard of service to my patients."
    }
  ];