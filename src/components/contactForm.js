import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <label>
        Name <input type="text" placeholder="Abraham Maslow" />
      </label>
      <label>
        Email <input type="text" placeholder="letschat@soon.com" />
      </label>
      <label>
        Subject <input type="text" placeholder="Hi there" />
      </label>
      <label>
        Message{' '}
        <textarea
          type="text"
          placeholder="I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail."
        />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
