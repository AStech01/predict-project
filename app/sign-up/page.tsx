'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthCard from '@/components/AuthCard';
import GoogleButton from '@/components/GoogleButton';
import AuthDivider from '@/components/AuthDivider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // In a real app, you would handle authentication here
    
    setTimeout(() => {
      setIsLoading(false);
      router.push('/set-up-profile');
    }, 800);
  };

  return (
    <AuthCard>
      <h1 className="text-2xl font-semibold text-center mb-2">Sign Up</h1>
      <p className="text-center text-gray-600 mb-6">
        Join <strong>1000+</strong> predicting trends<br /> 
        and shaping the future.
      </p>
      
      <GoogleButton onClick={() => router.push('/set-up-profile')} />
      
      <AuthDivider />
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}
        
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gray-500 hover:bg-gray-600 text-white"
          disabled={isLoading}
        >
          Continue
        </Button>
      </form>
      
      <p className="text-center mt-6 text-sm">
        Don't have an account? <Link href="/login" className="font-semibold text-black">Sign Up</Link>
      </p>
    </AuthCard>
  );
}