"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Search, PenIcon as AlienIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import Navigation from './navigation';

export default function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center">
            <AlienIcon className="h-7 w-7" />
          </Link>
        </div>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <div className={cn(
              "absolute inset-y-0 left-0 flex items-center pl-3 transition-opacity",
              isSearchFocused ? "opacity-0" : "opacity-100"
            )}>
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search predictions"
              className="w-full pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:ring-primary focus:border-primary"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            className="hidden md:flex text-white border-gray-700 hover:bg-gray-800"
          >
            Post prediction
          </Button>
          <Button>Login</Button>
        </div>
      </div>
      <Navigation />
    </header>
  );
}