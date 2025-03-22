
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContentProps } from '../MainLayout';

const DiscographyContent: React.FC<ContentProps> = ({ setActiveContent }) => {
  const releases = [
    {
      id: 'IR-001',
      artist: 'ImVexd',
      title: 'Syntax of Shadows',
      format: 'Vinyl 12" + Digital',
      year: '2023',
      tracks: ['Neural Decay', 'Synaptic Drift', 'Memory Fragments', 'Cortex Malfunction'],
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3251650679/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/syntax-of-shadows">Syntax of Shadows by imVexd</a></iframe>',
      description: "Dive into the abyss with Syntax of Shadows, the latest release from ImVexd.\n\nThis dark ambient dub techno album is a 17-track odyssey through late-night code and clandestine circuits. This isn't just music; it's a soundtrack for the sleepless, the seekers, the rebels who rewrite reality while the world dreams.\n\nEach track pulses with the tension of midnight hacks, the hum of neon-lit silence, and the weight of knowing the next keystroke could change everything. It's the rhythm of liberation, encrypted in basslines and cloaked in atmosphere."
    },
    {
      id: 'IR-002',
      artist: 'Submerged Transmissions',
      title: 'Pressure Zones',
      format: 'Cassette + Digital',
      year: '2023',
      tracks: ['Deep Sea Communication', 'Pressure Zones', 'Thalassophobia', 'Abyssal Plains']
    },
    {
      id: 'IR-003',
      artist: 'Glass Structures',
      title: 'Brutalist Architecture',
      format: 'Vinyl 12" + Digital',
      year: '2023',
      tracks: ['Concrete Formations', 'Steel Grid Systems', 'Raw Materials', 'Functional Spaces']
    },
    {
      id: 'IR-004',
      artist: 'Modular Ghost',
      title: 'Patch Memory',
      format: 'Digital EP',
      year: '2023',
      tracks: ['CV Interface', 'Voltage Controlled', 'Patch Memory', 'Signal Path']
    }
  ];

  const handleReleaseClick = (release: any) => {
    setActiveContent('release', release);
  };

  return (
    <div>
      <h2 className="text-2xl font-display tracking-wider text-primary mb-6">_DISCOGRAPHY</h2>
      
      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="pr-4 space-y-6">
          {releases.map((release) => (
            <div 
              key={release.id} 
              className="border border-border p-4 hover:border-primary transition-colors duration-150 cursor-pointer" 
              onClick={() => handleReleaseClick(release)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg text-secondary font-display tracking-wider">{release.artist}</h3>
                  <h4 className="text-sm">{release.title}</h4>
                  <div className="text-xs text-muted-foreground mt-1">{release.format} | {release.year} | {release.id}</div>
                </div>
                <div className="text-xs border border-border px-2 py-1">
                  {release.id}
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-border">
                <h5 className="text-xs mb-2 text-muted-foreground">TRACKLIST:</h5>
                <ul className="text-xs space-y-1">
                  {release.tracks.map((track, index) => (
                    <li key={index} className="flex">
                      <span className="text-primary mr-2">{index + 1}.</span>
                      <span>{track}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default DiscographyContent;
