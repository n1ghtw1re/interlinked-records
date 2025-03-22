
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="crt min-h-screen flex items-center justify-center bg-background">
      <div className="scan-line"></div>
      <div className="static-overlay"></div>
      
      <div className="text-center border border-border p-8 max-w-md animate-screen-flicker">
        <h1 className="text-4xl font-display tracking-wider text-primary mb-4 glitch-text">404</h1>
        <p className="text-xl text-muted-foreground mb-6 font-mono">TRANSMISSION LOST</p>
        <p className="text-sm text-muted-foreground mb-8">
          THE REQUESTED FILE CANNOT BE LOCATED IN THE DATABASE
        </p>
        <a 
          href="/" 
          className="inline-block border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-black transition-colors duration-150"
        >
          &lt; RETURN TO BASE &gt;
        </a>
      </div>
    </div>
  );
};

export default NotFound;
