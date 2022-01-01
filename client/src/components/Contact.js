function Contact() {
  return (
    <div className='container is-fluid columns is-mobile' id='contact-contain'>
      <div className='column has-text-centered'>
        <h1 className='title is-1'>
          If you would like to get in touch with me....
        </h1>
        <p className='subtitle is-2'>Fill out the form below</p>
        <section className='columns is-multiline is-centered has-text-left section is-large'>
          <form
            className='box column is-6'
            id='form-section'
            action='https://getform.io/f/921daf72-4336-4e10-aae6-b24753aba91b'
            method='POST'
          >
            <div className='field'>
              <label className='label'>First Name</label>
              <div className='control'>
                <input
                  className='input'
                  name='first-name'
                  type='text'
                  placeholder='Your First Name'
                ></input>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Last Name</label>
              <div className='control'>
                <input
                  className='input'
                  name='last-name'
                  type='text'
                  placeholder='Your Last Name'
                ></input>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Email</label>
              <div className='control'>
                <input
                  className='input'
                  name='email'
                  type='email'
                  placeholder='yourEmail@email.com'
                ></input>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Subject</label>
              <div className='control'>
                <div className='select'>
                  <select name='subject'>
                    <option>Select subject:</option>
                    <option value='Say Hi!'>Say Hi!</option>
                    <option value='Collaborate.'>Collaborate</option>
                    <option value='Need Help?'>Need Help?</option>
                    <option value='Hire Me.'>Hire Me.</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Message</label>
              <div className='control'>
                <textarea
                  className='textarea'
                  name='message'
                  placeholder='I LOVE your work Devin!'
                ></textarea>
              </div>
            </div>

            <div className='buttons is-centered'>
              <div className='control'>
                <button className='button is-link'>Submit</button>
              </div>
              <div className='control'>
                <button className='button is-link is-light'>Cancel</button>
              </div>
            </div>
          </form>
          <div className='column is-full has-text-centered'>
            <a
              className='button is-primary'
              href='https://docs.google.com/document/d/1KD8DspLtCu3Cb3lA7VSG24PH7bKvYFsAzWMytRI7Z-4/edit?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              Here's my resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
