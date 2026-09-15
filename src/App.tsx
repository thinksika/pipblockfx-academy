import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout }         from './components/Layout';
import { HomePage }       from './pages/HomePage';
import { AboutPage }      from './pages/AboutPage';
import { MentorshipPage } from './pages/MentorshipPage';
import { ProgramsPage }   from './pages/ProgramsPage';
import { CommunityPage }  from './pages/CommunityPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index         element={<HomePage />} />
          <Route path="about"      element={<AboutPage />} />
          <Route path="mentorship" element={<MentorshipPage />} />
          <Route path="programs"   element={<ProgramsPage />} />
          <Route path="community"  element={<CommunityPage />} />
          {/* Catch-all */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
