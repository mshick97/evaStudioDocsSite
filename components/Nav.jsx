import React from 'react'
import Image from 'next/image';

const Nav = () => {
  return (
    <div id='nav'>
      <nav id='navBar'>
        <div id='navContainer'>
          <a href='.' className='logo'>
            <h1 id='logo'>evaStudio</h1>
          </a>

          <div id='navLinksWrapper'>
            <a href='/getting_started' className='navLink'>Getting Started</a>
            <a href='/contact' className='navLink'>Contact</a>
            <a href='https://github.com/oslabs-beta/evaStudio/' target='_blank' rel="noopener noreferrer" id='githubLink' className='navLink'>
              <Image src='/../public/githubIcon.png' alt='Landscape picture' width={18} height={18} id='githubLogo' />
              <p id='github'>Github</p>
            </a>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Nav;