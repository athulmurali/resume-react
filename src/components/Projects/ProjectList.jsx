import Project from "./Project";
import React from "react";

const projects = [
    {title : "Plagiarism Detector"},
    {title : "Plagiarism Detector"},

]
const ProjectList=()=> (<div style={{display: 'inline'}}>
    {projects.map(project =><Project title={project.title}/>)}
    </div> )



const temp = ()=>(<div className="row snippet-projects-013">
    <div className="col-xs-12">
        <div className="row">
        <div className="col-xs-12">
        <h1><b>Projects</b></h1>
        </div>
        </div>
        <div className="row" title="">
            <div className="col-sm-4 item item-00">
                <figure>
                    <div className="project-container">
                        <a href="http://jamnjam.com/">
                            <div className="project-image">
                                <img alt="20160628_1685.jpg" data-no-retina="true"
                                     src={null}/>
                                    <div className="project-title">
                                        <b style={
                                            {color: 'inherit', fontSize:'15px',fontWeight: 'bold' }
                                        }>Jam n Jam</b>
                                        <p>An online solution connecting musicians, bands and studios</p>
                                    </div>
                            </div></a>
                        <figcaption>
                            <p></p>
                            <div className="edit">
                                <div style={{textAlign :'center'}}>
                                    <b style={{color: 'inherit', fontSize: '15px', fontWeight: 'bold'}}>Jam n Jam</b>
                                    <p>Containerized Linux Environment + IDE in the Cloud</p>
                                </div>
                            </div>
                            <p></p>
                        </figcaption>
                        <div className="info">
                            <ul>
                                <li>Built infrastructure of project - initialized docker containers for each user and created an API to bridge the communication of each user to their associated container</li>
                                <li>Built a fully integrated code-editor to be responsive to unix commands sent from the terminal. Supports python, ruby, java, javascript.</li>
                                <li>Made contributions to features like real-time collaboration through socketIO, a folder and file tree of the IDE, and to adding drag and drop functionality to support uploading to any container</li>
                                <li>Designed and developed the UI</li>
                            </ul>
                        </div>
                    </div>
                </figure>
            </div>


        </div>
    </div>
    </div>)
export default  temp
