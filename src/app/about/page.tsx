'use client';

import ProfilePicture from '@/components/sub/ProfilePicture';
import WorkExperienceSection from '@/components/sub/WorkExperience';
import React from 'react'

const AboutPage = () => {
    return (
        <main className='h-full py-20 xl:py-28'>
            <div className='flex flex-col xl:flex-row min-h-screen justify-center'>
                <div id='left-column' className='container-padding xl:w-1/5 flex flex-col items-center'>
                    <div className='sticky top-20'>
                        <ProfilePicture />
                    </div>
                </div>
                <div id='right-column' className='xl:w-1/2 flex flex-col items-center xl:max-w-2xl'>
                    <WorkExperienceSection />
                </div>
            </div>
        </main>
    )
}

export default AboutPage