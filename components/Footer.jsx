import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id='footer'>

      <div id='footerBranding'>
        <Link href='.' id='logoLink' className='footerIcon'>
          <h3 className='shrinkHeadingPandM'>evaStudio</h3>
        </Link>
        <p className='brandingP'>evaStudio is an open-source, Apache Kafka playground for monitoring performance metrics in real time to test loads, decide on resources to provision, and improve processing efficiency before launching.</p>
      </div>

      <div id='footerLinks'>
        <Link href='https://github.com/oslabs-beta/evaStudio/' target='_blank' rel="noopener noreferrer" className='footerIcon'>
          <Image src='/githubIcon.png' alt='Landscape picture' width={25} height={25} className='githubLogo footerIcon' />
        </Link>
      </div>
    </footer >
  )
}

export default Footer;