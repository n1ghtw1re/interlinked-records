
import React from 'react';

const AboutContent: React.FC = () => {
  return (
    <div className="space-y-6 max-h-[calc(100vh-16rem)] overflow-hidden">
      <h2 className="text-2xl font-display tracking-wider text-primary mb-6">_ABOUT</h2>
      
      <p className="text-sm leading-relaxed mb-4">
        INTERLINKED RECORDS is an independent label founded in the digital underground, 
        operating at the intersection of dub techno, industrial soundscapes, and gothic synth experiments.
      </p>
      
      <p className="text-sm leading-relaxed mb-4">
        We specialize in limited edition vinyl pressings, cassette releases, and digital 
        publications from artists working in the shadows of electronic music culture.
      </p>
      
      <div className="border border-border p-4 my-6">
        <h3 className="text-lg text-secondary mb-2 font-display tracking-wider">MANIFESTO</h3>
        <ul className="text-xs space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">></span>
            <span>Sound is data. Data is corrupted. Corruption is creation.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">></span>
            <span>Against algorithmic curation. For human excavation.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">></span>
            <span>Hardware first. Software second. Soul always.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">></span>
            <span>The underground exists in parallel dimensions.</span>
          </li>
        </ul>
      </div>
      
      <div className="text-xs text-muted-foreground mt-6">
        FOR INQUIRIES: CONTACT@INTERLINKED-RECORDS.NET<br />
        DISTRIBUTION: DISTRO@INTERLINKED-RECORDS.NET
      </div>
    </div>
  );
};

export default AboutContent;
