"use client"

import { useState } from 'react';
import { X } from 'lucide-react';
import { PenIcon as AlienIcon } from 'lucide-react';

export default function WelcomeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-white rounded-lg shadow-sm p-4 mt-2 animate-fadeIn">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close banner"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="flex items-center">
        <div className="flex items-center mr-3">
          <AlienIcon className="h-6 w-6 text-black" />
          <span className="font-semibold ml-1">predictGen</span>
        </div>
        <div className="text-gray-800 italic">
          Welcome to the hub where guesses turn into glory :)
        </div>
      </div>
    </div>
  );
}