"use client"
import { ChangeEvent, CSSProperties, FC, SetStateAction, useEffect, useState } from 'react'
import { supabase } from '../lib/database/supabaseClient';

interface EmailSectionTypes {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const EmailSection: FC = () => {
    const [payload, setPayload] = useState<EmailSectionTypes>({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [emailStyles, setEmailStyles] = useState<CSSProperties>({});
    const [phoneStyles, setPhoneStyles] = useState<CSSProperties>({});
    const [formStyles, setFormStyles] = useState<CSSProperties>({});
    const [submitStylesHeader, setSubmitHeaderStyles] = useState<CSSProperties>({});
    const [submitStyles, setSubmitStyles] = useState<CSSProperties>({});

    const handlePayload = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setPayload(prevState => ({
            ...prevState,
            [name]: name == "phone" ? Number(value) : value
        }))
    }


    const postData = async (event: any) => {
        event.preventDefault()

        const { name, email, phone, message } = payload
       
        console.log("Sending data to Supabase:", { name, email, phone, message})
        
        const { data, error } = await supabase
        .from("FormData")
        .insert([{ name, email, phone, message }])

        if (error) {
            console.error("Submission Failed", error);
        } else {
            console.log("Submitted Successfully", data);
            setFormStyles({ display: "none" })
            setSubmitHeaderStyles({ 
                display: "flex", 
                flexDirection: "column", 
                background: "linear-gradient(to right, #c2410c, #f97316, #9a3412)",
                color: 'transparent',
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                justifyContent: "flex-start",
                fontSize: '1.75rem',
                marginTop: "3rem",
                paddingTop: "10rem", 
                marginBottom: '1.5rem',
            })
            setSubmitStyles({
                display: "flex", 
                flexDirection: "column",
                justifyContent: "flex-start",
                color: 'white',
                marginTop: '0.5rem'
            })
            setPayload({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            console.log("Payload after reset",payload)
        }
    }

    useEffect(() => {
        const emailCheck = (email: string) => {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (email === "") {
                setEmailStyles({})
            }
            else if (emailRegex.test(email)) {
                setEmailStyles({ border: "2px solid green" }) 
            } 
            else {
                setEmailStyles({ border: "2px solid red" })
            }
        }
        emailCheck(payload.email)
    }, [payload.email])

    useEffect(() => {
        const phoneCheck = (phone: string) => {
            const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
            if (phone == "") {
                setPhoneStyles({})
            }
            else if (phoneRegex.test(phone)) {
                setPhoneStyles({ border: "2px solid green"})
            }
            else {
                setPhoneStyles({ border: "2px solid red"})
            }
        } 
        phoneCheck(payload.phone)
    }, [payload.phone])


    return (
        <>
        <div>
            <h1 style={submitStylesHeader} className='hidden'>Thank you for getting in touch!</h1>
            <p style={submitStyles} className='hidden'>I have received your message and will get back to you by email as soon as possible.</p>
            <p style={submitStyles} className='hidden'>Talk to you soon!</p>

        </div>
        <section id="contact"className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <div style={formStyles}>
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                I’m always excited to connect with like-minded individuals,
                collaborate on projects, or simply have a chat about 
                anything from tech trends to creative ideas. 
                Whether you have a question, an opportunity, or just want 
                to say hello, feel free to reach out!
                </p>
                <a href="Sample-Fillable-PDF.pdf" download="Resume.pdf"><button className="px-1 py-1 bg-gradient-to-br from-orange-700 via-orange-500 to-orange-800 text-white w-full sm:w-1/2 rounded-full transition h-8 hover:opacity-75"><span className="block bg-[#121212] hover:bg-slate-800 rounded-full">Download CV</span></button></a>
            </div>
            <div>
                <form onSubmit={postData} style={formStyles} className="flex flex-col gap-4">
                    <div className="mb-6">
                        <label htmlFor="name"className="text-white block mb-2 text-sm font-medium">Full Name <span className='text-red-500'>*</span></label>
                        <input onChange={handlePayload} value={payload.name} name="name" id="name" type="text" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Harry Potter"/>
                    </div>
                    <div className="mb-6"> 
                        <label htmlFor="email"className="text-white block mb-2 text-sm font-medium">Email <span className='text-red-500'>*</span></label>
                        <input onChange={handlePayload} value={payload.email} name="email" id="email" type="email" required style={emailStyles} className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Harry@Hogwarts.edu"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone"className="text-white block mb-2 text-sm font-medium">Phone <span className='text-red-500'>*</span></label>
                        <input onChange={handlePayload} value={payload.phone} name="phone" id="phone" type="tel" required style={phoneStyles} className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="(888)-888-8888"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message"className="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea onChange={handlePayload} value={payload.message} name="message" id="message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Hey! "/>
                    </div>
                    <button type="submit" className="bg-gradient-to-br from-orange-700 via-orange-500 to-orange-800 hover:opacity-75 text-white font-medium py-2.5 px-5 rounded-lg w-full">Submit</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default EmailSection