import { socialLinks } from '@/utils/constants'
import React from 'react'
import SocialLink from '../sub/SocialLink'

const Footer = () => {
    return (
        <footer className='flex items-center justify-center text-white w-full py-2 px-5'>
            <div className='flex justify-between sm:justify-center w-full gap-20'>
                <p className='text-md'>© 2024 / Iain Black</p>
                <div className='flex gap-6'>
                    {socialLinks.map((item, index) => (
                        <SocialLink key={index} icon={item.icon} link={item.link} />
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
