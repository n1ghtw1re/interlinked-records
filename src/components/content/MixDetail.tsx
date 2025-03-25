
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft } from 'lucide-react';
import { ContentProps } from '../MainLayout';
import { useIsMobile } from '@/hooks/use-mobile';

const MixDetail: React.FC<ContentProps> = ({ mixData, setActiveContent }) => {
  const isMobile = useIsMobile();
  
  if (!mixData) {
    return (
      <div>
        <h2 className="text-2xl font-display tracking-wider text-primary mb-6">_MIX NOT FOUND</h2>
        <button 
          className="flex items-center text-sm hover:text-primary transition-colors"
          onClick={() => setActiveContent('mixes')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to DJ Mixes
        </button>
      </div>
    );
  }

  // Function to process embed code for responsive display
  const getResponsiveEmbed = (embedCode: string) => {
    if (!embedCode) return '';
    
    // For mobile, adjust the width and height attributes in the iframe
    if (isMobile) {
      return embedCode
        .replace('width="560"', 'width="100%"')
        .replace('height="315"', 'height="auto"')
        .replace('frameborder="0"', 'frameborder="0" style="aspect-ratio: 16/9;"');
    }
    
    return embedCode;
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <button 
          className="flex items-center text-sm hover:text-primary transition-colors mr-4"
          onClick={() => setActiveContent('mixes')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        <h2 className="text-2xl font-display tracking-wider text-primary">{mixData.title}</h2>
      </div>
      
      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className={`${isMobile ? 'pr-1' : 'pr-4'} space-y-6`}>
          <div className="border border-border p-4">
            <h3 className="text-lg text-secondary font-display tracking-wider mb-2">{mixData.artist}</h3>
            <div className="text-xs text-muted-foreground mb-4">{mixData.date} | {mixData.duration}</div>

            {mixData.embedUrl && (
              <div className="mb-4 responsive-video-container" dangerouslySetInnerHTML={{ 
                __html: getResponsiveEmbed(mixData.embedUrl) 
              }} />
            )}
            
            {mixData.description && (
              <div className={`text-sm leading-relaxed mt-4 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                {mixData.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-4">
              {mixData.tags && mixData.tags.map((tag: string, index: number) => (
                <span key={index} className="px-2 py-1 border border-border text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default MixDetail;
