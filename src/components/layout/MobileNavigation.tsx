
import React from 'react';
import { ContentType } from '../MainLayout';
import { Disc, Headphones, Link as LinkIcon, Music2, ArrowRight, ListMusic } from 'lucide-react';

interface MobileNavigationProps {
  activeContent: ContentType;
  setActiveContent: (content: ContentType) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ activeContent, setActiveContent }) => {
  const menuItems = [
    { id: 'about', label: 'ABOUT', icon: <Disc className="w-4 h-4" /> },
    { id: 'discography', label: 'DISCOGRAPHY', icon: <Music2 className="w-4 h-4" /> },
    { id: 'mixes', label: 'MIXES', icon: <Headphones className="w-4 h-4" /> },
    { id: 'events', label: 'EVENTS', icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'links', label: 'LINKS', icon: <LinkIcon className="w-4 h-4" /> },
    { id: 'playlists', label: 'PLAYLISTS', icon: <ListMusic className="w-4 h-4" /> },
  ];

  return (
    <div className="p-4 border-b border-border">
      <div className="grid grid-cols-2 gap-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveContent(item.id as ContentType)}
            className={`menu-item w-full text-left flex items-center gap-2 text-sm ${
              activeContent === item.id ? 'active' : ''
            }`}
          >
            {item.icon}
            <span className="font-mono">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
