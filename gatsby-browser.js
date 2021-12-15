import React from 'react';
import { SiteProvider } from './src/context/siteContext';

export const wrapRootElement = ({ element }) => (
  <SiteProvider>{element}</SiteProvider>
);

//Polyfill for Gatsby-image on Safari browsers
export const onClientEntry = async () => {
  if (typeof IntersectionObserver === 'undefined') {
    await import('intersection-observer');
  }
};
