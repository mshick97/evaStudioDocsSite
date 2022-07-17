import React from 'react'
import Link from 'next/link';

const LearnMoreSection = () => {
  return (
    <section id='learnMoreSection' className='flexColCenter'>
      <h4 className='shrinkHeadingPandM h4Head spaceMonoFont'>Learn More About evaStudio</h4>

      <div id='getStartedContainer'>
        <div className='getStartedWrapper'>
          <h3 className='h3Head'>Learn how evaStudio can improve your workflow</h3>
          <p className='spaceMonoFont'>
            A tool to boost productivity
          </p>
        </div>

        <Link href='/learn_more/'>
          <button className='secondaryButton'>Learn More</button>
        </Link>
      </div>
    </section>
  )
}

export default LearnMoreSection;