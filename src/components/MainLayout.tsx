
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import AboutContent from './content/AboutContent';
import DiscographyContent from './content/DiscographyContent';
import MixesContent from './content/MixesContent';
import EventsContent from './content/EventsContent';
import LinksContent from './content/LinksContent';
import ReleaseDetail from './content/ReleaseDetail';
import MixDetail from './content/MixDetail';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();

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
    <div className={`crt min-h-screen flex ${glitchEffect ? 'animate-glitch-text' : ''}`}>
      <div className="scan-line"></div>
      <div className="static-overlay"></div>
      <div className="green-burn"></div>
      
      <div className="w-full max-w-6xl mx-auto my-8 flex flex-col md:flex-row border-2 border-primary p-2">
        {isMobile ? (
          <div className="w-full border-b border-border mb-4 pb-4">
            <div className="px-4 mb-4">
              <h1 className="text-3xl font-display tracking-wider text-primary glitch-text" style={{"--glitch-delay": "0.5"} as React.CSSProperties}>
                INTERLINKED
              </h1>
              <h2 className="text-xl font-display tracking-wider text-accent glitch-text" style={{"--glitch-delay": "0.7"} as React.CSSProperties}>
                RECORDS
              </h2>
            </div>
            
            <div className="px-4">
              <ul className="grid grid-cols-3 gap-2">
                {activeContent !== 'release' && activeContent !== 'mix' && (
                  <>
                    <li>
                      <button
                        onClick={() => setActiveContent('about')}
                        className={`menu-item w-full text-left flex items-center justify-center gap-1 text-xs ${
                          activeContent === 'about' ? 'active' : ''
                        }`}
                      >
                        <Disc className="w-3 h-3" />
                        <span className="font-mono">ABOUT</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveContent('discography')}
                        className={`menu-item w-full text-left flex items-center justify-center gap-1 text-xs ${
                          activeContent === 'discography' ? 'active' : ''
                        }`}
                      >
                        <Music2 className="w-3 h-3" />
                        <span className="font-mono">DISCOGRAPHY</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveContent('mixes')}
                        className={`menu-item w-full text-left flex items-center justify-center gap-1 text-xs ${
                          activeContent === 'mixes' ? 'active' : ''
                        }`}
                      >
                        <Headphones className="w-3 h-3" />
                        <span className="font-mono">MIXES</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveContent('events')}
                        className={`menu-item w-full text-left flex items-center justify-center gap-1 text-xs ${
                          activeContent === 'events' ? 'active' : ''
                        }`}
                      >
                        <ArrowRight className="w-3 h-3" />
                        <span className="font-mono">EVENTS</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveContent('links')}
                        className={`menu-item w-full text-left flex items-center justify-center gap-1 text-xs ${
                          activeContent === 'links' ? 'active' : ''
                        }`}
                      >
                        <Link className="w-3 h-3" />
                        <span className="font-mono">LINKS</span>
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="mt-4 px-4 text-center">
              <p className="text-xs text-muted-foreground">
                EST. 2023 | UNDERGROUND COLLECTIVE | 0x3F2A4C9D8E1B7F
              </p>
            </div>
          </div>
        ) : (
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
              setActiveContent={handleContentChange} 
            />
          </div>
        )}
        
        <main className={`${isMobile ? 'w-full' : 'flex-1'} p-4 md:p-8 overflow-hidden animate-screen-flicker`}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
