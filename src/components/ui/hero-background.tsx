import React from "react";
import heroImage from "@/assets/hero-veranda.jpg";

interface HeroBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <section className={`relative py-24 overflow-hidden ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10" />
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </section>
  );
};