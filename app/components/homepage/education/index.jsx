// @flow strict
'use client';
import Image from "next/image";
import aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from '/public/lottie/study.json';

function Education() {
  useEffect(() => {
    aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] overflow-hidden">
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
        {/* Top Gradient Line */}
        <div 
          className="flex justify-center -translate-y-[1px]"
          data-aos="fade-in"
          data-aos-delay="50"
        >
          <div className="w-3/4 max-w-4xl">
            <div 
              className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full"
              data-aos="slide-right"
              data-aos-delay="100"
            />
          </div>
        </div>

        {/* Section Header */}
        <div 
          className="flex justify-center my-5 lg:py-8"
          data-aos="fade-down"
          data-aos-delay="150"
        >
          <div className="flex items-center">
            <span 
              className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"
              data-aos="slide-right"
              data-aos-delay="250"
            ></span>
            <span 
              className="bg-[#1a1443] w-fit text-white p-2 px-3 sm:px-5 text-lg sm:text-xl rounded-md mx-2"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              Educations
            </span>
            <span 
              className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"
              data-aos="slide-left"
              data-aos-delay="250"
            ></span>
          </div>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-7xl mx-auto">
            {/* Left Grid - Lottie Animation dengan constraint */}
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
                <AnimationLottie animationPath={lottieFile} />
              </div>
            </div>

            {/* Right Grid - Education Cards */}
            <div
              className="w-full"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="flex flex-col gap-6">
                {
                  educations.map((education, index) => (
                    <div
                      key={education.id}
                      data-aos="fade-up"
                      data-aos-delay={700 + (index * 150)}
                      className="w-full"
                    >
                      <GlowCard identifier={`education-${education.id}`}>
                        <div className="p-3 relative text-white overflow-hidden">
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
                              {education.duration}
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
                                {education.title}
                              </p>
                              <p className="text-sm sm:text-base break-words">
                                {education.institution}
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

export default Education;