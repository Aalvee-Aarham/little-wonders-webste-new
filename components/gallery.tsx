import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryProps {
  number: number;
  color: string; // Accepts a tailwind color class (e.g., 'bg-rose-500')
}

export default function GalleryImage({ number, color }: GalleryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
      whileHover={{ scale: 1.03, rotate: 1, zIndex: 10 }}
      className="break-inside-avoid mb-6 relative group rounded-2xl overflow-hidden shadow-xl"
    >
      {/* Image Container */}
      <div className={`relative w-full bg-gray-200`}>
        <Image
          src={`/ALBUM/image (${number}).webp`}
          width={500}
          height={400} // Aspect ratio approximation
          layout="responsive"
          
          alt={`Little Wonders Gallery ${number}`}
          className="transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Colorful Overlay on Hover */}
        <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none mix-blend-multiply`}></div>
        
        {/* Bottom Info Bar (Appears on Hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-white font-bold text-sm tracking-widest uppercase border-l-4 pl-2 border-white">
            Memories
          </span>
        </div>
      </div>
    </motion.div>
  );
}