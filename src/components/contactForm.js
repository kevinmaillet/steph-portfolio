import React from 'react';

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="contact-form"
    >
      <label className="contact-form__name">
        <span>Name</span>
        <input type="text" name="name" placeholder="Abraham Maslow" required />
      </label>
      <label className="contact-form__email">
        <span>Email</span>
        <input type="email" name="email" placeholder="letschat@soon.com" />
      </label>
      <label className="contact-form__subject">
        <span>Subject</span>
        <input type="text" placeholder="Hi there" />
      </label>
      <label className="contact-form__message">
        <span>Message</span>
        <textarea
          type="text"
          name="message"
          placeholder="I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail."
          required
        />
      </label>
      <input type="submit" value="Send" className="contact-form__submit" />
    </form>
  );
};

export default ContactForm;
