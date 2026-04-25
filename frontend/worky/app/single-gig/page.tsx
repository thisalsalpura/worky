'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faShare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Single_Gig = () => {

    const [gigImages, setGigImages] = useState<string[]>([
        "/images/empty-gig-img.svg",
        "/images/empty-gig-img.svg",
        "/images/empty-gig-img.svg",
        "/images/empty-gig-img.svg",
        "/images/empty-gig-img.svg"
    ]);

    const [activeImage, setActiveImage] = useState<string>(gigImages[0]);

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const handleImageSelect = (src: string, index: number) => {
        if (index === activeIndex) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveImage(src);
            setActiveIndex(index);
            setIsTransitioning(false);
        }, 180);
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-12">
            <div className="w-full h-auto flex items-center justify-between gap-x-4">
                <p className="text-sm text-primary font-base">
                    <span className="opacity-40 cursor-pointer">Home</span>
                    <FontAwesomeIcon icon={faAngleRight} className="opacity-40 cursor-pointer" />
                    <span className="opacity-40 cursor-pointer">SingleGig</span>
                    <FontAwesomeIcon icon={faAngleRight} className="cursor-pointer" />
                    <span className="cursor-pointer">Programming & Tech</span>
                    <FontAwesomeIcon icon={faAngleRight} className="cursor-pointer" />
                    <span className="cursor-pointer">Web Development</span>
                </p>

                <div className="w-auto h-auto flex items-center justify-center bg-on-primary border border-outline hover:bg-primary rounded-xl p-2.5 transition-colors duration-300 cursor-pointer group">
                    <FontAwesomeIcon icon={faShare} className="text-sm text-primary group-hover:text-on-primary" />
                </div>
            </div>

            <div className="w-full h-auto p-4">
                <div className="w-full h-auto grid grid-cols-12 gap-y-8 md:gap-x-8">
                    <div className="col-span-12 md:col-span-7 h-auto flex flex-col items-center justify-start gap-y-6">
                        <h2 className="w-full h-auto text-2xl text-on-background font-heading font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, tenetur incidunt quis veniam quasi eos velit repellendus animi aperiam placeat voluptatibus tempore dignissimos eveniet magnam tempora facere explicabo, repellat provident?</h2>

                        <div className="w-full h-auto flex items-center justify-start gap-x-4">
                            <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-outline rounded-full cursor-pointer">
                                <div className="w-10 h-10 flex items-center justify-center bg-surface-variant dark:bg-on-surface-variant rounded-full overflow-hidden">
                                    <Image
                                        src="/images/user-img.svg"
                                        alt="user-image"
                                        width={40}
                                        height={40}
                                        className='object-cover'
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="w-full h-auto flex flex-col items-start justify-center gap-y-2">
                                <p className="w-auto flex-1 text-on-background dark:text-background font-base font-semibold line-clamp-1">Ben Stokes</p>
                                <p className="w-auto flex-1 text-xs text-on-background dark:text-background font-base line-clamp-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ab odio aperiam nisi consequuntur, explicabo maiores saepe quod expedita sequi vel libero voluptate molestias laboriosam aliquid provident quia repellat eos!</p>
                            </div>
                        </div>

                        <div className="w-full h-96 bg-surface-variant border-2 border-outline-variant rounded-lg overflow-hidden">
                            <Image
                                src={activeImage}
                                alt="gig-image"
                                width={384}
                                height={384}
                                className={`w-full h-full aspect-video object-cover transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                                priority
                            />
                        </div>

                        <div className="w-full h-auto p-4">
                            <Swiper
                                spaceBetween={10}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                }}
                                modules={[Autoplay]}
                                breakpoints={{
                                    0: { slidesPerView: 2 },
                                    640: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4 }
                                }}
                                className="w-full h-full"
                            >
                                {gigImages.map((gigImage, index) => (
                                    <SwiperSlide key={index} className="h-full">
                                        <button
                                            onClick={() => handleImageSelect(gigImage, index)}
                                            className={`w-full h-28 bg-surface-variant border-2 rounded-lg transition-all duration-300 focus:outline-none overflow-hidden ${activeIndex === index ? "border-primary opacity-100" : "border-outline-variant opacity-40"}`}
                                        >
                                            <Image
                                                src={gigImage}
                                                alt="gig-image"
                                                width={112}
                                                height={112}
                                                className='w-full h-full aspect-video object-cover'
                                                priority
                                            />
                                        </button>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <div className="md:top-22 col-span-12 md:col-span-5 h-auto md:h-fit flex flex-col items-center justify-start md:sticky border border-outline-variant rounded-lg shadow-lg p-5 gap-y-6">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Single_Gig;