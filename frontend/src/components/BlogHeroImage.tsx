'use client';

import Image from 'next/image';

interface BlogHeroImageProps {
  src: string;
  alt: string;
}

const BlogHeroImage = ({ src, alt }: BlogHeroImageProps) => {
  return (
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
};

export default BlogHeroImage; 