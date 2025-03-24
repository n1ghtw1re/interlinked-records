
import React from 'react';
import { ContentType } from './MainLayout';
import { Disc, Headphones, Link, Music2, ArrowRight } from 'lucide-react';

interface NavigationProps {
  activeContent: ContentType;
  setActiveContent: (content: ContentType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeContent, setActiveContent }) => {
  const menuItems = [
    { id: 'about', label: 'ABOUT', icon: <Disc className="w-4 h-4" /> },
    { id: 'discography', label: 'DISCOGRAPHY', icon: <Music2 className="w-4 h-4" /> },
    { id: 'mixes', label: 'DJ MIXES', icon: <Headphones className="w-4 h-4" /> },
    { id: 'events', label: 'EVENTS', icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'links', label: 'LINKS', icon: <Link className="w-4 h-4" /> },
  ];

  return (
    <nav className="w-full">
      <div className="flex flex-row sm:flex-col overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0">
        {menuItems.map((item) => (
          <div key={item.id} className="flex-shrink-0 sm:w-full mr-2 sm:mr-0 sm:mb-2">
            <button
              onClick={() => setActiveContent(item.id as ContentType)}
              className={`menu-item w-full text-left flex items-center gap-2 text-sm whitespace-nowrap sm:whitespace-normal ${
                activeContent === item.id ? 'active' : ''
              }`}
            >
              {item.icon}
              <span className="font-mono">{item.label}</span>
            </button>
          </div>
        ))}
      </div>
      
      <div className="hidden sm:block mt-8 px-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground mt-4">
          EST. 2023<br />
          UNDERGROUND COLLECTIVE<br />
          0x3F2A4C9D8E1B7F
        </p>
      </div>
    </nav>
  );
};

export default Navigation;
