import FLICKR_IMG from './assets/img/flickr_api.jpg';
import DP from './assets/img/athul_dp.jpg';

import JAMNJAM_IMG from './assets/img/jamnjam.png';
import PLAGIARISM_IMG from './assets/img/PROJECT_PLAGIRASIM.png';

export const PROJECTS_DATA = [
  {
    title: 'Jam n Jam',
    description: 'An online solution connecting musicians, bands and studios',
    img: JAMNJAM_IMG,
    details: [
      'Built an online portal connecting artists, bands and studio owners to find nearest gigs and musicians',
      'Integrated artists pool with Lost FM apis to support global search and used open source libraries -appoints, moment',
      'Demonstrated the prototype of the app at Head start, a platform for upcoming startups.',
      'Conducted a survey with 200 musicians in India and acquired insights about the needs of web users (musicians)',
    ],
  },

  {
    title: 'Plagiarism Detector',
    description:
      'A cloud based application for detecting plagiarism in python scripts',
    img: PLAGIARISM_IMG,
    details: [
      'Built an online portal connecting artists, bands and studio owners to find nearest gigs and musicians',
      'Integrated artists pool with Lost FM apis to support global search and used open source libraries -appoints, moment',
      'Demonstrated the prototype of the app at Head start, a platform for upcoming startups.',
      'Conducted a survey with 200 musicians in India and acquired insights about the needs of web users (musicians)',
    ],
  },

  {
    title: 'Flickr API Scanner',
    description: 'A web scrapper for flickr apis',
    img: FLICKR_IMG,
    details: [
      'Built a scrapper with Beautiful soup in python',
      'Generated a JSON file of the complete apis of flickr',
      'Revamped it with Docusaurs ',
    ],
  },
];

export const TECH_STACK = [
  'NodeJs',
  'Flask',
  'SQL MongoDB',
  'React & Redux',
  'Angular',
];
export const LANGUAGES = [
  '',
  'Flask',
  'SQL MongoDB',
  'React & Redux',
  'Angular',
];

// social links : To be given as string
export const socialLinks = [
  {
    name: 'LinkedIn',
    iconClass: 'fa fa-linkedin fa-2x',
    url: 'https://www.linkedin.com/in/athulmuralidharan/',
  },
  {
    name: 'GitHub',
    iconClass: 'fa fa-github fa-2x',
    url: 'https://github.com/athulmurali',
  },
  {
    name: 'Twitter',
    iconClass: 'fa fa-twitter fa-2x',
    url: 'https://twitter.com/@athul_karthik',
  },
  {
    name: 'Email',
    iconClass: 'fa fa-envelope fa-2x',
    url: 'mailto:athulmurali@gmail.com',
  },
];

export const FIRST_NAME = 'Athul';
export const LAST_NAME = 'Muralidharan';
export const PROFILE_PICTURE = DP;
export const ROLE = 'Software Developer';
export const BLOG_URL = 'https://medium.com/@athulmurali';
export const EDUCATION_INSTITUTION = 'Northeastern University';
export const EDUCATION_PROGRAM = 'Computer Science';
export const EDUCATION_GRADUATION_YEAR = '2018';

export const SUB_SECTIONS = [
  {
    header: 'Tech Stack',
    contentList: TECH_STACK,
    iconClass: 'fa-code',
  },
  {
    header: 'Languages',
    contentList: LANGUAGES,
    iconClass: 'fa-language',
  },
  {
    header: 'Education',
    contentList: [
      EDUCATION_INSTITUTION,
      EDUCATION_PROGRAM,
      EDUCATION_GRADUATION_YEAR,
    ],
    iconClass: 'fa-graduation-cap',
  },
];
