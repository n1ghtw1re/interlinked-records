
import React from 'react';
import { Music2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContentProps } from '../MainLayout';

const MixesContent: React.FC<ContentProps> = ({ setActiveContent }) => {
  const mixes = [
    {
      id: 'MIX-001',
      title: 'Subterranean Frequencies',
      artist: 'Void Protocol',
      duration: '74:23',
      date: '2023-12-02',
      tags: ['Dub Techno', 'Ambient', 'Industrial'],
      embedUrl: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1224609325&color=%2346e62a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
      description: "Deep, resonant dub techno explorations from the underground. Void Protocol delivers a hypnotic journey through cavernous spaces and industrial landscapes."
    },
    {
      id: 'MIX-002',
      title: 'Reverberant Spaces',
      artist: 'Glass Structures',
      duration: '63:14',
      date: '2023-10-15',
      tags: ['Atmospheric', 'Techno', 'Experimental']
    },
    {
      id: 'MIX-003',
      title: 'Nocturnal Transmissions',
      artist: 'Signal Path',
      duration: '58:47',
      date: '2023-09-01',
      tags: ['IDM', 'Breakbeat', 'Electro']
    },
    {
      id: 'MIX-004',
      title: 'Modular Explorations',
      artist: 'Frequency Modulator',
      duration: '67:32',
      date: '2023-07-22',
      tags: ['Experimental', 'Ambient', 'Noise']
    }
  ];

  const handleMixClick = (mix: any) => {
    setActiveContent('mix', mix);
  };

  return (
    <div>
      <h2 className="text-2xl font-display tracking-wider text-primary mb-6">_DJ MIXES</h2>
      
      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="pr-4 space-y-4">
          {mixes.map((mix) => (
            <div 
              key={mix.id} 
              className="border border-border p-4 hover:border-primary transition-colors duration-150 cursor-pointer"
              onClick={() => handleMixClick(mix)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-4 border border-border p-2">
                    <Music2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg text-secondary font-display tracking-wider">{mix.title}</h3>
                    <div className="text-sm">{mix.artist}</div>
                  </div>
                </div>
                <div className="text-xs border border-muted px-2 py-1">
                  {mix.duration}
                </div>
              </div>
              
              <div className="mt-3 flex justify-between items-center text-xs">
                <div className="flex gap-2">
                  {mix.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-muted-foreground">
                  {new Date(mix.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      
        <div className="text-xs text-muted-foreground mt-6">
          ALL MIXES AVAILABLE FOR STREAMING AT SOUNDCLOUD.COM/INTERLINKED-RECORDS
        </div>
      </ScrollArea>
    </div>
  );
};

export default MixesContent;
