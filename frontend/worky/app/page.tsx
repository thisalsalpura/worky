'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { categories } from '@/constants/categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-10">
      <section className="w-full h-auto bg-custom-white-transparent border border-white backdrop:blur-2xl rounded-lg">
        <div className="grid grid-cols-12 grid-rows-12 h-full">
          <div className="col-start-1 col-span-12 md:col-span-4 row-start-1 row-span-3 md:row-span-9 flex items-center md:items-start p-5">
            <p className="text-2xl md:text-xl lg:text-3xl text-center md:text-left font-heading custom-text-style custom-text-style-black"><span className="custom-text-style-pink">Find skilled freelancers ready to bring your ideas to life.</span> Post your project, connect with talent, and get quality work done—on your terms.</p>
          </div>

          <div className="col-start-1 md:col-start-5 col-span-12 md:col-span-4 row-start-4 md:row-start-3 row-span-6 md:row-span-8 flex items-center justify-center overflow-hidden p-5">
            <Image
              src="/images/home-img.svg"
              alt="home-image"
              width={240}
              height={240}
              className='object-cover'
              priority
            />
          </div>

          <div className="col-start-1 md:col-start-9 col-span-12 md:col-span-4 row-start-10 md:row-start-4 row-span-3 md:row-span-9 flex items-center md:items-end p-5">
            <p className="text-2xl md:text-xl lg:text-3xl text-center md:text-right font-heading custom-text-style custom-text-style-black">Turn your skills into income. <span className="custom-text-style-purple">Create your profile, showcase your expertise, and start getting hired by clients who value what you do.</span></p>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full h-auto items-start justify-center">
        <p className="text-3xl text-left font-heading tracking-wide custom-text-style custom-text-style-black">Categories</p>

        <div className="w-full h-auto mt-5">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="w-full h-auto"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id} className="flex! flex-col items-center justify-center bg-custom-white-transparent border border-white backdrop:blur-2xl rounded-lg p-10 gap-10">
                <FontAwesomeIcon icon={category.icon} className="text-7xl lg:text-9xl text-center" />
                <p className="mb-2.5 text-xl lg:text-3xl text-center font-heading custom-text-style custom-text-style-black">
                  {category.title}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
