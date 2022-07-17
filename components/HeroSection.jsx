import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div id='hero'>
      <section id='heroSection'>
        <Image src='/placeholder.jpeg' alt='Landscape picture' width={900} height={567} id='heroImg' />

        <div className='heroHeadingWrapper'>
          <h1 className='heroHeading h1Head'>Less time watching Kafka tutorials,<span className='heroHeading heroSpacing headingHighlight'>more time streaming</span>.</h1>
          <br />
          <h4 className='h4Head spaceMonoFont'>evaStudio is an open-source, Apache Kafka playground for monitoring performance metrics in real time to test loads, decide on resources to provision, and improve processing efficiency before launching.
            <br />
            <br />
            <span className='subheadingSpan spaceMonoFont'>
              Designed with Data Scientists in mind.
            </span>
          </h4>
        </div>


        <div className='heroButtonWrapper'>
          <Link href='/learn_more/'>
            <button className='secondaryButton'>Learn More</button>
          </Link>

          <a href='https://github.com/oslabs-beta/evaStudio/' target='_blank' rel="noopener noreferrer" className='primaryButton'>
            <Image src='/githubIcon.png' alt='Landscape picture' width={28} height={20} className='githubLogo' />
            <p className='github'>Fork on Github</p>
          </a>
        </div>

      </section>
    </div>
  )
}

export default HeroSection;