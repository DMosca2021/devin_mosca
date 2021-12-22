import { Carousel } from '3d-react-carousal';
import htmlLogo from '../assets/svg/html_logo.svg';
// import cssLogo from '../assets/svg/css_logo.svg';
import jsLogo from '../assets/svg/javascript_logo.svg';
import gitLogo from '../assets/svg/git_logo.svg';
import nodeLogo from '../assets/svg/nodejs_logo.svg';
import restLogo from '../assets/images/restAPI_logo.jpg';



function Skills() {
    let slides = [
        <img src={htmlLogo} alt="HTML" id='tech-logo'></img>,
        "CSS",
        <img src={jsLogo} alt='JavaScript' id='tech-logo'></img>,
        <img src={gitLogo} alt="Git" id='tech-logo'></img>,
        <img src={nodeLogo} alt="Node.js" id='tech-logo'></img>,
        <img src={restLogo} alt="REST API" id='tech-logo'></img>,
        "Handlebars",
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
        <div className='container is-fluid columns is-mobile' id='skills-contain'>
            <div className='column is-10 is-offset-1'>
                <section className='section is-large'>
                    <Carousel slides={slides}></Carousel>
                </section>
            </div>
        </div>
    )
}

export default Skills;