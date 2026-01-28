import Bubble from "@/components/Bubble";

const Home = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-12'>

            {/* HERO SECTION */}
            <section className="relative w-full h-72 flex items-center justify-center blur-2xl overflow-hidden">

                {/* CENTER */}
                <Bubble
                    className="h-80 w-80 bg-custom-pink opacity-70 mix-blend-multiply"
                    style={{ left: '48%', top: '42%' }}
                    x={[25, -25, 15]}
                    y={[-15, 25, -10]}
                    scale={[1, 1.12, 1]}
                    duration={29}
                />

                <Bubble
                    className="h-72 w-72 bg-custom-purple opacity-70 mix-blend-multiply"
                    style={{ left: '35%', top: '30%' }}
                    x={[-20, 30, -10]}
                    y={[-20, 30, -10]}
                    scale={[1, 1.1, 1]}
                    duration={34}
                />

                {/* LEFT SIDE */}
                <Bubble
                    className="h-72 w-72 bg-custom-pink opacity-80 mix-blend-multiply"
                    style={{ left: '-10%', top: '15%' }}
                    x={[-40, 20, -10]}
                    y={[-30, 40, -20]}
                    scale={[1, 1.15, 1]}
                    duration={26}
                />

                <Bubble
                    className="h-56 w-56 bg-custom-purple opacity-75 mix-blend-multiply"
                    style={{ left: '5%', top: '55%' }}
                    x={[-30, 30, -20]}
                    y={[20, -40, 10]}
                    scale={[1, 1.25, 1]}
                    duration={30}
                />

                {/* RIGHT SIDE */}
                <Bubble
                    className="h-72 w-72 bg-custom-pink opacity-80 mix-blend-multiply"
                    style={{ right: '5%', top: '20%' }}
                    x={[30, -30, 20]}
                    y={[-40, 30, -10]}
                    scale={[1, 1.2, 1]}
                    duration={24}
                />

                <Bubble
                    className="h-60 w-60 bg-custom-purple opacity-75 mix-blend-multiply"
                    style={{ right: '-10%', top: '55%' }}
                    x={[40, -20, 10]}
                    y={[30, -40, 20]}
                    scale={[1, 1.18, 1]}
                    duration={28}
                />

            </section>

        </div>
    );
}

export default Home;