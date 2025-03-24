
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
    { id: 'mixes', label: 'MIXES', icon: <Headphones className="w-4 h-4" /> },
    { id: 'events', label: 'EVENTS', icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'links', label: 'LINKS', icon: <Link className="w-4 h-4" /> },
  ];

  // Split menu items into two rows for small screens
  const firstRowItems = menuItems.slice(0, 3);
  const secondRowItems = menuItems.slice(3);

  return (
    <nav className="w-full">
      {/* Mobile layout (two rows) */}
      <div className="flex flex-col sm:hidden">
        <div className="flex justify-center mb-1">
          {firstRowItems.map((item) => (
            <div key={item.id} className="flex-1 mx-1">
              <button
                onClick={() => setActiveContent(item.id as ContentType)}
                className={`menu-item w-full text-left flex items-center gap-1 text-xs px-1 py-1 ${
                  activeContent === item.id ? 'active' : ''
                }`}
              >
                {item.icon}
                <span className="font-mono">{item.label}</span>
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          {secondRowItems.map((item) => (
            <div key={item.id} className="flex-1 mx-1">
              <button
                onClick={() => setActiveContent(item.id as ContentType)}
                className={`menu-item w-full text-left flex items-center gap-1 text-xs px-1 py-1 ${
                  activeContent === item.id ? 'active' : ''
                }`}
              >
                {item.icon}
                <span className="font-mono">{item.label}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout (column) */}
      <div className="hidden sm:flex sm:flex-col">
        {menuItems.map((item) => (
          <div key={item.id} className="sm:w-full sm:mb-2">
            <button
              onClick={() => setActiveContent(item.id as ContentType)}
              className={`menu-item w-full text-left flex items-center gap-2 text-sm ${
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
