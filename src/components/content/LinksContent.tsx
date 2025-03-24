
import React from 'react';
import { Link } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ContentProps } from '../MainLayout';

const LinksContent: React.FC<ContentProps> = ({ setActiveContent }) => {
  const links = [
    {
      category: 'MUSIC PLATFORMS',
      items: [
        { label: 'BANDCAMP', url: 'https://interlinkedai.bandcamp.com/' },
        { label: 'SOUNDCLOUD', url: 'https://soundcloud.com/interlinked-records' },
        { label: 'SPOTIFY', url: 'https://open.spotify.com/playlist/5RdjzDZl8I6aPaI4ZnWOaN?si=jpAvwLatTCG3br7-wPhjUw' },
        { label: 'BEATPORT', url: 'https://www.beatport.com/label/interlinked/120134' }
        
      ]
    },
    {
      category: 'Social Media',
      items: [
        { label: 'FACEBOOK', url: 'https://www.facebook.com/interlinkedai' },
        { label: 'RESIDENT ADVISOR', url: 'https://ra.co/labels/23417' },
        { label: 'YOUTUBE', url: 'https://www.youtube.com/@the-don-stone' }
      ]
    },
    {
      category: 'AFFILIATED COLLECTIVES',
      items: [
        { label: 'N1GHTW1RE', url: 'https://n1ghtw1re.neocities.org/' },
        { label: 'THEDONSTONE', url: 'https://thedonstone.com/' }
      ]
    },
    {
      category: 'RADIO SHOWS',
      items: [
        { label: 'N1GHTW1RE YOUTUBE', url: 'https://www.youtube.com/@N1ghtw1re' },
        { label: 'SONA DJ MIX SERIES', url: 'https://youtu.be/L-E95UOLK3Y?si=I6Ebmey2yfdQZHaP' },
        { label: 'CAMBODIA COMMUNITY RADIO', url: 'https://www.youtube.com/@CambodiaCommunityRadio' },
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-display tracking-wider text-primary mb-6">_LINKS</h2>
      
      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="pr-4">
          <div className="grid grid-cols-2 gap-6">
            {links.map((category, index) => (
              <div key={index} className="border border-border p-4">
                <h3 className="text-sm text-secondary font-display tracking-wider mb-3">{category.category}</h3>
                
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="group">
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-xs hover:text-primary transition-colors duration-150"
                      >
                        <Link className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border border-border p-4 mt-6">
            <h3 className="text-sm text-secondary font-display tracking-wider mb-3">CONTACT</h3>
            <div className="text-xs space-y-2">
              <p>GENERAL: N1GHTW1RE@PROTON.ME</p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default LinksContent;
