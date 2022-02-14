import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ContactForm from '../components/contactForm';

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <section className="contact">
        <h3 className="contact__title">Contact</h3>
        <ContactForm />
      </section>
    </Layout>
  );
};

export default Contact;
