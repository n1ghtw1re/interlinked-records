
import React from 'react';

const DiscographyContent: React.FC = () => {
  const releases = [
    {
      id: 'IR-001',
      artist: 'Void Protocol',
      title: 'Neural Decay',
      format: 'Vinyl 12" + Digital',
      year: '2023',
      tracks: ['Neural Decay', 'Synaptic Drift', 'Memory Fragments', 'Cortex Malfunction']
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

  return (
    <div className="max-h-[calc(100vh-16rem)] overflow-hidden">
      <h2 className="text-2xl font-display tracking-wider text-primary mb-6">_DISCOGRAPHY</h2>
      
      <div className="space-y-6">
        {releases.map((release) => (
          <div key={release.id} className="border border-border p-4 hover:border-primary transition-colors duration-150">
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
    </div>
  );
};

export default DiscographyContent;
