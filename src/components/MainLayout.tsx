
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { useIsMobile } from '@/hooks/use-mobile';
import LayoutContainer from './layout/LayoutContainer';
import Header from './layout/Header';
import MobileNavigation from './layout/MobileNavigation';
import MainContent from './layout/MainContent';

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

  return (
    <LayoutContainer glitchEffect={glitchEffect}>
      {isMobile ? (
        <>
          <Header 
            isMobile={isMobile} 
            showMenu={menuVisible} 
            onToggleMenu={toggleMenu} 
          />
          
          {menuVisible ? (
            <MobileNavigation 
              activeContent={activeContent} 
              setActiveContent={handleContentChange} 
            />
          ) : (
            <MainContent
              activeContent={activeContent}
              releaseData={releaseData}
              mixData={mixData}
              playlistData={playlistData}
              handleContentChange={handleContentChange}
            />
          )}
        </>
      ) : (
        <div className="flex">
          <div className="w-64 border-r border-border">
            <Header 
              isMobile={isMobile} 
              showMenu={menuVisible} 
              onToggleMenu={toggleMenu} 
            />
            <Navigation 
              activeContent={activeContent} 
              setActiveContent={handleContentChange} 
            />
          </div>
          
          <MainContent
            activeContent={activeContent}
            releaseData={releaseData}
            mixData={mixData}
            playlistData={playlistData}
            handleContentChange={handleContentChange}
          />
        </div>
      )}
    </LayoutContainer>
  );
};

export default MainLayout;
