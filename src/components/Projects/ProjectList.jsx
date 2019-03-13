import Project from "./Project";
import React from "react";

const ProjectList=(props)=> (<div style={{display: 'inline-block'}} >
    <div className="row snippet-projects-013">
        <div className="col-xs-12">
            <div className="row">
                <div className="col-xs-12">
                    <h3><b>Projects</b></h3>
                </div>
            </div>


        </div>
        {props.projects.map(project =>(<div className="col" style={{display: 'inline-block'}}>
            <Project
                title={project.title}
                img  ={project.img}
                details = {project.details}
                link = {project.link}
            />
        </div>))}
    </div>
</div>)



export default  ProjectList
