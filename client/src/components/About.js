import profPic from '../assets/images/profile_pic.jpeg';

function About() {
  return (
    <div
      className='container is-fluid columns is-centered is-mobile'
      id='about-contain'
    >
      <div className='column is-centered has-text-centered'>
        <section className='columns is-multiline section is-vcentered is-centered is-large'>
          <div className='column is-6'>
            <h1 className='title is-1' id='about-title'>
              Devin Mosca
            </h1>
            <p className='subtitle is-3' id='about-subtitle'>
              Coding solutions to coding problems
            </p>
          </div>
          <div className='column is-6'>
            <figure className='image is-96X96'>
              <img
                className='is-rounded'
                src={profPic}
                id='prof-pic'
                alt='profile'
              ></img>
            </figure>
          </div>
          <div className='column is-9 '>
            <div className='card'>
              <div className='card-content'>
                <div className='content' id='about-text'>
                  <p>
                    Full-stack web developer with a background in high-paced,
                    high-demand, customer satisfaction driven work environments.
                    Earned a certificate in Denver Universitys Full Stack
                    Bootcamp while committed to a full time job.
                  </p>
                  <br></br>
                  <p>
                    Developed skills for front-end and back end development with
                    HTML5, CSS3, JavaScript ES6+, SQL, NoSQL. Deployed
                    successful projects to both GitHub and Heroku, with my
                    latest project being a 2D top-down view video game with a
                    team of three developers including myself. I had the role of
                    project manager keeping my team on task while also helping
                    develop the back-end for user login and quality assurance of
                    the overall app.
                  </p>
                  <br></br>
                  <p>
                    Motivated by keeping my team on track to complete projects
                    by deadline and the satisfaction accompanied with delivering
                    products that exceeds customer expectations.
                  </p>
                  <br></br>
                  <p>
                    As an aspiring developer, I am excited to bring my
                    unconventional thinking and my extensive experience with
                    detail-oriented projects to help your team to the next
                    level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
