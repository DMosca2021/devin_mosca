import React, { useState } from 'react';

function Nav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='container is-fluid columns is-mobile' id='nav-contain'>
      <div className='column is-full'>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='https://bulma.io'>
              <img
                src='https://bulma.io/images/bulma-logo.png'
                width='112'
                height='28'
                alt='logo'
              ></img>
            </a>

            <button
              onClick={() => {
                setIsActive(!isActive);
              }}
              
              className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasic'
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </button>
          </div>

          <div
            id='navbarBasic'
            className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          >
            <div className='navbar-start'>
              <a className='navbar-item' href='#about-title'>
                About Me
              </a>

              <a className='navbar-item' href='#skills-contain'>
                My Skills
              </a>

              <a className='navbar-item' href='#project-contain'>
                My Projects
              </a>

              <a className='navbar-item' href='#form-section'>
                Contact Me
              </a>

              <a className='navbar-item' href='#footer-contain'>
                Bottom of the page
              </a>
            </div>

            <div className='navbar-end'>
              <div className='navbar-item'>
                <div>
                  <a
                    className='button is-primary'
                    href='https://docs.google.com/document/d/1KD8DspLtCu3Cb3lA7VSG24PH7bKvYFsAzWMytRI7Z-4/edit?usp=sharing'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Here's my resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
