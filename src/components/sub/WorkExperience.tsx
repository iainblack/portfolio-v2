import { aboutMeSummary, socialLinks, workExperience } from '@/utils/constants';
import { ExperienceCardProps } from '@/utils/interfaces';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react'
import SocialLink from './SocialLink';

const WorkExperience = () => {

    const containerRef = React.useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className='container-padding flex flex-col w-full items-center gap-20 py-5 xl:p-10'>
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
                    <p className='text-6xl w-full serif-font'>Iain Black</p>
                    <p className='text-2xl w-full light-font'>Software Engineer</p>
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
                    <motion.div
                        whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 300 } }}
                        onClick={() => window.open(`mailto:${process.env.NEXT_PUBLIC_EMAIL}`)}
                    >
                        <div className={'border border-white rounded-xl py-1 px-2 backdrop-blur-lg'}>
                            <button className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span className='text-sm'>Email</span>
                            </button>
                        </div>
                    </motion.div>

                </div>
                <p className='text-lg w-full'>{aboutMeSummary}</p>
            </div>
            <div className='grid grid-cols-1 gap-10 w-full'>
                <p className='text-6xl w-full serif-font'>Work Experience</p>
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
        </div >
    );
};

export default WorkExperience


function ExperienceCard({ title, company, date, description }: ExperienceCardProps) {
    return (
        <div className='flex flex-col justify-center gap-6 w-full backdrop-blur-lg md:backdrop-blur-none p-2 md:p-0 rounded-xl'>
            <div className='flex flex-col md:flex-row md:items-end md:justify-between w-full' >
                <div className='flex flex-col gap-1'>
                    <span className='text-3xl'>{company}</span>
                    <span className='text-lg light-font'>{title}</span>
                </div>
                <span className='text-lg light-font'>{date}</span>
            </div>
            <span
                className='text-lg w-full'
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div >
    );
}