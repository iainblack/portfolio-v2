import React, { forwardRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCode, faDownload, faEnvelope, faLocationDot, faThumbsUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faLinkedin, faNodeJs, faNpm, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

interface ListItem {
    title: string;
    icon: IconDefinition;
}

const QuickViewSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id="about-me-section" ref={ref} className='section-padding text-white h-full md:h-screen bg-secondary md:bg-transparent'>
            <div
                className='flex flex-col md:flex-row justify-center w-full items-center gap-6 md:py-12'>
                <ProfileSection />
                <AdditionalInfoSection />
            </div>
        </section>
    );
});

function ProfileSection() {
    const textRef = React.useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const isInView = useInView(textRef, { once: true, amount: 0.5 });

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    const secondaryContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const leftItemVariants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
    };

    const bulletItems: ListItem[] = [
        { title: 'Based in Seattle, WA', icon: faLocationDot },
        { title: '5 Years of Professional Experience', icon: faCode },
        { title: 'Open to work', icon: faBuilding },
        { title: 'Super cool guy', icon: faThumbsUp },
    ];

    const socialIcons: IconDefinition[] = [faLinkedin, faGithub, faLinkedin];

    return (
        <motion.div
            ref={textRef}
            initial="hidden"
            animate={controls}
            variants={secondaryContainerVariants}
            className='flex flex-col h-screen md:h-auto justify-center gap-8 rounded-xl bg-card md:p-12'
        >
            {/* Profile Picture */}
            <motion.div
                variants={leftItemVariants}
                className='h-80 w-full items-center justify-center relative rounded-lg overflow-hidden border border-white'
            >
                <Image
                    src='/face.jpeg'
                    alt='Profile Picture'
                    layout='fill'
                    objectFit='contain'
                />
            </motion.div >
            {/* Social Icons */}
            <div className='flex items-center justify-center gap-7'>
                {socialIcons.map((icon, index) => (
                    <motion.div
                        key={index}
                        variants={leftItemVariants}
                        whileHover={{ scale: 1.2, transition: { type: 'spring', stiffness: 300 } }}
                        className='text-2xl cursor-pointer hover:text-[#1e90ff] transition-colors'
                        onClick={() => window.open('https://www.linkedin.com/in/iain-black-1b1b1b1b1/')}
                    >
                        <FontAwesomeIcon icon={icon} />
                    </motion.div>
                ))}
            </div>
            {/* Bullet Points */}
            <div className='flex flex-col gap-3'>
                {bulletItems.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={leftItemVariants}
                        className='flex items-center gap-3'
                    >
                        <FontAwesomeIcon icon={item.icon} />
                        <span>{item.title}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div >
    );
}

function AdditionalInfoSection() {
    const textRef = React.useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const isInView = useInView(textRef, { once: true, amount: 0.5 });

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    const secondaryContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const rightItemVariants = {
        hidden: { opacity: 0, x: 150 },
        visible: { opacity: 1, x: 0 },
    };

    const techItems: ListItem[] = [
        { title: 'HTML5', icon: faHtml5 },
        { title: 'CSS3', icon: faCss3Alt },
        { title: 'JavaScript', icon: faJs },
        { title: 'React', icon: faReact },
        { title: 'Node.js', icon: faNodeJs },
        { title: 'Sass', icon: faSass },
        { title: 'Git', icon: faGitAlt },
        { title: 'NPM', icon: faNpm },
    ];

    return (
        <motion.div
            ref={textRef}
            initial="hidden"
            animate={controls}
            variants={secondaryContainerVariants}
            className='flex flex-col md:h-full justify-center md:gap-16 rounded-xl bg-card md:p-12'
        >
            <div className='flex flex-col gap-5 h-full md:h-full justify-center'>
                <motion.p variants={rightItemVariants} className='text-4xl w-full text-center md:max-w-xl mb-2'>
                    Got an idea for a cool project?
                </motion.p>
                <motion.button
                    variants={rightItemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: '#1e90ff', color: '#fff' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='border border-primary btn-primary py-2 px-4 rounded w-full'
                >
                    Email Me
                    <FontAwesomeIcon icon={faEnvelope} className='ml-2' />
                </motion.button>
                <motion.button
                    variants={rightItemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: '#1e90ff', color: '#fff' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='border border-primary btn-primary py-2 px-4 rounded w-full'
                >
                    Download My Resume
                    <FontAwesomeIcon icon={faDownload} className='ml-2' />
                </motion.button>
            </div>
            <div className='flex flex-col gap-8 h-screen md:h-full justify-center'>
                <motion.p variants={rightItemVariants} className='text-lg text-center md:max-w-xl'>
                    Some technologies I&apos;ve worked with in the past:
                </motion.p>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 '>
                    {techItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={rightItemVariants}
                            className='flex flex-col items-center justify-center gap-2'
                        >
                            <FontAwesomeIcon icon={item.icon} className='text-6xl' />
                            <span>{item.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

QuickViewSection.displayName = 'QuickViewSection';
export default QuickViewSection;