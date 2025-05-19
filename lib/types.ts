export type CategoryType = 'Crypto' | 'Stock Market' | 'Real Estate' | 'Healthcare' | 'Entertainment' | 'Environment';

export interface CategoryColorScheme {
  bg: string;
  text: string;
}

export const CategoryColors: Record<CategoryType, CategoryColorScheme> = {
  'Crypto': {
    bg: 'bg-green-100',
    text: 'text-green-700'
  },
  'Stock Market': {
    bg: 'bg-green-100',
    text: 'text-green-700'
  },
  'Real Estate': {
    bg: 'bg-green-100',
    text: 'text-green-700'
  },
  'Healthcare': {
    bg: 'bg-blue-100',
    text: 'text-blue-700'
  },
  'Entertainment': {
    bg: 'bg-purple-100',
    text: 'text-purple-700'
  },
  'Environment': {
    bg: 'bg-green-100',
    text: 'text-green-700'
  }
};

export interface Author {
  id: string;
  name: string;
  avatar?: string;
}

export interface Prediction {
  id: string;
  title: string;
  content: string;
  category: CategoryType;
  author: Author;
  date: string;
  views: number;
  comments: number;
}