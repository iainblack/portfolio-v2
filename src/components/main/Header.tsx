'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

interface HeaderLink {
    name: string;
    route: string;
}

const Header: React.FC = () => {
    const [showHeader, setShowHeader] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);
    const pathname = usePathname();

    const links = [
        { name: 'About', route: '/about' },
        { name: 'Experience', route: '/experience' },
        { name: 'Projects', route: '/projects' },
    ];

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

    return (
        <motion.header
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: showHeader ? 1 : 0, y: showHeader ? 0 : -25 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            id='header'
            className='fixed w-full z-10 backdrop-blur '
        >
            <nav className='flex w-full items-center justify-center md:justify-end py-8 px-6 md:px-20'>
                <div className='flex gap-10'>
                    {pathname !== '/' && (
                        <Link href='/'>
                            <button className='text-white text-xl hover:text-gray-300 transition-colors'>
                                Home
                            </button>
                        </Link>
                    )}
                    {links.map((link: HeaderLink, index: number) => (
                        <Link key={index} href={link.route}>
                            <button className='text-white text-xl hover:text-gray-300 transition-colors'>
                                {link.name}
                            </button>
                        </Link>
                    ))}
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;