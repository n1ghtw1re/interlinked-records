
import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher';

interface HeaderProps {
  isMobile: boolean;
  showMenu: boolean;
  onToggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobile, showMenu, onToggleMenu }) => {
  return (
    <div className="flex justify-between items-center mb-2 px-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-display tracking-wider text-primary glitch-text" style={{"--glitch-delay": "0.5"} as React.CSSProperties}>
          INTERLINKED
        </h1>
        <h2 className="text-lg sm:text-xl font-display tracking-wider text-accent glitch-text" style={{"--glitch-delay": "0.7"} as React.CSSProperties}>
          RECORDS
        </h2>
      </div>
      
      {isMobile && !showMenu && (
        <button 
          onClick={onToggleMenu}
          className="menu-item px-2 py-1 text-sm"
        >
          MENU
        </button>
      )}
    </div>
  );
};

export default Header;
