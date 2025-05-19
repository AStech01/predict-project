"use client"

import { useState } from 'react';
import { MessagesSquare, Eye } from 'lucide-react';
import { Prediction, CategoryColors } from '@/lib/types';
import { CategoryTag } from '@/components/ui/category-tag';
import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface PredictionCardProps {
  prediction: Prediction;
}

export default function PredictionCard({ prediction }: PredictionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-sm p-6 transition-shadow duration-300",
        isHovered ? "shadow-md" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-4 ">
        <div className="flex items-center">
          <Avatar className="h-8 w-8 rounded-full bg-gray-200">
            <div className="text-xs font-medium">{prediction?.author.name.charAt(0)}</div>
          </Avatar>
          <div className="ml-2">
            <p className="text-sm font-medium text-gray-900">{prediction?.author.name}</p>
            <p className="text-xs text-gray-500">{prediction?.date}</p>
          </div>
        </div>
        
        <CategoryTag category={prediction?.category} />
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-900">{prediction?.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-3">{prediction?.content}</p>

      <div className="flex items-center mt-6 text-gray-500">
        <div className="flex items-center mr-4">
          <Eye className="h-4 w-4 mr-1" />
          <span className="text-sm">{prediction?.views}</span>
        </div>
        <div className="flex items-center">
          <MessagesSquare className="h-4 w-4 mr-1" />
          <span className="text-sm">{prediction?.comments}</span>
        </div>
      </div>
    </div>
  );
}