import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    if (!pathname.includes('#')) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main id="main-content" style={{ flex: 1, paddingTop: '66px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
