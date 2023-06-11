import React from 'react'
import Image from 'next/image';
import Logo from '/public/assets/cover.png'

type Props = {
    isDark?: boolean;
};

const SocialLinks = ({isDark = false}: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="/" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="logo"
          src={Logo}
          width={180}
          height={180}
        />
      </a>
    </div>
  )
}
export default SocialLinks;