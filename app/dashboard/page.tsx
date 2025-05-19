import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PredictionCard from '@/components/PredictionCard';
import { Button } from '@/components/ui/button';
import { Plus, TrendingUp, Filter } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

// Mock data for predictions
const predictions = [
  {
    id: '1',
    title: 'Tesla will reach $1000 per share by end of 2025',
    description: 'With the ongoing expansion of their energy business and the continued growth of EV adoption worldwide, Tesla is positioned to see significant growth in the next year. New battery technology and autonomous driving features will likely be key catalysts.',
    category: 'Finance',
    deadline: '2025-12-31',
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    createdAt: new Date('2023-10-15'),
    likes: 245,
    comments: 32,
  },
  {
    id: '2',
    title: 'The LA Lakers will win the 2025 NBA Championship',
    description: 'After the off-season acquisitions and the development of their younger players, the Lakers have positioned themselves as serious contenders for the 2025 title. Their depth and veteran leadership give them an edge over other teams in the conference.',
    category: 'Sports',
    deadline: '2025-06-15',
    author: {
      name: 'Jordan Wilson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    createdAt: new Date('2023-10-20'),
    likes: 187,
    comments: 46,
  },
  {
    id: '3',
    title: 'Apple will release AR glasses in Q2 2026',
    description: 'Based on supply chain reports and patent filings, Apple appears to be in the final stages of development for their long-rumored AR glasses. This product will likely integrate with their ecosystem and create a new platform for developers.',
    category: 'Technology',
    deadline: '2026-06-30',
    author: {
      name: 'Samantha Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    createdAt: new Date('2023-10-25'),
    likes: 312,
    comments: 78,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Predictions Feed</h1>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="flex items-center">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
            <Link href="/new-prediction">
              <Button className="bg-black hover:bg-gray-800 text-white">
                <Plus size={16} className="mr-2" />
                New Prediction
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <div className="flex items-center space-x-2 mb-6">
              <Button variant="ghost" className="text-black font-medium">
                Recent
              </Button>
              <Button variant="ghost" className="text-gray-600">
                Popular
              </Button>
              <Button variant="ghost" className="text-gray-600 flex items-center">
                <TrendingUp size={16} className="mr-1" />
                Trending
              </Button>
            </div>
            
            <div>
              {predictions.map((prediction) => (
                <PredictionCard key={prediction.id} prediction={prediction} />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
              <h3 className="font-medium text-lg mb-4">Top Categories</h3>
              <div className="space-y-2">
                {['Technology', 'Politics', 'Sports', 'Science', 'Entertainment'].map((category) => (
                  <div key={category} className="flex items-center justify-between">
                    <span className="text-gray-700">{category}</span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {Math.floor(Math.random() * 500)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h3 className="font-medium text-lg mb-4">Top Predictors</h3>
              <div className="space-y-3">
                {['Alex Thompson', 'Jordan Wilson', 'Samantha Chen', 'Michael Robinson', 'Emma Davis'].map((name, index) => (
                  <div key={name} className="flex items-center">
                    <div className="mr-3 text-gray-500 font-medium">#{index + 1}</div>
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{name}</p>
                      <p className="text-xs text-gray-500">{Math.floor(Math.random() * 50)} correct predictions</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}