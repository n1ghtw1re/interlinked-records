
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import AboutContent from './content/AboutContent';
import DiscographyContent from './content/DiscographyContent';
import MixesContent from './content/MixesContent';
import EventsContent from './content/EventsContent';
import LinksContent from './content/LinksContent';

export type ContentType = 'about' | 'discography' | 'mixes' | 'events' | 'links';

const MainLayout: React.FC = () => {
  const [activeContent, setActiveContent] = useState<ContentType>('about');
  const [glitchEffect, setGlitchEffect] = useState(false);

  // Randomly trigger glitch effects
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 200);
      }
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  const renderContent = () => {
    switch (activeContent) {
      case 'about':
        return <AboutContent />;
      case 'discography':
        return <DiscographyContent />;
      case 'mixes':
        return <MixesContent />;
      case 'events':
        return <EventsContent />;
      case 'links':
        return <LinksContent />;
      default:
        return <AboutContent />;
    }
  };

  return (
    <div className={`crt min-h-screen flex ${glitchEffect ? 'animate-glitch-text' : ''}`}>
      <div className="scan-line"></div>
      <div className="static-overlay"></div>
      <div className="green-burn"></div>
      
      <div className="w-full max-w-6xl mx-auto my-8 flex border border-primary p-2">
        <div className="w-64 border-r border-border">
          <div className="mb-8 px-4">
            <h1 className="text-3xl font-display tracking-wider text-primary glitch-text" style={{"--glitch-delay": "0.5"} as React.CSSProperties}>
              INTERLINKED
            </h1>
            <h2 className="text-xl font-display tracking-wider text-accent glitch-text" style={{"--glitch-delay": "0.7"} as React.CSSProperties}>
              RECORDS
            </h2>
          </div>
          
          <Navigation 
            activeContent={activeContent} 
            setActiveContent={setActiveContent} 
          />
        </div>
        
        <main className="flex-1 p-8 overflow-hidden animate-screen-flicker">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
