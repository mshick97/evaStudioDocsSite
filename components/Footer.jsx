import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id='footer'>
      <Link href='.' id='logoLink'>
        <h3>evaStudio</h3>
      </Link>

      <div id='footerLinks'>
        <Link href='https://github.com/oslabs-beta/evaStudio/' target='_blank' rel="noopener noreferrer" className='footerIcon'>
          <Image src='/githubIcon.png' alt='Landscape picture' width={25} height={25} className='githubLogo footerIcon' />
        </Link>
      </div>
    </footer >
  )
}

export default Footer;