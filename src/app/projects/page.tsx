'use client';

import ProjectCard from '@/components/sub/ProjectCard';
import { projects } from '@/utils/constants';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Page = () => {
    return (
        <main className="h-full overflow-x-hidden container-padding py-20 lg:py-28">
            <motion.div
                className="flex flex-col"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
};

export default Page;