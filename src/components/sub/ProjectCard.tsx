'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import SocialLink, { SocialLinkProps } from './SocialLink';

export interface ProjectCardProps {
    video: string;
    title: string;
    description: string;
    links?: SocialLinkProps[];
}

const ProjectCard = (props: ProjectCardProps) => {
    const { title, description, video } = props;
    const textRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start end", "start center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

    const [isLoading, setIsLoading] = useState(true);
    const [showSkeleton, setShowSkeleton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isLoading) {
                setShowSkeleton(true);
            }
        }, 200);

        return () => clearTimeout(timer);
    }, [isLoading]);

    useEffect(() => {
        if (videoRef.current && videoRef.current.readyState >= 3) {
            handleLoad();
        }
    }, [videoRef.current]);

    const handleLoad = () => {
        setIsLoading(false);
        setShowSkeleton(false);
    };

    return (
        <section className='flex flex-col items-center justify-center text-white py-5'>
            <motion.div
                ref={textRef}
                initial="hidden"
                className='w-full md:w-3/4 lg:w-3/4 xl:w-1/2 flex flex-col items-center gap-6'
                style={{ perspective: 1000, scale }}
            >
                <div className='relative w-full h-auto rounded-2xl overflow-hidden bg-gray-900'>
                    {showSkeleton && (
                        <div className="absolute inset-0 flex justify-center items-center bg-gray-200 animate-pulse">
                            <div className="w-full h-full bg-gray-300"></div>
                        </div>
                    )}
                    <video
                        ref={videoRef}
                        src={video}
                        className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 w-full h-full object-cover`}
                        loop
                        autoPlay
                        muted
                        playsInline
                        onCanPlay={handleLoad}
                        controls={false}
                        onError={() => console.error('Video failed to load')}
                    />
                </div>
                <div className='w-full flex flex-col justify-center gap-4 p-2 backdrop-blur-sm rounded-xl'>
                    <p className='text-4xl serif-font'>{title}</p>
                    <p className='text-lg light-font'>{description}</p>
                    {props.links &&
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
                        </div>}
                </div>
            </motion.div>
        </section>
    );
};

export default ProjectCard;