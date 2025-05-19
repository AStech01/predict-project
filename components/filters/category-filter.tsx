"use client"

import { useState } from 'react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI' },
  { id: 'sports', label: 'Sports' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'crypto', label: 'Crypto' },
  { id: 'trends', label: 'Trends' },
  { id: 'other', label: 'Other' },
];

export function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            selectedCategory === category.id
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}