import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamCard = (props) => {
  const { src, name, linkedin, github } = props;

  return (
    <div className='teamCard'>
      <Image src={src} alt='Landscape picture' width={145} height={145} className='teamPhoto' />
      <p className='memberName spaceMonoFont'>{name}</p>

      <div className='socialLinksContainer'>
        <Link href={linkedin} target='_blank' rel="noopener noreferrer" className='socialLink'>
          <Image src='/linkedin.png' alt='Landscape picture' width={20} height={20} className='socialIcon' />
        </Link>

        <Link href={github} target='_blank' rel="noopener noreferrer" className='socialLink'>
          <Image src='/githubIcon.png' alt='Landscape picture' width={20} height={20} className='socialIcon' />
        </Link>
      </div>

    </div>
  )
}

export default TeamCard;