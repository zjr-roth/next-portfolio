import { FC } from "react";
import Link from "next/link";



interface BlogCardTypes {
    imgUrl: string;
    title: string;
    description: string;
}


const BlogCard: FC<BlogCardTypes> = ({imgUrl, title, description}) => {
    return (
        <div className="hover:scale-105 transition duration-100">
          <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
          </div>
          <div className="text-white rounded-b-xl bg-[#181818} py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
          </div>
        </div>
    )
}

export default BlogCard