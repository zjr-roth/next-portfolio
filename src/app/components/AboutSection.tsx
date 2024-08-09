"use client";
import React, { SetStateAction } from "react";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

interface TabItem {
    title: string;
    id: string;
    content: JSX.Element;
}


const TAB_DATA: TabItem[] = [
    {title: "Skills", id: "skills", content: (
        <ul className="list-disc pl-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Next</li>
            <li>PostgreSQL</li>
        </ul>
    )},
    {title: "Experience", id: "experience", content: (
        <ul className="list-disc pl-2">
            <li>Prototype.Next</li>
            <li>freeCodeCamp</li>
            <li>Codecademy</li>
          
        </ul>
    )},
    {title: "Interests", id: "interests", content: (
        <ul className="list-disc pl-2">
            <li>Technology</li>
            <li>Health and Fitness</li>
            <li>Autonomous Machinery</li>
            <li>Design</li>
            <li>Food and Travel</li>
        </ul>
    )},
    
]


const AboutSection: React.FC = () => {
    const [tab, setTab]= useState<string>("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id)
        })
    }
    return (
        <section id="about" className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/Aboutphoto.png" alt="About Photo" width={200} height={200} className="rounded-md mb-[200px] shadow-2xl shadow-orange-900 hover:scale-105 transition-all duration-300"/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
                    Hey there! I'm Zach Roth, I believe in the power of being curious. 
                    I'm a dog and tech lover, art enthusiast, sports fan, and fascinated with the startup ecosystem. <br />
                    I am dedicated to make something people want (/YC/). 
                    Through my work, I aim to improve society and make an impact. 
                    Let's Connect! I am open to all ideas and love to think of ways that idea may be underserved. 
                    Feel free to reach out to discuss interesting things. <br />
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                        <TabButton selectTab={() => handleTabChange("interests")} active={tab === "interests"}>Interests</TabButton> 
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    )

};

export default AboutSection