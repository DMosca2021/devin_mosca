function Projects() {
    return (
        <div className='container is-fluid columns is-mobile' id="project-contain">
            <div className='column'>
                <section className='section is-large' id='temp-border'>
                    <div className="tile is-ancestor">
                        <div className="tile is-parent" id='temp-border'>
                            <article className="tile is-child box">
                                <p className="title">I want to keep this one</p>
                                <p className="subtitle">Put a project here</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                        <div className='card'>
                            <article className="tile is-child box">
                                <p className="title">Put Another project here</p>
                                <p className="subtitle">Maybe add a flipping animation on hover</p>
                            </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">Third Project</p>
                                <p className="subtitle">Probably will stop here, not much to showcase yet.</p>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-8">
                            <div className="tile">
                                <div className="tile is-parent is-vertical">
                                    <article className="tile is-child box">
                                        <p className="title">Vertical tiles</p>
                                        <p className="subtitle">Top box</p>
                                    </article>
                                    <article className="tile is-child box">
                                        <p className="title">Vertical tiles</p>
                                        <p className="subtitle">Bottom box</p>
                                    </article>
                                </div>
                                <div className="tile is-parent" id='temp-border'>
                                    <article className="tile is-child box">
                                        <p className="title">Middle box</p>
                                        <p className="subtitle">With an image</p>
                                        <figure className="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/640x480.png"></img>
                                        </figure>
                                        <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                </div>
                                    </article>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title">Wide column</p>
                                    <p className="subtitle">Aligned with the right column</p>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <div class="content">
                                    <p class="title">Tall column</p>
                                    <p class="subtitle">With even more content</p>
                                    <div class="content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                                        <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                                        <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projects;