'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthCard from '@/components/AuthCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserPlus } from 'lucide-react';

export default function SetUpProfile() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real app, you would handle profile setup here
    
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 800);
  };

  return (
    <AuthCard>
      <h1 className="text-2xl font-semibold text-center mb-4">
        Let's set up your profile
      </h1>
      
      <p className="text-center text-gray-600 mb-8">
        Add your name and profile photo. Don't worry, you<br />
        can change this anytime.
      </p>
      
      <div className="flex justify-center mb-6">
        <div className="relative group">
          <Avatar className="h-20 w-20 border-2 border-gray-200">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt="Profile" />
            ) : (
              <AvatarFallback className="bg-gray-100 text-gray-400">
                <UserPlus size={28} />
              </AvatarFallback>
            )}
          </Avatar>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 rounded-full transition-all opacity-0 group-hover:bg-opacity-30 group-hover:opacity-100 cursor-pointer">
            <span className="text-white text-xs font-medium">Change</span>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <Button 
          type="submit" 
          className="w-full bg-gray-500 hover:bg-gray-600 text-white"
          disabled={isLoading}
        >
          <svg 
            className="mr-2"
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Continue
        </Button>
      </form>
    </AuthCard>
  );
}