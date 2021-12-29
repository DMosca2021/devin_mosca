function Footer() {
  return (
    <div className='columns'>
      <footer className='footer column is-full' id='footer-contain'>
        <nav className='level'>
          <p className='level-item has-text-centered'>
            <a className='link is-info' href='#nav-contain'>Back to the top</a>
          </p>
          <p className='level-item has-text-centered'>
            <a className='link is-info' href='#skills-contain'>My Skills</a>
          </p>
          <p className='level-item has-text-centered'>
            <img src='https://bulma.io/images/bulma-type.png' alt='logo'></img>
          </p>
          <p className='level-item has-text-centered'>
            <a className='link is-info' href='#project-contain'>My Projects</a>
          </p>
          <p className='level-item has-text-centered'>
            <a className='link is-info' href='#form-section'>Contact Me</a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
