"use client"

import { cn } from '@/lib/utils';
import { CategoryType, CategoryColors } from '@/lib/types';

interface CategoryTagProps {
  category: CategoryType;
  className?: string;
}

export function CategoryTag({ category, className }: CategoryTagProps) {
  const colors = CategoryColors[category];
  
  return (
    <div 
      className={cn(
        "px-3 py-1 rounded-full text-xs font-medium",
        colors?.bg,
        colors?.text,
        className
      )}
    >
      {category === 'Crypto' && '🔥 '}
      {category === 'Stock Market' && '📈 '}
      {category === 'Real Estate' && '🏠 '}
      {category === 'Healthcare' && '🏥 '}
      {category === 'Entertainment' && '🎬 '}
      {category === 'Environment' && '🌍 '}
      {category}
    </div>
  );
}