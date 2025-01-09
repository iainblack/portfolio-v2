import React, { forwardRef } from 'react'

const ExperienceSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section id="experience-section" ref={ref}
            className='section-padding text-white'>
            <h1 className='text-4xl font-bold'>Experience</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, si correcte referatur, existit ad id, quod</p>
        </section>
    );
});

ExperienceSection.displayName = 'ExperienceSection';
export default ExperienceSection
