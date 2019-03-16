import RBS_LOGO from './assets/img/rbs.jpeg'
import NEU_LOGO from './assets/img/NEU_CCIS.jpg'
import RIGOR_LOGO from './assets/img/rigor-logo.png'
import XOBIN_LOGO from './assets/img/xobin-logo.png'
import ARICENT_LOGO from './assets/img/aricentLogo.jpg'

import FLICKR_IMG from './assets/img/flickr_api.jpg'

import JAMNJAM_IMG from './assets/img/jamnjam.png'
import PLAGIARISM_IMG from './assets/img/PROJECT_PLAGIRASIM.png'
export const experiencesData = [
    {
        position: 'Front End Engineer',
        company: 'Retail Business Services',
        year: 'Jan `19- Present',
        img: RBS_LOGO,
        details: "Front End Engineer for R & D "

    },
    {
        position: 'Graduate Teaching Assistant',
        company: 'Northeastern University',
        year: 'Sep `18- Dec `18',
        img: NEU_LOGO,
        details: "TA for  CS1100 - Computer Science &  Applications"

    },
    {
        position: 'Software Engineer',
        company: 'Rigor Solutions',
        year: 'Nov 16- Aug 17',
        img: RIGOR_LOGO,
        details: " Software Engineer for workforce management - timesheet "
    },
    {
        position: 'Software Engineer',
        company: 'Aricent Technologies ',
        year: 'Nov `15- Nov `16',
        img: ARICENT_LOGO,
        details: "Software engineer for Juniper & Coriant Routers "
    },
    {
        position: 'Mentor',
        company: 'Xobin',
        year: 'Nov `15- Nov `16',
        img: XOBIN_LOGO,
        details: "Mentor for coding enthusiasts  signed up with Xobin BootCamp"
    }

]

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
export const SOCIAL_EMAIL = "muralidharan.a@husky.neu.edu"
