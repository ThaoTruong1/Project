import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import './Menu.css';
import ImageRight from '/public/assets/ad-1.jpg';
type Props = {
    isDark?: boolean
};

const Navbar = ({isDark}: Props) => {
  return (
    <header className='mb-5'>
        <nav className="flex justify-between items-center w-full text-wh-900 px-10 py-4 back-gr">
            <div className="hidden sm:block">
                <SocialLinks />
            </div>
            <div className="flex justify-between items-center gap-10 menu">
                <Link href="/">Home</Link>
                <Link href="/">All Job</Link>
                <Link href="/">IT companies</Link>
                <Link href="/">About</Link>
            </div>
            <div className='btn-signin'>
                <a href="#"><p>Sign In</p></a>
            </div>
        </nav>
        <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
            <div className="basis-2/3 md:mt-3">
                <h1 className="font-bold text-3xl md:text-5xl">BLOG OF THE FUTURE</h1>
                <p className="text-sm mt-3">
                    Blog dedicated towards AI and generation and job automation
                </p>
            </div>
            <div className="basis-full relative w-auto h-32 bg-wh-500">
                <div className="flex justify-between items-center gap-7">
                    <a href="/" target="_blank" rel="noreferrer">
                    <Image
                        fill
                        className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
                        alt="img-right"
                        src={ImageRight}

                    />
                    </a>
                </div>
            </div>
        </div>
        <hr className="border-1 mx-10" />
    </header>
  );
};
export default Navbar;