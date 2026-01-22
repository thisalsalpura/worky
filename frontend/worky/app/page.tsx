'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { categories } from '@/constants/categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TiltCard from '@/components/TiltCard';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-10">
      <section className="w-full h-auto bg-custom-light-black border-2 border-black rounded-lg">
        <div className="grid grid-cols-12 grid-rows-12 h-full">
          <div className="col-start-1 col-span-12 md:col-span-4 row-start-1 row-span-3 md:row-span-9 flex items-center md:items-start p-5">
            <p className="text-2xl md:text-xl lg:text-3xl text-center md:text-left font-heading custom-text-style custom-text-style-white"><span className="custom-text-style-pink">Find skilled freelancers ready to bring your ideas to life.</span> Post your project, connect with talent, and get quality work done—on your terms.</p>
          </div>

          <div className="col-start-1 md:col-start-5 col-span-12 md:col-span-4 row-start-4 md:row-start-3 row-span-6 md:row-span-8 flex items-center justify-center overflow-hidden p-5">
            <Image
              src="/images/home-img.svg"
              alt="home-image"
              width={240}
              height={240}
              className='object-cover aspect-square'
              priority
            />
          </div>

          <div className="col-start-1 md:col-start-9 col-span-12 md:col-span-4 row-start-10 md:row-start-4 row-span-3 md:row-span-9 flex items-center md:items-end p-5">
            <p className="text-2xl md:text-xl lg:text-3xl text-center md:text-right font-heading custom-text-style custom-text-style-white">Turn your skills into income. <span className="custom-text-style-purple">Create your profile, showcase your expertise, and start getting hired by clients who value what you do.</span></p>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full h-auto items-center justify-center gap-4">
        <div className="w-full h-auto flex items-center justify-start p-4">
          <p className="text-4xl text-left font-heading custom-text-style custom-text-style-black">Categories</p>
        </div>

        <div className="w-full h-auto">
          <Swiper
            spaceBetween={16}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full h-full"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id} className="h-auto flex justify-center p-4">
                <TiltCard className="h-full flex flex-col items-center justify-center bg-custom-light-black border-2 border-black rounded-lg p-10 gap-5">
                  <FontAwesomeIcon icon={category.icon} className="text-9xl text-custom-white text-center aspect-square tilt-pop" />
                  <p className="text-3xl text-center font-heading custom-text-style custom-text-style-white tilt-pop">
                    {category.title}
                  </p>
                </TiltCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="w-full h-auto grid grid-cols-12 grid-rows-12 items-center justify-center gap-4">
        <div className="h-full col-span-12 lg:col-span-4 row-span-2 lg:row-span-12 flex items-center justify-start lg:justify-center p-4">
          <p className="text-4xl text-left lg:text-center font-heading custom-text-style custom-text-style-black wrap-break-word">Let&apos;s work Together!</p>
        </div>

        <div className="h-full col-span-12 lg:col-span-4 row-span-5 lg:row-span-12 flex items-center justify-center p-4">
          <TiltCard className="h-full flex flex-col items-center justify-between bg-custom-light-black border-2 border-black rounded-lg p-10 gap-5">
            <h2 className="text-2xl md:text-3xl text-white text-center font-heading">Seller</h2>

            <div className="w-full h-0.5 bg-white opacity-25" />

            <p className="text-lg text-white text-center font-body">Turn your skills into income. Create your profile, showcase your expertise and start getting hired by clients who value what you do.</p>

            <Button name='Register' front_classes='h-10 w-full border-2 border-white' back_classes='h-10 w-full bg-custom-pink' text_color='text-white' />
          </TiltCard>
        </div>

        <div className="h-full col-span-12 lg:col-span-4 row-span-5 lg:row-span-12 flex items-center justify-center p-4">
          <TiltCard className="h-full flex flex-col items-center justify-between bg-custom-light-black border-2 border-black rounded-lg p-10 gap-5">
            <h2 className="text-2xl md:text-3xl text-white text-center font-heading">Buyer</h2>

            <div className="w-full h-0.5 bg-white opacity-25" />

            <p className="text-lg text-white text-center font-body">Find skilled freelancers ready to bring your ideas to life. Post your project, connect with talent and get quality work done—on your terms.</p>

            <Button name='Login' front_classes='h-10 w-full border-2 border-white' back_classes='h-10 w-full bg-custom-purple' text_color='text-white' />
          </TiltCard>
        </div>
      </section>
    </div>
  );
}