import React from 'react'
import {experiencesData} from '../../data'

const ExperienceComponent = (props) => {
    return <div className="row" title="">
        <div className="col-xs-8 col-sm-9 item item-00">

            <h3> {props.position}
            </h3>
            &nbsp;<b style={{color: 'inherit', fontSize: 14}}>{props.year}</b>

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
