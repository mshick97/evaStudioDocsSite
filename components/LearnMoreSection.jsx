import React from 'react'
import Link from 'next/link';

const LearnMoreSection = () => {
  return (
    <section id='learnMoreSection' className='flexColCenter'>
      <h2 className='shrinkHeadingPandM h2Head spaceMonoFont'>How get started with evaStudio</h2>

      <div id='stepsContainer'>
        <div className='stepCircle spaceMonoFont'>1</div>
        <div className='stepCircle spaceMonoFont'>2</div>
        <div className='stepCircle spaceMonoFont'>3</div>
        <div className='stepCircle spaceMonoFont'>4</div>
      </div>

      <div id='getStartedContainer'>
        <div className='getStartedWrapper'>
          <h3 className='h3Head'>Learn more on how evaStudio can improve your workflow</h3>
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