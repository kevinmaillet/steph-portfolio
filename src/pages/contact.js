import React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/contactForm';

const Contact = () => {
  return (
    <Layout>
      <section className="contact">
        <h2 className="contact__title">Contact</h2>
        <ContactForm />
      </section>
    </Layout>
  );
};

export default Contact;
