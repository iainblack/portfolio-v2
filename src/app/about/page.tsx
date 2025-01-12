'use client';

import ProfilePicture from '@/components/sub/ProfilePicture';
import WorkExperienceSection from '@/components/sub/WorkExperience';
import { motion } from 'framer-motion';
import React from 'react'

const AboutPage = () => {
    const transitionInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <main className='h-full pt-20 xl:pt-28'>
            <motion.div
                variants={transitionInLeft}
                initial='hidden'
                animate='visible'
                className='flex flex-col xl:flex-row min-h-screen justify-center'
            >
                <div id='left-column' className='container-padding xl:w-1/5 flex flex-col items-center'>
                    <div className='sticky top-20'>
                        <ProfilePicture />
                    </div>
                </div>
                <div id='right-column' className='xl:w-1/2 flex flex-col items-center xl:max-w-2xl rounded-xl xl:pb-28'>
                    <WorkExperienceSection />
                </div>
            </motion.div>
        </main>
    )
}

export default AboutPage