import { Carousel } from '3d-react-carousal';
import htmlLogo from '../assets/svg/html_logo.svg';
import cssLogo from '../assets/svg/css_logo.svg';
import sassLogo from '../assets/svg/sass_logo.svg';
import jsLogo from '../assets/svg/javascript_logo.svg';
import gitLogo from '../assets/svg/git_logo.svg';
import nodeLogo from '../assets/svg/nodejs_logo.svg';
import restLogo from '../assets/images/restAPI_logo.jpg';
import handleLogo from '../assets/svg/handlebars_logo.svg';
// import expressLogo from '../assets/svg/express-js_logo.svg';
import mysqlLogo from '../assets/images/mysql_logo.png';
import sequelizeLogo from '../assets/svg/sequelize_logo.svg';
import mongoDBLogo from '../assets/svg/mongodb_logo.svg';
// import mongooseLogo from '../assets/images/mongoose_logo.png';
import reactLogo from '../assets/images/react_logo.png';
import reduxLogo from '../assets/svg/redux_logo.svg';
import graphqlLogo from '../assets/svg/graphql_logo.svg';
import apolloLogo from '../assets/svg/apollo_logo.svg';
import phaserLogo from '../assets/images/phaser_logo.png';
import cPlusPlusLogo from '../assets/svg/c-plus-plus_logo.svg';
// import unrealLogo from '../assets/svg/unreal-engine_logo.svg';
import illustratorLogo from '../assets/svg/adobe-illustrator_logo.svg';
import photoShopLogo from '../assets/svg/adobe-photoshop_logo.svg';

function Skills() {
  let slides = [
    <img src={htmlLogo} alt='HTML' id='tech-logo'></img>,
    <img src={cssLogo} alt='CSS' id='tech-logo'></img>,
    <img src={sassLogo} alt='SASS' id='tech-logo'></img> ,
    <img src={jsLogo} alt='JavaScript' id='tech-logo'></img>,
    <img src={gitLogo} alt='Git' id='tech-logo'></img>,
    <img src={nodeLogo} alt='Node.js' id='tech-logo'></img>,
    <img src={restLogo} alt='REST API' id='tech-logo'></img>,
    <img src={handleLogo} alt='Handlebars' id='tech-logo'></img>,
    // <img src={expressLogo} alt='Express.js' id='tech-logo'></img>,
    <img src={mysqlLogo} alt='MySQL' id='tech-logo'></img>,
    <img src={sequelizeLogo} alt='Sequelize' id='tech-logo'></img>,
    <img src={mongoDBLogo} alt='MongoDB' id='tech-logo'></img>,
    // <img src={mongooseLogo} alt='Mongoose' id='tech-logo'></img>, // Need to fix background on this logo
    <img src={reactLogo} alt='React.js' id='tech-logo'></img>,
    <img src={reduxLogo} alt='Redux' id='tech-logo'></img>, 
    <img src={graphqlLogo} alt='GraphQL' id='tech-logo'></img>,
    <img src={apolloLogo} alt='Apollo' id='tech-logo'></img>,
    <img src={phaserLogo} alt='Phaser' id='tech-logo'></img>,
    <img src={cPlusPlusLogo} alt='C++' id='tech-logo'></img>,
    // <img src={unrealLogo} alt='Unreal 4' id='tech-logo'></img>,
    <img src={illustratorLogo} alt='Illustrator' id='tech-logo'></img>,
    <img src={photoShopLogo} alt='Photoshop' id='tech-logo'></img>,
  ];

  return (
    <div
      className='container is-fluid columns is-centered is-vcentered is-mobile'
      id='skills-contain'
    >
      <div className='column has-text-centered'>
        <section className='section is-large'>
          <h1 className='title is-1' id='skills-title'>
            Some technology I am familiar with
          </h1>
          <h2 className='subtitle is-3' id='skills-subtitle'>
            Use the arrows or swipe through the gallery
          </h2>
          <Carousel slides={slides}></Carousel>
        </section>
      </div>
    </div>
  );
}

export default Skills;
