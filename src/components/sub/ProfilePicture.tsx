'use client';

import { profilePictureBullets } from '@/utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAnimation, useInView, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

const ProfilePicture = () => {
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
            className='flex flex-col w-full justify-center gap-5 py-5'
        >
            < motion.div
                variants={transitionInLeft}
                className='h-52 w-44 items-center justify-center relative rounded-3xl overflow-hidden bg-red'
            >
                <Image
                    src='/face.jpeg'
                    alt='Profile Picture'
                    layout='fill'
                    objectFit='contain'
                />
            </motion.div>
            {profilePictureBullets.map((bullet, index) => (
                <motion.div
                    key={index}
                    variants={transitionInLeft}
                    className='flex items-center justify-center gap-3'
                >
                    <FontAwesomeIcon icon={bullet.icon} />
                    <span className='text-lg'>{bullet.title}</span>
                </motion.div>
            ))}
        </motion.div >
    );
}

export default ProfilePicture
