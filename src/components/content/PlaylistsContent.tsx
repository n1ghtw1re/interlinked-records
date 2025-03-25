
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
      embedUrl: 'https://open.spotify.com/embed/playlist/3XpDcVIkMBwZZWD9ufJP1C?utm_source=generator&theme=0',
      description: "Global Underground is inspired by the popular CD mix series of the 90s and 2000s that featured cutting edge DJs showcasing their skills. This mix of the best deep and progressive house, techno, trance, and breakbeat tracks will transport you around the world."
    },
    {
      id: 'PLY-003',
      title: 'Electro Grunge',
      genre: 'Electro, Indie Dance, Hipster EDM',
      trackCount: 168,
      lastUpdated: '2024-04-12',
      embedUrl: 'https://open.spotify.com/embed/playlist/0cP2uBWEa95gDuYcS3VCO6?utm_source=generator&theme=0',
      description: "Inspired by dive bars and clubs from Brooklyn, Electro Grunge is a mix of indie dance, underground electro and hipster bar anthems."
    },
    {
      id: 'PLY-004',
      title: "Hard Drive Techno",
      genre: 'Peak-Time Techno, Raw Techno, Rave Techno, Acid Techno',
      trackCount: 109,
      lastUpdated: '2024-06-02',
      embedUrl: 'https://open.spotify.com/embed/playlist/1NsmXbwdFeYaXWc6ju7Ggj?utm_source=generator&theme=0',
      description: "Hard Drive Techno features a mix of hard, raw, hypnotic, and peak-time techno tracks that will make you lose yourself in the music. Curated for the rave, these songs are best played late at night for the underground crowds."
    },
    {
      id: 'PLY-005',
      title: 'AfterHours',
      genre: 'Chillout, Trip Hop, Electronica, LoFi',
      trackCount: 168,
      lastUpdated: '2024-05-14',
      embedUrl: 'https://open.spotify.com/embed/playlist/2O8Y8l3YrzK7Eu9vfm4kH6?utm_source=generator&theme=0',
      description: "Unwind and decompress from the pulsating energy of the night. This playlist is a curated mix of electronic and trip hop tunes, designed to provide the perfect backdrop for those late-night chill sessions."
    },
    {
      id: 'PLY-006',
      title: 'Dark Goth Club',
      genre: 'Darkwave, Post-Punk, Dark Disco, Goth',
      trackCount: 145,
      lastUpdated: '2025-03-25',
      embedUrl: 'https://open.spotify.com/embed/playlist/1lkEa3NsUl0Xt9GKjtwsYD?utm_source=generator&theme=0',
      description: "For those dark undeground nightclubs that blur the reality of fact and fiction."
    },
    {
      id: 'PLY-007',
      title: 'Hard Rave',
      genre: 'Hard Techno, Hard Trance, Hardcore',
      trackCount: 51,
      lastUpdated: '2025-03-25',
      embedUrl: 'https://open.spotify.com/embed/playlist/0d95uDynzWK3z3EmBqOOFg?utm_source=generator&theme=0',
      description: "Hard Rave music is back and bigger than ever. 145bpm plus hard driving tunes for those endless nights in the warehouse rave."
    }
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
