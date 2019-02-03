import Project from "./Project";
import React from "react";

const ProjectList=(props)=> (<div style={{display: 'inline'}}>
    {props.projects.map(project =>
        <Project
            title={project.title}
            img  ={project.img}
            details = {project.details}
            link = {project.link}
        />)}
    </div> )



export default  ProjectList
