"use client";
import React from "react";
import Image from "next/image";
import { useState, useTransition } from "react";

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [startTransition, isPending] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id)
        })
    }
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center mt-10 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/Aboutphoto.png" width={180} height={180} className="rounded-md shadow-2xl shadow-orange-900 hover:scale-105 transition-all duration-300"/>
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
                    Hey there! I'm Zach Roth, I believe in the power of being curious. 
                    I'm a dog and tech lover, art enthusiast, sports fan, and fascinated with the startup ecosystem. <br />
                    I am dedicated to make something people want (/YC/). 
                    Through my work, I aim to improve society and make an impact. 
                    Let's Connect! I am open to all ideas and love to think of ways that idea may be underserved. 
                    Feel free to reach out to discuss interesting things. <br />
                    </p>
                    <div className="flex flex-row mt-8">
                        <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-orange-500">Skills</span>
                        <span>Education</span>
                        <span>Experience</span>
                    </div>
                </div>
            </div>
            
        </section>
    )

};

export default AboutSection