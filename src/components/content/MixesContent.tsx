
import React from 'react';
import { Music2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContentProps } from '../MainLayout';

const MixesContent: React.FC<ContentProps> = ({ setActiveContent }) => {
  const mixes = [
    {
      id: 'MIX-001',
      title: 'SONA 003 - Dark Disco',
      artist: 'TheDonStone',
      duration: '62:00',
      date: '2024-09',
      tags: ['Dark Disco', 'Electro', 'Goth Techno'],
      embedUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AY3U5PwS2-c?si=QLkWUwZQ7YXXymTe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      description: "Welcome to the third chapter of the SONA mix series, where TheDonStone takes the sonic experience to unprecedented heights. This installment plunges listeners into a relentless fusion of dark disco, underground electro, minimal techno, and goth-inspired EBM. Breaking free from the ordinary, this week’s mix demands attention with pulsating beats and electrifying energy, setting the stage for an immersive auditory adventure."
    },
    {
      id: 'MIX-002',
      title: 'SONA 002 - Hard Techno',
      artist: 'TheDonStone',
      duration: '60:00',
      date: '2024-03',
      tags: ['Hard Techno', 'Peak-Time Techno', 'Driving Techno'],
      embedUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iKUTZUrcF8E?si=WI7griDqmfkkid95" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      description: "Drenched in the spirit of Berlin's warehouse techno and the clandestine allure of underground raves, the vibe of SONA Episode 2 is an invitation to the raw, unfiltered essence of the techno scene. TheDonStone, drawing upon his extensive experience as a DJ, producer, and event organizer, curates a selection that transcends boundaries, seamlessly weaving together tracks by acclaimed artists like Amelie Lens, Ann Clue, Mayfie, Uncertain, Beneti, and others. Each beat serves as a building block, constructing a sonic architecture that propels the listener into a realm where time stands still, and the dance floor becomes a conduit for collective euphoria."
    },
    {
      id: 'MIX-003',
      title: 'Subterranean Frequencies',
      artist: 'Void Protocol',
      duration: '74:23',
      date: '2023-12-02',
      tags: ['Dub Techno', 'Ambient', 'Industrial'],
      embedUrl: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1224609325&color=%2346e62a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
      description: "Deep, resonant dub techno explorations from the underground. Void Protocol delivers a hypnotic journey through cavernous spaces and industrial landscapes."
    },
    {
      id: 'MIX-004',
      title: 'Subterranean Frequencies',
      artist: 'Void Protocol',
      duration: '74:23',
      date: '2023-12-02',
      tags: ['Dub Techno', 'Ambient', 'Industrial'],
      embedUrl: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1224609325&color=%2346e62a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
      description: "Deep, resonant dub techno explorations from the underground. Void Protocol delivers a hypnotic journey through cavernous spaces and industrial landscapes."
    },
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
