
import React, { useState, useEffect } from 'react';
import { Skull } from 'lucide-react';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const [isGothTheme, setIsGothTheme] = useState(false);
  
  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'goth') {
      setIsGothTheme(true);
      document.body.classList.add('goth-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newThemeState = !isGothTheme;
    setIsGothTheme(newThemeState);
    
    if (newThemeState) {
      document.body.classList.add('goth-theme');
      localStorage.setItem('theme', 'goth');
    } else {
      document.body.classList.remove('goth-theme');
      localStorage.setItem('theme', 'cyber');
    }
  };

  return (
    <div className={`${className}`}>
      <button 
        onClick={toggleTheme}
        className="p-2 focus:outline-none"
        aria-label="Toggle theme"
      >
        <Skull 
          className={`skull-icon w-5 h-5 ${isGothTheme ? 'text-red-600' : 'text-green-500'}`} 
          strokeWidth={isGothTheme ? 1.5 : 2}
        />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
