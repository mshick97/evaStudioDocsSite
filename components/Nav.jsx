import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <div id='nav'>
      <nav id='navBar'>
        <div id='navContainer'>
          <Link href='.' id='logoLink'>
            <h1 id='logo'>evaStudio</h1>
          </Link>

          <div id='navLinksWrapper'>
            <Link href='/getting_started/' className='navLink'>
              <a className='navLink spaceMonoFont'>Getting Started</a>
            </Link>

            <Link href='/contact/' className='navLink'>
              <a className='navLink spaceMonoFont'>Contact</a>
            </Link>

            <a href='https://github.com/oslabs-beta/evaStudio/' target='_blank' rel="noopener noreferrer" className='githubLink'>
              <Image src='/githubIcon.png' alt='Landscape picture' width={22} height={20} className='githubLogo' />
              <p className='github spaceMonoFont'>Github</p>
            </a>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Nav;