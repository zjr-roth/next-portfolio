"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';



const HeroSection: React.FC = () => {
    return (
        <section id="home">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-500 to-orange-800">Hello, I'm {" "}</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Zach',
                                1000, 
                                'Web Developer',
                                1000,
                                'Dog Lover',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        I take a first principles approach to analyzing problems and creating solutions.
                        I like to imagine the world abstractly where anything can change in a given moment.
                        Innovation is key, and I want to contribute. 
                    </p>
                    <div>
                        <a href="#contact"><button type="button" className=" border border-transparent bg-gradient-to-br from-orange-700 via-orange-500 to-orange-800 text-white w-full sm:w-1/2 rounded-full shadow-2xl shadow-orange-700 transition h-8 hover:opacity-75 ">Let's Talk</button></a>
                        <div className="w-4/4 mt-4 justify-center sm:justify-start flex space-x-3 md:space-x-7" >
                            <a href="https://www.linkedin.com/in/zachary-j-roth/" target="_blank" className="flex justify-center items-center border border-orange h-7 w-7 rounded-full hover:bg-[#f57c00] transition"><i><FaLinkedin /></i></a>
                            <a href="https://twitter.com/zachjroth" target="_blank" className="flex justify-center items-center border border-orange h-7 w-7 rounded-full hover:bg-[#f57c00] transition"><i><FaXTwitter /></i></a>
                            <a href="https://github.com/zjr-roth" target="_blank" className="flex justify-center items-center border border-orange h-7 w-7 rounded-full hover:bg-[#f57c00] transition"><i><FaGithub /></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-1 lg:mt-0">
                    <div className="rounded-full bg-[transparent] w-[400px] h-[400px] relative">
                        <Image
                        src="/images/Portrait.png"
                        alt="Hero Image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2"
                        width={350}
                        height={350}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection