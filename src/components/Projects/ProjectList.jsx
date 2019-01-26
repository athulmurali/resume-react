import Project from "./Project";
import React from "react";

const projects = [
    {title : "Plagiarism Detector"},
    {title : "Plagiarism Detector"},

]
const ProjectList=()=> (<div style={{display: 'inline'}}>
    {projects.map(project =><Project title={project.title}/>)}
    </div> )

export default ProjectList
