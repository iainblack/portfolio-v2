'use client';

import { profilePictureBullets } from '@/utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import NextImage from './NextImage';

const ProfilePicture = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className='flex flex-col w-full justify-center gap-5 py-5'
        >
            <div className='h-52 w-44 items-center justify-center relative rounded-3xl overflow-hidden bg-red'>
                <NextImage
                    priority
                    fill
                    src='/face.jpeg'
                    alt='Profile Picture'
                    style={{ objectFit: 'cover' }}
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
