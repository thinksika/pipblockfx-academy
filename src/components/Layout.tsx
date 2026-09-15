import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export const Layout: React.FC = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <main className="pt-[64px] min-h-screen">
      <Outlet />
    </main>
    <Footer />
  </>
);
