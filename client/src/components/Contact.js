function Contact() {
  return (
    <div className='container is-fluid columns is-mobile' id='contact-contain'>
      <div className='column has-text-centered'>
        <h1 className='title is-1'>
          If you would like to get in touch with me....
        </h1>
        <p className='subtitle is-2'>
          Fill out the form below <br></br> Need to reduce the padding/margin
          here{' '}
        </p>
        <section className='columns is-multiline is-centered has-text-left section is-large'>
          <form className='box column is-6' id='form-section'>
            <div class='field'>
              <label className='label'>First Name</label>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='Text input'
                ></input>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Last Name</label>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='Text input'
                ></input>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Email</label>
              <div className='control'>
                <input
                  className='input'
                  type='email'
                  placeholder='Email input'
                ></input>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Subject</label>
              <div className='control'>
                <div className='select'>
                  <select>
                    <option>Select subject:</option>
                    <option>Say Hi!</option>
                    <option>Collaborate</option>
                    <option>Need Help?</option>
                    <option>Hire Me.</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Message</label>
              <div className='control'>
                <textarea
                  className='textarea'
                  placeholder='Textarea'
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
            <button className='button is-large'>My Resume</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
