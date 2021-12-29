import ImageGallery from 'react-image-gallery';
import sobHome from '../assets/images/sob_home_scrnsht.png';
import sobSignUp from '../assets/images/sob_log-in_scrnsht.png';
import sobLogIn from '../assets/images/sob_sign-up_scrnsht.png';
import eeHome from '../assets/images/EtEx_homepage.png';
import eeAdvice from '../assets/images/EtEx_advicedropdown.png';
import eeGraph from '../assets/images/EtEx_graph.png';
import eeModal from '../assets/images/EtEx_modal.png';
import eeQuiz from '../assets/images/EtEx_quiz.png';
import eeEmotion from '../assets/images/EtEx_textentryemotion.png';
import eeUserOne from '../assets/images/EtEx_user1name.png';
import eeUserTwo from '../assets/images/EtEx_user2name.png';
import weatherDash from '../assets/images/weatherDash_scrnsht.png';
import weatherDashOne from '../assets/images/weather-dash1_scrnsht.png';
import weatherDashTwo from '../assets/images/weather-dash2_scrnsht.png';

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

  const eeImages = [
    {
      original: eeHome,
    },
    {
      original: eeUserTwo,
    },
    {
      original: eeQuiz,
    },
    {
      original: eeUserOne,
    },
    {
      original: eeAdvice,
    },
    {
      original: eeModal,
    },
    {
      original: eeEmotion,
    },
    {
      original: eeGraph,
    },
  ];

  const weatherImages = [
    {
      original: weatherDash,
    },
    {
      original: weatherDashOne,
    },
    {
      original: weatherDashTwo,
    },
  ];

  return (
    <div className='container is-fluid columns is-mobile' id='project-contain'>
      <div className='column'>
        <section className='section is-large'>
          <div className='title is-1 has-text-centered' id='contain-title'>
            Examples of my work
          </div>
          <div className='tile is-ancestor'>
            <div className='tile is-parent' id='flip-card'>
              <article className='tile is-child box' id='flip-card-inner'>
                {/* <figure className='image is-4by3' id='flip-card-front'>
                  <img
                    src='https://bulma.io/images/placeholders/640x480.png'
                    alt='screenshot'
                  ></img>
                  <p className='title'>Scrypts of Betrayal</p>
                  <p className='subtitle'>With an image</p>
                </figure> */}
                <div id='flip-card-back'>
                  <p className='title has-text-centered'>Scrypts of Betrayal</p>
                  <p className='subtitle has-text-centered'>
                    HTML, CSS, JavaScript, Express, Express Handlebars, Bulma,
                    GoogleFonts, Phaser, Tiled
                  </p>
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
                      This is a javascript fueled web based video game. The user
                      is able to create an account, login, and play a basic 2d
                      pixel art top-down video game.
                    </p>
                  </div>
                  <div className='buttons has-addons is-centered'>
                    <a
                      className='button'
                      href='https://scrypts-of-betrayal.herokuapp.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Deployed App
                    </a>
                    <a
                      className='button'
                      href='https://github.com/DMosca2021/Scrypts_of_Betrayal'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Repository
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div className='tile is-parent has-text-centered' id='flip-card'>
              <article className='tile is-child box' id='flip-card-inner'>
                {/* <figure className='image is-4by3' id='flip-card-front'>
                  <img
                    src='https://bulma.io/images/placeholders/640x480.png'
                    alt='screenshot'
                  ></img>
                  <p className='title'>Scrypts of Betrayal</p>
                  <p className='subtitle'>With an image</p>
                </figure> */}
                <div id='flip-card-back'>
                  <p className='title'>Eternal External</p>
                  <p className='subtitle'>
                    HTML, CSS, JavaScript, API, Materialize, Photoshop
                  </p>
                  <figure className='image is-4by3'>
                    <ImageGallery
                      items={eeImages}
                      showPlayButton={false}
                      showNav={false}
                      showBullets={true}
                    />
                  </figure>
                  <div className='content'>
                    <p>
                      An application for users to get mental health support and
                      general advice from loved ones.
                    </p>
                  </div>
                  <div className='buttons has-addons is-centered'>
                    <a
                      className='button'
                      href='https://dmosca2021.github.io/Eternal_External/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Deployed App
                    </a>
                    <a
                      className='button'
                      href='https://github.com/DMosca2021/Eternal_External'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Repository
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div className='tile is-parent has-text-centered' id='flip-card'>
              <article className='tile is-child box' id='flip-card-inner'>
                {/* <figure className='image is-4by3' id='flip-card-front'>
                  <img
                    src='https://bulma.io/images/placeholders/640x480.png'
                    alt='screenshot'
                  ></img>
                  <p className='title'>Scrypts of Betrayal</p>
                  <p className='subtitle'>With an image</p>
                </figure> */}
                <div id='flip-card-back'>
                  <p className='title'>Devin's Weather Dashboard</p>
                  <p className='subtitle'>
                    HTML, CSS, JavaScript, jQuery, API, Bootstrap, Font Awesome
                  </p>
                  <figure className='image is-4by3'>
                    <ImageGallery
                      items={weatherImages}
                      showPlayButton={false}
                      showNav={false}
                      showBullets={true}
                    />
                  </figure>
                  <div className='content'>
                    <p>
                      A Weather application using Open Weather API to display
                      current weather conditions for a searched city.
                    </p>
                  </div>
                  <div className='buttons has-addons is-centered'>
                    <a
                      className='button'
                      href='https://dmosca2021.github.io/Devins_Weather_Dashboard/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Deployed App
                    </a>
                    <a
                      className='button'
                      href='https://github.com/DMosca2021/Devins_Weather_Dashboard'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Repository
                    </a>
                  </div>
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
