'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface NextImageProps extends ImageProps {
    onLoad?: () => void;
}

const NextImage: React.FC<NextImageProps> = ({ onLoad, ...props }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [showSkeleton, setShowSkeleton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isLoading) {
                setShowSkeleton(true);
            }
        }, 200);

        return () => clearTimeout(timer);
    }, [isLoading]);

    const handleLoad = () => {
        setIsLoading(false);
        setShowSkeleton(false);
        if (onLoad) {
            onLoad();
        }
    };

    return (
        <div className="relative w-full h-full">
            {showSkeleton && (
                <div className="absolute inset-0 flex justify-center items-center bg-gray-200 animate-pulse">
                    <div className="w-full h-full bg-gray-300"></div>
                </div>
            )}
            <Image {...props} onLoad={handleLoad} alt={props.alt ?? ''} className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} />
        </div>
    );
};

export default NextImage;