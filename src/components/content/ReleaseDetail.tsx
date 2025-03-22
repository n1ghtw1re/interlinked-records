
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft } from 'lucide-react';
import { ContentProps } from '../MainLayout';

const ReleaseDetail: React.FC<ContentProps> = ({ releaseData, setActiveContent }) => {
  if (!releaseData) {
    return (
      <div>
        <h2 className="text-2xl font-display tracking-wider text-primary mb-6">_RELEASE NOT FOUND</h2>
        <button 
          className="flex items-center text-sm hover:text-primary transition-colors"
          onClick={() => setActiveContent('discography')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Discography
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <button 
          className="flex items-center text-sm hover:text-primary transition-colors mr-4"
          onClick={() => setActiveContent('discography')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        <h2 className="text-2xl font-display tracking-wider text-primary">{releaseData.title}</h2>
      </div>
      
      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="pr-4 space-y-6">
          <div className="border border-primary p-4">
            <h3 className="text-lg text-secondary font-display tracking-wider mb-2">{releaseData.artist}</h3>
            <div className="text-xs text-muted-foreground mb-4">{releaseData.id}</div>

            {releaseData.embedUrl && (
              <div className="mb-4" dangerouslySetInnerHTML={{ __html: releaseData.embedUrl }} />
            )}
            
            {releaseData.description && (
              <div className="text-sm leading-relaxed mt-4">
                {releaseData.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ReleaseDetail;
