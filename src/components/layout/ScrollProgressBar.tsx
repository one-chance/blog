'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop === 0) {
        setWidth(0);
        return;
      }

      const windowHeight = scrollHeight - clientHeight;
      const currentPercent = scrollTop / windowHeight;

      setWidth(currentPercent * 100);
    };

    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <div className="fixed top-[56px] left-0 right-0 h-0.5 z-10 bg-transparent">
      <div
        className="bg-indigo-800 h-full dark:bg-indigo-400"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
