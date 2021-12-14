import React from 'react';
import { SiteProvider } from './src/context/siteContext';

export const wrapRootElement = ({ element }) => (
  <SiteProvider>{element}</SiteProvider>
);
