import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {Logo} from './Logo';

import Image from 'next/image'
interface AuthCardProps {
  children: ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* <Logo className="mb-6" /> */}
      <Image src="/Group.png" alt='' width={50} height={50} className="h-12 w-12 mb-5 text-primary" />
      
      <Card className="w-full max-w-md shadow-md">
        <CardContent className="pt-6 pb-8 px-6">
          {children}
        </CardContent>
      </Card>
      <div className="flex justify-between w-full max-w-md mt-4 text-sm text-gray-600">
        <p>©all rights reserved</p>
        <p className="hover:underline cursor-pointer">Privacy policy</p>
      </div>
    </div>
  );
};

export default AuthCard;