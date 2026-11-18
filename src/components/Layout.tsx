import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    if (!pathname.includes('#')) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1" style={{ paddingTop: '64px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
