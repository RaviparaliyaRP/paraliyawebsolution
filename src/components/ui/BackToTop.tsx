'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-gray-900 text-white p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
