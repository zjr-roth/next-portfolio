import React, { FC } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsTypes {
    id: number;
    title: string;
    description: string;
    image: string;
    gitUrl: string;
    previewUrl: string;
}

const projectsData: ProjectsTypes[] = [
    {id: 1,
     title: "Project 1",
     description: "Project 1 description",
     image: "#",
     gitUrl: "#",
     previewUrl: "#"  
    },
    {id: 2,
     title: "Project 2",
     description: "Project 2 description",
     image: "#",
     gitUrl: "#",
     previewUrl: "#"
    },
    {id: 3,
     title: "Project 3",
     description: "Project 3 description",
     image: "#",
     gitUrl: "#",
     previewUrl: "#"  
    },
    {id: 4,
     title: "Project 4",
     description: "Project 4 description",
     image: "#",
     gitUrl: "#",
     previewUrl: "#"
    },
]


const ProjectSection: React.FC = () => {
    return (
    <>
        <h2 id="projects" className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">{projectsData.map((project: ProjectsTypes) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} /> )}</div>
    </>
)}

export default ProjectSection