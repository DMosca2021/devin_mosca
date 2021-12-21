function About() {
    return (
        <div className='container is-fluid columns is-mobile' id='about-contain'>
            <div className='column is-10 is-offset-1'>
                <section className='columns is-multiline section is-large'>
                    <div className='column is-6'>
                        <h1 className='title'>Devin Mosca</h1>
                        <p className='subtitle'>Coding solutions to coding problems</p>
                    </div>
                    <div className='column is-6'>
                        <figure className="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/128x128.png"></img>
                        </figure>
                    </div>
                    <div className='column is-8'>
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About;