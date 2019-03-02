import PropTypes from 'prop-types';
import React from "react";



class Project extends  React.Component {

    constructor(props) {
        super(props);


        this.state = {inDetailedMode: false}

    }

    toggleDetailedMode = () => {
        this.setState(prevState => ({inDetailedMode: !prevState.inDetailedMode}))
    }

    render = () => {

        const props = this.props;

        return<div className="col-sm-12 col-lg-12 ">
                <figure>
                    <div className="project-container text-center" >
                        <a href={props.link}>
                            <div className="project-image"
                                 style={{display: !this.state.inDetailedMode ? "block" : "none"}}>
                                <img alt={props.title} data-no-retina="true" onMouseOver={this.toggleDetailedMode}
                                     src={props.img} style={{maxWidth: '300px'}}/>
                                <div className="project-title">
                                    <b style={{
                                        color: 'inherit',
                                        fontSize: '15px',
                                        fontWeight: 'bold'
                                    }}>{props.title}</b>
                                    <p>{props.description}</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="project-container"
                         onMouseLeave={this.toggleDetailedMode}

                         style={{display: !!this.state.inDetailedMode ? "block" : "none"}}>
                        <div style={{textAlign: 'center'}}>
                            <b style={{color: 'inherit', fontSize: '15px', fontWeight: 'bold'}}>{props.title}</b>
                            <p>{props.description}</p>
                        </div>
                            <ul>
                                {props.details.map((line, index) => <li>{line}</li>)}

                            </ul>
                    </div>

                </figure>
            </div>


    }
}
Project.propTypes = {
    title       : PropTypes.string.isRequired,
    link        : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    img         : PropTypes.string.isRequired,

};

export default Project
