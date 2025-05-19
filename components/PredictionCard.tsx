import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PredictionCardProps {
  prediction: {
    id: string;
    title: string;
    description: string;
    category: string;
    deadline: string;
    author: {
      name: string;
      avatar?: string;
    };
    createdAt: Date;
    likes: number;
    comments: number;
  };
}

const PredictionCard: React.FC<PredictionCardProps> = ({ prediction }) => {
  const { title, description, category, deadline, author, createdAt, likes, comments } = prediction;
  
  return (
    <Card className="mb-6 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={author.avatar} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{author.name}</p>
              <p className="text-xs text-gray-500">{formatDistanceToNow(createdAt)} ago</p>
            </div>
          </div>
          <div className="flex items-center">
            <Badge variant="outline" className="mr-2">{category}</Badge>
            <Badge variant="secondary" className="bg-gray-100">
              {new Date(deadline).toLocaleDateString()}
            </Badge>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">
          {description.length > 200 ? `${description.substring(0, 200)}...` : description}
        </p>
        {description.length > 200 && (
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Read more
          </button>
        )}
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-4 flex justify-between">
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" className="flex items-center text-gray-600">
            <ThumbsUp size={16} className="mr-1" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center text-gray-600">
            <MessageCircle size={16} className="mr-1" />
            <span>{comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center text-gray-600">
            <Share2 size={16} className="mr-1" />
            <span>Share</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="text-gray-600">
          <MoreHorizontal size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PredictionCard;