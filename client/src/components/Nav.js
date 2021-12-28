import React, { useState } from "react";
import { Link } from "react-router-dom";

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

            <a
              onClick={() => {
                setIsActive(!isActive)
              }}
              role='button'
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasic'
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>

          <div id='navbarBasic' className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className='navbar-start'>
              <a className='navbar-item'>About Me</a>

              <a className='navbar-item'>My Skills</a>

              <a className='navbar-item'>My Projects</a>

              <a className='navbar-item'>Contact Me</a>
            </div>

            <div className='navbar-end'>
              <div className='navbar-item'>
                <div>
                  <a className='button is-primary'>
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
