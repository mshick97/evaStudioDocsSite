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
          <h3 className='h3Head spaceMonoFont'>evaStudio is an open-source, Apache Kafka playground for visualizing your clusters' health metrics and spinning up local data pipelines at the click of a button.
            <br />
            <br />
            <span className='subheadingSpan spaceMonoFont'>
              Designed with Data Scientists in mind.
            </span>
          </h3>
        </div>


        <div className='heroButtonWrapper'>
          <Link href='/getting_started/'>
            <button className='secondaryButton'>Get Started</button>
          </Link>

          <a href='https://github.com/oslabs-beta/evaStudio/' target='_blank' rel="noopener noreferrer" className='primaryButton'>
            <Image src='/githubIcon.png' alt='Landscape picture' width={22} height={18} className='githubLogo' />
            <p className='github'>Fork on Github</p>
          </a>
        </div>

      </section>
    </div>
  )
}

export default HeroSection;