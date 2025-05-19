import { Prediction } from '@/lib/types';

const predictions: Prediction[] = [
  {
    id: '1',
    title: 'Bitcoin Will Reach $100k By End Of Year',
    content: 'With Their Current Roster And Momentum, The Lakers Are Poised To Take The Championship. Their Defense Has Improved Dramatically And...',
    category: 'Crypto',
    author: {
      id: '1',
      name: 'Hunais Pc',
    },
    date: 'Apr 27,2025',
    views: 214,
    comments: 4
  },
  {
    id: '2',
    title: 'Tech Stocks Are Expected To Rally As Earnings Reports Come In Warm',
    content: 'Analysts Are Predicting A Major Shift In The Market, Especially With The Upcoming Tech Innovations...',
    category: 'Stock Market',
    author: {
      id: '2',
      name: 'Jane\'s Laptop',
    },
    date: 'May 10,2025',
    views: 150,
    comments: 1
  },
  {
    id: '3',
    title: 'Housing Prices Are Likely To Stabilize After A Turbulent Year',
    content: 'Experts Suggest That The Market Will See Equilibrium As Supply Finally Meets Demand...',
    category: 'Real Estate',
    author: {
      id: '3',
      name: 'Admin Server',
    },
    date: 'June 15,2025',
    views: 300,
    comments: 3
  },
  {
    id: '4',
    title: 'New Healthcare Policies Could Reshape Patient Access',
    content: 'Recent Legislative Changes Might Enhance The Quality Of Care Across Various Sectors...',
    category: 'Healthcare',
    author: {
      id: '4',
      name: 'Client Device',
    },
    date: 'July 22,2025',
    views: 180,
    comments: 4
  },
  {
    id: '5',
    title: 'Streaming Services to Diversify Content',
    content: 'As competition heats up, major streaming platforms are expected to significantly diversify their content offerings to retain subscribers...',
    category: 'Entertainment',
    author: {
      id: '5',
      name: 'Developer Machine',
    },
    date: 'Aug 9,2025',
    views: 220,
    comments: 7
  },
  {
    id: '6',
    title: 'Renewable Energy Storage to Break Cost Barrier',
    content: 'New breakthroughs in energy storage technology are expected to finally make renewable energy cost-competitive with fossil fuels across all markets...',
    category: 'Environment',
    author: {
      id: '6',
      name: 'Design Workstation',
    },
    date: 'Sep 5,2025',
    views: 175,
    comments: 9
  }
];

export function getPredictions(): Promise<Prediction[]> {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(predictions);
    }, 800);
  });
}

export function getPredictionById(id: string): Promise<Prediction | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const prediction = predictions.find(p => p.id === id);
      resolve(prediction);
    }, 300);
  });
}