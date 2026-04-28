'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faClock, faShare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaqItem } from "@/components/interfaces/FaqItem";
import { CustomAccordion } from "@/components/ui/mui/CustomAccordion";
import { CustomTabs } from "@/components/ui/mui/CustomTabs";
import { Button } from "@/components/ui/Button";

function Bronze_Package() {
    return (
        <div className="w-full h-auto flex flex-col items-start justify-start gap-y-6">
            <h2 className="text-2xl text-on-background dark:text-background font-heading font-semibold">Bronze Package</h2>

            <p className="text-on-background dark:text-background font-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quisquam deserunt quis illo! Quas, delectus ipsa! Tempora excepturi architecto odit quia amet! Veniam dolore ipsam voluptatem, aliquid qui eius beatae!</p>

            <div className="w-full h-auto flex flex-row items-center justify-end gap-x-2">
                <FontAwesomeIcon icon={faClock} className="text-base text-on-background dark:text-background" />
                <p className="text-on-background dark:text-background font-base font-semibold">3 Days Delivery</p>
            </div>

            <div className="w-full h-auto flex items-center justify-end">
                <p className="text-lg text-on-background dark:text-background font-base font-semibold">LKR 99.99</p>
            </div>

            <Button name="Add to Cart" btnContainer="w-full text-primary bg-on-primary hover:text-on-primary hover:bg-primary group" btnPing="bg-primary group-hover:bg-on-primary" btnPingDot="bg-primary group-hover:bg-on-primary" />
        </div>
    );
}

function Silver_Package() {
    return (
        <div className="w-full h-auto flex flex-col items-start justify-start gap-y-6">
            <h2 className="text-2xl text-on-background dark:text-background font-heading font-semibold">Silver Package</h2>

            <p className="text-on-background dark:text-background font-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quisquam deserunt quis illo! Quas, delectus ipsa! Tempora excepturi architecto odit quia amet! Veniam dolore ipsam voluptatem, aliquid qui eius beatae!</p>

            <div className="w-full h-auto flex flex-row items-center justify-end gap-x-2">
                <FontAwesomeIcon icon={faClock} className="text-base text-on-background dark:text-background" />
                <p className="text-on-background dark:text-background font-base font-semibold">2 Days Delivery</p>
            </div>

            <div className="w-full h-auto flex items-center justify-end">
                <p className="text-lg text-on-background dark:text-background font-base font-semibold">LKR 199.99</p>
            </div>

            <Button name="Add to Cart" btnContainer="w-full text-primary bg-on-primary hover:text-on-primary hover:bg-primary group" btnPing="bg-primary group-hover:bg-on-primary" btnPingDot="bg-primary group-hover:bg-on-primary" />
        </div>
    );
}

function Gold_Package() {
    return (
        <div className="w-full h-auto flex flex-col items-start justify-start gap-y-6">
            <h2 className="text-2xl text-on-background dark:text-background font-heading font-semibold">Gold Package</h2>

            <p className="text-on-background dark:text-background font-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quisquam deserunt quis illo! Quas, delectus ipsa! Tempora excepturi architecto odit quia amet! Veniam dolore ipsam voluptatem, aliquid qui eius beatae!</p>

            <div className="w-full h-auto flex flex-row items-center justify-end gap-x-2">
                <FontAwesomeIcon icon={faClock} className="text-base text-on-background dark:text-background" />
                <p className="text-on-background dark:text-background font-base font-semibold">1 Days Delivery</p>
            </div>

            <div className="w-full h-auto flex items-center justify-end">
                <p className="text-lg text-on-background dark:text-background font-base font-semibold">LKR 299.99</p>
            </div>

            <Button name="Add to Cart" btnContainer="w-full text-primary bg-on-primary hover:text-on-primary hover:bg-primary group" btnPing="bg-primary group-hover:bg-on-primary" btnPingDot="bg-primary group-hover:bg-on-primary" />
        </div>
    );
}

const Single_Gig = () => {

    const [gigImages, setGigImages] = useState<string[]>([
        "/images/empty-gig-img.svg",
        "/images/empty-gig-img.svg",
        "/images/empty-gig-img.svg",
        "/images/empty-gig-img.svg",
        "/images/empty-gig-img.svg"
    ]);

    const FAQS: FaqItem[] = [
        {
            id: 'panel-1',
            question: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita labore deserunt excepturi magni, ratione dolorem adipisci ducimus minus quia tenetur! Quia sit laboriosam molestias, nam ducimus sint dolor architecto laudantium?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, sit quia necessitatibus at vel, ut asperiores iste expedita voluptates facilis rerum architecto. Enim eligendi iure commodi beatae dignissimos placeat unde?'
        },
        {
            id: 'panel-2',
            question: 'Quia sit laboriosam molestias, nam ducimus sint dolor architecto laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            answer: 'Enim eligendi iure commodi beatae dignissimos placeat unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus at vel.'
        }
    ];

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
                    <div className="col-span-12 md:col-span-7 h-auto flex flex-col items-center justify-start gap-y-8">
                        <h2 className="w-full h-auto text-2xl text-on-background font-heading font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, tenetur incidunt quis veniam quasi eos velit repellendus animi aperiam placeat voluptatibus tempore dignissimos eveniet magnam tempora facere explicabo, repellat provident?</h2>

                        <div className="w-full h-auto flex items-center justify-start gap-x-4">
                            <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-outline rounded-full cursor-pointer">
                                <div className="w-10 h-10 flex items-center justify-center bg-surface-variant rounded-full overflow-hidden">
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
                                <p className="w-auto flex-1 text-on-background font-base font-semibold line-clamp-1">Ben Stokes</p>
                                <p className="w-auto flex-1 text-xs text-on-background font-base line-clamp-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ab odio aperiam nisi consequuntur, explicabo maiores saepe quod expedita sequi vel libero voluptate molestias laboriosam aliquid provident quia repellat eos!</p>
                            </div>
                        </div>

                        <div className="w-full h-96 flex items-center justify-center border border-outline-variant rounded-lg p-2">
                            <div className="w-full h-full bg-surface-variant border border-outline-variant rounded-lg overflow-hidden">
                                <Image
                                    src={activeImage}
                                    alt="gig-image"
                                    width={366}
                                    height={366}
                                    className={`w-full h-full aspect-video object-cover transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-full h-auto px-2">
                            <Swiper
                                spaceBetween={8}
                                breakpoints={{
                                    0: { slidesPerView: 2 },
                                    640: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4 }
                                }}
                                className="w-full h-full"
                            >
                                {gigImages.map((gigImage, index) => (
                                    <SwiperSlide key={index} className="h-full flex justify-center px-2">
                                        <div
                                            onClick={() => handleImageSelect(gigImage, index)}
                                            className={`h-28 flex items-center justify-center border rounded-lg p-2 transition-all duration-300 cursor-pointer ${activeIndex === index ? "border-primary opacity-100" : "border-outline-variant opacity-40"}`}
                                        >
                                            <div className="h-full bg-surface-variant border border-outline-variant rounded-lg overflow-hidden">
                                                <Image
                                                    src={gigImage}
                                                    alt="gig-image"
                                                    width={94}
                                                    height={94}
                                                    className='w-full h-full aspect-video object-cover'
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="w-full h-auto flex flex-col items-start justify-start border border-outline-variant rounded-lg p-5 gap-y-4">
                            <p className="text-2xl text-on-background font-heading font-semibold">Description</p>

                            <p className="text-on-background font-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iusto quo voluptatum blanditiis eius sequi, maiores veritatis voluptatem cumque necessitatibus doloremque, vel neque ipsum beatae fuga magni asperiores saepe autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, mollitia! Unde vero dolorum asperiores numquam, ipsum reprehenderit distinctio possimus pariatur quasi eveniet voluptatum earum laudantium cupiditate suscipit ullam, alias vitae?
                            </p>

                            <div className="w-auto h-auto flex flex-row items-center justify-start gap-x-2">
                                <p className="text-on-background font-base font-semibold">Category :</p>
                                <p className="text-on-background font-base">Programming & Tech</p>
                            </div>

                            <div className="w-auto h-auto flex flex-row items-center justify-start gap-x-2">
                                <p className="text-on-background font-base font-semibold">Sub Category :</p>
                                <p className="text-on-background font-base">Web Development</p>
                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col items-start justify-start border border-outline-variant rounded-lg p-5 gap-y-4">
                            <p className="text-2xl text-on-background font-heading font-semibold">Search Tags</p>

                            <div className="w-full h-auto flex flex-wrap items-start justify-start gap-4">
                                <div className="w-auto h-auto cus-animated-bg border border-outline-variant rounded-2xl px-5 py-2 group" style={{ '--animated-bg-color': 'var(--color-on-background)' } as React.CSSProperties}>
                                    <p className="text-on-background font-base group-hover:text-background">HTML</p>
                                </div>
                                <div className="w-auto h-auto cus-animated-bg border border-outline-variant rounded-2xl px-5 py-2 group" style={{ '--animated-bg-color': 'var(--color-on-background)' } as React.CSSProperties}>
                                    <p className="text-on-background font-base group-hover:text-background">CSS</p>
                                </div>
                                <div className="w-auto h-auto cus-animated-bg border border-outline-variant rounded-2xl px-5 py-2 group" style={{ '--animated-bg-color': 'var(--color-on-background)' } as React.CSSProperties}>
                                    <p className="text-on-background font-base group-hover:text-background">JavaScript</p>
                                </div>
                                <div className="w-auto h-auto cus-animated-bg border border-outline-variant rounded-2xl px-5 py-2 group" style={{ '--animated-bg-color': 'var(--color-on-background)' } as React.CSSProperties}>
                                    <p className="text-on-background font-base group-hover:text-background">React</p>
                                </div>
                                <div className="w-auto h-auto cus-animated-bg border border-outline-variant rounded-2xl px-5 py-2 group" style={{ '--animated-bg-color': 'var(--color-on-background)' } as React.CSSProperties}>
                                    <p className="text-on-background font-base group-hover:text-background">Next.js</p>
                                </div>
                                <div className="w-auto h-auto cus-animated-bg border border-outline-variant rounded-2xl px-5 py-2 group" style={{ '--animated-bg-color': 'var(--color-on-background)' } as React.CSSProperties}>
                                    <p className="text-on-background font-base group-hover:text-background">Tailwind CSS</p>
                                </div>
                                <div className="w-auto h-auto cus-animated-bg border border-outline-variant rounded-2xl px-5 py-2 group" style={{ '--animated-bg-color': 'var(--color-on-background)' } as React.CSSProperties}>
                                    <p className="text-on-background font-base group-hover:text-background">Figma</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-auto flex flex-col items-start justify-start border border-outline-variant rounded-lg p-5 gap-y-4">
                            <p className="text-2xl text-on-background font-heading font-semibold">FAQs</p>

                            <div className="w-full h-auto flex flex-col items-start justify-start gap-y-4">
                                {FAQS.map(faq => (
                                    <CustomAccordion key={faq.id} item={faq} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:top-22 col-span-12 md:col-span-5 h-auto md:h-fit flex flex-col items-center justify-start md:sticky bg-background dark:bg-on-background border border-outline-variant rounded-lg shadow-lg p-5 gap-y-6">
                        <CustomTabs
                            tabs={[
                                { label: 'Bronze', content: <Bronze_Package /> },
                                { label: 'Silver', content: <Silver_Package /> },
                                { label: 'Gold', content: <Gold_Package /> }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Single_Gig;