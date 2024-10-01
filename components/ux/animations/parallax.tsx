'use client';

import { cn } from '@/lib/utils';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

// @todo - Develop this to be a universal parallax component
// that can take any child and add parallax to em

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  id?: string;
};

export function Parallax({
  children,
  className,
  id = 'parallax',
  speed = 1,
}: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const dy = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <motion.div
      key={'setuplayout_motion'}
      style={{ y: dy }}
      ref={containerRef}
      className={cn('', className)}
    >
      {children}
    </motion.div>
  );
}
