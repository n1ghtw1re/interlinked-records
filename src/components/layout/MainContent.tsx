
import React from 'react';
import AboutContent from '../content/AboutContent';
import DiscographyContent from '../content/DiscographyContent';
import MixesContent from '../content/MixesContent';
import EventsContent from '../content/EventsContent';
import LinksContent from '../content/LinksContent';
import PlaylistsContent from '../content/PlaylistsContent';
import ReleaseDetail from '../content/ReleaseDetail';
import MixDetail from '../content/MixDetail';
import PlaylistDetail from '../content/PlaylistDetail';
import { ContentType, ContentProps, ReleaseData, PlaylistData } from '../MainLayout';

interface MainContentProps {
  activeContent: ContentType;
  releaseData: ReleaseData | null;
  mixData: any;
  playlistData: PlaylistData | null;
  handleContentChange: (content: ContentType, data?: any) => void;
}

const MainContent: React.FC<MainContentProps> = ({ 
  activeContent, 
  releaseData, 
  mixData, 
  playlistData, 
  handleContentChange
}) => {
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

  return (
    <main className="p-4 overflow-hidden animate-screen-flicker">
      {renderContent()}
    </main>
  );
};

export default MainContent;
