// @flow strict
'use client';
import { useEffect } from 'react';
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import {FaInstagram, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactWithCaptcha from './contact-with-captcha';
import ContactWithoutCaptcha from './contact-without-captcha';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactSection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span 
          className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span 
          className="h-36 w-[2px] bg-[#1a1443]"
          data-aos="fade-down"
          data-aos-delay="400"
        ></span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Contact Form Section */}
        <div 
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          {
            (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY) ? <ContactWithCaptcha />
              : <ContactWithoutCaptcha />
          }
        </div>

        {/* Contact Info Section */}
        <div 
          className="lg:w-3/4"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <div className="flex flex-col gap-5 lg:gap-9">
            {/* Email */}
            <p 
              className="text-sm md:text-xl flex items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            
            {/* Phone */}
            <p 
              className="text-sm md:text-xl flex items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.phone}
              </span>
            </p>
            
            {/* Location */}
            <p 
              className="text-sm md:text-xl flex items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>

          {/* Social Media Links */}
          <div 
            className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Link 
              target="_blank" 
              href={personalData.github}
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link 
              target="_blank" 
              href={personalData.linkedIn}
              data-aos="zoom-in"
              data-aos-delay="750"
            >
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link 
              target="_blank" 
              href={personalData.twitter}
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <FaXTwitter
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link 
              target="_blank" 
              href={personalData.stackOverflow}
              data-aos="zoom-in"
              data-aos-delay="850"
            >
              <FaStackOverflow
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link 
              target="_blank" 
              href={personalData.instagram}
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <FaInstagram
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;