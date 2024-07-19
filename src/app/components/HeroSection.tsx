import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hi, I'm Zach Roth</h1>
                    <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                        I take a first principles approach to analyzing problems and creating solutions.
                        I like to imagine the world abstractly where anything can change in a given moment.
                        Innovation is key, and I want to contribute. 
                    </p>
                    <div>
                       <a href="#contact"><button type="button" className="bg-[#FFF] text-[#000] w-1/3 lg:w-1/2 rounded-full">Let's Talk</button></a>


                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                        <Image
                        src="/images/Portrait.png"
                        alt="Hero Image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                        />
                </div>1
            </div>
        </section>
    )
}

export default HeroSection