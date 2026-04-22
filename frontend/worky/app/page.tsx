'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { categories } from '@/constants/categories';
import { TiltCard } from '@/components/ui/TiltCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@/components/ui/Button';
import { CustomTextField } from '@/components/ui/CustomTextField';

const Index = () => {

  const [email, setEmail] = useState<string>("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-12">

      {/* HERO SECTION */}
      <section className="w-full h-auto bg-on-background border-2 border-on-background rounded-lg">
        <div className="grid grid-cols-12 grid-rows-12 h-full">
          <div className="col-start-1 col-span-12 md:col-span-4 row-start-1 row-span-3 md:row-span-9 flex items-center md:items-start p-5">
            <h3 className="text-2xl md:text-xl lg:text-3xl text-center md:text-left font-heading custom-text-style" style={{ WebkitTextStroke: '1px var(--color-background)' }}>
              Find skilled freelancers ready to bring your ideas to Life. <span className="text-primary-container">Post your project, connect with talent and get quality work done—on your Terms.</span>
            </h3>
          </div>

          <div className="col-start-1 md:col-start-5 col-span-12 md:col-span-4 row-start-4 md:row-start-3 row-span-6 md:row-span-8 flex items-center justify-center overflow-hidden p-5">
            <Image
              src="/images/home-img.svg"
              alt="home-image"
              width={250}
              height={250}
              className='object-cover aspect-square'
              priority
            />
          </div>

          <div className="col-start-1 md:col-start-9 col-span-12 md:col-span-4 row-start-10 md:row-start-4 row-span-3 md:row-span-9 flex items-center md:items-end p-5">
            <h3 className="text-2xl md:text-xl lg:text-3xl text-center md:text-right font-heading custom-text-style" style={{ WebkitTextStroke: '1px var(--color-background)' }}>
              <span className="text-primary-container">Turn your skills into Income.</span> Create your profile, showcase your expertise and start getting hired by clients who value what you Do.
            </h3>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="w-full h-auto flex flex-col items-center justify-center gap-4">
        <div className="w-full h-auto flex items-center justify-center md:justify-start p-4">
          <h2 className="text-4xl text-center md:text-left font-heading custom-text-style" style={{ WebkitTextStroke: '1px var(--color-on-background)' }}>Categories</h2>
        </div>

        <div className="w-full h-auto">
          <Swiper
            spaceBetween={16}
            autoplay={{
              delay: 3000,
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
                <TiltCard className="h-full flex flex-col items-center justify-center bg-on-background border-2 border-on-background rounded-lg p-5 sm:p-10 gap-6">
                  <FontAwesomeIcon icon={category.icon} className="text-9xl text-background text-center aspect-square tilt-pop" />
                  <p className="text-3xl text-center font-heading custom-text-style tilt-pop" style={{ WebkitTextStroke: '1px var(--color-background)' }}>
                    {category.title}
                  </p>
                </TiltCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* WORK TOGETHER SECTION */}
      <section className='w-full h-auto flex flex-col items-center justify-center gap-4'>
        <div className="w-full h-auto flex items-center justify-center md:justify-start p-4">
          <h2 className="text-4xl text-center md:text-left font-heading custom-text-style" style={{ WebkitTextStroke: '1px var(--color-on-background)' }}>Let&apos;s work Together!</h2>
        </div>

        <div className="w-full h-auto grid grid-cols-12 grid-rows-12">
          <div className="h-full col-span-12 md:col-span-6 row-span-6 md:row-span-12 flex items-center justify-center p-4 md:pr-12">
            <div className="w-full h-full flex flex-col justify-between bg-on-background border-2 border-on-background rounded-lg p-5 sm:p-10 gap-6 lg:gap-8">
              <h3 className="text-2xl md:text-3xl text-background text-center font-heading">Seller</h3>

              <div className="w-full h-0.5 bg-outline opacity-20" />

              <p className="text-background text-center font-base">Turn your skills into Income. Create your profile, showcase your expertise and start getting hired by clients who value what you Do.</p>

              <div className="w-full h-0.5 bg-outline opacity-20" />

              <Button name="Become a Seller" href="/login" btnContainer="w-auto text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />
            </div>
          </div>

          <div className="h-full col-span-12 md:col-span-6 row-span-6 md:row-span-12 flex items-center justify-center p-4 md:pl-12">
            <div className="w-full h-full flex flex-col justify-between bg-on-background border-2 border-on-background rounded-lg p-5 sm:p-10 gap-6 lg:gap-8">
              <h3 className="text-2xl md:text-3xl text-background text-center font-heading">Buyer</h3>

              <div className="w-full h-0.5 bg-outline opacity-20" />

              <p className="text-background text-center font-base">Find skilled freelancers ready to bring your ideas to Life. Post your project, connect with talent and get quality work done—on your Terms.</p>

              <div className="w-full h-0.5 bg-outline opacity-20" />

              <Button name="Hire Freelancers" href="/login" btnContainer="w-auto text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* JOIN WORKY SECTION */}
      <section className="w-full h-auto p-4">
        <div className="w-full h-full flex flex-col items-center justify-center bg-on-background border-2 border-on-background rounded-lg p-5 sm:p-10 gap-8">
          <h3 className="text-2xl md:text-3xl text-background text-center font-heading">Freelance services at your Fingertips</h3>

          <div className="w-full h-0.5 bg-outline opacity-20" />

          <Button name="Join Worky" href="/login" btnContainer="w-auto text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />
        </div>
      </section>

      {/* DOWNLOAD APP SECTION */}
      <section className="w-full h-auto p-4">
        <div className="w-full h-full flex flex-col items-center justify-center bg-on-background border-2 border-on-background rounded-lg p-5 sm:p-10 gap-8">
          <h3 className="text-2xl md:text-3xl text-background text-center font-heading">Work fast from Anywhere</h3>

          <div className="w-full h-0.5 bg-outline opacity-20" />

          <p className="text-background text-center font-base">Stay up to date and move work forward with Worky on IOS & Android. Download the app Today.</p>

          <div className="flex flex-col md:flex-row gap-8">
            <TiltCard className="w-auto flex flex-row items-center justify-center bg-primary border border-outline hover:bg-on-primary rounded-2xl p-4 gap-4 transition-colors duration-300 cursor-pointer group">
              <FontAwesomeIcon icon={faApple} className="text-4xl text-on-primary group-hover:text-primary" />

              <div className="flex flex-col">
                <p className="text-on-primary font-base font-semibold tilt-pop group-hover:text-primary">Download on The</p>
                <p className="text-lg text-on-primary font-base font-semibold tilt-pop group-hover:text-primary">App Store</p>
              </div>
            </TiltCard>

            <TiltCard className="w-auto flex flex-row items-center justify-center bg-primary border border-outline hover:bg-on-primary rounded-2xl p-4 gap-4 transition-colors duration-300 cursor-pointer group">
              <FontAwesomeIcon icon={faGooglePlay} className="text-4xl text-on-primary group-hover:text-primary" />

              <div className="flex flex-col">
                <p className="text-on-primary font-base font-semibold tilt-pop group-hover:text-primary">Download on The</p>
                <p className="text-lg text-on-primary font-base font-semibold tilt-pop group-hover:text-primary">Play Store</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="w-full h-auto p-4">
        <div className="w-full h-full flex flex-col items-start justify-center bg-on-background border-2 border-on-background rounded-lg p-5 sm:p-10 gap-8">
          <h3 className="text-2xl md:text-3xl text-background text-left font-heading">Get more Updates</h3>

          <div className="w-full h-0.5 bg-outline opacity-20" />

          <p className="text-background text-left font-base">Subscribe to our Newsletter and never miss an opportunity—whether you&apos;re hiring or offering your Skills.</p>

          <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-4">
            <CustomTextField
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors(prev => ({ ...prev, email: "" }));
              }}
              error={!!errors.email}
              helperText={errors.email}
            />

            <Button name="Subscribe" btnContainer="w-full sm:w-40 text-on-primary bg-primary hover:text-primary hover:bg-on-primary group" btnPing="bg-on-primary group-hover:bg-primary" btnPingDot="bg-on-primary group-hover:bg-primary" />
          </div>

          <p className="text-background text-left font-base">By Subscribing, you agree to our <span className="text-primary-container cursor-pointer">Terms of Service</span> and <span className="text-primary-container cursor-pointer">Privacy Policy</span>.</p>
        </div>
      </section>

    </div>
  );
}

export default Index;