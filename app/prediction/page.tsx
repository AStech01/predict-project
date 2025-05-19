"use client"

import { useState, useEffect } from 'react';
import PredictionCard from './prediction-card';
import { getPredictions } from '@/components/data/predictions';
import { Prediction } from '@/lib/types';

export default function PredictionFeed() {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const loadData = async () => {
      setIsLoading(true);
      const data = await getPredictions();
      setPredictions(data);
      setIsLoading(false);
    };

    loadData();
  }, []);

  console.log(predictions);
  

  if (isLoading) {
    return (
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse ">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6 mb-4"></div>
            <div className="flex justify-between mt-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
      {predictions.map((prediction) => (
        <PredictionCard key={prediction.id} prediction={prediction} />
      ))}
    </div>
  );
}