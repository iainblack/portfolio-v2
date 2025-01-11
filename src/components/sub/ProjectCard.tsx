'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React from 'react';

export interface ProjectCardProps {
    link: string;
    title: string;
    description: string;
}

const ProjectCard = (props: ProjectCardProps) => {
    const { title, description } = props;
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
                <div className='w-full h-56 md:h-96 lg:h-[35vh] xl:h-[55vh] rounded-2xl overflow-hidden'>
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&playlist=dQw4w9WgXcQ"
                        title="Project UI"
                        className='w-full h-full'
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
                <div className='w-full p-4'>
                    <p className='text-4xl font-semibold'>{title}</p>
                    <p className='text-lg'>{description}</p>
                </div>
            </motion.div>
        </section>
    );
};

export default ProjectCard;