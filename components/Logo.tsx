import { AlignEndHorizontal } from 'lucide-react';
import React from 'react';


interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 48, className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <AlignEndHorizontal size={size} className="text-black" />
    </div>
  );
};

 