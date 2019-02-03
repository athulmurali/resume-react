import React from 'react'

import RBS_LOGO from '../../assets/img/rbs.jpeg'
import NEU_LOGO from '../../assets/img/NEU_CCIS.jpg'
import RIGOR_LOGO from '../../assets/img/rigor-logo.png'
import XOBIN_LOGO from '../../assets/img/xobin-logo.png'
import ARICENT_LOGO from '../../assets/img/aricentLogo.jpg'

const experiencesData = [
    {
        position: 'Front End Engineer',
        company: 'Retail Business Services',
        year: 'January 2019- Present',
        img: RBS_LOGO,
        details: "Front End Engineer for R & D "

    },
    {
        position: 'Graduate Teaching Assistant',
        company: 'Northeastern University',
        year: 'September 2018- December 2018',
        img: NEU_LOGO,
        details: "TA for  CS1100 - Computer Science &  Applications"

    },
    {
        position: 'Software Engineer',
        company: 'Rigor Solutions',
        year: 'November 2016- August2017',
        img: RIGOR_LOGO,
        details: " Software Engineer for workforce management - timesheet "
    },
    {
        position: 'Software Engineer',
        company: 'Aricent Technologies ',
        year: 'November 2015- November 2016',
        img: ARICENT_LOGO,
        details: "Software engineer for Juniper & Coriant Routers "
    },
    {
        position: 'Mentor',
        company: 'Xobin',
        year: 'November 2015- November 2016',
        img: XOBIN_LOGO,
        details: "Mentor for coding enthusiasts  signed up with Xobin BootCamp"
    }

]


export const ExperienceComponent = (props) => {
    return <div className="row" title="">
        <div className="col-xs-2 col-sm-1 item-num item-num-00"></div>
        <div className="col-xs-8 col-sm-9 item item-00">
            <h3> {props.position}  &nbsp;<b style={{color: 'inherit', fontSize: 14}}>{props.year}</b></h3>
            <p> {props.details} </p>
        </div>
        <div className="col-xs-2 item-image item-image-00 text-right">
            <img alt="Experiences" data-no-retina="true"
                 src={props.img} width="84"/></div>
    </div>
}


const Experience = () => (<div className="row snippet-experiences-002">
    <div className="col-xs-12">
        {experiencesData.map(obj => <ExperienceComponent {...obj} />)}
    </div>
</div>)

export default Experience
