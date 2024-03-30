/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */

'use client';

import { useEffect, useState } from 'react';

type HeadingInfo = {
  id: string;
  text: string;
  level: number;
};

export default function PostIndex() {
  const [headings, setHeadings] = useState<HeadingInfo[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headingElements = document.querySelectorAll('h2, h3');

    const headingInfos: HeadingInfo[] = Array.from(headingElements).map(
      (heading, index) => {
        const text = heading.textContent || '';
        const id = `heading-${index}`;
        const level = heading.nodeName === 'H2' ? 2 : 3;
        heading.setAttribute('id', id);
        return { text, id, level };
      },
    );

    setHeadings(headingInfos);

    const handleScroll = () => {
      let found = false;
      for (let i = headingInfos.length - 1; i >= 0; i--) {
        const element = document.getElementById(headingInfos[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            // 조건을 조정하여 활성화되는 시점을 변경할 수 있습니다.
            if (!found) {
              setActiveId(headingInfos[i].id);
              found = true;
            }
          }
        }
      }

      if (!found) setActiveId('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col hidden md:block w-[280px] sticky top-[96px] ml-10">
      {headings.map((heading, index) => (
        <a
          key={index}
          href={`#heading-${index}`}
          className={`font-medium py-1 ${heading.level > 2 ? 'px-4' : 'px-2'} ${heading.id === activeId ? 'bg-indigo-400 text-white' : 'text-gray-500'}`}
        >
          {heading.text}
        </a>
      ))}
    </div>
  );
}
