import React, { createContext, useContext, useState, useEffect } from 'react';

const MobileMenuContext = createContext();

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error('useMobileMenu must be used within a MobileMenuProvider');
  }
  return context;
};

export const MobileMenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    };
  }, []);

  const openMenu = () => {
    console.log('Opening menu via context, current state:', menuOpen);
    if (!menuOpen) {
      // Force scroll to top and disable scrolling
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      setMenuOpen(true);
    }
  };

  const closeMenu = () => {
    console.log('Closing menu via context, current state:', menuOpen);
    console.trace('closeMenu called from:');
    if (menuOpen) {
      setMenuOpen(false);
      // Restore scrolling
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }
  };

  return (
    <MobileMenuContext.Provider value={{ menuOpen, openMenu, closeMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
