"use client";
import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { SiVisualstudio } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"

import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { LuMessageCircle } from "react-icons/lu";
import AOS from "aos"
import "aos/dist/aos.css";

export default function Home() {
  useEffect(()=> {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  },[]);

  return (
    <main>
      <title>Arjumand Rukhsar Portfolio</title>
      {/* Header Section */}

      {/* Navbar Include some Pages and Social Urls */}
      <header  className="text-gray-400 body-font bg-gray-900">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span  className="ml-3 text-xl xl:block lg:hidden text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 font-extrabold">
      Portflio</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-white">Home</a>
      <a className="mr-5 hover:text-white">About Us</a>
      <a className="mr-5 hover:text-white">Contact Us</a>
      <a className="mr-5 hover:text-white">Project</a>
    </nav>
    <button className="inline-flex items-center bg-purple-600  hover:bg-cyan-300  hover:shadow-cyan-500 
     py-1 px-3 focus:outline-none rounded-full text-white mt-4 md:mt-0">Sing Up
     </button>
  </div>
</header>

{/* Hero Section */}
<section className="text-gray-600 body-font  bg-gray-900">
  <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-white  ' data-aos="zoom-in-up">
      Hello I'm Arjumand Rukhsar,</h1>
    {/* Type writer Effect */}
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">    
   <Typewriter
   options={{
    strings: ['I am Web Developer', 'UI/UX Designer', 'Graphic Designer'],
    autoStart: true,
    loop: true,
  }}
   />
      </h1>
      <p className="mb-8 leading-relaxed text-white">   I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next.js, Node.js, Bootstrap, Tailwind CSS,
            TypeScript, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.</p>
      <div className="flex w-full md:justify-start justify-center items-end">
      </div>
      <div className="flex lg:flex-row md:flex-col">
      <div>
     <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-purple-600 hover:bg-cyan-400 text-white'>Hire Me</button>
     <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 hover:bg-slate-800 text-white mt-3 '>
     <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span> </button>
     </div>
       
      </div>
    </div>
    <div className='rounded-full bg-purple-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative
     hover:bg-cyan-300  hover:shadow-cyan-500 hover:border-t-2 transition-all duration-500 hover:border-cyan-500
     shadow-lg  '>
      <img 
      alt="hero"
      className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
      width={300}
      height={300}
      src="/images/hero-image.png"/>
    </div>
  </div>
</section>

{/* Services */}

<section className="text-white body-font bg-gray-900">
  <div className="container px-5 py-10 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-purple-600 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <h1 className=' text-yellow-500 leading-relaxed text-2xl' data-aos="zoom-in-up">
        SERVICES WHAT I PROVIDE AS A WEB DEVELOPER</h1>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 mb-6"></span>
      <h2 className="text-blue-500 font-medium title-font tracking-wider text-lg">
      <Typewriter
   options={{
    strings: ['There are three responses to a piece of design - Yes, No and web'],
    autoStart: true,
    loop: true,
  }}
   />
      </h2>
    </div>
  </div>

  <section className="text-white body-font bg-gray-900">
  <div className="container px-5 py-4 mx-auto flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-4 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-gray-400 text-purple-600 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-sky-600 mb-1 text-xl">Responsive Web Design</h2>
          <p className="leading-relaxed">
           Crafting visually appealling and mobile-friendly website using HTML, CSS, and JavaScript  to ensure 
           a seamless user experience across all devices.
          </p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-gray-400 text-purple-600 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-sky-600 mb-1 text-xl">Interactive User Interface</h2>
          <p className="leading-relaxed">
            Developing dynamic and engaging  interfaces with JavaScript and TypeScript, bringing website to life with 
            sooth animations and interactive elements.
          </p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-gray-400 text-purple-600 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-sky-600 mb-1 text-xl">Custom Web Layouts</h2>
          <p className="leading-relaxed">
            Designing and implementing custom layouts that reflect your brand's unique identity, using the latest HTML and 
            CSS techniques.
          </p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-gray-400 text-purple-600 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-sky-600 mb-1 text-xl">Web Performance Optimization</h2>
          <p className="leading-relaxed">
            Improving website loading times and overall performance through effiicient coding practices, ensuring a fast and 
            responsive user experience.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</section>

{/* image card */}

<section className="text-gray-600 body-font bg-gray-900">
  <div className="container px-5 py-8 mx-auto" data-aos="zoom-in-up">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-medium title-font mb-4 text-yellow-500">My Projects</h1>
        </div>
    <div className="flex flex-wrap -m-4">
      {/* card 1 */}
      <div className="p-4 lg:w-1/4 md:w-1/2 ">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
           src="https://t4.ftcdn.net/jpg/06/10/12/17/240_F_610121776_YNuUn3cuA8gYQAzSlKpHTGob6CHOeDIh.jpg"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-white">Project 1: ATM</h2>
            <p className="mb-4 text-white text-sm leading-relaxed">Description:A simulation of an ATM system that handles deposite,withdrawl,and balance inquries,Useful for understanding user input and data management.</p>
            <button className='mt-6 px-5 py-2.5 w-full rounded-full text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-purple-600 hover:bg-yellow-500'>
            Explore Now</button>
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJe5cujkAToaqPF6YIwRBaSSWWRVSA-VgLg&s"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-white">Project 2: Calculator</h2>
            <p className="mb-4  text-white text-sm leading-relaxed">
            Description: A simple Calculator app that performs basic arthmetic operations.Perfect for learning the basic
            of javascript function and user interface.
            </p>
            <button className='mt-6 px-5 py-2.5 w-full rounded-full text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-purple-600 hover:bg-yellow-500'>
            Explore Now</button>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
           src="/images/about-image.png"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-white">Project 3: Advanture Game</h2>
            <p className="mb-4 text-white text-sm leading-relaxed">
            Description: A text-based advanture game where players make choices that affect the outcome.Greate 
            for practicing control flow and narrative development.
            </p>
            <button className='mt-6 px-5 py-2.5 w-full rounded-full text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-purple-600 hover:bg-yellow-500'>
            Explore Now</button>
          </div>
        </div>
      </div>
      {/* card 4 */}
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wBvYlrZk13itVoPfRZBJu2QnfPmDT_hFKA&s"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-white">Project 4: Currency Convertor</h2>
            <p className="mb-4 text-white text-sm leading-relaxed">
            Desciption:A currency convert that allows users to convert between different currencies using relative-time 
            exchange rates Demonstrates.
            </p>
            <button className='mt-6 px-5 py-2.5 w-full rounded-full text-white text-sm tracking-wider font-semibold border-spacing-2 outline-none bg-purple-700 hover:bg-yellow-500'>
            Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 

 {/* feature section */}

<section className="text-gray-600 body-font bg-gray-900">
  <div className="container px-5 py-10 mx-auto" data-aos="zoom-in-up">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-4xl font-black text-center title-font text-yellow-500 mb-4">
      Project Features & Commands</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">
    Explore the essential features of each typescript project and easily run them using the npx commands provided below:
      </p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">npx run start:calculator</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">npx run start:atm</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">npx run start:currency-convertor</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">npx run start:advanture-game</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">npx run start:todo-list</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">npx run start:countdown-timer</span>
        </div>
      </div>
    </div>
   
    <button className="bg-purple-700 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-yellow-600 focus:outline-none">
       <img
       alt="icon"
       className='w-15 h-10'
       src="/images/git-icon.png"
       />
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-white mb-1">Visit My GitHub</span>
          <span className="title-font font-bold text-black">@Arjumand Rukhsar</span>
        </span>
      </button>
    </div>
</section>
    {/* icons section */}
    <section className="text-gray-600 body-font bg-slate-900">
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-cyan-600">
          Unlocking My Skills Set's 
          The Hidden Talents!</h1>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-white">
      Highlight the range of skills and experties, emphasizing the impact 
      and value brought to my project.
      </p>
    </div>
    </div>

    {/* Development Tools and Frame Works Icons */}
    <section>
       <div className='container px-2 py-4 mx-auto flex flex-wrap justify-center items-center space-x-6
       text-2xl bg-slate-900'>     
      <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
      <Typewriter
       options={{
       strings: ['Programming Languages'],
       autoStart: true,
       loop: true,
        }}
       /></h1>

       {/* Icons */}
       <div className='flex flex-col items-center bg-white border-2 border-cyan-700 p-4 transition-transform
       duration-300 ease-in-out transform hover:scale-110'>
       <FaHtml5 className=' text-sky-500 text-6xl'/>
       <span className='mt-2 text-lg text-sky-700 font-bold '>HTML</span>
       </div>

       {/* github icon */}
       <div className='flex flex-col items-center bg-white border-2 border-yellow-700 p-4 transition-transform
       duration-300 ease-in-out transform hover:scale-110'>
       <FaCss3Alt  className=' text-red-500 text-6xl'/>
       <span className='mt-2 text-lg text-red-600 font-bold'>CSS</span>
       </div>

       {/* Tailwind Css Icon */}
       <div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform
       duration-300 ease-in-out transform hover:scale-110'>
       <TbBrandJavascript  className=' text-yellow-500 text-6xl'/>
       <span className='mt-2 text-lg text-yellow-500 font-bold'>Java Script</span>
       </div>

        {/* React Icon */}
        <div className='flex flex-col items-center bg-white border-2 border-blue-700 p-4 transition-transform
       duration-300 ease-in-out transform hover:scale-110'>
       <FaPython className=' text-cyan-500 text-6xl'/>
       <span className='mt-2 text-lg text-cyan-700 font-bold'>Python</span>
        </div>

          {/* Tailwind Css Icon */}
       <div className='flex flex-col items-center bg-white border-2 border-purple-500 p-4 transition-transform
       duration-300 ease-in-out transform hover:scale-110'>
       <RiTailwindCssFill  className=' text-purple-500 text-6xl'/>
       <span className='mt-2 text-lg text-purple-700 font-bold'>Tailwind CSS</span>
       </div>

         </div>
       </section>
     <section>
       <div className='container px-2 py-8 mx-auto flex flex-wrap justify-center items-center space-x-6
       text-2xl bg-slate-900'>
       {/* Icons */}
       <div className='flex flex-col items-center bg-white border-2 border-cyan-700 p-4 transition-transform
       duration-300 ease-in-out transform hover:scale-110'>
       <SiVisualstudio  className=' text-sky-500 text-6xl'/>
       <span className='mt-2 text-lg text-sky-700 font-bold '>Visual Studio Code</span>
       </div>

       {/* github icon */}
       <div className='flex flex-col items-center bg-white border-2 border-yellow-700 p-4 transition-transform
       duration-300 ease-in-out transform hover:scale-110'>
       <FaGithub  className=' text-red-500 text-6xl'/>
       <span className='mt-2 text-lg text-red-600 font-bold'>GitHub</span>
       </div>

       {/* LinkedIn Icon */}
       <div className='flex flex-col items-center bg-white border-2 border-red-700 p-4 transition-transform
       duration-300 ease-in-out transform hover:scale-110'>
       <FaLinkedin  className=' text-blue-500 text-6xl'/>
       <span className='mt-2 text-lg text-blue-700 font-bold'>Linked In</span>
       </div>
 
      <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
      <Typewriter
       options={{
       strings: ['Development Tools And Frame Works'],
       autoStart: true,
       loop: true,
        }}
       /></h1>
       </div>
       </section>
     </section>

 {/* Our Team */}
   
 <section className="text-gray-600 body-font bg-gray-900">
  <div className="container px-5 py-8 mx-auto" data-aos="zoom-in-up">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-black title-font mb-4 text-yellow-500 tracking-widest uppercase">
      Creative Innovators</h1>

      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
      The creative Innovators are a dynamic team of passionate professionals dedicated to delivering cutting-adge solutions
      with aperfect blend of creativity, tecnology, and precision. Comprising two talented developers, a visionary designer
      and a meticulous quality assurance specialist, this team collaborates seamlessly to bring innovative ideas to life.
      With a commitment to excellence and a shared goal of exceeding client expectations, the Creative Innovators at the 
      forefront of delivering top-tier products that are both functional and visuall stunning. 
      </p>
    </div>

    {/* People 1 */}

    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 
           mb-4 border-2 border-yellow-500 hover:grayscale" 
           src="/images/3.png"/>


          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-sky-400">Ahmad Khan</h2>
            <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-yellow-500"><Typewriter
            options={{
              strings:['Lead Developer'],
              autoStart: true,
              loop: true,
            }}
            /> </h3>


            <p className="mb-4 text-white">
             As the Lead Developer, he drives the tecnical vision and ensures that our projects are built with precision.
             With a deep understanding of coding best practices, he leads our development team, mentors junior developers,
             and collaborates closely with the design and product team to deliver seamless user experience. 
            </p>
            <span className="inline-flex">
              <a className=" text-2xl text-sky-500">
              <FiFacebook />
              </a>
              <a className="ml-2 text-yellow-500 text-2xl">
              <FiTwitter />
              </a>
              <a className="ml-2 text-sky-500 text-2xl">
              <LuMessageCircle />
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* People 2 */}

      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center
           sm:mb-0 mb-4 border-2 border-yellow-500 hover:grayscale" 
          src="/images/4.png"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-sky-500">Izhar Sheikh</h2>
            <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-yellow-500"><Typewriter
            options={{
              strings:['Project Manager'],
              autoStart: true,
              loop: true,
            }}
            /> </h3>
            <p className="mb-4 text-white">
              The Project Manager oversees the planning, execution, and completion of our projects. With a Keen eye for 
              detail and a talent for keeping the team on track, he cordinates between clients and develoers to ensure 
              that timelines are met and goals are achieved, ensuring smooth operations from start to finish.
            </p>
            <span className="inline-flex">
              <a className="text-sky-500 text-2xl">
              <FiFacebook />
              </a>
              <a className="ml-2 text-yellow-500 text-2xl">
              <FiTwitter />
              </a>
              <a className="ml-2 text-sky-500 text-2xl">
              <LuMessageCircle />
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* People 3 */}

      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center
           sm:mb-0 mb-4 border-2 border-yellow-500 hover:grayscale" 
          src="/images/2.png"/>

          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-sky-500">Hoorain Fatima</h2>
            <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-yellow-500"><Typewriter
            options={{
              strings:['UI/UX Designer'],
              autoStart: true,
              loop: true,
            }}
            /> </h3>
            <p className="mb-4 text-white">
             As the UI/UX Designer, she brings creativity and user-centered design to the frrefront of our projects. She 
             is responsible for creating visually stunning and intuitive interface that resonate with users, ensuring that 
             our products are not only functional but also aesthetically pleasing and easy to navigate.
            </p>
            <span className="inline-flex">
              <a className="text-sky-500 text-2xl">
              <FiFacebook />
              </a>
              <a className="ml-2 text-yellow-500 text-2xl">
              <FiTwitter />
              </a>
              <a className="ml-2 text-sky-500 text-2xl">
              <LuMessageCircle />
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* People 4 */}

      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center
           sm:mb-0 mb-4 border-2 border-yellow-500 hover:grayscale" 
          src="/images/1.png"
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-sky-500">Musan Ali</h2>
            <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-yellow-500"><Typewriter
            options={{
              strings:['Quality Assurance'],
              autoStart: true,
              loop: true,
            }}
            /> </h3>
            <p className="mb-4 text-white">
             The Quality Assurance Specialist is dedicated to maintaining the hiehest standard of quality in our projects.
             She rigorously tests and analyzes each feature to ensure that our products are bug-free and perform flaw;essly
             helping us deliver reliable and polished results to our clients.
            </p>
            <span className="inline-flex">
              <a className="text-sky-500 text-2xl">
              <FiFacebook />
              </a>
              <a className="ml-2 text-yellow-500 text-2xl">
              <FiTwitter />
              </a>
              <a className="ml-2 text-sky-500 text-2xl">
              <LuMessageCircle />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CONTACT US */}

<section className='text-gray-400 bg-gray-900 body-font'>
 <div className=' container px-5 py-5 mx-auto'>
  <div className=' flex flex-col text-center w-full mb-20'>
    <h1 className='text-4xl font-black title-font mb-4 text-yellow-500 tracking-widest uppercase'>Contact Us</h1>
    <p className=' lg:w-2/3 mx-auto leading-relaxed text-base'>
     fill the form below for my queries </p>
  </div>
 </div>

<section className=" container px-2 py-2 mx-auto text-gray-400 body-font relative bg-gray-900">
  <div className="absolute inset-0 bg-gray-900">
    <iframe width="100%" height="100%" 
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7097540089!2d66.4959539227841!3d25.192983650620572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729270081796!5m2!1sen!2s"
    />
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-sky-400 text-lg mb-1 font-medium title-font" data-aos="zoom-in-up">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-500">
        Please fill this form if  you have any queries or complains or if you have any message for us.</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-500" data-aos="zoom-in-up">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-700 rounded border border-gray-300
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none
          text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-500" data-aos="zoom-in-up">Message</label>
        <textarea id="message" name="message" className="w-full bg-gray-700 rounded border border-gray-300
         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none
          text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 
        rounded text-lg" >Submit</button>
      <p className="text-xs text-gray-500 mt-3">
        Read our privacy policy for any issues.</p>
    </div>
  </div>
  </section>
 </section>

 {/* Footer */}
  
 <footer className="text-gray-400 bg-gray-900 body-font">
  <div className='container px-5 py-4 mx-auto'>
  </div>
  <div className="border-t border-gray-800">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center" data-aos="zoom-in-up">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Newsletter</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded 
          border border-gray-700 focus:ring-2 focus:bg-transparent focus:ring-indigo-700
           focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 
           leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none
         hover:bg-yellow-600 rounded">Subscribe Now</button>
        <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
          <br className="lg:block hidden"/>
        </p>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-sky-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-blue-700">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-pink-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-blue-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div className="bg-gray-900">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Arjumand Rukhsar —
        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" 
        rel="noopener noreferrer">@portfolio.com</a>
     </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
        Copyright@ All Rights Reserved</span>
    </div>
  </div>
</footer>




    </main>
  )
};
