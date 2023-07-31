import React from "react";

const Contact = () => {
  return (
    <article className='contact'>
      <h3>ready to book?</h3>
      <p>
        click the airbnb icon to book now
        <a
          href='https://www.airbnb.com/rooms/589684916167853690?guests=1&adults=1&s=67&unique_share_id=169eed4a-7224-4ac5-a17c-a0170fe67904'
          target='_blank'
          rel='noreferrer'
          className='booking-icon'
        >
          <i className='fab fa-airbnb'></i>
        </a>
      </p>
      <div className='contact-form'>
        <h3>have questions? contact us</h3>
        <form
          action='https://formspree.io/f/myyanbgk'
          method='POST'
          className='form-group'
        >
          <input
            type='email'
            name='email'
            placeholder='YOUR EMAIL'
            className='form-control'
          />
          <textarea
            name='message'
            placeholder='YOUR MESSAGE'
            rows='8'
            className='form-control'
          ></textarea>

          <button type='submit' className='btn-submit'>
            submit
          </button>
        </form>
      </div>
      {/* <div className='form-submit'>
      <h3 className="'form-submit-thanks">
          Thank you for your message. We will respond to your inquiry within 24
          hours.
        </h3>
      </div> */}
    </article>
  );
};

export default Contact;
