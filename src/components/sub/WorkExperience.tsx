import { aboutMeSummary, socialLinks, workExperience } from '@/utils/constants';
import { ExperienceCardProps } from '@/utils/interfaces';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAnimation, useInView, motion } from 'framer-motion';
import React from 'react'
import SocialLink from './SocialLink';

const WorkExperience = () => {
    const secondaryContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const containerRef = React.useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const isInView = useInView(containerRef, { once: true, amount: "some" });

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    function ExperienceCard({ title, company, date, description }: ExperienceCardProps) {
        return (
            <div className='flex flex-col justify-center gap-6 w-full'>
                <div className='flex items-end justify-between w-full' >
                    <div className='flex flex-col gap-1'>
                        <span className='text-4xl'>{company}</span>
                        <span className='text-lg'>{title}</span>
                    </div>
                    <span className='text-lg'>{date}</span>
                </div>
                <span className='text-lg w-full'>{description}</span>
            </div >
        );
    }

    return (
        <motion.div
            ref={containerRef}
            initial="hidden"
            animate={controls}
            variants={secondaryContainerVariants}
            className='container-padding flex flex-col w-full items-center gap-20 py-5 xl:p-10'
        >
            <div className='flex flex-col gap-8 items-center xl:items-start'>
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#1e90ff', color: '#fff', transition: { type: 'spring', stiffness: 300 } }}
                    className='btn-primary py-2 px-4 self-center xl:self-start'
                    onClick={() => window.open(`mailto:${process.env.NEXT_PUBLIC_EMAIL}`)}
                >
                    <FontAwesomeIcon icon={faPaperPlane} className='mr-2' />
                    Get in touch
                </motion.button>
                <div className='flex flex-col gap-2 text-center xl:text-left'>
                    <p className='text-6xl w-full'>Iain Black</p>
                    <p className='text-2xl w-full'>Software Engineer</p>
                </div>
                <div className='flex gap-5'>
                    {socialLinks.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 300 } }}
                        >
                            <SocialLink
                                key={index}
                                icon={item.icon}
                                link={item.link}
                                title={item.title}
                            />
                        </motion.div>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 300 } }}
                        onClick={() => window.open(`mailto:${process.env.NEXT_PUBLIC_EMAIL}`)}
                    >
                        <div className={'border-half border-white rounded-xl py-1 px-2'}>
                            <button className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span className='text-sm'>Email</span>
                            </button>
                        </div>
                    </motion.button>

                </div>
                <p className='text-lg w-full'>{aboutMeSummary}</p>
            </div>
            <div className='grid grid-cols-1 gap-10 w-full'>
                <p className='text-6xl w-full'>Work Experience</p>
                <div className='grid grid-cols-1 gap-10 w-full'>
                    {workExperience.map((item, index) => (
                        <ExperienceCard
                            key={index}
                            title={item.title}
                            company={item.company}
                            date={item.date}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </motion.div >
    );
};

export default WorkExperience
