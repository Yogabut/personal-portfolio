// @flow strict
'use client';

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] overflow-hidden">
      {/* Background Image - Fixed dengan responsive */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 w-full h-auto object-cover"
      />

      {/* Container dengan padding yang konsisten */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className="flex justify-center my-5 lg:py-8"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="flex items-center">
            <span 
              className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"
              data-aos="slide-right"
              data-aos-delay="200"
            ></span>
            <span 
              className="bg-[#1a1443] w-fit text-white p-2 px-3 sm:px-5 text-lg sm:text-xl rounded-md mx-2"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Experiences
            </span>
            <span 
              className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"
              data-aos="slide-left"
              data-aos-delay="200"
            ></span>
          </div>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-7xl mx-auto">
            {/* Left Grid - Animation dengan constraint */}
            <div 
              className="flex justify-center items-start"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div 
                className="w-full max-w-md h-auto"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <AnimationLottie animationPath={experience} />
              </div>
            </div>

            {/* Right Grid - Experience Cards */}
            <div
              className="w-full"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="flex flex-col gap-6">
                {
                  experiences.map((experience, index) => (
                    <div
                      key={experience.id}
                      data-aos="fade-up"
                      data-aos-delay={700 + (index * 150)}
                      className="w-full"
                    >
                      <GlowCard identifier={`experience-${experience.id}`}>
                        <div className="p-3 relative overflow-hidden">
                          <Image
                            src="/blur-23.svg"
                            alt="Hero"
                            width={1080}
                            height={200}
                            className="absolute bottom-0 opacity-80 w-full h-auto object-cover"
                          />
                          <div 
                            className="flex justify-center relative z-10"
                            data-aos="fade-down"
                            data-aos-delay={750 + (index * 150)}
                          >
                            <p className="text-xs sm:text-sm text-[#16f2b3]">
                              {experience.duration}
                            </p>
                          </div>
                          <div 
                            className="flex items-center gap-x-4 sm:gap-x-8 px-3 py-5 relative z-10"
                            data-aos="fade-up"
                            data-aos-delay={800 + (index * 150)}
                          >
                            <div 
                              className="text-violet-500 transition-all duration-300 hover:scale-125 flex-shrink-0"
                              data-aos="zoom-in"
                              data-aos-delay={850 + (index * 150)}
                            >
                              <BsPersonWorkspace size={36} />
                            </div>
                            <div
                              className="flex-1 min-w-0"
                              data-aos="slide-left"
                              data-aos-delay={900 + (index * 150)}
                            >
                              <p className="text-base sm:text-xl mb-2 font-medium uppercase break-words">
                                {experience.title}
                              </p>
                              <p className="text-sm sm:text-base break-words">
                                {experience.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </GlowCard>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;