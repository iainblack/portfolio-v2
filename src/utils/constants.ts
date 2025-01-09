import { faLinkedin, faGithub, faCss3Alt, faGitAlt, faHtml5, faJs, faNodeJs, faNpm, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faCode, faBuilding, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export const HeroPageConstants = {
    summaryBulletItems: [
        { title: 'Based in Seattle, WA', icon: faLocationDot },
        { title: '5 Years of Professional Experience', icon: faCode },
        { title: 'Open to work', icon: faBuilding },
        { title: 'Super cool guy', icon: faThumbsUp },
    ],
    socialIcons: [faLinkedin, faGithub, faLinkedin],
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
