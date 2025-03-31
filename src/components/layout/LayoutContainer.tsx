
import React, { ReactNode } from 'react';
import ThemeSwitcher from '../ThemeSwitcher';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutContainerProps {
  children: ReactNode;
  glitchEffect: boolean;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children, glitchEffect }) => {
  const isMobile = useIsMobile();

  return (
    <div className={`crt min-h-screen flex ${isMobile ? 'flex-col' : ''} ${glitchEffect ? 'animate-glitch-text' : ''}`}>
      <div className="static-overlay"></div>
      <div className="green-burn"></div>
      
      <div className="w-full max-w-6xl mx-auto my-4 sm:my-8 border-2 border-primary p-2 relative flex flex-col">
        <ThemeSwitcher className="absolute top-2 right-2 z-[200]" />
        <div className="scan-line"></div>
        
        {children}
      </div>
    </div>
  );
};

export default LayoutContainer;
