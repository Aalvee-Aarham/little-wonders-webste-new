import React from "react";
import Image from "next/image";

function Navhero() {
  return (
    <div>
      <nav className="
      
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  navbar navbar-expand-lg navbar-light
  ">
  <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  <button className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
    className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="brown"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
  </svg>
  </button>
  <div className="collapse lg:justify-end  navbar-collapse flex flex-col lg:flex-row flex-grow items-start" id="navbarSupportedContent">
    <div>
    <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
    <li className="nav-item p-2">
      <a className="inline-block px-6 py-1.5 bg-sky-600 text-white font-medium text-md rounded-full shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out p-0" href="/">   Home   </a>
    </li>
    <li className="nav-item p-2">
      <a className="inline-block px-6 py-1.5 bg-sky-600 text-white font-medium text-md rounded-full shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out p-0" href="/contact">  Contact  </a>
    </li>
    <li className="nav-item p-2">
      <a className="inline-block px-6 py-1.5 bg-sky-600 text-white font-medium text-md rounded-full shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out p-0" href="/our-program">  our program  </a>
    </li>
    <li className="nav-item p-2">
      <a className="inline-block px-6 py-1.5 bg-sky-600 text-white font-medium text-md rounded-full shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out p-0" href="https://form.jotform.com/221313177735453">  admission  </a>
    </li>
    <li className="nav-item p-2">
      <a className="inline-block px-6 py-1.5 bg-sky-600 text-white font-medium text-md rounded-full shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out p-0" href="/about-us">  About-us  </a>
    </li>
  </ul>
    </div>
 
  
  </div>



  </div>
</nav>


    </div>
  );
}
export default Navhero;