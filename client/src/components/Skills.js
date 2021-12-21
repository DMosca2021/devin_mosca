import { Carousel } from '3d-react-carousal'

function Skills() {
    let slides = ["HTML", "CSS", "JavaScript", "Git", "Node.js", "REST API", "Handlebars", "Express.js", "MySQL", "Sequelize", "MongoDB", "Mongoose", "React.js", "Redux", "GraphQL", "Apollo", "Phaser", "C++", "Unreal 4", "Illustrator", "Photoshop", <div className="box">Hello</div>];

    return (
        <div className='container is-fluid columns is-mobile'>
            <div className='column is-10 is-offset-1'>
                <section className='box'>
                    <Carousel slides={slides}></Carousel>
                </section>
            </div>
        </div>
    )
}

export default Skills;