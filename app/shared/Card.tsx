import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Ai from '/public/assets/ai-4.jpg'
type Props = {
    className?: string;
    imageHeight: string;
    isSmallCard?: boolean;
    isLongForm?: boolean;
    isDark?: boolean;
}

const Card = ({
    className, 
    imageHeight, 
    isSmallCard = false, 
    isLongForm = false,
    isDark}: 
    Props) => {
  return (
    <div className={className}>
        <Link className='basic-full hover:opacity-78' href="/">
            <div className={`relative w-auto mb-3 ${imageHeight}`}>
                <div className="flex justify-between items-center gap-7">
                    <a href="/" target="_blank" rel="noreferrer">
                        <Image
                        fill
                        className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
                        alt="logo"
                        src={Ai}
                        />
                    </a>
                </div>
            </div>
        </Link>
        <div className='basic-full'>
            <Link href="/">
                <h4 className={`font-bold hover:text-accent-green
                ${isSmallCard? 'text-base' : 'text-lg'}
                ${isSmallCard? 'line-clamp-2' : ''}
                `}>
                    Title
                </h4>
            </Link>
            <div className={`${isSmallCard ? 'my-2' : 'flex my-3'} gap-3`}>
                <h5 className='font-semibold text-xs'>author</h5>
                <h6 className='text-wh-300 text-xs'>date</h6>
            </div>
            <p className={`text-wh-100 ${
                isLongForm ? 'line-clamp-5' : 'line-clamp-3'
                }`}
            >
                snippet
            </p>
        </div>
    </div>
  );
}
export default Card;