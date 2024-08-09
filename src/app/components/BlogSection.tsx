import { FC } from "react";
import BlogCard from "./BlogCard"


interface BlogTypes {
    id: number;
    title: string;
    description: string;
    image: string;
}

const blogData: BlogTypes[] = [
    {id: 1,
     title: "Blog 1",
     description: "Blog 1 description",
     image: "#",
    },
    {id: 2,
     title: "Blog 2",
     description: "Blog 2 description",
     image: "#",
    },
    {id: 3,
     title: "Blog 3",
     description: "Blog 3 description",
     image: "#",
    },
    {id: 4,
     title: "Blog 4",
     description: "Blog 4 description",
     image: "#",
    },
]

const BlogSection: FC = () => {
    return (
        <>
         <h2 id="blogs" className="text-center text-4xl font-bold text-white mt-4">My Blogs</h2>
         <div className="grid md:grid-cols-3 gap-8 md:gap-12">{blogData.map((blog: BlogTypes) => <BlogCard key={blog.id} title={blog.title} description={blog.description} imgUrl={blog.image} /> )}</div>
        </>
    )
}

export default BlogSection