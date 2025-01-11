
import ProjectCard from '@/components/sub/ProjectCard';
import { projects } from '@/utils/constants';
import React from 'react';

const Page = () => {
    return (
        <main className="h-full overflow-x-hidden container-padding py-20 lg:py-28">
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <ProjectCard key={index}  {...project} />
                ))}
            </div>
        </main>
    );
};

export default Page;