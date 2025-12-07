import React from 'react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface InfluencerPost {
  id: string;
  name: string;
  handle: string;
  image: string;
  content: string;
  tags: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  span?: boolean; // If true, spans 2 columns
}