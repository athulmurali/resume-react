import PropTypes from 'prop-types';
import React from "react";

const  Project =(props)=>{
    return <div  style={{display:'inline-block'}}> {props.title}</div>
}


export default Project


Project.propTypes = {
    title: PropTypes.string

};
