import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t-4 border-sky-400 font-sans">
            
            {/* Main Footer Content */}
            <div className="container px-5 py-12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Column 1: Brand & About */}
<div className="flex flex-col items-start text-left">
    <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative w-44 h-14 mb-3"
    >
        <Image 
            src="/lwlogo.svg"
            alt="Little Wonders Logo"
            layout="fill"
            objectFit="contain"
            className="object-left"    // <-- forces the logo to start at left edge
        />
    </motion.div>

    <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
        Play and Learn. Creating a safe, inclusive environment for the leaders of tomorrow to grow and thrive.
    </p>
</div>


                    {/* Column 2: Contact Info */}
                    <div className="flex flex-col items-start text-left">
                        <h2 className="text-sky-400 font-bold tracking-wider text-sm uppercase mb-5">
                            Get in Touch
                        </h2>

                        <ul className="space-y-4">
                            <li className="flex items-center group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-3 group-hover:bg-sky-500 transition-colors duration-300">
                                    <FontAwesomeIcon className="w-3 h-3 text-sky-400 group-hover:text-white" icon={faPhone} />
                                </div>
                                <span className="hover:text-white cursor-pointer transition-colors">
                                    +880 222 229 8584
                                </span>
                            </li>

                            <li className="flex items-center group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-3 group-hover:bg-sky-500 transition-colors duration-300">
                                    <FontAwesomeIcon className="w-3 h-3 text-sky-400 group-hover:text-white" icon={faPhone} />
                                </div>
                                <span className="hover:text-white cursor-pointer transition-colors">
                                    +880 248 950 214
                                </span>
                            </li>

                            <li className="flex items-center group">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-3 group-hover:bg-lime-500 transition-colors duration-300">
                                    <FontAwesomeIcon className="w-3 h-3 text-lime-400 group-hover:text-white" icon={faEnvelope} />
                                </div>
                                <span className="hover:text-white cursor-pointer transition-colors">
                                    littlewonders_uttara@yahoo.com
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Campuses / Addresses */}
                    <div className="flex flex-col items-start text-left">
                        <h2 className="text-lime-400 font-bold tracking-wider text-sm uppercase mb-5">
                            Our Campuses
                        </h2>

                        <div className="space-y-6 w-full">

                            {/* Gulshan Address */}
                            <div className="flex items-start gap-3">
                                <FontAwesomeIcon className="w-5 h-5 text-red-400 mt-1" icon={faLocationDot} />
                                <div>
                                    <h3 className="text-white font-medium text-sm">Gulshan Branch</h3>
                                    <p className="text-sm text-slate-400 mt-1">
                                        House 40, Flat B2, Road 1, <br />
                                        Gulshan 1, Dhaka
                                    </p>
                                </div>
                            </div>

                            {/* Divider (mobile only) */}
                            <div className="w-1/2 h-px bg-slate-800 md:hidden mx-0"></div>

                            {/* Uttara Address */}
                            <div className="flex items-start gap-3">
                                <FontAwesomeIcon className="w-5 h-5 text-red-400 mt-1" icon={faLocationDot} />
                                <div>
                                    <h3 className="text-white font-medium text-sm">Uttara Branch</h3>
                                    <p className="text-sm text-slate-400 mt-1">
                                        House 56, Road 13, Sector 3, <br />
                                        Uttara, Dhaka
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="bg-slate-950 border-t border-slate-800">
                <div className="container px-5 py-6 mx-auto flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-slate-500 text-left">
                        © {new Date().getFullYear()} Little Wonders. All rights reserved.
                    </p>
                </div>
            </div>

        </footer>
    )
}
