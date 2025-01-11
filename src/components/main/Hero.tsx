import React from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
    scrollNext: () => void;
}

const Hero = (props: HeroProps) => {
    return (
        <section id="hero-section" className='flex flex-col items-center justify-center text-white gap-5 h-screen container-padding'>
            <motion.span
                className='text-center text-5xl md:text-7xl'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className='flex flex-wrap items-center justify-center'>
                    <span className='text-5xl md:text-7xl'>Hi, I&apos;m&nbsp;<span className='text-5xl md:text-7xl text-primary'>Iain.</span></span>
                </div>
            </motion.span>
            <motion.h4
                className='text-center text-2xl md:text-5xl'
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                I&apos;m a full stack software developer.
            </motion.h4>
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }} // Delay on initial render
                className='flex pt-5'
            >
                <motion.button
                    onClick={props.scrollNext}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }} // No delay on hover
                    className='btn-primary my-4 p-3 w-48 rounded-full'
                >
                    Contact
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero
