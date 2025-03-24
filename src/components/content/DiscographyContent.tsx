
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
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3937841774/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/echoes-in-the-grid">Echoes in The Grid by Axi0m</a></iframe>',
      description: "Dive into the abyss with Syntax of Shadows, the latest release from ImVexd.\n\nThis dark ambient dub techno album is a 17-track odyssey through late-night code and clandestine circuits. This isn't just music; it's a soundtrack for the sleepless, the seekers, the rebels who rewrite reality while the world dreams.\n\nEach track pulses with the tension of midnight hacks, the hum of neon-lit silence, and the weight of knowing the next keystroke could change everything. It's the rhythm of liberation, encrypted in basslines and cloaked in atmosphere."
    },
    {
      id: 'INT-016',
      artist: 'Axi0m',
      title: 'Echoes in the Grid',
      format: 'Cassette + Digital',
      year: '2025',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3251650679/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/syntax-of-shadows">Syntax of Shadows by imVexd</a></iframe>',
      description: "Immerse yourself in 16 tracks of chilled-out minimal lofi, layered with the soothing ambiance of rainy days and digital whispers. Perfect for coding marathons, late-night study sessions, or just unwinding with a cup of coffee."
    },
    {
      id: 'INT-015',
      artist: 'TheDonStone',
      title: 'Zero Theorem',
      format: 'Vinyl 12" + Digital',
      year: '2024',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1628666844/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/zero-theorem">Zero Theorem by Interlinked Records</a></iframe>',
      description: "Abyssal grooves and hypnotic precision collide in Zero Theorem, where TheDonStone crafts a deep, dark minimal techno odyssey. JustFin strips it down further with a stark, minimalist remix that pulses like a machine on the edge of consciousness."
    },
    {
      id: 'INT-014',
      artist: 'TheDonStone',
      title: 'Back To Mine',
      format: 'Digital EP',
      year: '2024',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2917307920/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/back-to-mine">Back to Mine by Interlinked Records</a></iframe>',
      description: "Back To Mine drifts through the hazy echoes of an all-night rave's aftermath, where deep dub, distorted lofi, and submerged rhythms paint a world between exhaustion and euphoria. TheDonStone crafts a sonic comedown ritual—warm, warped, and lost in the glow of city lights at dawn."
    },
    {
      id: 'INT-013',
      artist: 'TheDonStone',
      title: 'The 13th Floor',
      format: 'Digital EP',
      year: '2024',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1919827054/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/the-13th-floor">The 13th Floor by Interlinked Records</a></iframe>',
      description: "The 13th Floor is descent into dark melodic grooves from TheDonStone."
    },
    {
      id: 'INT-012',
      artist: 'TheDonStone',
      title: 'Total Recall',
      format: 'Digital EP',
      year: '2024',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=711447107/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/total-recall">Total Recall by Interlinked Records</a></iframe>',
      description: "Total Recall is a hard pulse-pumping peak time techno EP."
    },
    {
      id: 'INT-011',
      artist: 'TheDonStone',
      title: 'Ms Ministry',
      format: 'Digital EP',
      year: '2024',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1120552345/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/track/ms-ministry">Ms. Ministry by Interlinked Records</a></iframe>',
      description: "Ms. Minsitry fuses hard dark brooding IDM with Indide Dance vibes."
    },
    {
      id: 'INT-010',
      artist: 'TheDonStone',
      title: 'Lullaby Abyss',
      format: 'Digital EP',
      year: '2024',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=2862651544/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/track/lullaby-abyss">Lullaby Abyss by Interlinked Records</a></iframe>',
      description: "Lullaby Abyss is a departure from TheDonStone's usual style, as he explores the darker and deeper realms of sound. Inspired by EBM, goth, grunge, post-punk, and darkwave, Lullaby Abyss is a sonic journey that will take you to the edge of your emotions."
    },
    {
      id: 'INT-009',
      artist: 'TheDonStone',
      title: 'Hack The Planet',
      format: 'Digital EP',
      year: '2024',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=717801621/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/hack-the-planet">Hack the Planet by Interlinked Records</a></iframe>',
      description: "Inspired by the cult classic, Hackers, Hack the Planet is a five track love letter to old school techno and house music."
    },
    {
      id: 'INT-008',
      artist: 'TheDonStone',
      title: 'Paagoda Cat',
      format: 'Digital EP',
      year: '2024',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3239485164/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/paagoda-cat-2">Paagoda Cat by Interlinked Records</a></iframe>',
      description: "This six track EP travels through melodic, deep, and minimal techno."
    },
    {
      id: 'INT-007',
      artist: 'TheDonStone',
      title: 'The Remix',
      format: 'Digital EP',
      year: '2024',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1569542637/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/the-remix">The Remix by Interlinked Records</a></iframe>',
      description: "A collection of seven old school hip hop tracks fused with modern afro, latin, and funk vibes"
    },
    {
      id: 'INT-006',
      artist: 'TheDonStone',
      title: 'Baseline',
      format: 'Digital EP',
      year: '2024',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3367805544/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/baseline">Baseline by Interlinked Records</a></iframe>',
      description: "Baseline is a seven track EP of VIP drum & bass edits produced by TheDonStone."
    },
    {
      id: 'INT-005',
      artist: 'TheDonStone',
      title: 'The Edits',
      format: 'Digital EP',
      year: '2023',
<<<<<<< HEAD
      tracks: ['CV Interface', 'Voltage Controlled', 'Patch Memory', 'Signal Path'],
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1589101894/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/the-edits">The Edits by Interlinked Records</a></iframe>',
=======
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1589101894/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/the-edits">The Edits by Interlinked Records</a></iframe>',
>>>>>>> fce099026b3d32f4249a5550fd15b40bb84ae75f
      description: "A six track collection of undergroudn trap and hip-hop remixes."
    },
    {
      id: 'INT-004',
      artist: 'TheDonStone',
      title: 'Interlinked',
      format: 'Digital EP',
      year: '2023',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2263959784/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/interlinked">Interlinked by Interlinked Records</a></iframe>',
      description: "A five track journey through deep melodic techno and house music."
    },
    {
      id: 'INT-003',
      artist: 'Future Flow',
      title: 'Trapped in Tranquility',
      format: 'Digital EP',
      year: '2023',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=973758966/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/future-flow-trapped-in-tranquility">Future Flow - Trapped In Tranquility by Future Flow</a></iframe>',
      description: "With a blend of underground hip hop beats, chill out, and lo-fi sounds, Trapped in Tranquility is a masterful fusion of genres that defies categorization. Future Flow's music is a testament to the incredible things that can be achieved when humans and machines work together in harmony. It is a reminder that the power of technology can be harnessed to create something truly beautiful and meaningful."
    },
    {
      id: 'INT-002',
      artist: 'TheDonStone',
      title: 'Dissco',
      format: 'Digital EP',
      year: '2014',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3098653871/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/dissco">Dissco by TheDonStone</a></iframe>',
      description: "Spanning a decade's worth of music, Dissco collects 13 remixes and mashups from TheDonStone. Featuring house, disco, and indie dance vibes, every track is dancefloor ready."
    },
    {
      id: 'INT-001',
      artist: 'TheDonStone',
      title: 'The Reboot',
      format: 'Digital EP',
      year: '2012',
      embedUrl: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2714174206/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://interlinkedai.bandcamp.com/album/the-reboot-originals">The Reboot : Originals by TheDonStone</a></iframe>',
      description: "Remember when dubstep was cool? So do we. TheDonStone delivers thirteen hard hitting grimey dubstep productions for those memorable nights on the dancefloor."
    },
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
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default DiscographyContent;
