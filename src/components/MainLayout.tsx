
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import AboutContent from './content/AboutContent';
import DiscographyContent from './content/DiscographyContent';
import MixesContent from './content/MixesContent';
import EventsContent from './content/EventsContent';
import LinksContent from './content/LinksContent';
import PlaylistsContent from './content/PlaylistsContent';
import ReleaseDetail from './content/ReleaseDetail';
import MixDetail from './content/MixDetail';
import PlaylistDetail from './content/PlaylistDetail';
import ThemeSwitcher from './ThemeSwitcher';
import { useIsMobile } from '@/hooks/use-mobile';
import { Disc, Headphones, Link as LinkIcon, Music2, ArrowRight, ListMusic } from 'lucide-react';

export type ContentType = 'about' | 'discography' | 'mixes' | 'events' | 'links' | 'playlists' | 'release' | 'mix' | 'playlist';

export interface ReleaseData {
  id: string;
  artist: string;
  title: string;
  embedUrl?: string;
  description?: string;
}

export interface PlaylistData {
  id: string;
  title: string;
  genre: string;
  trackCount: number;
  lastUpdated: string;
  embedUrl: string;
  description: string;
}

export interface ContentProps {
  setActiveContent: (content: ContentType, data?: any) => void;
  releaseData?: ReleaseData;
  mixData?: any;
  playlistData?: PlaylistData;
}

const MainLayout: React.FC = () => {
  const [activeContent, setActiveContent] = useState<ContentType>('about');
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [releaseData, setReleaseData] = useState<ReleaseData | null>(null);
  const [mixData, setMixData] = useState<any>(null);
  const [playlistData, setPlaylistData] = useState<PlaylistData | null>(null);
  const [menuVisible, setMenuVisible] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchEffect(true);
        setTimeout(() => setGlitchEffect(false), 200);
      }
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setMenuVisible(true);
    } else {
      setMenuVisible(true);
    }
  }, [isMobile]);

  const handleContentChange = (content: ContentType, data?: any) => {
    setActiveContent(content);
    if (content === 'release' && data) {
      setReleaseData(data);
    } else if (content === 'mix' && data) {
      setMixData(data);
    } else if (content === 'playlist' && data) {
      setPlaylistData(data);
    }
    
    if (isMobile) {
      setMenuVisible(false);
    }
  };

  const toggleMenu = () => {
    if (isMobile) {
      setMenuVisible(!menuVisible);
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
      case 'playlists':
        return <PlaylistsContent setActiveContent={handleContentChange} />;
      case 'release':
        return <ReleaseDetail releaseData={releaseData} setActiveContent={handleContentChange} />;
      case 'mix':
        return <MixDetail mixData={mixData} setActiveContent={handleContentChange} />;
      case 'playlist':
        return <PlaylistDetail playlistData={playlistData} setActiveContent={handleContentChange} />;
      default:
        return <AboutContent setActiveContent={handleContentChange} />;
    }
  };

  const menuItems = [
    { id: 'about', label: 'ABOUT', icon: <Disc className="w-4 h-4" /> },
    { id: 'discography', label: 'DISCOGRAPHY', icon: <Music2 className="w-4 h-4" /> },
    { id: 'mixes', label: 'MIXES', icon: <Headphones className="w-4 h-4" /> },
    { id: 'events', label: 'EVENTS', icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'links', label: 'LINKS', icon: <LinkIcon className="w-4 h-4" /> },
    { id: 'playlists', label: 'PLAYLISTS', icon: <ListMusic className="w-4 h-4" /> },
  ];

  if (!isMobile) {
    return (
      <div className={`crt min-h-screen flex ${glitchEffect ? 'animate-glitch-text' : ''}`}>
        <div className="scan-line"></div>
        <div className="static-overlay"></div>
        <div className="green-burn"></div>
        
        <div className="w-full max-w-6xl mx-auto my-8 flex border-2 border-primary p-2 relative">
          <ThemeSwitcher className="absolute top-2 right-2 z-[200]" />
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
          
          <main className="flex-1 p-8 overflow-hidden animate-screen-flicker">
            {renderContent()}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className={`crt min-h-screen flex flex-col ${glitchEffect ? 'animate-glitch-text' : ''}`}>
      <div className="scan-line"></div>
      <div className="static-overlay"></div>
      <div className="green-burn"></div>
      
      <div className="w-full max-w-6xl mx-auto my-4 border-2 border-primary p-2 flex flex-col relative">
        <ThemeSwitcher className="absolute top-2 right-2 z-[200]" />
        <div className="flex justify-between items-center mb-2 px-4">
          <div>
            <h1 className="text-2xl font-display tracking-wider text-primary glitch-text" style={{"--glitch-delay": "0.5"} as React.CSSProperties}>
              INTERLINKED
            </h1>
            <h2 className="text-lg font-display tracking-wider text-accent glitch-text" style={{"--glitch-delay": "0.7"} as React.CSSProperties}>
              RECORDS
            </h2>
          </div>
          
          {!menuVisible && (
            <button 
              onClick={toggleMenu}
              className="menu-item px-2 py-1 text-sm"
            >
              MENU
            </button>
          )}
        </div>
        
        {menuVisible ? (
          <div className="p-4 border-b border-border">
            <div className="grid grid-cols-2 gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleContentChange(item.id as ContentType)}
                  className={`menu-item w-full text-left flex items-center gap-2 text-sm ${
                    activeContent === item.id ? 'active' : ''
                  }`}
                >
                  {item.icon}
                  <span className="font-mono">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <main className="p-4 overflow-hidden animate-screen-flicker">
            {renderContent()}
          </main>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
