'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { headerLinks } from '@/utils/constants';

const Header: React.FC = () => {
    const pathname = usePathname();
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);


    const selected = headerLinks.find((link) => link.route === pathname) || headerLinks[0];

    return (
        <AnimatePresence>
            <motion.header
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }} // Delay on initial render
                exit={{ opacity: 0, y: -25 }}
                id='header'
                className='fixed w-full z-10 overflow-x-hidden'
            >
                <motion.nav
                    initial={false}
                    animate={{ opacity: showHeader ? 1 : 0, y: showHeader ? 0 : -25 }}
                    className='flex w-screen items-center justify-center py-4 px-5 md:px-20'
                >
                    <div className='flex gap-10 border border-half border-white py-1 px-1 rounded-2xl text-md backdrop-blur'>
                        {headerLinks.map((link, index: number) => (
                            <Link
                                key={index}
                                href={link.route}
                                className={`flex gap-2 items-center py-1 px-2 hover:bg-[#394040] hover:rounded-xl hover:border-half 
                                ${selected.route === link.route && 'bg-selected rounded-xl border-half'}`}
                            >
                                <FontAwesomeIcon icon={link.icon} className='text-white hover:text-gray-300 transition-colors' />
                                <button className={`text-white hover:text-gray-300 transition-colors text-sm`}>
                                    {link.name}
                                </button>
                            </Link>
                        ))}
                    </div>
                </motion.nav>
            </motion.header>
        </AnimatePresence >
    );
};

export default Header;