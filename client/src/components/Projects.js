function Projects() {
    return (
        <div className='container is-fluid columns is-mobile'>
            <div className='column is-10 is-offset-1'>
                <section className='section is-large'>
                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">I want to keep this one</p>
                                <p class="subtitle">Put a project here</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">Put Another project here</p>
                                <p class="subtitle">Maybe add a flipping animation on hover</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">Third Project</p>
                                <p class="subtitle">Probably will stop here, not much to showcase yet.</p>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div class="tile is-ancestor">
                        <div class="tile is-vertical is-8">
                            <div class="tile">
                                <div class="tile is-parent is-vertical">
                                    <article class="tile is-child box">
                                        <p class="title">Vertical tiles</p>
                                        <p class="subtitle">Top box</p>
                                    </article>
                                    <article class="tile is-child box">
                                        <p class="title">Vertical tiles</p>
                                        <p class="subtitle">Bottom box</p>
                                    </article>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child box">
                                        <p class="title">Middle box</p>
                                        <p class="subtitle">With an image</p>
                                        <figure class="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/640x480.png"></img>
                                        </figure>
                                    </article>
                                </div>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">Wide column</p>
                                    <p class="subtitle">Aligned with the right column</p>
                                    <div class="content">
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

                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">Side column</p>
                                <p class="subtitle">With some content</p>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                </div>
                            </article>
                        </div>
                        <div class="tile is-parent is-8">
                            <article class="tile is-child box">
                                <p class="title">Main column</p>
                                <p class="subtitle">With some content</p>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
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