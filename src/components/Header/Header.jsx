import React from 'react'
import  dp from '../../assets/img/athul_dp.jpg'
import  '../../../node_modules/font-awesome/css/font-awesome.css'

const Header = ()=> (<div className="container-web" style={{position : 'relative'}}>
    <div className="col-sm-2 left-side" style={{position: 'relative', height: '100%', textAlign: 'center'}}>
        <div className="row">
            <div className="col-md-12">
                <h1 className="title-name text-center" style={{padding :10}}>
                    <img src={dp} style={{maxWidth : 125,borderRadius: '50%', borderStyle:'solid', borderWidth :'0.1'
                    }}/>
                    <span className="first-name">Athul</span>
                    <span className="last-name">Muralidharan</span>
                </h1>
            </div>
        </div>
        <div className="row"></div>
        <div className="row">
            <div className="col-md-12 left-header">
                Software Developer
            </div>
        </div>
        <div className="row">
            <div className=" social-links " style={{color : 'black'}}>
                    <a href="https://www.linkedin.com/in/athulmuralidharan" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="fa  fa-2x fa-linkedin" style={{color : 'black'}}/>
                    </a>&nbsp;&nbsp;&nbsp;
                    <a href="https://github.com/athulmurali" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="fa  fa-2x fa-github" style={{color : 'black'}}/>
                    </a>&nbsp;&nbsp;&nbsp;
                    <a href="https://twitter.com/athul_karthik" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="fa  fa-2x fa-twitter" style={{color : 'black'}}/>
                    </a>&nbsp;&nbsp;&nbsp;


            </div>
        </div>
    </div>
    </div>)


const tempHeader = ()=> <div className="col-sm-2 left-side"
                             style={{position :'absolute', height: '100%', textAlign: 'center'}}>
    <div className="row">
        <div className="col-md-12">
            <h1 className="title-name">
                <span className="first-name">Athul</span>
                <span className="last-name">Muralidharan</span>
            </h1>
        </div>
    </div>
    <div className="row">
        <img alt="Athul's dp" className="profile-picture-left img-circle" data-no-retina="true" src={dp}/>
    </div>
    <div className="row">
        <div className="col-md-12 left-header">
            Software Developer
        </div>
    </div>
    <div className="social-links">
        <a href="https://www.linkedin.com/in/athulmuralidharan/" rel="nofollow noopener noreferrer" target="_blank">
            <i className="fa fa"></i></a>&nbsp; &nbsp;&nbsp;
        <a href="https://github.com/athulmurali" rel="nofollow noopener noreferrer" target="_blank"><i className="fa"></i></a>&nbsp;&nbsp;&nbsp;
        <a href="https://twitter.com/@athul_karthik" rel="nofollow noopener noreferrer" target="_blank"><i className="fa"></i></a>&nbsp;&nbsp;&nbsp;
        <a href="muralidharan.a@husky.neu.edu" rel="nofollow noopener noreferrer" target="_blank"><i className="fa fa-envelope"></i></a>&nbsp;&nbsp;&nbsp;
    </div>
    <div className="row">
        <div className="col-md-2 col-xs-2 col-sm-2 col-lg-2"></div>
        <div className="col-md-8 col-xs-8 col-sm-8 col-lg-8">
            <hr/>
        </div>
        <div className="col-md-2 col-xs-2 col-sm-2 col-lg-2"></div>
    </div>
    <div className="row">
        <div className="col-md-12 left-header">
            <a className="left-header" href="http://athulMuralidharan.com/blog">Blog</a>
        </div>
    </div>
    <hr/>
    <div className="row">
        <div className="col-md-12 left-header">
            Tech Stack
        </div>
        <i className="fa fa-code fa-3x fa-align-center"></i>
        <ul className="left-sub-text">
            <li>Node.js</li>
            <li>Flask</li>
            <li>SQL, MongoDB</li>
            <li>React & Redux</li>
            <li>Angular</li>
        </ul>
    </div>
    <hr/>
    <div className="row">
        <div className="col-md-12 left-header"
             style={{paddingTop: '50px'}}>
            Education
        </div>


        <i className="fa fa-graduation-cap fa-3x"></i>

        <ul className="left-sub-text">
            <li>Northeastern University</li>
            <li>Computer Science</li>
            <li>Class of 2018</li>
        </ul>



    </div>
    <hr/>
    <div className="row">
        <div className="col-md-12 left-header"
             style={{paddingTop : '50px'}}>
            Languages
        </div>
        <i className="fa fa-language fa-3x"></i>
        <ul className="left-sub-text">
            <li>Javascript</li>
            <li>Python</li>
            <li>Java, Racket</li>
        </ul>
    </div>
</div>
export default  tempHeader
