"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Home, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("home");
  
  return (
    <nav className="max-w-6xl mx-auto pt-4 border-b border-gray-800">
      <div className="flex space-x-8">
        <Link 
          href="/"
          onClick={() => setActiveTab("home")}
          className={cn(
            "flex items-center pb-2 text-sm font-medium transition-colors",
            activeTab === "home" 
              ? "text-white border-b-2 border-white" 
              : "text-gray-400 hover:text-gray-300"
          )}
        >
          <Home className="mr-2 h-4 w-4" />
          Home
        </Link>
        <Link 
          href="#"
          onClick={() => setActiveTab("challenges")}
          className={cn(
            "flex items-center pb-2 text-sm font-medium transition-colors",
            activeTab === "challenges" 
              ? "text-white border-b-2 border-white" 
              : "text-gray-400 hover:text-gray-300"
          )}
        >
          <Trophy className="mr-2 h-4 w-4" />
          Challenges
          <Badge className="ml-2 bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 border-none text-xs">
            Coming Soon
          </Badge>
        </Link>
      </div>
    </nav>
  );
}