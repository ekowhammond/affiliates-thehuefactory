'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export function BlurInText({
  children,
  className,
  duration,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  const variants1 = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  };
  return (
    <motion.span
      initial='hidden'
      whileInView='visible'
      transition={{ duration: duration ? duration : 1 }}
      variants={variants1}
      viewport={{ once: true }}
      className={cn(className)}
    >
      {children}
    </motion.span>
  );
}

export function BlurIn({
  children,
  className,
  duration,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  const variants1 = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  };
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{ duration: duration ? duration : 1 }}
      variants={variants1}
      viewport={{ once: true }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function BlurInSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const variants1 = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
    exit: { filter: 'blur(10px)', opacity: 0 },
  };
  return (
    <AnimatePresence mode='popLayout'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        exit='exit'
        transition={{ duration: 0.2, delay: 0.1 }}
        variants={variants1}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
