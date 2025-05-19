'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { PenIcon as AlienIcon } from 'lucide-react';
import Image from 'next/image'

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 px-4 py-12">
      <div className="w-full max-w-md mx-auto  space-y-6">
        <motion.div 
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <AlienIcon className="h-12 w-12 text-primary" /> */}

          <Image src="/Group.png" alt='' width={50} height={50} className="h-12 w-12 text-primary" />
        </motion.div>
        
        <motion.div 
          className="bg-white dark:bg-gray-900 rounded-lg  shadow-md p-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
      
      <div className="mt-8 w-full max-w-md mx-auto flex justify-between text-sm text-muted-foreground">
        <span>©all rights reserved</span>
        <a href="#" className="hover:underline">Privacy policy</a>
      </div>
    </div>
  );
}