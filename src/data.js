import FLICKR_IMG from './assets/img/flickr_api.jpg'

import JAMNJAM_IMG from './assets/img/jamnjam.png'
import PLAGIARISM_IMG from './assets/img/PROJECT_PLAGIRASIM.png'


export const PROJECTS_DATA=[
    {
        title : "Jam n Jam",
        description : "An online solution connecting musicians, bands and studios",
        img : JAMNJAM_IMG,
        details :[
            "Built an online portal connecting artists, bands and studio owners to find nearest gigs and musicians",
            "Integrated artists pool with Lost FM apis to support global search and used open source libraries -appoints, moment",
            "Demonstrated the prototype of the app at Head start, a platform for upcoming startups.",
            "Conducted a survey with 200 musicians in India and acquired insights about the needs of web users (musicians)"
        ]
    },


    {
        title : "Plagiarism Detector",
        description : "A cloud based application for detecting plagiarism in python scripts",
        img : PLAGIARISM_IMG,
        details :[
            "Built an online portal connecting artists, bands and studio owners to find nearest gigs and musicians",
            "Integrated artists pool with Lost FM apis to support global search and used open source libraries -appoints, moment",
            "Demonstrated the prototype of the app at Head start, a platform for upcoming startups.",
            "Conducted a survey with 200 musicians in India and acquired insights about the needs of web users (musicians)"
        ]
    },

    {
        title : "Flickr API Scanner",
        description : "A web scrapper for flickr apis",
        img : FLICKR_IMG,
        details :[
            "Built a scrapper with Beautiful soup in python",
            "Generated a JSON file of the complete apis of flickr",
            "Revamped it with Docusaurs ",
        ]
    }


]

export const TECH_STACK = ["NodeJs","Flask", "SQL MongoDB","React & Redux", "Angular"]
export const LANGUAGES = ["","Flask", "SQL MongoDB","React & Redux", "Angular"]



// social links : To be given as string
export const SOCIAL_LINKED_IN ="https://www.linkedin.com/in/athulmuralidharan/"
export const SOCIAL_GITHUB ="https://github.com/athulmurali"
export const SOCIAL_TWITTER ="https://twitter.com/@athul_karthik"
export const SOCIAL_EMAIL = "athulmurali@gmail.com"
