import Image from "next/image";
import { useRouter } from "next/navigation";

export function GigCard() {

    const router = useRouter();

    return (
        <div onClick={() => router.push("/single-gig")} className="w-full md:w-64 h-auto flex flex-col items-start justify-start bg-background dark:bg-on-background border border-outline-variant rounded-lg shadow-lg p-5 gap-y-4 cursor-pointer">
            <div className="w-full h-44 flex items-center justify-center border border-outline-variant rounded-lg overflow-hidden">
                <Image
                    src="/images/empty-gig-img.svg"
                    alt="gig-image"
                    width={214}
                    height={176}
                    className='object-cover'
                    priority
                />
            </div>

            <div className="flex flex-col items-start justify-start gap-y-2">
                <div className="w-full h-auto flex flex-row items-center justify-start gap-x-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-outline rounded-full cursor-pointer z-10">
                        <div className="w-8 h-8 flex items-center justify-center bg-surface-variant dark:bg-on-surface-variant rounded-full overflow-hidden">
                            <Image
                                src="/images/user-img.svg"
                                alt="user-image"
                                width={32}
                                height={32}
                                className='object-cover'
                                priority
                            />
                        </div>
                    </div>

                    <p className="w-auto flex-1 text-on-background dark:text-background font-base font-semibold line-clamp-1">Ben Stokes</p>
                </div>

                <p className="w-full text-sm text-on-background dark:text-background font-base line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quasi esse ab quae eaque, tempore eius magnam ullam architecto debitis qui. Ex, eveniet modi numquam hic nemo vero dolorem necessitatibus.</p>

                <p className="w-full text-lg text-on-background dark:text-background font-base font-semibold">From LKR 9.99</p>
            </div>
        </div>
    );
}