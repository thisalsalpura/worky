'use client';
import { Bubble } from "@/components/ui/Bubble";
import { categories } from "@/constants/categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { GigCard } from "@/components/ui/GigCard";

const Home = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-12'>

            {/* HERO SECTION */}
            <section className="relative w-full h-72 flex items-center justify-center blur-2xl overflow-hidden">

                {/* CENTER */}
                <Bubble
                    className="w-80 h-80 bg-primary opacity-70 mix-blend-multiply"
                    style={{ left: '48%', top: '42%' }}
                    x={[25, -25, 15]}
                    y={[-15, 25, -10]}
                    scale={[1, 1.12, 1]}
                    duration={29}
                />

                <Bubble
                    className="w-72 h-72 bg-on-primary opacity-70 mix-blend-multiply"
                    style={{ left: '35%', top: '30%' }}
                    x={[-20, 30, -10]}
                    y={[-20, 30, -10]}
                    scale={[1, 1.1, 1]}
                    duration={34}
                />

                {/* LEFT SIDE */}
                <Bubble
                    className="w-72 h-72 bg-primary opacity-80 mix-blend-multiply"
                    style={{ left: '-10%', top: '15%' }}
                    x={[-40, 20, -10]}
                    y={[-30, 40, -20]}
                    scale={[1, 1.15, 1]}
                    duration={26}
                />

                <Bubble
                    className="w-56 h-56 bg-on-primary opacity-75 mix-blend-multiply"
                    style={{ left: '5%', top: '55%' }}
                    x={[-30, 30, -20]}
                    y={[20, -40, 10]}
                    scale={[1, 1.25, 1]}
                    duration={30}
                />

                {/* RIGHT SIDE */}
                <Bubble
                    className="w-72 h-72 bg-primary opacity-80 mix-blend-multiply"
                    style={{ right: '5%', top: '20%' }}
                    x={[30, -30, 20]}
                    y={[-40, 30, -10]}
                    scale={[1, 1.2, 1]}
                    duration={24}
                />

                <Bubble
                    className="w-60 h-60 bg-on-primary opacity-75 mix-blend-multiply"
                    style={{ right: '-10%', top: '55%' }}
                    x={[40, -20, 10]}
                    y={[30, -40, 20]}
                    scale={[1, 1.18, 1]}
                    duration={28}
                />

            </section>

            <section className="w-full h-auto grid grid-cols-12 p-4 gap-8">
                <div className="md:top-22 col-span-12 md:col-span-3 h-auto md:h-fit flex flex-col items-start justify-start md:sticky bg-background dark:bg-on-background border border-outline-variant rounded-lg shadow-lg p-5 gap-6">
                    <h2 className="text-xl text-on-background dark:text-background text-left font-heading">Categories</h2>

                    <ul className="w-full text-on-background dark:text-background text-left font-base space-y-6">
                        {categories.map((category) => (
                            <li key={category.id} className="w-full flex flex-row items-center justify-between cursor-pointer group">
                                <span className='opacity-75 group-hover:opacity-100 transition-all duration-300 ease-in-out'>{category.title}</span>
                                <FontAwesomeIcon icon={faPlus} className="text-sm opacity-75 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-12 md:col-span-9 h-auto flex flex-wrap items-start justify-start gap-6">
                    <GigCard />
                    <GigCard />
                    <GigCard />
                    <GigCard />
                    <GigCard />
                </div>
            </section>

        </div>
    );
}

export default Home;