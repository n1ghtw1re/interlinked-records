
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import AboutContent from './content/AboutContent';
import DiscographyContent from './content/DiscographyContent';
import MixesContent from './content/MixesContent';
import EventsContent from './content/EventsContent';
import LinksContent from './content/LinksContent';
import ReleaseDetail from './content/ReleaseDetail';
import MixDetail from './content/MixDetail';

export type ContentType = 'about' | 'discography' | 'mixes' | 'events' | 'links' | 'release' | 'mix';

export interface ReleaseData {
  id: string;
  artist: string;
  title: string;
  embedUrl?: string;
  description?: string;
}

export interface ContentProps {
  setActiveContent: (content: ContentType, data?: any) => void;
  releaseData?: ReleaseData;
  mixData?: any;
}

const MainLayout: React.FC = () => {
  const [activeContent, setActiveContent] = useState<ContentType>('about');
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [releaseData, setReleaseData] = useState<ReleaseData | null>(null);
  const [mixData, setMixData] = useState<any>(null);

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

  const handleContentChange = (content: ContentType, data?: any) => {
    setActiveContent(content);
    if (content === 'release' && data) {
      setReleaseData(data);
    } else if (content === 'mix' && data) {
      setMixData(data);
    }
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'about':
        return <AboutContent setActiveContent={handleContentChange} />;
      case 'discography':
        return <DiscographyContent setActiveContent={handleContentChange} />;
      case 'mixes':
        return <MixesContent setActiveContent={handleContentChange} />;
      case 'events':
        return <EventsContent setActiveContent={handleContentChange} />;
      case 'links':
        return <LinksContent setActiveContent={handleContentChange} />;
      case 'release':
        return <ReleaseDetail releaseData={releaseData} setActiveContent={handleContentChange} />;
      case 'mix':
        return <MixDetail mixData={mixData} setActiveContent={handleContentChange} />;
      default:
        return <AboutContent setActiveContent={handleContentChange} />;
    }
  };

  return (
    <div className={`crt min-h-screen flex flex-col ${glitchEffect ? 'animate-glitch-text' : ''}`}>
      <div className="scan-line"></div>
      <div className="static-overlay"></div>
      <div className="green-burn"></div>
      
      <div className="w-full max-w-6xl mx-auto my-4 sm:my-8 flex flex-col border-2 border-primary p-2">
        <div className="flex flex-col">
          {/* Title and Navigation Section */}
          <div className="w-full border-b border-border pb-2">
            <div className="flex flex-col sm:flex-row">
              <div className="px-4 mb-2 sm:mb-0 sm:w-64">
                <h1 className="text-3xl font-display tracking-wider text-primary glitch-text" style={{"--glitch-delay": "0.5"} as React.CSSProperties}>
                  INTERLINKED
                </h1>
                <h2 className="text-xl font-display tracking-wider text-accent glitch-text" style={{"--glitch-delay": "0.7"} as React.CSSProperties}>
                  RECORDS
                </h2>
              </div>
              
              <div className="flex-1">
                <Navigation 
                  activeContent={activeContent} 
                  setActiveContent={handleContentChange} 
                />
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <main className="flex-1 p-4 overflow-hidden animate-screen-flicker">
            {renderContent()}
          </main>
        </div>
      </div>
      
      {/* Mobile footer info */}
      <div className="sm:hidden w-full max-w-6xl mx-auto p-4 text-center">
        <p className="text-xs text-muted-foreground">
          EST. 2023 | UNDERGROUND COLLECTIVE | 0x3F2A4C9D8E1B7F
        </p>
      </div>
    </div>
  );
};

export default MainLayout;
