import React from 'react';
import { Navbar }         from './components/Navbar';
import { Hero }           from './components/Hero';
import { About }          from './components/About';
import { Services }       from './components/Services';
import { Mentorship }     from './components/Mentorship';
import { Community }      from './components/Community';
import { MarketAnalysis } from './components/MarketAnalysis';
import { Bootcamp }       from './components/Bootcamp';
import { HowItWorks }     from './components/HowItWorks';
import { FAQ }            from './components/FAQ';
import { FinalCTA }       from './components/FinalCTA';
import { ConnectSection } from './components/ConnectSection';
import { Footer }         from './components/Footer';

/*
 * Section order and background rhythm:
 * Hero          → white
 * About         → white
 * Services      → surface (light grey)
 * Mentorship    → white          ← new priority section
 * Community     → surface
 * MarketAnalysis→ white
 * Bootcamp      → dark (#111)    ← contrast break
 * HowItWorks    → warm-grey
 * FAQ           → white
 * FinalCTA      → surface
 * Footer        → white
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Mentorship />
        <Community />
        <MarketAnalysis />
        <Bootcamp />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}
