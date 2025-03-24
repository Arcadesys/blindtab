import React from 'react';
import Link from 'next/link';
import { Tag } from '@prisma/client';

interface TagBadgeProps {
  tag: Tag;
  isActive?: boolean;
  size?: 'small' | 'medium' | 'large';
  asLink?: boolean;
}

export default function TagBadge({ 
  tag, 
  isActive = false,
  size = 'medium', 
  asLink = true 
}: TagBadgeProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-full ${
    isActive
      ? 'bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
  }`;
  
  const sizeClasses = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-1.5 text-base'
  };

  const content = (
    <span className={`${baseClasses} ${sizeClasses[size]}`}>
      {tag.name}
    </span>
  );

  if (asLink) {
    return (
      <Link href={`/tags/${tag.id}`} className="hover:opacity-80 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
} 