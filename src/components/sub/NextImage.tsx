'use client';
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface NextImageProps extends ImageProps {
    onLoad?: () => void;
}

const NextImage: React.FC<NextImageProps> = ({ onLoad, ...props }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
        if (onLoad) {
            onLoad();
        }
    };

    return (
        <div className="relative w-full h-full">
            {isLoading && (
                <div className="absolute inset-0 flex justify-center items-center bg-gray-200 animate-pulse">
                    <div className="w-full h-full bg-gray-300"></div>
                </div>
            )}
            <Image {...props} onLoad={handleLoad} alt={props.alt ?? ''} className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} />
        </div>
    );
};

export default NextImage;