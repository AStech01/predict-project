'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Search, Menu, X, Plus, Home, TrendingUp, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {Logo} from './Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => pathname === path;
  
  const navLinks = [
    { name: 'Home', path: '/dashboard', icon: <Home size={18} /> },
    { name: 'Trending', path: '/trending', icon: <TrendingUp size={18} /> },
    { name: 'Profile', path: '/profile', icon: <User size={18} /> },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center">
              <Logo size={32} className="mr-2" />
              <span className="font-semibold text-lg hidden md:block">Predictor</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  isActive(link.path) 
                    ? 'text-black font-medium bg-gray-100' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-black relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
            </button>
            
            <Link href="/new-prediction">
              <Button className="hidden md:flex items-center bg-black hover:bg-gray-800 text-white">
                <Plus size={16} className="mr-1" />
                New Prediction
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatar.png" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>New Prediction</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`flex items-center space-x-2 p-3 rounded-md ${
                    isActive(link.path) 
                      ? 'text-black font-medium bg-gray-100' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              <Link 
                href="/new-prediction"
                className="flex items-center space-x-2 p-3 bg-black text-white rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Plus size={18} />
                <span>New Prediction</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;