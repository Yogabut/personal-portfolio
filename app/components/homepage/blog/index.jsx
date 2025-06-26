'use client'
// @flow strict
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';
import BlogCard from './blog-card';
import { certification } from '@/utils/data/blog';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Blog() {
  const [showAll, setShowAll] = useState(false);
  
  // Sort blogs by date (newest first) and get the ones to display
  const sortedCertification = certification.sort((a, b) => new Date(b.date) - new Date(a.date));
  const certificationToShow = showAll ? sortedCertification : sortedCertification.slice(0, 3);
  
  const handleToggleView = () => {
    setShowAll(!showAll);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  // Refresh AOS when items change
  useEffect(() => {
    AOS.refresh();
  }, [showAll, certificationToShow.length]);


  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10 auto-rows-fr">
        {
          certificationToShow.map((blog, i) => (
            <div
              key={blog.id || i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-duration="800"
              className="flex h-full"
            >
              <div className="w-full">
                <BlogCard blog={blog} />
              </div>
            </div>
          ))
        }
      </div>

      <div className="flex justify-center mt-5 lg:mt-12">
        <button
          onClick={handleToggleView}
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span>{showAll ? 'Show Less' : 'View More'}</span>
          {showAll ? <FaArrowUp size={16} /> : <FaArrowRight size={16} />}
        </button>
      </div>
    </div>
  );
};

export default Blog;