'use client';

import { ParticleBackground2 } from '@/components/ParticleBackground2';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAnimation, useInView, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

const page = () => {
    return (
        <main className='h-full pt-20 md:pt-24'>
            <ParticleBackground2 />
            <div className='flex flex-col md:flex-row min-h-screen justify-center gap-5 md:gap-20'>
                <div id='left-column' className='container-padding md:w-1/5 flex flex-col items-center'>
                    <div className='sticky top-24'>
                        <ProfileSection />
                    </div>
                </div>
                <div id='right-column' className='md:w-1/2 flex flex-col items-center max-w-2xl'>
                    <WorkExperienceSection />
                </div>
            </div>
        </main>
    )
}

export default page

function ProfileSection() {
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
    const isInView = useInView(containerRef, { once: true, amount: 0.5 });

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    const transitionInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            ref={containerRef}
            initial="hidden"
            animate={controls}
            variants={secondaryContainerVariants}
            className='flex flex-col w-full justify-center gap-5 md:rounded-xl md:border md:border-white md:p-10 md:backdrop-blur-lg'
        >
            {/* Profile Picture */}
            <motion.div
                variants={transitionInLeft}
                className='h-72 w-64 items-center justify-center relative rounded-3xl overflow-hidden'
            >
                <Image
                    src='/face.jpeg'
                    alt='Profile Picture'
                    layout='fill'
                    objectFit='contain'
                />
            </motion.div >
            <motion.div
                variants={transitionInLeft}
                className='flex items-center justify-center gap-3'
            >
                <FontAwesomeIcon icon={faEarthAmerica} />
                <span className='text-lg'>Seattle, WA</span>
            </motion.div>
        </motion.div >
    );
}