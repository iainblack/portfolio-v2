import { useScroll, useTransform, motion } from 'framer-motion';
import React, { forwardRef } from 'react'

const ProjectsSection = forwardRef<HTMLDivElement>((props, ref) => {
    const textRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start end", "end center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <section id="about-me-section" ref={ref} className='flex flex-col items-center justify-center text-white gap-5'>
            <motion.p ref={textRef} style={{ scale }} className='text-2xl'>
                loren ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, si correcte referatur, existit ad id, quod
            </motion.p>
        </section >
    );
});

ProjectsSection.displayName = 'ProjectsSection';
export default ProjectsSection
