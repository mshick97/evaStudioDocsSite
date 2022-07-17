import React from 'react'
import Image from 'next/image';

const GetStartSection = () => {
  return (
    <section id='getStartedSection' className='flexColCenter'>
      <h3 className='h3Head blackHeading shrinkHeadingPandM spaceMonoFont'>LET'S GET STARTED</h3>
      <h4 className='shrinkHeadingPandM blackHeading h4Head italicHeading'>Leave the busy work to us.</h4>

      <div id='getStartedContainer'>
        <h5 className='h5Head blackHeading'>Try v1 || Become a contributor</h5>
        <a href='https://github.com/oslabs-beta/evaStudio/' target='_blank' rel="noopener noreferrer" className='githubButWhite'>
          <Image src='/githubIcon.png' alt='Landscape picture' width={28} height={20} className='githubLogo' />
          <p className='github'>Fork on Github</p>
        </a>
      </div>

    </section>
  )
}

export default GetStartSection;