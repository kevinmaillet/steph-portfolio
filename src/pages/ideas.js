import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Ideas = () => {
  return (
    <Layout>
      <Seo title="Ideas" />
      <section className="ideas">
        <h6>I also write sometimes.</h6>
        <a
          href="https://www.medium.com/@smeltzer1"
          target="_blank"
          rel="noreferrer"
        >
          <button className="ideas__button">Read More</button>
        </a>
      </section>
    </Layout>
  );
};

export default Ideas;
