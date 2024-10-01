'use client';
import { useEffect, useRef } from 'react';
import {
  useScroll,
  motion,
  MotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';
import { cn } from '@/lib/utils';

export function Characters({ value }: { value: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.5', 'end 0.65'],
  });

  const useScrollYProgress = useSpring(scrollYProgress);

  const words = value.split(' ');
  return (
    <p ref={element} className='flex flex-wrap'>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Theword key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Theword>
        );
      })}
    </p>
  );
}

const Theword = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: [start: number, end: number];
  progress: MotionValue<number>;
}) => {
  const characters = children.split('');
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className='mr-3 mt-1 relative overflow-hidden flex justify-center items-center'>
      {characters.map((c, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {c}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: [start: number, end: number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={cn('')}>
      <span className='absolute opacity-30'>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
