'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const scrollVariants = {
    initial: { y: '.5rem', opacity: 0 },
    animate: {
      y: '0rem',
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const [isVisible, setIsVisible] = useState(false);
  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  // the scroll event fires when the document view has been scrolled
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className=' fixed bottom-4 right-4'>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            variants={scrollVariants}
            initial='initial'
            animate='animate'
            exit='initial'
            whileHover={{ scale: 1.1 }}
            className='scroll-to-top p-3 hover:bg-gray-900 rounded-full text-white bg-black'
          >
            <ArrowUp className='h-4 w-4' />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
