import { Carousel } from '3d-react-carousal';
import htmlLogo from '../assets/svg/html_logo.svg';
import cssLogo from '../assets/svg/css_logo.svg';
import jsLogo from '../assets/svg/javascript_logo.svg';
import gitLogo from '../assets/svg/git_logo.svg';
import nodeLogo from '../assets/svg/nodejs_logo.svg';
import restLogo from '../assets/images/restAPI_logo.jpg';
import handleLogo from '../assets/svg/handlebars_logo.svg';



function Skills() {
    let slides = [
        <img src={htmlLogo} alt="HTML" id='tech-logo'></img>,
        <img src={cssLogo} alt="CSS" id='tech-logo'></img>,
        <img src={jsLogo} alt='JavaScript' id='tech-logo'></img>,
        <img src={gitLogo} alt="Git" id='tech-logo'></img>,
        <img src={nodeLogo} alt="Node.js" id='tech-logo'></img>,
        <img src={restLogo} alt="REST API" id='tech-logo'></img>,
        <img src={handleLogo} alt="Handlebars" id='tech-logo'></img>,
        "Express.js",
        "MySQL",
        "Sequelize",
        "MongoDB",
        "Mongoose",
        "React.js",
        "Redux",
        "GraphQL",
        "Apollo",
        "Phaser",
        "C++",
        "Unreal 4",
        "Illustrator",
        "Photoshop",
        <div className="box">Hello</div>];

    return (
        <div className='container is-fluid columns is-centered is-vcentered is-mobile' id='skills-contain'>
            <div className='column has-text-centered'>
                <h1 className="title is-1" id='skills-title'>Some technology I am familiar with</h1>
                <section className='section is-large '>
                <h2 className="subtitle is-3">Use the arrows or swipe through the gallery</h2>

                    <Carousel slides={slides}></Carousel>
                </section>
            </div>
        </div>
    )
}

export default Skills;