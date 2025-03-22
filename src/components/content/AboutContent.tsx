
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContentProps } from '../MainLayout';

const AboutContent: React.FC<ContentProps> = ({ setActiveContent }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-display tracking-wider text-primary mb-6">_ABOUT</h2>
      
      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="pr-4 space-y-6">
          <p className="text-sm leading-relaxed mb-4">
            Based in Siem Reap, Cambodiai, INTERLINKED RECORDS is an independent label founded in the digital underground, 
            operating at the intersection of dub techno, industrial soundscapes, and gothic synth experiments.
          </p>
          
          <p className="text-sm leading-relaxed mb-4">
            We specialize in creating unique soundscapes in a variety of genres. 
            Our artists are free to experiment and to create their own voice.
          </p>
          
          <div className="border border-border p-4 my-6">
            <h3 className="text-lg text-secondary mb-2 font-display tracking-wider">MANIFESTO</h3>
            <ul className="text-xs space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">{`>`}</span>
                <span>Sound is data. Data is corrupted. Corruption is creation.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">{`>`}</span>
                <span>Against algorithmic curation. For human excavation.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">{`>`}</span>
                <span>Hardware first. Software second. Soul always.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">{`>`}</span>
                <span>The underground exists in parallel dimensions.</span>
              </li>
            </ul>
          </div>
          
          <div className="text-xs text-muted-foreground mt-6">
            FOR INQUIRIES: CONTACT@INTERLINKED-RECORDS.NET<br />
            DISTRIBUTION: DISTRO@INTERLINKED-RECORDS.NET
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default AboutContent;
