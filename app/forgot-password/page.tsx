'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthCard from '@/components/AuthCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real app, you would handle password reset here
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <AuthCard>
      <h1 className="text-2xl font-semibold text-center mb-2">
        Recover your password
      </h1>
      
      <p className="text-center text-gray-600 mb-6">
        Enter the email that you used when you signed up<br />
        to recover your password. You will receive a<br />
        <strong>password reset link</strong>.
      </p>
      
      {isSubmitted ? (
        <div className="text-center py-4">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 text-green-700 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-medium mb-2">Check your email</h3>
          <p className="text-gray-600 mb-4">
            We've sent a password reset link to:<br />
            <span className="font-medium">{email}</span>
          </p>
          <Button 
            onClick={() => router.push('/login')}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white"
          >
            Back to Login
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Button 
            type="submit" 
            className="w-full bg-gray-500 hover:bg-gray-600 text-white"
            disabled={isLoading}
          >
            Send
          </Button>
        </form>
      )}
    </AuthCard>
  );
}