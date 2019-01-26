import PropTypes from 'prop-types';
import React from "react";

const  Project =(props)=>{
    return <div> {props.title}</div>
}


export default Project


Project.propTypes = {
    title: PropTypes.string

};
