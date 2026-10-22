import React from 'react';
import Image from 'next/image';

interface ContentImageProps {
  src: string;
  alt: string;
  // Intrinsic size of the source file (all device images are 1344x768).
  width?: number;
  height?: number;
  className?: string;
}

// Rounded, fixed-ratio illustration for the narrow content column on guide pages.
export const ContentImage: React.FC<ContentImageProps> = ({ src, alt, width = 1344, height = 768, className = '' }) => (
  <figure className={`content-image ${className}`.trim()}>
    <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 900px) 100vw, 812px" />
  </figure>
);
