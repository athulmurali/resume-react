import React from 'react'
import  dp from '../../assets/img/athul_dp.jpg'
import  '../../../node_modules/font-awesome/css/font-awesome.css'
import {LANGUAGES, SOCIAL_EMAIL, SOCIAL_GITHUB, SOCIAL_LINKED_IN, SOCIAL_TWITTER, TECH_STACK} from "../../data";


const Header = ()=> <div className="container col-sm-2"
                         style={{position :'relative', height: '100%', textAlign: 'center'}}>

    <div className="row">
        <div className="col-md-12 col-lg-12">
            <h1 className="title-name">
                <span className="first-name">Athul</span>
                <span className="last-name">Muralidharan</span>
            </h1>
        </div>
    </div>
    <div className="row">
        <img alt="Athul's profile" className="profile-picture-left img-circle profile-pic" data-no-retina="true" src={dp}/>
    </div>
    <div className="row">
        <div className="col-md-12 left-header">
            Software Developer
        </div>
    </div>

    <Social_Links/>

    <div className="row">
        <div className="col-md-2 col-xs-2 col-sm-2 col-lg-2"></div>
        <div className="col-md-8 col-xs-8 col-sm-8 col-lg-8">
            <hr/>
        </div>
        <div className="col-md-2 col-xs-2 col-sm-2 col-lg-2"></div>
    </div>
    <div className="row">
        <div className="col-md-12 left-header">
            <a className="left-header" href="https://medium.com/@athulmurali">Blog</a>
        </div>
    </div>
    <hr/>
    <div className="row">
        <div className="col-md-12 left-header">
            Tech Stack
        </div>
        <i className="fa fa-code fa-3x fa-align-center"></i>
        <ul className="left-sub-text" >
            {TECH_STACK.map((tech ,index)=><li className="row-header " key={index}> {tech}</li>)}
        </ul>
    </div>
    <hr/>
    <div className="row">
        <div className="col-md-12 left-header"
             style={{paddingTop : '50px'}}>
            Languages
        </div>
        <i className="fa fa-language fa-3x"></i>
        <ul className="left-sub-text" >
            {LANGUAGES.map((language)=><li>{language}</li>)}
        </ul>
    </div>
    <hr/>
    <div className="row">
        <div className="col-md-12 left-header"
             style={{paddingTop: '50px'}}>
            Education
        </div>
        <i className="fa fa-graduation-cap fa-3x"></i>

        <ul className="left-sub-text col-md-12 " >
            <li>Northeastern University</li>
            <li >Computer Science</li>
            <li >Class of 2018</li>
        </ul>



    </div>
    <hr/>

</div>



const Social_Links = ()=> <div className="social-links">
    <a href={SOCIAL_LINKED_IN} rel="nofollow noopener noreferrer" target="_blank">
        <i className="fa fa"></i>
    </a>&nbsp; &nbsp;&nbsp;
    <a href={SOCIAL_GITHUB} rel="nofollow noopener noreferrer" target="_blank">
        <i className="fa"></i>
    </a>&nbsp;&nbsp;&nbsp;
    <a href={SOCIAL_TWITTER} rel="nofollow noopener noreferrer" target="_blank">
        <i className="fa"></i>
    </a>&nbsp;&nbsp;&nbsp;
    <a href= {`mailTo:${SOCIAL_EMAIL}`} rel="nofollow noopener noreferrer" target="_blank">
        <i className="fa fa-envelope"></i>
    </a>&nbsp;&nbsp;&nbsp;
</div>
export default  Header
