import { FC } from "react";
import Link from "next/link";
import { IoMdCode } from "react-icons/io";
import { PiFileMagnifyingGlassDuotone } from "react-icons/pi";


interface ProjectCard {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    previewUrl: string;
}


const ProjectCard: FC<ProjectCard> = ({imgUrl, title, description, gitUrl, previewUrl}) => {
    return (
        <div>
          <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-{#181818} bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                <Link href={gitUrl} className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                  <IoMdCode className="h-7 w-7 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                </Link>
                <Link href={previewUrl} className="ml-4 h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                  <PiFileMagnifyingGlassDuotone className="h-7 w-7 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                </Link>
            </div>
          </div>
          <div className="text-white rounded-b-xl bg-[#181818} py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
          </div>
        </div>
    )
}

export default ProjectCard