'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { categories } from '@/constants/categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import TiltCard from '@/components/TiltCard';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-12">

      {/* HERO SECTION */}
      <section className="w-full h-auto bg-custom-light-black border-2 border-custom-light-black rounded-lg">
        <div className="grid grid-cols-12 grid-rows-12 h-full">
          <div className="col-start-1 col-span-12 md:col-span-4 row-start-1 row-span-3 md:row-span-9 flex items-center md:items-start p-4">
            <p className="text-2xl md:text-xl lg:text-3xl text-center md:text-left font-heading custom-text-style custom-text-style-white"><span className="custom-text-style-pink">Find skilled freelancers ready to bring your ideas to life.</span> Post your project, connect with talent and get quality work done—on your terms.</p>
          </div>

          <div className="col-start-1 md:col-start-5 col-span-12 md:col-span-4 row-start-4 md:row-start-3 row-span-6 md:row-span-8 flex items-center justify-center overflow-hidden p-4">
            <Image
              src="/images/home-img.svg"
              alt="home-image"
              width={240}
              height={240}
              className='object-cover aspect-square'
              priority
            />
          </div>

          <div className="col-start-1 md:col-start-9 col-span-12 md:col-span-4 row-start-10 md:row-start-4 row-span-3 md:row-span-9 flex items-center md:items-end p-4">
            <p className="text-2xl md:text-xl lg:text-3xl text-center md:text-right font-heading custom-text-style custom-text-style-white">Turn your skills into income. <span className="custom-text-style-purple">Create your profile, showcase your expertise and start getting hired by clients who value what you do.</span></p>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="flex flex-col w-full h-auto items-center justify-center gap-4">
        <div className="w-full h-auto flex items-center justify-center md:justify-start p-4">
          <p className="text-4xl text-center md:text-left font-heading custom-text-style custom-text-style-black">Categories</p>
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
              <SwiperSlide key={category.id} className="h-full flex justify-center p-4">
                <TiltCard className="h-full flex flex-col items-center justify-center bg-custom-light-black border-2 border-custom-light-black rounded-lg p-10 gap-6">
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

      {/* WORK TOGETHER SECTION */}
      <section className='flex flex-col w-full h-auto items-center justify-center gap-4'>
        <div className="w-full h-auto flex items-center justify-center md:justify-start p-4">
          <p className="text-4xl text-center md:text-left font-heading custom-text-style custom-text-style-black">Let&apos;s work Together!</p>
        </div>

        <div className="w-full h-auto grid grid-cols-12 grid-rows-12">
          <div className="h-full col-span-12 md:col-span-6 row-span-6 md:row-span-12 flex items-center justify-center p-4 md:pr-12">
            <div className="w-full h-full flex flex-col justify-between bg-custom-light-black border-2 border-custom-light-black rounded-lg p-10 gap-6 lg:gap-8">
              <h2 className="text-2xl md:text-3xl text-white text-center font-heading">Seller</h2>

              <div className="w-full h-0.5 bg-white opacity-10" />

              <p className="text-lg text-white text-center font-body">Turn your skills into income. Create your profile, showcase your expertise and start getting hired by clients who value what you do.</p>

              <div className="w-full h-0.5 bg-white opacity-10" />

              <Button name='Register' front_classes='h-10 w-full border-2 border-white' back_classes='h-10 w-full bg-custom-pink' text_color='text-white' />
            </div>
          </div>

          <div className="h-full col-span-12 md:col-span-6 row-span-6 md:row-span-12 flex items-center justify-center p-4 md:pl-12">
            <div className="w-full h-full flex flex-col justify-between bg-custom-light-black border-2 border-custom-light-black rounded-lg p-10 gap-6 lg:gap-8">
              <h2 className="text-2xl md:text-3xl text-white text-center font-heading">Buyer</h2>

              <div className="w-full h-0.5 bg-white opacity-10" />

              <p className="text-lg text-white text-center font-body">Find skilled freelancers ready to bring your ideas to life. Post your project, connect with talent and get quality work done—on your terms.</p>

              <div className="w-full h-0.5 bg-white opacity-10" />

              <Button name='Login' front_classes='h-10 w-full border-2 border-white' back_classes='h-10 w-full bg-custom-purple' text_color='text-white' />
            </div>
          </div>
        </div>
      </section>

      {/* JOIN WORKY SECTION */}
      <section className="w-full h-auto p-4">
        <div className="w-full h-full flex flex-col justify-center bg-custom-light-black border-2 border-custom-light-black rounded-lg p-10 gap-8">
          <h2 className="text-2xl md:text-3xl text-white text-center font-heading">Freelance services at your fingertips</h2>

          <div className="w-full h-0.5 bg-white opacity-10" />

          <Button name='Join Worky' btn_class='mx-auto w-full sm:w-40' front_classes='h-10 w-full sm:w-40 border-2 border-white' back_classes='h-10 w-full sm:w-40 bg-blue-700' text_color='text-white' />
        </div>
      </section>

      {/* DOWNLOAD APP SECTION */}
      <section className="w-full h-auto p-4">
        <div className="w-full h-full flex flex-col items-center justify-center bg-custom-light-black border-2 border-custom-light-black rounded-lg p-10 gap-8">
          <h2 className="text-2xl md:text-3xl text-white text-center font-heading">Work fast from anywhere</h2>

          <div className="w-full h-0.5 bg-white opacity-10" />

          <p className="text-lg text-white text-center font-body">Stay up to date and move work forward with Worky on IOS & Android. Download the app today.</p>

          <div className="flex flex-col md:flex-row gap-8">
            <TiltCard className="w-auto inline-flex items-center justify-center gap-4 bg-blur border-2 border-white rounded-2xl p-4 cursor-pointer">
              <FontAwesomeIcon icon={faApple} className="text-4xl text-white" />

              <div className="flex flex-col">
                <p className="text-base text-white font-body tilt-pop">Download on the</p>
                <p className="text-xl text-white font-body tilt-pop">App Store</p>
              </div>
            </TiltCard>

            <TiltCard className="w-auto inline-flex items-center justify-center gap-4 bg-blur border-2 border-white rounded-2xl p-4 cursor-pointer">
              <FontAwesomeIcon icon={faGooglePlay} className="text-4xl text-white" />

              <div className="flex flex-col">
                <p className="text-base text-white font-body tilt-pop">Download on the</p>
                <p className="text-xl text-white font-body tilt-pop">Play Store</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="w-full h-auto p-4">
        <div className="w-full h-full flex flex-col items-start justify-center bg-custom-light-black border-2 border-custom-light-black rounded-lg p-10 gap-8">
          <h2 className="text-2xl md:text-3xl text-white text-left font-heading">Get more updates</h2>

          <div className="w-full h-0.5 bg-white opacity-10" />

          <p className="text-lg text-white text-left font-body">Subscribe to our newsletter and never miss an opportunity—whether you&apos;re hiring or offering your skills.</p>

          <div className="w-full h-auto flex flex-col md:flex-row gap-4">
            <input id="email" name="email" type="email" className="w-full h-11 bg-blur text-lg text-white font-body border-2 border-white rounded-md p-2" placeholder="Your Email Address..." required />

            <Button name='Subscribe' btn_class='mx-auto w-full sm:w-40' front_classes='h-10 w-full sm:w-40 border-2 border-white' back_classes='h-10 w-full sm:w-40 bg-blue-700' text_color='text-white' />
          </div>

          <p className="text-lg text-white text-left font-body">By subscribing, you agree to our <span className="text-blue-700 cursor-pointer">Terms of Service</span> and <span className="text-blue-700 cursor-pointer">Privacy Policy</span>.</p>
        </div>
      </section>

    </div>
  );
}