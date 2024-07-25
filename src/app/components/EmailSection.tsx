import {FC} from 'react'

const EmailSection: FC = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
            <div>
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. 
                    Nascetur duis accumsan massa quis ut purus. 
                    Blandit mi scelerisque quisque ullamcorper maximus. 
                    Ultrices in in nibh egestas dolor aenean et potenti. 
                    Dis odio diam maecenas lacus pretium mi netus.
                </p>
                <a href="#resume"><button type="button" className="px-1 py-1 bg-gradient-to-br from-orange-700 via-orange-500 to-orange-800 text-white w-full sm:w-1/2 rounded-full transition h-8 hover:opacity-75"><span className="block bg-[#121212] hover:bg-slate-800 rounded-full">Download CV</span></button></a>
            </div>
            <div>
                <form className="flex flex-col gap-4">
                    <div className="mb-6">
                        <label htmlFor="name"className="text-white block mb-2 text-sm font-medium">Full Name</label>
                        <input name="name" id="name" type="text" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Harry Potter"/>
                    </div>
                    <div className="mb-6"> 
                        <label htmlFor="email"className="text-white block mb-2 text-sm font-medium">Email</label>
                        <input name="email" id="email" type="email" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Harry@Hogwarts.edu"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone"className="text-white block mb-2 text-sm font-medium">Phone</label>
                        <input name="phone" id="phone" type="tel" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="(888)-888-8888"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message"className="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea name="message" id="message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Hi Harry! :)"/>
                    </div>
                    <button className="bg-gradient-to-br from-orange-700 via-orange-500 to-orange-800 hover:opacity-75 text-white font-medium py-2.5 px-5 rounded-lg w-full">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection