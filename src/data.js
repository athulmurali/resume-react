import RBS_LOGO from './assets/img/rbs.jpeg'
import NEU_LOGO from './assets/img/NEU_CCIS.jpg'
import RIGOR_LOGO from './assets/img/rigor-logo.png'
import XOBIN_LOGO from './assets/img/xobin-logo.png'
import ARICENT_LOGO from './assets/img/aricentLogo.jpg'



import JAMNJAM_IMG from './assets/img/PROJECT_PLAGIRASIM.png'
export const experiencesData = [
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

export const PROJECTS_DATA=[
    {
        title : "Jam n Jam",
        description : "An online solution connecting musicians, bands and studios",
        img : JAMNJAM_IMG,
        details :[
            "Built infrastructure of project - initialized docker containers for each user and created an API to bridge the communication of each user to their associated container",
            "Built a fully integrated code-editor to be responsive to unix commands sent from the terminal. Supports python, ruby, java, javascript.",
            "Made contributions to features like real-time collaboration through socketIO, a folder and file tree of the IDE, and to adding drag and drop functionality to support uploading to any container",
            "Designed and developed the UI"
        ]
    },
]

export const TECH_STACK = ["NodeJs","Flask", "SQL MongoDB","React & Redux", "Angular"]
export const LANGUAGES = ["","Flask", "SQL MongoDB","React & Redux", "Angular"]



// social links : To be given as string
export const SOCIAL_LINKED_IN ="https://www.linkedin.com/in/athulmuralidharan/"
export const SOCIAL_GITHUB ="https://github.com/athulmurali"
export const SOCIAL_TWITTER ="https://twitter.com/@athul_karthik"
export const SOCIAL_EMAIL = "muralidharan.a@husky.neu.edu"
