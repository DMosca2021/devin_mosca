import ImageGallery from 'react-image-gallery';
import sobHome from '../assets/images/sob_home_scrnsht.png';
import sobSignUp from '../assets/images/sob_log-in_scrnsht.png';
import sobLogIn from '../assets/images/sob_sign-up_scrnsht.png';

function Projects() {
  const sobImages = [
    {
      original: sobHome,
    },
    {
      original: sobSignUp,
    },
    {
      original: sobLogIn,
    },
  ];

  const eeImages = [];

  const weatherImages = [];

  return (
    <div className='container is-fluid columns is-mobile' id='project-contain'>
      <div className='column'>
        <section className='section is-large' id='temp-border'>
          <div className='tile is-ancestor'>
            <div className='tile is-parent' id='flip-card'>
              <article className='tile is-child box' id='flip-card-inner'>
                <figure className='image is-4by3' id='flip-card-front'>
                  <img
                    src='https://bulma.io/images/placeholders/640x480.png'
                    alt='screenshot'
                  ></img>
                  <p className='title'>Scrypts of Betrayal</p>
                  <p className='subtitle'>With an image</p>
                </figure>
                <div id='flip-card-back'>
                  <p className='title'>Scrypts of Betrayal</p>
                  <p className='subtitle'>With an image</p>
                  <figure className='image is-4by3'>
                    <ImageGallery 
                    items={sobImages}
                    showPlayButton={false}
                    showNav={false}
                    showBullets={true}
                    />
                  </figure>
                  <div className='content'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </p>
                  </div>
                  <div class='buttons has-addons is-centered'>
                    <button class='button'>Deployed App</button>
                    <button class='button'>Repository </button>
                    {/* <button class='button'>No</button> */}
                  </div>
                </div>
              </article>
            </div>

            <div className='tile is-parent' id='temp-border'>
              <article className='tile is-child box'>
                <p className='title'>Eternal External</p>
                <p className='subtitle'>With an image</p>
                <figure className='image is-4by3'>
                  <img src='https://bulma.io/images/placeholders/640x480.png'></img>
                </figure>
                <div className='content'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
                <div class='buttons has-addons is-centered'>
                  <button class='button'>Deployed App</button>
                  <button class='button'>Repository </button>
                  {/* <button class='button'>No</button> */}
                </div>
              </article>
            </div>

            <div className='tile is-parent' id='temp-border'>
              <article className='tile is-child box'>
                <p className='title'>Devin's Weather Dashboard</p>
                <p className='subtitle'>With an image</p>
                <figure className='image is-4by3'>
                  <img src='https://bulma.io/images/placeholders/640x480.png'></img>
                </figure>
                <div className='content'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
                <div class='buttons has-addons is-centered'>
                  <button class='button'>Deployed App</button>
                  <button class='button'>Repository </button>
                  {/* <button class='button'>No</button> */}
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
