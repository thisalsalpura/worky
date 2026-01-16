import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center">
      <section className="h-auto bg-custom-light-black rounded-lg">
        <div className="grid grid-cols-12 grid-rows-12 h-full">
          <div className="col-start-1 col-span-12 md:col-span-4 row-start-1 row-span-3 md:row-span-9 flex items-center md:items-start text-center md:text-left p-5">
            <p className="text-2xl md:text-xl lg:text-3xl font-heading custom-text-style"><span className="custom-text-style-pink">Find skilled freelancers ready to bring your ideas to life.</span> Post your project, connect with talent, and get quality work done—on your terms.</p>
          </div>

          <div className="col-start-1 md:col-start-5 col-span-12 md:col-span-4 row-start-4 md:row-start-3 row-span-6 md:row-span-8 flex items-center justify-center overflow-hidden p-5">
            <Image
              src="/images/home-img.svg"
              alt="home-image"
              width={250}
              height={250}
              className='object-cover'
              priority
            />
          </div>

          <div className="col-start-1 md:col-start-9 col-span-12 md:col-span-4 row-start-10 md:row-start-4 row-span-3 md:row-span-9 flex items-center md:items-end text-center md:text-right p-5">
            <p className="text-2xl md:text-xl lg:text-3xl font-heading custom-text-style">Turn your skills into income. <span className="custom-text-style-purple">Create your profile, showcase your expertise, and start getting hired by clients who value what you do.</span></p>
          </div>
        </div>
      </section >
    </div>
  );
}
