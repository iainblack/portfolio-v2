import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SocialLinkProps {
    icon: IconDefinition;
    link: string;
    title?: string;
}

export default function SocialLink({ icon, link, title }: SocialLinkProps) {
    return (
        <div className={`${title && 'border border-white rounded-xl py-1 px-2 backdrop-blur-lg'}`}>
            <a href={link} target='_blank' rel='noreferrer' className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={icon} className={`${!title ? 'text-xl' : ''}`} />
                {title && <span className='text-sm'>{title}</span>}
            </a>
        </div>
    );
}
