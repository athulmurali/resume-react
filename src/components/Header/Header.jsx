import React from 'react'
import  dp from '../../assests/img/athul_dp.jpg'
import  '../../../node_modules/font-awesome/css/font-awesome.css'

const Header = ()=> (<div className="container-web" style={{position : 'relative'}}>
    <div className="col-sm-2 left-side" style={{position: 'relative', height: '100%', textAlign: 'center'}}>
        <div className="row">
            <div className="col-md-12">
                <h1 className="title-name text-center" style={{padding :10}}>
                    <img src={dp} style={{maxWidth : 200,borderRadius: '50%', borderStyle:'solid', borderWidth :'0.5'
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

            <div className=" social-links" style={{color : 'black'}}>
                <a href="https://www.linkedin.com/in/athulmuralidharan" rel="nofollow noopener noreferrer" target="_blank">
                    <i class="fa  fa-2x fa-linkedin" style={{color : 'black'}}/>
                </a>&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/athulmurali" rel="nofollow noopener noreferrer" target="_blank">
                    <i class="fa  fa-2x fa-github" style={{color : 'black'}}/>
                </a>&nbsp;&nbsp;&nbsp;
                <a href="https://twitter.com/athul_karthik" rel="nofollow noopener noreferrer" target="_blank">
                    <i class="fa  fa-2x fa-twitter" style={{color : 'black'}}/>
                </a>&nbsp;&nbsp;&nbsp;

            </div>
        </div>
    </div>
    </div>)

export default  Header
