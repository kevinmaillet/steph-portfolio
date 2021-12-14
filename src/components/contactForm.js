import { navigate } from 'gatsby';
import React, { useState } from 'react';

const ContactForm = () => {
  const [state, setState] = useState({});

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      className="contact-form"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <label className="contact-form__name">
        <span>Name</span>
        <input
          type="text"
          name="name"
          placeholder="Abraham Maslow"
          required
          onChange={handleChange}
        />
      </label>
      <label className="contact-form__email">
        <span>Email</span>
        <input
          type="email"
          name="email"
          placeholder="letschat@soon.com"
          onChange={handleChange}
        />
      </label>
      <label className="contact-form__subject">
        <span>Subject</span>
        <input type="text" placeholder="Hi there" onChange={handleChange} />
      </label>
      <label className="contact-form__message">
        <span>Message</span>
        <textarea
          type="text"
          name="message"
          placeholder="I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail."
          required
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Send" className="contact-form__submit" />
    </form>
  );
};

export default ContactForm;
