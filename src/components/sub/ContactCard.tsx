import React, { forwardRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { socialLinks } from '@/utils/constants';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { downloadResume } from '@/utils/functions';
import SocialLink from './SocialLink';

const ContactCard = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section
            id="about-me-section"
            ref={ref}
            className='container-padding flex flex-col items-center justify-center text-white h-screen backdrop-blur-lg md:backdrop-blur-none'>
            <div className='flex flex-col md:flex-row justify-center w-full items-center gap-6 md:py-12'>
                <AdditionalInfoSection />
            </div>
        </section>
    );
});

function AdditionalInfoSection() {
    const textRef = React.useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const isInView = useInView(textRef, { once: true, amount: 0.5 });

    React.useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    const transitionInFromRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };

    const secondaryContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    return (
        <motion.div
            ref={textRef}
            initial="hidden"
            animate={controls}
            variants={secondaryContainerVariants}
            className='flex flex-col h-screen md:h-auto justify-center md:gap-16 md:rounded-xl md:border md:border-white md:p-10 md:backdrop-blur-lg'
        >
            <div className='flex flex-col gap-8 justify-around'>
                <div className='flex flex-col gap-3'>
                    <motion.p variants={transitionInFromRight} className='text-4xl w-full text-center md:max-w-xl'>
                        Got an idea for a cool project?
                    </motion.p>
                    <motion.p variants={transitionInFromRight} className='text-2xl w-full text-center md:max-w-xl'>
                        Let&apos;s get in touch!
                    </motion.p>
                </div>
                <div className='flex flex-col gap-5 w-full items-center'>
                    <motion.button
                        variants={transitionInFromRight}
                        whileHover={{ scale: 1.05, backgroundColor: '#1e90ff', color: '#fff', transition: { type: 'spring', stiffness: 300 } }}
                        className='btn-primary py-2 px-4 rounded w-full md:max-w-xs'
                        onClick={() => window.open(`mailto:${process.env.NEXT_PUBLIC_EMAIL}`)}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} className='mr-2' />
                        Send me an email
                    </motion.button>
                    <motion.button
                        variants={transitionInFromRight}
                        whileHover={{ scale: 1.05, backgroundColor: '#1e90ff', color: '#fff', transition: { type: 'spring', stiffness: 300 } }}
                        className='btn-primary py-2 px-4 rounded w-full md:max-w-xs'
                        onClick={downloadResume}
                    >
                        <FontAwesomeIcon icon={faDownload} className='mr-2' />
                        Download my resume
                    </motion.button>
                </div>
                <div className='flex items-center justify-center gap-7'>
                    {socialLinks.filter((link) => link.title !== 'Email').map((link, index) => (
                        <motion.div
                            key={index}
                            variants={transitionInFromRight}
                            whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 300 } }}
                        >
                            <SocialLink title={link.title} icon={link.icon} link={link.link} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

ContactCard.displayName = 'ContactCard';
export default ContactCard;