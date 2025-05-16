'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SocialButton from '@/components/ui/social-button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate auth process
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
    }, 1500);
  };

  return (
    <div className="space-y-6 ">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
        <p className="text-sm text-muted-foreground">
          Join <span className="font-medium text-black/90">1000+</span> predicting trends<br />
          and shaping the future.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <SocialButton 
          provider="google"
          onClick={() => console.log('Google login')}
        />

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-2 text-xs text-muted-foreground dark:bg-gray-900">
              or
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12"
          />
          
          <Input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-12"
          />
        </div>

        <div className="flex justify-end">
          <Button
            variant="link"
            className="px-0 h-auto font-normal text-xs"
            onClick={(e) => {
              e.preventDefault();
              console.log('Forgot password');
            }}
          >
            Forgot Password?
          </Button>
        </div>

        <Button 
          type="submit"
          className={cn(
            "w-full h-12 bg-black/50 rounded-[33px] text-white",
            isLoading && "opacity-70 cursor-not-allowed"
          )}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Continue'}
        </Button>
      </form>

      <div className="text-center text-sm">
        Don't have an account?{' '}
        <Button 
          variant="link" 
          className="p-0 h-auto font-semibold"
          onClick={() => console.log('Sign up')}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}