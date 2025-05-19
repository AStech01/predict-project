'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const CATEGORIES = [
  'Sports',
  'Politics',
  'Technology',
  'Entertainment',
  'Science',
  'Business',
  'Health',
  'Other'
];

const PredictionForm: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, you would handle form submission here
    
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to dashboard after submission
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/dashboard" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Back
        </Link>
      </div>
      
      <Card className="bg-white shadow-sm">
        <CardContent className="p-6 sm:p-8">
          <h1 className="text-2xl font-semibold mb-8">Post A New Prediction</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block mb-2 font-medium">Title</label>
              <Input 
                id="title" 
                placeholder="Enter A Clear And Specific Prediction" 
                className="w-full"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block mb-2 font-medium">Categories</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="deadline" className="block mb-2 font-medium">Deadline</label>
                <div className="relative">
                  <Input 
                    id="deadline" 
                    placeholder="DD-MM-YYYY" 
                    className="w-full"
                    type="date"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                <p className="text-xs text-gray-500 mt-1">When Will We Know If This Prediction Came True?</p>
              </div>
            </div>
            
            <div>
              <label htmlFor="description" className="block mb-2 font-medium">Description</label>
              <Textarea 
                id="description" 
                placeholder="Describe Your Prediction In Detail. Include Any Reasoning Or Evidence." 
                className="w-full min-h-[150px]"
                required
              />
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-black hover:bg-gray-800 text-white"
                disabled={isSubmitting}
              >
                <Eye className="mr-2" size={18} />
                Post Prediction
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionForm;