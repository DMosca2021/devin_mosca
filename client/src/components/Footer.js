function Footer() {
  return (
    <div className='columns'>
      <footer className='footer column is-full'>
        <nav className='level'>
          <p className='level-item has-text-centered'>
            <a className='link is-info'>Back to the top</a>
          </p>
          <p className='level-item has-text-centered'>
            <a className='link is-info'>My Skills</a>
          </p>
          <p className='level-item has-text-centered'>
            <img
              src='https://bulma.io/images/bulma-type.png'
              alt='logo'
            ></img>
          </p>
          <p className='level-item has-text-centered'>
            <a className='link is-info'>My Projects</a>
          </p>
          <p className='level-item has-text-centered'>
            <a className='link is-info'>Contact Me</a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
