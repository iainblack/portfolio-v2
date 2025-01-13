import { ProjectCardProps } from "@/components/sub/ProjectCard";
import { faLinkedin, faGithub, faCss3Alt, faGitAlt, faHtml5, faJs, faNodeJs, faNpm, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faHome, faRectangleList, faUserCircle, faLocationDot, faExternalLink } from "@fortawesome/free-solid-svg-icons";


///// About Page /////

export const profilePictureBullets = [
    { title: 'Seattle, WA', icon: faLocationDot },
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

export const aboutMeSummary = `When I'm not coding, you'll probably find me golfing, rooting for my hometown Seattle Mariners, spending time with friends and family, or enjoying the outdoors. My passion is helping people improve their online footprint, which is why I've been steadily building a freelance business. I'm always looking for new opportunities to learn and grow, so if you have a project in mind, I'd love to hear about it!`;

export const workExperience = [
    {
        title: 'Software Engineer II',
        company: 'Accruent',
        date: 'May 2023 - Present',
        description: `
        <div class='text-left flex flex-col gap-3'>
            <p>One of two developers leading the efforts for a central authentication platform, leveraging Duende Identity Server to support thousands of users across more than 12 applications.</p>
            <p>Managing and contributing to a large, multi-project codebase with six .NET projects, responsible for designing and deploying production-level features. Developed REST APIs and a React-based responsive user interface to deliver a seamless and scalable user experience.</p>
            <p>Upholding application security standards by conducting regular scans, implementing fixes, and promoting best practices across the team to ensure a secure codebase.</p>
        </div>`
    },
    {
        title: 'Senior Software Engineer',
        company: 'JUNO',
        date: 'Sep 2022 - April 2023',
        description: `
        <div class='text-left flex flex-col gap-3'>
            <p>Owned foundational development efforts for the social/community aspect of an online learning and community platform. Implemented pagination and virtualization patterns to handle high user traffic.</p>
            <p>Identified and resolved longstanding bugs under high duress and heavy time constraints. Effectively collaborated with other departments to ensure quality and success.</p>
        </div>`
    },
    {
        title: 'Software Engineer',
        company: 'Verint',
        date: 'Jan 2020 - Sep 2022',
        description: `
        <div class='text-left flex flex-col gap-3'>
            <p>Led all development efforts for a delivery team supporting multiple clients with conversational AI software. Frequently met with stakeholders to develop technical requirements of requested features, develop a plan of action, and deliver full-stack solutions before hard deadlines.</p>
            <p>Led all development efforts for a shared React component library. Refactored existing components to leverage Material-UI’s configurable theme capabilities. Developed new components designed to be generic and re-usable across all clients</p>
        </div>`
    },
];


///// Projects Page /////

export const projects: ProjectCardProps[] = [
    {
        video: '/RapidQuotesClip.mov',
        title: 'RapidQuotes (In Development)',
        description: 'A CPQ and analytics platform for B2B companies who maintenance complex machinery. Features include multi-tenant user management, fully custom CMS, RBAC, Data Insightsp, and more. Built with Next.js 14, .NET 8, Material-UI, Azure Cloud Services, Auth0 and Stripe. ',
    },
    {
        video: '/BlogClip.mov',
        title: `Lou's Blog`,
        description: 'A blog website integrated with a headless CMS and email subscription service. Built using Next.js 14, Sanity CMS, Tailwind CSS, Firebase Firestore, and SendGrid.',
        links: [
            { icon: faGithub, link: 'https://github.com/iainblack/blog-sanity', title: 'Repository' },
            { icon: faExternalLink, link: 'https://www.healingwithmiracles.com', title: 'Live Site' }
        ]
    },
    {
        video: '/49RaysClip.mov',
        title: '49 Rays Mobile App',
        description: 'The 49 Rays of God is a mobile application that serves as a reference to the teachings of a religious group called Namaste Inc. Built with React Native, Expo, and TypeScript. I also managed the deployment and billing set up on behalf of the organization. No personal affiliation.',
        links: [
            { icon: faGithub, link: 'https://github.com/iainblack/49Rays', title: 'Repository' },
            { icon: faExternalLink, link: 'https://apps.apple.com/pl/app/the-49-rays-of-god/id6464680771', title: 'App Store' }
        ]
    },
    {
        video: '/DitosClip.mov',
        title: 'Benniditos.com',
        description: `Bennidito's Pizza is popular neighborhood restaurant located in Spokane, WA. I built them a modern website to bring in more business and create a better customer experience. This web application was built using Next.js and Material- UI.`,
        links: [
            { icon: faGithub, link: 'https://github.com/iainblack/Benniditos', title: 'Repository' },
            { icon: faExternalLink, link: 'https://www.benniditos.com/', title: 'Live Site' }
        ]
    }
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