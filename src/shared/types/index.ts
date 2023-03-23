import React from 'react';

export interface IBadge {
  variant?: 'basic' | 'clearable' | 'rounded';
  colorScheme?: 'light' | 'primary' | 'dark';
  className?: string;
  children: React.ReactNode,
  onClear?: () => void;
  onClick?: () => void;
}

export interface IStack {
  children: React.ReactNode;
}

export interface ICard {
  children: React.ReactNode;
  isFeatured?: boolean;
  className?: string
}
