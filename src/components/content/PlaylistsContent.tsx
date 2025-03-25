
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContentProps } from '../MainLayout';
import { ListMusic } from 'lucide-react';

const PlaylistsContent: React.FC<ContentProps> = ({ setActiveContent }) => {
  const playlists = [
    {
      id: 'PLY-001',
      title: 'Dark Disco',
      genre: 'New Wave, Acid Techno, Goth Disco, Darkwave',
      trackCount: 128,
      lastUpdated: '2025-03-23',
      embedUrl: 'https://open.spotify.com/embed/playlist/5Hye7jIdhLAi4DXr41vpDz?utm_source=generator&theme=0',
      description: "Peak dark disco tracks curated by TheDonStone - a collection of disco and acid mixed with new wave, post-punk, EBM, goth, darkwave, and techno sounds. Ideal sounds for dark underground clubs."
    },
    {
      id: 'PLY-002',
      title: 'Global Underground',
      genre: 'Progressive House, Trance, Breaks, Minimal Techno',
      trackCount: 473,
      lastUpdated: '2024-05-28',
      embedUrl: 'https://open.spotify.com/embed/playlist/3XpDcVIkMBwZZWD9ufJP1C?utm_source=generator',
      description: "Global Underground is inspired by the popular CD mix series of the 90s and 2000s that featured cutting edge DJs showcasing their skills. This mix of the best deep and progressive house, techno, trance, and breakbeat tracks will transport you around the world."
    },
    {
      id: 'PLY-003',
      title: 'Digital Dreams',
      genre: 'IDM, Glitch, Experimental',
      trackCount: 28,
      lastUpdated: '2024-04-12',
      embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO45P0Eo?utm_source=generator',
      description: "An experimental journey through IDM, glitch, and digital soundscapes. This playlist explores the more cerebral side of electronic music with complex rhythms and intricate sound design."
    },
    {
      id: 'PLY-004',
      title: "Hacker's Ambient",
      genre: 'Ambient, Atmospheric',
      trackCount: 24,
      lastUpdated: '2024-06-02',
      embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWXhcuQw7w6Qn?utm_source=generator',
      description: "Atmospheric ambient tracks perfect for coding sessions, deep work, or contemplative moments. These soundscapes create an immersive background that enhances focus and creativity."
    },
    {
      id: 'PLY-005',
      title: 'Gothic Elegance',
      genre: 'Darkwave, Gothic, Post-Punk',
      trackCount: 31,
      lastUpdated: '2024-05-14',
      embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4OzrY981I1W?utm_source=generator',
      description: "A collection of darkwave, gothic rock, and post-punk classics and contemporary tracks. This playlist embraces the aesthetic of dark romanticism and melancholic beauty."
    },
    {
      id: 'PLY-006',
      title: 'Lo-Fi Shadows',
      genre: 'Lo-Fi, Chillhop, Dark Ambient',
      trackCount: 45,
      lastUpdated: '2024-06-20',
      embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator',
      description: "A darker take on lo-fi hip hop, perfect for late night study sessions or rainy day contemplation. These tracks blend downtempo beats with atmospheric textures and melancholic melodies."
    },
  ];

  const handlePlaylistClick = (playlist: any) => {
    setActiveContent('playlist', playlist);
  };

  return (
    <div>
      <h2 className="text-2xl font-display tracking-wider text-primary mb-6">_PLAYLISTS</h2>
      
      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="pr-4 space-y-6">
          {playlists.map((playlist) => (
            <div 
              key={playlist.id} 
              className="border border-border p-4 hover:border-primary transition-colors duration-150 cursor-pointer" 
              onClick={() => handlePlaylistClick(playlist)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <ListMusic className="w-4 h-4 text-secondary" />
                    <h3 className="text-lg text-secondary font-display tracking-wider">{playlist.title}</h3>
                  </div>
                  <p className="text-sm mt-1">{playlist.genre}</p>
                  <div className="text-xs text-muted-foreground mt-1">
                    {playlist.trackCount} tracks | Last updated: {new Date(playlist.lastUpdated).toLocaleDateString()}
                  </div>
                </div>
                <div className="text-xs border border-border px-2 py-1">
                  {playlist.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default PlaylistsContent;
