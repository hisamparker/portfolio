import { v4 as uuidv4 } from 'uuid';

const experienceArray = [
  {
    id: uuidv4(),
    jobTitle: 'Graduate',
    company: 'IronHack - Web Development Bootcamp',
    timeline: 'March, 2021 - September, 2021',
    desc:
      `Learned 'full-stack' web development
      HTML, CSS, Express, JavaScript, React
      Created 3 projects in 6 months (part-time)
      Voted best overall project for my final project`,
  },
  {
    id: uuidv4(),
    jobTitle: 'Freelance UX Writer, Editor and Consultant',
    company: 'hi sam',
    timeline: '2010 - present',
    desc:
      `UX writing
      Digital content editing and creation
      Communications strategy consulting
      Workshop creation and delivery
      Public speaking on communications strategy and digital writing with emphasis on accessibility`,
  },
  {
    id: uuidv4(),
    jobTitle: 'Lecturer: Digital Writing & Communications',
    company: 'De Haagse Hoogeschool',
    timeline: '2017 - 2020',
    desc:
    `Created university level courses, including syllabus content, assignment structure, and grading rubric
    Delivered courses and assisted other teachers in delivering courses
    Lectured on digital writing, digital communications, and UX copy
    Ran writing workshops and labs`,
  },
  {
    id: uuidv4(),
    jobTitle: 'Head of Marketing',
    company: 'Jobcast',
    timeline: '2014 - 2016',
    desc:
      `Created and delivered all digital communications and marketing strategy
      Created, curated, and edited content for the Jobcast blog and social channels
      Responsible for brand voice and tone
      Wrote and applied website copy
      Managed freelance content creators`,
  },
];

export default experienceArray;
