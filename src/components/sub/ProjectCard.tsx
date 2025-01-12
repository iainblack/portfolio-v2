'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React from 'react';
import SocialLink, { SocialLinkProps } from './SocialLink';

export interface ProjectCardProps {
    video: string;
    title: string;
    description: string;
    links?: SocialLinkProps[];
}

const ProjectCard = (props: ProjectCardProps) => {
    const { title, description, video } = props;
    const textRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start end", "start center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

    return (
        <section className='flex flex-col items-center justify-center text-white py-5'>
            <motion.div
                ref={textRef}
                initial="hidden"
                className='w-full md:w-3/4 lg:w-3/4 xl:w-1/2 flex flex-col items-center gap-6'
                style={{ perspective: 1000, scale }}
            >
                <div className='w-full h-auto rounded-2xl overflow-hidden bg-gray-900'>
                    <video
                        src={video}
                        title="Project UI"
                        className='w-full h-full'
                        loop
                        autoPlay
                        muted
                    />
                </div>
                <div className='w-full py-4 md:px-4 flex flex-col justify-center gap-4'>
                    <p className='text-4xl serif-font'>{title}</p>
                    <p className='text-lg light-font'>{description}</p>
                    <div className='flex gap-5'>
                        {props.links?.map((item, index) => (
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
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ProjectCard;