"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import RotatingText from "./RotatingText";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function HeroSection() {
  useEffect(() => {
    aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Left Grid - Text Content */}
        <div 
          className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h1 
            className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Hello, <br />
            This is <span className="text-[#cd66e9]">{personalData.name} </span> <span>Portfolio,</span> 
            <br />{`I'm interested in `}
            <span className="text-[#ce65e2] inline-flex">
              <RotatingText
                // mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                texts={personalData.designation}
                interval={2000}
              />
            </span>
          </h1>

          <div 
            className="my-12 flex items-center gap-5"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.instagram}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <FaInstagram size={30} />
            </Link>

            <Link
              href={personalData.twitter}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div 
            className="flex items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
              data-aos="slide-right"
              data-aos-delay="700"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
              data-aos="slide-left"
              data-aos-delay="800"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right Grid - Code Terminal */}
        <div 
          className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div 
            className="px-4 lg:px-8 py-5"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div 
            className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Yoga Asta</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">ReactJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Laravel</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Data Analytics</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Tensorflow</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Pytorch</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Scikit-Learn</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Deep Learning</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Computer Vision</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;