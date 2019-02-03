import PropTypes from 'prop-types';
import React from "react";


const Project = (props)=>(<div className="row snippet-projects-013">
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
                                <img alt="JamnJam Screenshot" data-no-retina="true"
                                     src={props.img} style={{maxWidth : '300px'}}/>
                                <div className="project-title">
                                    <b style={{color: 'inherit', fontSize:'15px',fontWeight: 'bold' }}>Jam n Jam</b>
                                    <p>{props.description}</p>
                                </div>
                            </div></a>
                        <figcaption>
                            <p></p>
                            <div className="edit">
                                <div style={{textAlign :'center'}}>
                                    <b style={{color: 'inherit', fontSize: '15px', fontWeight: 'bold'}}>Jam n Jam</b>
                                    <p>{props.description}</p>
                                </div>
                            </div>
                            <p></p>
                        </figcaption>
                        <div className="info">
                            <ul>
                                {props.details.map((line, index)=><li>{line}</li>)}

                            </ul>
                        </div>
                    </div>
                </figure>
            </div>


        </div>
    </div>
</div>)



Project.propTypes = {
    title       : PropTypes.string.isRequired,
    link        : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    img         : PropTypes.string.isRequired,

};

export default Project
