
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft, ListMusic } from 'lucide-react';
import { ContentProps, PlaylistData } from '../MainLayout';
import { useIsMobile } from '@/hooks/use-mobile';

interface PlaylistDetailProps extends ContentProps {
  playlistData: PlaylistData | null;
}

const PlaylistDetail: React.FC<PlaylistDetailProps> = ({ playlistData, setActiveContent }) => {
  const isMobile = useIsMobile();

  if (!playlistData) {
    return <div>Playlist not found</div>;
  }

  const handleBackClick = () => {
    setActiveContent('playlists');
  };

  return (
    <div>
      <button 
        onClick={handleBackClick}
        className="flex items-center gap-1 text-sm hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Playlists</span>
      </button>

      <div className="flex items-center gap-2 mb-2">
        <ListMusic className="w-5 h-5 text-secondary" />
        <h2 className="text-2xl font-display tracking-wider text-primary">{playlistData.title}</h2>
      </div>
      
      <div className="text-sm mb-1">{playlistData.genre}</div>
      <div className="text-xs text-muted-foreground mb-6">
        {playlistData.trackCount} tracks | Last updated: {new Date(playlistData.lastUpdated).toLocaleDateString()}
      </div>

      <ScrollArea className={`${isMobile ? 'h-[calc(100vh-22rem)]' : 'h-[calc(100vh-24rem)]'}`}>
        <div className="pr-4">
          <div className="mb-8">
            <div 
              className={`spotify-embed ${isMobile ? 'h-[352px]' : 'h-[380px]'} w-full mb-4`}
              dangerouslySetInnerHTML={{ 
                __html: `<iframe style="border-radius:12px" src="${playlistData.embedUrl}" width="100%" height="100%" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>` 
              }}
            />
          </div>
          
          <div className="border border-border p-4 mb-6">
            <h3 className="text-lg text-secondary font-display tracking-wider mb-3">ABOUT THIS PLAYLIST</h3>
            <p className="text-sm whitespace-pre-line">{playlistData.description}</p>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default PlaylistDetail;
