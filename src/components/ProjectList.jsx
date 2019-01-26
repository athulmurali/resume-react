import Project from "./Project";
import React from "react";

const projects = [
    {title : "Plagiarism Detector"}
]
const ProjectList = () => (projects.map(project => <Project title={project.title}/>))

export default ProjectList
