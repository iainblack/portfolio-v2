'use client';

import { profilePictureBullets } from '@/utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'

const ProfilePicture = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className='flex flex-col w-full justify-center gap-5 py-5'
        >
            <div className='h-52 w-44 items-center justify-center relative rounded-3xl overflow-hidden bg-red'>
                <Image
                    priority
                    src='/face.jpeg'
                    alt='Profile Picture'
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            {profilePictureBullets.map((bullet, index) => (
                <div
                    key={index}
                    className='flex items-center justify-center gap-3 w-full'
                >
                    <FontAwesomeIcon icon={bullet.icon} />
                    <span className='text-lg'>{bullet.title}</span>
                </div>
            ))}
        </div >
    );
}

export default ProfilePicture
