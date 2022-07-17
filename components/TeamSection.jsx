import React from 'react';
import TeamCard from './TeamCard';

const TeamSection = () => {
  return (
    <section id='teamSection' className='flexColCenter'>
      <h3 className='secondaryHeadingHighlight shrinkHeadingPandM h3Head spaceMonoFont'>Meet The Team</h3>

      <div id='teamContainer'>
        <TeamCard
          src={'/wtf.png'}
          name={'Andres Chaparro'}
          linkedin={''}
          github={''}
        />

        <TeamCard
          src={'/wtf.png'}
          name={'Kaitlin Zhang'}
          linkedin={''}
          github={''}
        />

        <TeamCard
          src={'/wtf.png'}
          name={'Maxwell Shick'}
          linkedin={'https://www.linkedin.com/in/maxwell-shick/'}
          github={'https://github.com/mshick97'}
        />

        <TeamCard
          src={'/wtf.png'}
          name={'Perla Royer'}
          linkedin={''}
          github={''}
        />

        <TeamCard
          src={'/wtf.png'}
          name={'Sattwik Biswal'}
          linkedin={''}
          github={''}
        />
      </div>
    </section>
  )
}

export default TeamSection;