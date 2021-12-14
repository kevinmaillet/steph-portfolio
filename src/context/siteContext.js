import React, { createContext, useState } from 'react';

const initialSite = {
  isActivePage: null,
  isNavOpen: false,
};

export const siteContext = createContext(initialSite);

export const SiteProvider = ({ children }) => {
  const [isActivePage, setActivePage] = useState(null);
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <siteContext.Provider
      value={{
        isActivePage,
        setActivePage,
        isNavOpen,
        setNavOpen,
      }}
    >
      {children}
    </siteContext.Provider>
  );
};
