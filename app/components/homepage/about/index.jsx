// @flow strict
'use client';

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ProfileCard from './profilecard';

function AboutSection() {
  useEffect(() => {
    aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      {/* Side Label */}
      <div 
        className="hidden lg:flex flex-col items-center absolute top-16 -right-8"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <span 
          className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span 
          className="h-36 w-[2px] bg-[#1a1443]"
          data-aos="fade-down"
          data-aos-delay="600"
        ></span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2">
        {/* Text Content - Left Grid */}
        <div 
          className="order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <p 
            className="font-medium mb-5 text-[#16f2b3] text-xl uppercase"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Who I am?
          </p>
          <p 
            className="text-gray-200 text-sm lg:text-lg"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {personalData.description}
          </p>
        </div>

        {/* Profile Image - Right Grid */}
        <div 
          className="flex justify-center order-1 lg:order-2 items-center"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <ProfileCard
            name= {personalData.name}
            title= {personalData.title}
            handle="yogaastaaa"
            status="Online"
            contactText="Contact Me"
            avatarUrl= {personalData.profile}
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;