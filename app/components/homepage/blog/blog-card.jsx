import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group h-full flex flex-col">
      {/* Image Container - Fixed Height */}
      <div className="h-44 lg:h-52 w-full cursor-pointer overflow-hidden rounded-t-lg flex-shrink-0">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt={blog?.title || "Blog cover"}
          className='h-full w-full object-cover group-hover:scale-110 transition-all duration-300'
        />
      </div>

      {/* Content Container - Flexible dengan equal spacing */}
      <div className="p-2 sm:p-3 flex flex-col flex-1">
        {/* Header with Date & Stats - Fixed Height */}
        <div className="flex justify-between items-center text-[#16f2b3] text-sm mb-2 min-h-[20px]">
          <p className="truncate flex-1 mr-2">
            {timeConverter(blog?.published_at)}
          </p>
          {/* <div className="flex items-center gap-3 flex-shrink-0">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog?.public_reactions_count || 0}</span>
            </p> */}
            {/* Always reserve space for comments, show 0 if no comments */}
            {/* <p className="flex items-center gap-1">
              <FaCommentAlt />
              <span>{blog?.comments_count || 0}</span>
            </p>
          </div> */}
        </div>

        {/* Title - Fixed Height dengan line-clamp */}
        <Link target='_blank' href={blog?.url} className="block">
          <h3 className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500 line-clamp-2 min-h-[3.5rem] lg:min-h-[4rem]'>
            {blog?.title}
          </h3>
        </Link>

        {/* Reading Time - Fixed Height */}
        {/* <p className='mb-2 text-sm text-[#16f2b3] min-h-[20px]'>
          {blog?.reading_time_minutes ? `${blog.reading_time_minutes} Min Read` : 'Quick Read'}
        </p> */}

        {/* Description - Flex-grow untuk mengisi sisa ruang */}
        <div className="flex-1 flex items-start">
          <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
            {blog?.description || 'No description available.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;