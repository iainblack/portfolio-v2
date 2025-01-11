import { ProjectCardProps } from "@/components/sub/ProjectCard";
import { faLinkedin, faGithub, faCss3Alt, faGitAlt, faHtml5, faJs, faNodeJs, faNpm, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faHome, faRectangleList, faUserCircle, faEarthAmerica } from "@fortawesome/free-solid-svg-icons";


///// About Page /////

export const profilePictureBullets = [
    { title: 'Seattle, WA', icon: faEarthAmerica },
];

export const techExperienceIcons = [
    { title: 'HTML5', icon: faHtml5 },
    { title: 'CSS3', icon: faCss3Alt },
    { title: 'JavaScript', icon: faJs },
    { title: 'React', icon: faReact },
    { title: 'Node.js', icon: faNodeJs },
    { title: 'Sass', icon: faSass },
    { title: 'Git', icon: faGitAlt },
    { title: 'NPM', icon: faNpm },
];

export const aboutMeSummary = 'I am a software engineer with experience in web development. I have worked at Amazon, Microsoft, and Google. I am passionate about creating high quality software that is easy to use and maintain.';

export const workExperience = [
    {
        title: 'Software Engineer',
        company: 'Amazon',
        date: '2020 - Present',
        description: 'Working on the Amazon Prime Video team to deliver high quality video content to customers around the world.',
    },
    {
        title: 'Software Engineer',
        company: 'Microsoft',
        date: '2018 - 2020',
        description: 'Worked on the Windows team to deliver the best operating system to customers around the world.',
    },
    {
        title: 'Software Engineer',
        company: 'Google',
        date: '2016 - 2018',
        description: 'Worked on the Chrome team to deliver the best web browser to customers around the world.',
    },
];


///// Projects Page /////

export const projects: ProjectCardProps[] = [
    {
        link: 'https://www.google.com',
        title: 'Project 1',
        description: 'This is a project description',
    },
    {
        link: 'https://www.google.com',
        title: 'Project 2',
        description: 'This is a project description',
    },
    {
        link: 'https://www.google.com',
        title: 'Project 3',
        description: 'This is a project description',
    },
    {
        link: 'https://www.google.com',
        title: 'Project 4',
        description: 'This is a project description',
    },
    {
        link: 'https://www.google.com',
        title: 'Project 5',
        description: 'This is a project description',
    },
]

///// Header /////

export const headerLinks = [
    { name: 'Home', route: '/', icon: faHome },
    { name: 'About', route: '/about', icon: faUserCircle },
    { name: 'Projects', route: '/projects', icon: faRectangleList },
];


////// Misc /////

export const socialLinks = [
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/iain-black2020/', title: 'LinkedIn' },
    { icon: faGithub, link: 'https://github.com/iainblack', title: 'GitHub' },
];