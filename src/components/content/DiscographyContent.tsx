
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContentProps } from '../MainLayout';

const DiscographyContent: React.FC<ContentProps> = ({ setActiveContent }) => {
  const releases = [
    {
      id: 'INT-017',
      artist: 'ImVexd',
      title: 'Syntax of Shadows',
      format: 'Vinyl 12" + Digital',
      year: '2025',
      tracks: ['Neural Decay', 'Synaptic Drift', 'Memory Fragments', 'Cortex Malfunction'],
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3937841774/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/echoes-in-the-grid">Echoes in The Grid by Axi0m</a></iframe>',
      description: "Dive into the abyss with Syntax of Shadows, the latest release from ImVexd.\n\nThis dark ambient dub techno album is a 17-track odyssey through late-night code and clandestine circuits. This isn't just music; it's a soundtrack for the sleepless, the seekers, the rebels who rewrite reality while the world dreams.\n\nEach track pulses with the tension of midnight hacks, the hum of neon-lit silence, and the weight of knowing the next keystroke could change everything. It's the rhythm of liberation, encrypted in basslines and cloaked in atmosphere."
    },
    {
      id: 'INT-016',
      artist: 'Axi0m',
      title: 'Echoes in the Grid',
      format: 'Cassette + Digital',
      year: '2025',
      tracks: ['Deep Sea Communication', 'Pressure Zones', 'Thalassophobia', 'Abyssal Plains'],
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3251650679/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/syntax-of-shadows">Syntax of Shadows by imVexd</a></iframe>',
      description: "Immerse yourself in 16 tracks of chilled-out minimal lofi, layered with the soothing ambiance of rainy days and digital whispers. Perfect for coding marathons, late-night study sessions, or just unwinding with a cup of coffee."
    },
    {
      id: 'INT-015',
      artist: 'TheDonStone',
      title: 'Zero Theorem',
      format: 'Vinyl 12" + Digital',
      year: '2024',
      tracks: ['Concrete Formations', 'Steel Grid Systems', 'Raw Materials', 'Functional Spaces'],
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1628666844/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/zero-theorem">Zero Theorem by Interlinked Records</a></iframe>',
      description: "Abyssal grooves and hypnotic precision collide in Zero Theorem, where TheDonStone crafts a deep, dark minimal techno odyssey. JustFin strips it down further with a stark, minimalist remix that pulses like a machine on the edge of consciousness."
    },
    {
      id: 'INT-014',
      artist: 'TheDonStone',
      title: 'Back To Mine',
      format: 'Digital EP',
      year: '2024',
      tracks: ['CV Interface', 'Voltage Controlled', 'Patch Memory', 'Signal Path'],
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2917307920/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/back-to-mine">Back to Mine by Interlinked Records</a></iframe>',
      description: "Back To Mine drifts through the hazy echoes of an all-night rave’s aftermath, where deep dub, distorted lofi, and submerged rhythms paint a world between exhaustion and euphoria. TheDonStone crafts a sonic comedown ritual—warm, warped, and lost in the glow of city lights at dawn."
    },
    {
      id: 'INT-013',
      artist: 'TheDonStone',
      title: 'The 13th Floor',
      format: 'Digital EP',
      year: '2024',
      tracks: ['CV Interface', 'Voltage Controlled', 'Patch Memory', 'Signal Path'],
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1919827054/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/the-13th-floor">The 13th Floor by Interlinked Records</a></iframe>',
      description: "The 13th Floor is descent into dark melodic grooves from TheDonStone."
    },
    {
      id: 'INT-012',
      artist: 'TheDonStone',
      title: 'Total Recall',
      format: 'Digital EP',
      year: '2024',
      tracks: ['CV Interface', 'Voltage Controlled', 'Patch Memory', 'Signal Path'],
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=711447107/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/total-recall">Total Recall by Interlinked Records</a></iframe>',
      description: "Total Recall is a hard pulse-pumping peak time techno EP."
    },
    {
      id: 'INT-011',
      artist: 'TheDonStone',
      title: 'Ms Ministry',
      format: 'Digital EP',
      year: '2024',
      tracks: ['CV Interface', 'Voltage Controlled', 'Patch Memory', 'Signal Path'],
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1120552345/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/track/ms-ministry">Ms. Ministry by Interlinked Records</a></iframe>',
      description: "Ms. Minsitry fuses hard dark brooding IDM with Indide Dance vibes."
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
