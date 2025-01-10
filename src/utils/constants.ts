import { faLinkedin, faGithub, faCss3Alt, faGitAlt, faHtml5, faJs, faNodeJs, faNpm, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faCode, faBuilding, faThumbsUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const HeroPageConstants = {
    summaryBulletItems: [
        { title: 'Based in Seattle, WA', icon: faLocationDot },
        { title: '5 Years of Experience', icon: faCode },
        { title: 'Open to work', icon: faBuilding },
        { title: 'Super cool guy', icon: faThumbsUp },
    ],
    techExperienceIcons: [
        { title: 'HTML5', icon: faHtml5 },
        { title: 'CSS3', icon: faCss3Alt },
        { title: 'JavaScript', icon: faJs },
        { title: 'React', icon: faReact },
        { title: 'Node.js', icon: faNodeJs },
        { title: 'Sass', icon: faSass },
        { title: 'Git', icon: faGitAlt },
        { title: 'NPM', icon: faNpm },
    ],
}

export const AboutPageConstants = {
    workExperience: [
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
    ],
    socialLinks: [
        { icon: faLinkedin, link: 'https://www.linkedin.com/in/your-linkedin', title: 'LinkedIn' },
        { icon: faGithub, link: 'https://www.github.com/your-github', title: 'GitHub' },
        { icon: faEnvelope, link: 'mailto:your-email', title: 'Email' },
    ],
}