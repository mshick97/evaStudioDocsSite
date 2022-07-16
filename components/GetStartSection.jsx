import React from 'react'
import Link from 'next/link';

const GetStartSection = () => {
  return (
    <section id='getStartedSection' className='flexColCenter'>
      <h3 className='h3Head blackHeading shrinkHeadingPandM spaceMonoFont'>LET'S GET STARTED</h3>
      <h2 className='shrinkHeadingPandM blackHeading h2Head'>Leave the busy work to us.</h2>

      <div id='getStartedContainer'>
        <h4 className='h4Head blackHeading'>Try our tool in beta</h4>
        <Link href='/getting_started/'>
          <button className='secondaryButton'>Get Started</button>
        </Link>
      </div>

    </section>
  )
}

export default GetStartSection;